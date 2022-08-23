import React, { useCallback, useEffect, useRef, useState } from 'react'
import AccomodationType from './SearchInputs/AccomodationType'
import PeopleCount from './SearchInputs/PeopleCount'
import '../../Common/Style/advanced-search.css'
import DatePicker from './SearchInputs/DatePicker'
import { Reservation } from '../../Common/Models/Reservation'
import { Accomodation } from '../../Common/Models/Accomodation'
import { useNavigate } from 'react-router-dom'

const AdvancedSearch: React.FC<{ location: string, locationID: string, properties: number, isFavorites: boolean }> = (props) => {
  const navigate = useNavigate()
  const [ bookingData, setBookingData ] = useState<Reservation[]>([])
  const [ accomodationData, setAccomodationData ] = useState<Accomodation[]>([])
  const checkInRef = useRef<HTMLInputElement>(null)
  const checkOutRef = useRef<HTMLInputElement>(null)
  const peopleRef = useRef<HTMLInputElement>(null)
  const typeRef = useRef<HTMLSelectElement>(null)

  const fetchAccomodations = useCallback(async () => {
    try {
        const accResponse = await fetch(props.isFavorites ? 'https://devcademy.herokuapp.com/api/Accomodations/recommendation' : 'https://devcademy.herokuapp.com/api/Accomodations')
        const reserveResponse = await fetch('https://devcademy.herokuapp.com/api/Reservation')
        const accData = await accResponse.json()
        const reserveData = await reserveResponse.json()
        setBookingData(reserveData)
        setAccomodationData(accData)
      } catch (err) {
        console.log(err)
      }  
  }, [props.isFavorites])

  useEffect(() => {
    fetchAccomodations()
  }, [fetchAccomodations])
  // function for getting difference between reserved and available accomodations (filtered by its id's)
  const getDifference = (accomodation: any, reservation: any) => {
    return accomodation.filter((object1: any) => {
      return !reservation.some((object2: any) => {
        return object1.id === object2.accomodation.id;
      });
    });
  }

  const filter = (checkInDate: any, formData: any) => {
    // parsing dateIn argument
    const dateIn = new Date(checkInDate).getTime()
    let locations: any = []

    // difference between available accomodations and reserved accomodation (returned value are all available accomodations)
    // if isFavorites === true; then comparing two states without filtering by location
    const filteredAcc = accomodationData.filter(el => el.locationID === props.locationID)
    const filteredReservation = bookingData.filter(el => el.accomodation.locationID === props.locationID)
    const difference = props.isFavorites ? getDifference(accomodationData, bookingData) : getDifference(filteredAcc, filteredReservation)
    let bookings: Accomodation[] = difference.map((el: any) => {
      return el
    })

    // filtering all reserved accomodations by selected location
    // if isFavorites === true; no filtering by location
    props.isFavorites ? bookingData.map((el: any) => { return locations.push(el) }) : 
    bookingData.map((el: any) => {
      if (props.locationID === el.accomodation.locationID) {
        return locations.push(el)
      } else {
        return bookings = filteredAcc
      }
    })

    // comparing filtered accomodations by selected check in date with check out date (returned value are available accomodations
    // after selected check in date)
    locations.map((el: any) => {
      el.checkOut = new Date(el.checkOut).getTime()
        if (dateIn >= el.checkOut) {
          return bookings.push(el.accomodation)
        } else {
          return bookings 
        }  
    })

    // filtering accomodations by written people count and accomodation type (returned value are matched accomodations by
    // written comparators)
    if (formData.peopleCount > 0 || formData.accomodationType === !undefined) {
      const filteredData = bookings.filter(el => el.capacity >= formData.peopleCount || el.type === formData.accomodationType)
      return filteredData
    } 
    // finally, returning filtered reserved accomodations by all previous comparators with firstly initialized 
    // difference beetwen available and reserved accomodations
    return bookings
  }

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const searchData = {
      checkInDate: checkInRef.current?.value,
      checkOutDate: checkOutRef.current?.value,
      peopleCount: Number(peopleRef.current?.value),
      accomodationType: typeRef.current?.value
    }
    const result = {
      filterData: filter(searchData.checkInDate, searchData),
      location: props.location,
      locationID: props.locationID,
      properties: props.properties
    }
    navigate(!props.isFavorites ? '/accomodation-by-location' : '/favorites', { state: result })
  }

  return (
    <form onSubmit={submitHandler} className="advanced-search-form">
      <DatePicker ref={checkInRef} title={'Check in'} />
      <DatePicker ref={checkOutRef} title={'Check out'} />
      <PeopleCount ref={peopleRef} />
      <AccomodationType ref={typeRef} />
      <button id="form-btn">
          Search
      </button>
    </form>
  )
}

export default AdvancedSearch
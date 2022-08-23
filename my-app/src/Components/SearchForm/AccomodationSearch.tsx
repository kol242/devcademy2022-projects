import React, { useEffect, useRef, useState } from 'react'
import AccomodationType from './SearchInputs/AccomodationType'
import WhereInput from './SearchInputs/WhereInput'
import '../../Common/Style/search-form.css'
import PeopleCount from './SearchInputs/PeopleCount'
import DatePicker from './SearchInputs/DatePicker'
import { useNavigate } from 'react-router-dom';
import { Accomodation } from '../../Common/Models/Accomodation'
import { Reservation } from '../../Common/Models/Reservation'

const AccomodationSearch = () => {
  const navigate = useNavigate()
  const [ bookingData, setBookingData ] = useState<Reservation[]>([])
  const [ accomodationData, setAccomodationData ] = useState<Accomodation[]>([])
  const locationRef = useRef<HTMLSelectElement>(null)
  const checkInRef = useRef<HTMLInputElement>(null)
  const checkOutRef = useRef<HTMLInputElement>(null)
  const peopleRef = useRef<HTMLInputElement>(null)
  const typeRef = useRef<HTMLSelectElement>(null)
  
  async function fetchReservations() {
    try {
      const response = await fetch('https://devcademy.herokuapp.com/api/Reservation')
      const data = await response.json()
      setBookingData(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchReservations()
    fetchAccomodations()
  }, [])

  async function fetchAccomodations() {
    try {
        const response = await fetch('https://devcademy.herokuapp.com/api/Accomodations')
        const data = await response.json()
        setAccomodationData(data)
      } catch (err) {
        console.log(err)
      }  
  }

  // function for getting difference between reserved and available accomodations (filtered by its id's)
  function getDifference(accomodation: any, reservation: any) {
    return accomodation.filter((object1: any) => {
      return !reservation.some((object2: any) => {
        return object1.id === object2.accomodation.id;
      });
    });
  }

  function filter(checkInDate: any, formData: any) {
    // parsing dateIn argument
    const dateIn = new Date(checkInDate).getTime()

    const locations: any = []

    // difference between available accomodations and reserved accomodation (returned value are all available accomodations)
    const filteredAcc = accomodationData.filter(el => el.locationID === formData.locationID)
    const filteredReservation = bookingData.filter(el => el.accomodation.locationID === formData.locationID)
    const difference = getDifference(filteredAcc, filteredReservation)
    let bookings: Accomodation[] = difference.map((el: any) => {
      return el
    })

    // filtering all reserved accomodations by selected location
    bookingData.map((el: any) => {
      if (formData.locationID === el.accomodation.locationID) {
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
      location: locationRef.current?.selectedOptions[0].text,
      locationID: locationRef.current?.value,
      properties: Number(locationRef.current?.selectedOptions[0].title),
      checkInDate: checkInRef.current?.value,
      checkOutDate: checkOutRef.current?.value,
      peopleCount: Number(peopleRef.current?.value),
      accomodationType: typeRef.current?.value
    }
    const result = {
      filterData: filter(searchData.checkInDate, searchData),
      location: searchData.location,
      locationID: searchData.locationID,
      properties: searchData.properties
    }
    navigate('/accomodation-by-location', { state: result })
  }
  
  return (
    <form onSubmit={submitHandler} className="search-form">
        <WhereInput ref={locationRef} />
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

export default AccomodationSearch
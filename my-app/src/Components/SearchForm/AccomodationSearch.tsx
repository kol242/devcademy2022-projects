import React, { useRef, useState } from 'react'
import AccomodationType from './SearchInputs/AccomodationType'
import WhereInput from './SearchInputs/WhereInput'
import '../../Common/Style/search-form.css'
import PeopleCount from './SearchInputs/PeopleCount'
import DatePicker from './SearchInputs/DatePicker'
import { useNavigate } from 'react-router-dom';
import { Accomodation } from '../../Common/Models/Accomodation'

const AccomodationSearch = () => {
  const navigate = useNavigate()
  const [ reservations, setReservations ] = useState<Accomodation[]>([])
  const locationRef = useRef<HTMLSelectElement>(null)
  const checkInRef = useRef<HTMLInputElement>(null)
  const checkOutRef = useRef<HTMLInputElement>(null)
  const peopleRef = useRef<HTMLInputElement>(null)
  const typeRef = useRef<HTMLSelectElement>(null)


// TODO: riješit problem višestruke filtracije
  async function filter(checkInDate: any, formData: any) {
    const dateIn = new Date(checkInDate).getTime()
    try {
      const response = await fetch('https://devcademy.herokuapp.com/api/Reservation')
      const data = await response.json()
      const locations = []
      const reservations: Accomodation[] = []

      for (const location in data) {
        if (formData.locationID === data[location].accomodation.locationID) {
          locations.push(data[location])
        }
      }

      for (const booking in locations) {
        locations[booking].checkOut = new Date(locations[booking].checkOut).getTime()
        if (dateIn > locations[booking].checkOut) {
          reservations.push(locations[booking].accomodation)
        } 
      }

      if (formData.peopleCount > 0 || formData.accomodationType === !undefined) {
        const filteredData = reservations.filter(el => el.capacity >= formData.peopleCount || el.type === formData.accomodationType)
        return setReservations(filteredData) 
      } else {
        return setReservations(reservations)
      }
    } catch (err) {
      console.log(err)
    }
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
    navigate('/accomodation-by-location', { state: searchData })
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
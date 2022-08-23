import React, { useEffect, useRef } from 'react'
import AccomodationType from './SearchInputs/AccomodationType'
import WhereInput from './SearchInputs/WhereInput'
import '../../Common/Style/search-form.css'
import PeopleCount from './SearchInputs/PeopleCount'
import DatePicker from './SearchInputs/DatePicker'
import { useNavigate } from 'react-router-dom';
import useHttp from '../../Hooks/use-http'
import useFilter from '../../Hooks/use-filter'

const AccomodationSearch = () => {
  const { fetchedData: accomodations, sendRequest: fetchAccomodations } = useHttp()
  const { fetchedData: reservations, sendRequest: fetchReservations } = useHttp()
  const { filter } = useFilter()
  const navigate = useNavigate()

  const locationRef = useRef<HTMLSelectElement>(null)
  const checkInRef = useRef<HTMLInputElement>(null)
  const checkOutRef = useRef<HTMLInputElement>(null)
  const peopleRef = useRef<HTMLInputElement>(null)
  const typeRef = useRef<HTMLSelectElement>(null)
  
  useEffect(() => {
    fetchReservations({ 
      url: 'https://devcademy.herokuapp.com/api/Reservation'
    })
    fetchAccomodations({ 
      url: 'https://devcademy.herokuapp.com/api/Accomodations'
    })
  }, [fetchReservations, fetchAccomodations])

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
      filterData: filter(searchData.checkInDate, searchData, accomodations, reservations, false, ''),
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
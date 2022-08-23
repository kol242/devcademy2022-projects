import React, { useEffect, useRef } from 'react'
import AccomodationType from './SearchInputs/AccomodationType'
import PeopleCount from './SearchInputs/PeopleCount'
import '../../Common/Style/advanced-search.css'
import DatePicker from './SearchInputs/DatePicker'
import { useNavigate } from 'react-router-dom'
import useHttp from '../../Hooks/use-http'
import useFilter from '../../Hooks/use-filter'

const AdvancedSearch: React.FC<{ location: string, locationID: string, properties: number, isFavorites: boolean }> = (props) => {
  const navigate = useNavigate()
  const { fetchedData: accomodations, sendRequest: fetchAccomodations } = useHttp()
  const { fetchedData: reservations, sendRequest: fetchReservations } = useHttp()
  const { filter } = useFilter()

  const checkInRef = useRef<HTMLInputElement>(null)
  const checkOutRef = useRef<HTMLInputElement>(null)
  const peopleRef = useRef<HTMLInputElement>(null)
  const typeRef = useRef<HTMLSelectElement>(null)

  useEffect(() => {
    fetchReservations({ 
      url: 'https://devcademy.herokuapp.com/api/Reservation',
      headers: {},
      method: 'GET',
      body: null,
      onSuccess: null,
      onFail: null  
    })
    fetchAccomodations({ 
      url: `https://devcademy.herokuapp.com/api/${props.isFavorites ? 'Accomodations/recommendation' : 'Accomodations'}`,
      headers: {},
      method: 'GET',
      body: null,
      onSuccess: null,
      onFail: null  
    })
  }, [fetchReservations, fetchAccomodations, props.isFavorites])

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const searchData = {
      checkInDate: checkInRef.current?.value,
      checkOutDate: checkOutRef.current?.value,
      peopleCount: Number(peopleRef.current?.value),
      accomodationType: typeRef.current?.value
    }
    const result = {
      filterData: filter(searchData.checkInDate, searchData, accomodations, reservations, true, props.locationID),
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
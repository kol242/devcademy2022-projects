import React, { useRef } from 'react'
import AccomodationType from './SearchInputs/AccomodationType'
import WhereInput from './SearchInputs/WhereInput'
import '../../Common/Style/search-form.css'
import PeopleCount from './SearchInputs/PeopleCount'
import DatePicker from './SearchInputs/DatePicker'
import { useNavigate } from 'react-router-dom';

const AccomodationSearch = () => {
  const navigate = useNavigate()
  const locationRef = useRef<HTMLSelectElement>(null)
  const checkInRef = useRef<HTMLInputElement>(null)
  const checkOutRef = useRef<HTMLInputElement>(null)
  const peopleRef = useRef<HTMLInputElement>(null)
  const typeRef = useRef<HTMLSelectElement>(null)

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
    console.log('Search data: ', searchData)
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
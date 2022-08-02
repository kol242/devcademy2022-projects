import React, { useRef } from 'react'
// import AccomodationType from './SearchInputs/AccomodationType'
// import CheckIn from './SearchInputs/CheckIn'
// import CheckOut from './SearchInputs/CheckOut'
// import PeopleCount from './SearchInputs/PeopleCount'
import '../../Common/Style/advanced-search.css'

const AdvancedSearch = () => {
  const locationRef = useRef<HTMLSelectElement>(null)
  const checkInRef = useRef<HTMLInputElement>(null)
  const checkOutRef = useRef<HTMLInputElement>(null)
  const peopleRef = useRef<HTMLInputElement>(null)
  const typeRef = useRef<HTMLSelectElement>(null)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const searchData = {
      location: locationRef.current?.value,
      checkInDate: checkInRef.current?.value,
      checkOutDate: checkOutRef.current?.value,
      peopleCount: peopleRef.current?.value,
      accomodationType: typeRef.current?.value
    }
    console.log('Search data: ', searchData)
  }

  return (
    <form onSubmit={submitHandler} className="advanced-search-form">
      <div className="input-wrapper">
        <label>Check In</label>
        <input type="date" id="input-date" ref={checkInRef}/>
      </div>
      <div className="input-wrapper">
        <label>Check Out</label>
        <input type="date" id="input-date" ref={checkOutRef}/>
      </div>
      <div className="input-wrapper">
        <label>How many people?</label>
        <input type="text" ref={peopleRef}/>
      </div>
      <div className="input-wrapper">
        <label>What type of accomodation?</label>
        <select name="where" id="where" ref={typeRef}>
          <option disabled selected></option>
          <option value="Apartment">Apartment</option>
          <option value="Hotel">Hotel</option>
        </select>
      </div>
      <button id="form-btn">
          Search
      </button>
    </form>
  )
}

export default AdvancedSearch
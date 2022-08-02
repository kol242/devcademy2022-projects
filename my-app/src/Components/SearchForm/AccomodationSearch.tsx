import React, { useRef } from 'react'
// import AccomodationType from './SearchInputs/AccomodationType'
// import CheckIn from './SearchInputs/CheckIn'
// import CheckOut from './SearchInputs/CheckOut'
// import PeopleCount from './SearchInputs/PeopleCount'
// import WhereInput from './SearchInputs/WhereInput'
import '../../Common/Style/search-form.css'

const AccomodationSearch = () => {
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

  const checkInFocus = () => {
    const element = document.querySelector('#input-date-checkin')
    element?.getAttribute('type') === 'text' ? element?.setAttribute("type", "date") : element?.setAttribute("type", "text")
  }

  const checkOutFocus = () => {
    const element = document.querySelector('#input-date-checkout')
    element?.getAttribute('type') === 'text' ? element?.setAttribute("type", "date") : element?.setAttribute("type", "text")
  }

  return (
    <form onSubmit={submitHandler} className="search-form">
        <div className="input-wrapper">
          <label>Where are you going?</label>
          <select name="where" id="where" ref={locationRef}>
            <option disabled selected></option>
            <option value="London">London</option>
            <option value="Paris">Paris</option>
          </select>
        </div>
        <div className="input-wrapper">
          <label>Check In</label>
          <input type="text" id="input-date-checkin" onFocus={checkInFocus} onBlur={checkInFocus} ref={checkInRef}/>
        </div>
        <div className="input-wrapper">
          <label>Check Out</label>
          <input type="text" id="input-date-checkout" onFocus={checkOutFocus} onBlur={checkOutFocus} ref={checkOutRef}/>
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

export default AccomodationSearch
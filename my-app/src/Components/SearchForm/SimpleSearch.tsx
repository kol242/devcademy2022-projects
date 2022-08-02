import React, { useRef } from 'react'
// import WhereInput from './SearchInputs/WhereInput'
import '../../Common/Style/simple-search.css'

const SimpleSearch = () => {
  const locationRef = useRef<HTMLSelectElement>(null)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const location = locationRef.current?.value
    console.log('Search data: ', location)
  }

  return (
    <form onSubmit={submitHandler} className="simple-search-form">
        <div className="input-wrapper">
          <label>Where are you going?</label>
          <select name="where" id="where" ref={locationRef}>
            <option disabled selected></option>
            <option value="London">London</option>
            <option value="Paris">Paris</option>
          </select>
        </div>
        <button id="form-btn">
            Search
        </button>
    </form>
  )
}

export default SimpleSearch
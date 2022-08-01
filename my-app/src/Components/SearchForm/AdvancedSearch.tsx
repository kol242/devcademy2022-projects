import React from 'react'
import AccomodationType from './SearchInputs/AccomodationType'
import CheckIn from './SearchInputs/CheckIn'
import CheckOut from './SearchInputs/CheckOut'
import PeopleCount from './SearchInputs/PeopleCount'
import '../../Common/Style/search-form.css'

const AdvancedSearch = () => {
  return (
    <form action="submit" className="search-form">
        <CheckIn />
        <CheckOut />
        <PeopleCount />
        <AccomodationType />
        <button id="form-btn">
            Search
        </button>
    </form>
  )
}

export default AdvancedSearch
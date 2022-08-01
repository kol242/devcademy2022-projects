import React from 'react'
import AccomodationType from './SearchInputs/AccomodationType'
import CheckIn from './SearchInputs/CheckIn'
import CheckOut from './SearchInputs/CheckOut'
import PeopleCount from './SearchInputs/PeopleCount'
import WhereInput from './SearchInputs/WhereInput'
import '../../Common/Style/search-form.css'

const AccomodationSearch = () => {
  return (
    <form action="submit" className="search-form">
        <WhereInput />
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

export default AccomodationSearch
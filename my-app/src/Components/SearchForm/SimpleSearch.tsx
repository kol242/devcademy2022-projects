import React from 'react'
import WhereInput from './SearchInputs/WhereInput'
import '../../Common/Style/simple-search.css'

const SimpleSearch = () => {
  return (
    <form action="submit" className="simple-search-form">
        <WhereInput />
        <button id="form-btn">
            Search
        </button>
    </form>
  )
}

export default SimpleSearch
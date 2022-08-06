import React, { useRef } from 'react'
import WhereInput from './SearchInputs/WhereInput'
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
        <WhereInput ref={locationRef} />
        <button id="form-btn">
            Search
        </button>
    </form>
  )
}

export default SimpleSearch
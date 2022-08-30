import React, { useRef } from 'react'
import WhereInput from './SearchInputs/WhereInput'
import '../../Common/Style/simple-search.css'
import { useNavigate } from 'react-router-dom'

const SimpleSearch: React.FC<{ locations: any }> = (props) => {
  const navigate = useNavigate()
  const locationRef = useRef<HTMLSelectElement>(null)

  const filter = (id: string | undefined) => {
    const filteredData = props.locations.filter((el: any) => el.id === id)
    return filteredData
  }

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const locationObj = {
      locationID: locationRef.current?.value,
      location: locationRef.current?.selectedOptions[0].text
    }
    const filteredLocations = filter(locationObj.locationID)
    navigate('/locations', { state: filteredLocations })
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
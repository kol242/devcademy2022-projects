import React, { useEffect, useRef } from 'react'
import WhereInput from './SearchInputs/WhereInput'
import '../../Common/Style/simple-search.css'
import { useNavigate } from 'react-router-dom'
import useHttp from '../../Hooks/use-http'

const SimpleSearch = () => {
  const { fetchedData: locations, sendRequest: fetchLocations } = useHttp()
  const navigate = useNavigate()
  const locationRef = useRef<HTMLSelectElement>(null)

  useEffect(() => {
    fetchLocations({ 
      url: 'https://devcademy.herokuapp.com/api/Location',
      headers: {},
      method: 'GET',
      body: null,
      onSuccess: null,
      onFail: null  
    });
  }, [fetchLocations]);

  const filter = (id: string | undefined) => {
    const filteredData = locations.filter((el: any) => el.id === id)
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
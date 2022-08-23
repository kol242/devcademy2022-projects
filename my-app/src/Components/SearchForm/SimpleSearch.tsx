import React, { useEffect, useRef, useState } from 'react'
import WhereInput from './SearchInputs/WhereInput'
import '../../Common/Style/simple-search.css'
import { useNavigate } from 'react-router-dom'
import { Place } from '../../Common/Models/Place'

const SimpleSearch = () => {
  const navigate = useNavigate()
  const [locations, setLocations] = useState<Place[]>([])
  const locationRef = useRef<HTMLSelectElement>(null)

  const fetchLocations = async () => {
    try {
      const response = await fetch(
        'https://devcademy.herokuapp.com/api/Location'
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      setLocations(data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const filter = (id: string | undefined) => {
    const filteredData = locations.filter(el => el.id === id)
    return filteredData
  }

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const locationObj = {
      locationID: locationRef.current?.value,
      location: locationRef.current?.selectedOptions[0].text
    }
    const filteredLocations = filter(locationObj.locationID)
    console.log(filteredLocations)
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
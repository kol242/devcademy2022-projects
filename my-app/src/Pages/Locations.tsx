import React from 'react'
import '../Common/Style/locations.css'
import { CityCardData } from '../Common/Models/CityCard'
import CityView from '../Components/CityCard/CityView'
import SimpleSearch from '../Components/SearchForm/SimpleSearch'

const Locations = () => {
  return (
    <div className="locations-container">
      <h1 id="locations-container--title">All locations</h1>
      <SimpleSearch />
      <CityView city={CityCardData}/>
    </div>
  )
}

export default Locations
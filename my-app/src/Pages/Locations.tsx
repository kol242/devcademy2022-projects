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
      <div className="locations-container__body">
        { CityCardData.map(locations =>
          <CityView class='locations-container__card' city={locations}/>  
        ) }  
      </div>
    </div>
  )
}

export default Locations
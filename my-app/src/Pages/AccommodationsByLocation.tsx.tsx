import React from 'react'
import '../Common/Style/faovrites.css'
import AccView from '../Components/AccomodationCard/AccView'
import AdvancedSearch from '../Components/SearchForm/AdvancedSearch'
import { useLocation } from 'react-router-dom'

const AccommodationsByLocation = () => {
  const { state }: any = useLocation()
  return (
    <div className="favorites-container">
      <div>
        <h1 id="favorites-container--title">Stays in {state.location}</h1>
        <h2 id="favorites-container--subtitle">{state.properties} properties</h2>  
      </div>
      <AdvancedSearch isFavorites={false} location={state.location} locationID={state.locationID} properties={state.properties}/>
      { state.filterData.length === 0 ? <p>No available accomodations!</p> : 
        <div className="favorites-container__body">
          { state.filterData.map((acc: any, index: any) => 
            <AccView key={index} class='favorites-container__card' data={acc}/>  
          ) }
        </div>  
      }
    </div>
  )
}

export default AccommodationsByLocation
import React from 'react'
import '../Common/Style/faovrites.css'
import AccView from '../Components/AccomodationCard/AccView'
import AdvancedSearch from '../Components/SearchForm/AdvancedSearch'
import { accDetails } from '../Common/Models/AccomodationDetails'
import { useLocation } from 'react-router-dom'

const AccommodationsByLocation = () => {
  const { state }: any = useLocation()

  return (
    <div className="favorites-container">
      <div>
        <h1 id="favorites-container--title">Stays in {state.location}</h1>
        <h2 id="favorites-container--subtitle">25,246 properties</h2>  
      </div>
      <AdvancedSearch />
      <div className="favorites-container__body">
        { accDetails.map(acc => 
          <AccView class='favorites-container__card' data={acc}/>  
        ) }
      </div>
    </div>
  )
}

export default AccommodationsByLocation
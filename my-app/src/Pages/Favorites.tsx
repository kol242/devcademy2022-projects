import React from 'react'
import '../Common/Style/faovrites.css'
import AccView from '../Components/AccomodationCard/AccView'
import AdvancedSearch from '../Components/SearchForm/AdvancedSearch'
import { accDetails } from '../Common/Models/AccomodationDetails'

const Favorites = () => {
  return (
    <div className="favorites-container">
      <div>
        <h1 id="favorites-container--title">Homes guests love</h1>
        <h2 id="favorites-container--subtitle">104 properties</h2>  
      </div>
      <AdvancedSearch />
      <div className="favorites-container__body">
        { accDetails.map(acc => 
          <AccView data={acc}/>  
        ) }
      </div>
    </div>
  )
}

export default Favorites
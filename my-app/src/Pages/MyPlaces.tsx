import React from 'react'
import { Link } from 'react-router-dom'
import '../Common/Style/my-places.css'
import PlaceCard from '../Components/PlaceCard/PlaceCard'

const MyPlaces = () => {
  return (
    <div className="myPlaces-container">
      <div className="myPlaces-container__header">
        <h1 id="myPlaces-container--title">My places</h1>
        <Link to='/new-place'><button id='myPlaces-container__header--btn'>Add new place</button> </Link> 
      </div>
      <PlaceCard />
    </div>
  )
}

export default MyPlaces
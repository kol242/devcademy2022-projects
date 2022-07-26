import React from 'react'
import '../Common/Style/place-card.css'
import { myPlaces } from '../Common/Models/PlacesCard'

const PlaceCard = () => {
  return (
    <>
      <h1 id="place-container__title">My places</h1>
      <div className="place-container">
        { myPlaces.map(place => (
          <div className="place-container__card">
            <img src={place.imageUrl} alt="PlaceImg" />
            <h1 id="place-container__card--title">{place.title}</h1>
            <h3 id="place-container__card--subtitle">{place.location}</h3>
            <h2 id="place-container__card--detail">{place.subtitle}</h2>
            <div className="place-container__card--btns">
              <button id="btns-edit">EDIT</button>
              <button id="btns-delete">DELETE PLACE</button>
            </div>
          </div>   
        )) }
      </div>
    </>
    
  )
}

export default PlaceCard
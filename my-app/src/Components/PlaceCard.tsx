import React from 'react'
import '../Common/Style/place-card.css'
import PlaceImg from '../Common/Images/place-card-image.png'

const PlaceCard = () => {
  return (
    <div className="place-container">
      <h1 id="place-container__title">My places</h1>
      <div className="place-container__card">
        <img src={PlaceImg} alt="PlaceImg" />
        <h1 id="place-container__card--title">Treehouse</h1>
        <h3 id="place-container__card--subtitle">Hrusice</h3>
        <h2 id="place-container__card--detail">Renting the entire unit</h2>
        <div className="place-container__card--btns">
          <button id="btns-edit">EDIT</button>
          <button id="btns-delete">DELETE PLACE</button>
        </div>
      </div> 
    </div>
  )
}

export default PlaceCard
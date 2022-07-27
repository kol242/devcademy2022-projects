import React from 'react'
import '../../Common/Style/place-card.css'
import { myPlaces } from '../../Common/Models/PlacesCard'
import PlaceView from './PlaceView'

const PlaceCard = () => {
  return (
    <>
      <h1 id="place-container__title">My places</h1>
      <PlaceView places={myPlaces} />
    </>
  )
}

export default PlaceCard
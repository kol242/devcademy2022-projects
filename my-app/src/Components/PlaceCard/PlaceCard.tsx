import React from 'react'
import '../../Common/Style/place-card.css'
import { myPlaces } from '../../Common/Models/PlacesCard'
import PlaceView from './PlaceView'

const PlaceCard = () => {
  return (
    <>
      <PlaceView places={myPlaces} />
    </>
  )
}

export default PlaceCard
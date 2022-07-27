import React from 'react'
import '../../Common/Style/accomodation-card.css'
import { accCard } from '../../Common/Models/AccomodationCard'
import AccView from './AccView'

const AccomodationCard = () => {
  return (
    <div className="acc-container">
      <h1 id="acc-container__title">Homes guests love</h1>
      <AccView data={accCard}/>
    </div>
  )
}

export default AccomodationCard
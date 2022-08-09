import React from 'react'
import '../../Common/Style/accomodation-card.css'
import { accDetails } from '../../Common/Models/AccomodationDetails'
import AccView from './AccView'
import { Link } from "react-router-dom";
import Arrow from '../../Common/Images/Button/Vector.svg'

const AccomodationCard = () => {
  return (
    <div className="acc-container">
      <div className="acc-container__header">
        <h1 id="acc-container__header--title">Homes guests love</h1>
        <Link id="acc-container__header--link" to="/favorites">View all homes<img src={Arrow} alt="arrow" /></Link>  
      </div>
      <div className="acc-container__body">
        { accDetails.map(acc => 
          <AccView class='acc-container__card' data={acc}/>  
        ) }
      </div>
    </div>
  )
}

export default AccomodationCard
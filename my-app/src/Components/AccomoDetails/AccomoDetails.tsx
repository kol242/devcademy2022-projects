import React from 'react'
import '../../Common/Style/accomo-details.css'
import DetailsImg from '../../Common/Images/details-img.png'
import { accDetails } from '../../Common/Models/AccomodationDetails'
import DetailsView from './DetailsView'

const AccomoDetails = () => {
  return (
    <div className="details-container">
      <img id="details-container__image" src={DetailsImg} alt="details-img" />
      <DetailsView details={accDetails}/>
    </div>
  )
}

export default AccomoDetails
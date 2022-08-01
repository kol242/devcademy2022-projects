import React from 'react'
import '../../Common/Style/accomo-details.css'
import DetailsImg from '../../Common/Images/details-img.png'
import DetailsView from './DetailsView'
import { useLocation } from 'react-router-dom';

const AccomoDetails = () => {
  const { state }: any = useLocation()
  const data = state
  return (
    <div className="details-container">
      <img id="details-container__image" src={DetailsImg} alt="details-img" />
      <DetailsView details={data}/>
    </div>
  )
}

export default AccomoDetails
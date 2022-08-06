import React from 'react'
import '../../Common/Style/accomo-details.css'
import DetailsView from './DetailsView'
import { useLocation } from 'react-router-dom';

const AccomoDetails = () => {
  const { state }: any = useLocation()
  const imageStyle = {
    background: `url(${state.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return (
    <div className="details-container">
      <section style={imageStyle} id="details-container__image"/>
      <DetailsView details={state}/>
    </div>
  )  
}

export default AccomoDetails
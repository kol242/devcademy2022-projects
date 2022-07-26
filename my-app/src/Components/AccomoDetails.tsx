import React from 'react'
import '../Common/Style/accomo-details.css'
import DetailsImg from '../Common/Images/details-img.png'
import DateIcon from '../Common/Images/date.svg'
import RatingStar from '../Common/Images/star.svg'
import { accDetails } from '../Common/Models/AccomodationDetails'

const AccomoDetails = () => {
  // function for creating star categorization
  function createStar() {
    const elements = []
    const category = accDetails.categorization
    for(let i = 0; i < category; i++){
      elements.push(<img id="acc-container__card--star" src={RatingStar} alt="ratingStar" />);
    } 
    return elements;
  }
  
  return (
    <div className="details-container">
      <img id="details-container__image" src={DetailsImg} alt="details-img" />
      <div className="details-container__body">
        <div className="details-container__body--section1">
          <div className="section1-head">
            <h1 id="section1-head__title">{accDetails.title}</h1>
            <div>
              { createStar() }
            </div> 
          </div>
          <h2 id="section1-subtitle">{accDetails.subtitle}</h2>
          <div className="section1-cancellation">
            <img src={DateIcon} alt="date-icon" />
            <h2 id="section1-cancellation__title">
              { accDetails.freeCancelation ? 'Free cancellation available' : 'Free cancellation not available' }
            </h2>  
          </div>
          <p id="section1-description">{accDetails.description}</p>
        </div>
        <div className="details-container__body--section2">
          <h1 id="section2-title">Property info</h1>
          <h2 id="section2-detail">{accDetails.personCount} guests</h2>
          <h2 id="section2-detail">{accDetails.type}</h2>
          <h2 id="section2-detail">EUR {accDetails.price} per night</h2>
          <h2 id="section2-detail">{accDetails.location}</h2>
          <h2 id="section2-detail">{accDetails.postalCode}</h2>
          <button id="section2-btn">BOOK YOUR STAY</button>
        </div>
      </div>
    </div>
  )
}

export default AccomoDetails
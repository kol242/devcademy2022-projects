import React from 'react'
import '../Common/Style/accomodation-card.css'
import AccomodationImg from '../Common/Images/accomodation-card.png'
import RatingStar from '../Common/Images/star.svg'
import { accCard } from '../Common/Models/AccomodationCard'

const AccomodationCard = () => {
  // function for creating star categorization
  function createStar() {
    const elements = []
    const category = accCard.categorization
    for(let i = 0; i < category; i++){
      elements.push(<img id="acc-container__card--star" src={RatingStar} alt="ratingStar" />);
    } 
    return elements;
  }
  
  return (
    <div className="acc-container">
      <h1 id="acc-container__title">Homes guests love</h1>
      <div className="acc-container__card">
        <img src={AccomodationImg} alt="accomoadtion" />
        <h1 id="acc-container__card--title">{accCard.title}</h1>
        <h3 id="acc-container__card--subtitle">{accCard.location}</h3>
        <h2 id="acc-container__card--price">EUR {accCard.price}</h2>
        <div className="acc-container__card--rating">
          { createStar() }
        </div>
      </div> 
    </div>
  )
}

export default AccomodationCard
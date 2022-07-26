import React from 'react'
import '../Common/Style/accomodation-card.css'
import AccomodationImg from '../Common/Images/accomodation-card.png'
import RatingStar from '../Common/Images/star.svg'

const AccomodationCard = () => {
  return (
    <div className="acc-container">
      <h1 id="acc-container__title">Homes guests love</h1>
      <div className="acc-container__card">
        <img src={AccomodationImg} alt="accomoadtion" />
        <h1 id="acc-container__card--title">Sugar & Spice Apartments</h1>
        <h3 id="acc-container__card--subtitle">Split</h3>
        <h2 id="acc-container__card--price">EUR 75</h2>
        <div className="acc-container__card--rating">
          <img id="acc-container__card--star" src={RatingStar} alt="ratingStar" />
          <img id="acc-container__card--star" src={RatingStar} alt="ratingStar" />
          <img id="acc-container__card--star" src={RatingStar} alt="ratingStar" />
          <img id="acc-container__card--star" src={RatingStar} alt="ratingStar" />
          <img id="acc-container__card--star" src={RatingStar} alt="ratingStar" />
        </div>
      </div> 
    </div>
  )
}

export default AccomodationCard
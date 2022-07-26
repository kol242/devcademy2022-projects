import React from 'react'
import '../Common/Style/accomo-details.css'
import DetailsImg from '../Common/Images/details-img.png'
import DateIcon from '../Common/Images/date.svg'
import RatingStar from '../Common/Images/star.svg'

const AccomoDetails = () => {
  return (
    <div className="details-container">
      <img id="details-container__image" src={DetailsImg} alt="details-img" />
      <div className="details-container__body">
        <div className="details-container__body--section1">
          <div className="section1-head">
            <h1 id="section1-head__title">Poseidon Hotel Suites</h1>
            <div>
              <img id="section1-head__star" src={RatingStar} alt="rating-star" />
              <img id="section1-head__star" src={RatingStar} alt="rating-star" />
              <img id="section1-head__star" src={RatingStar} alt="rating-star" />
              <img id="section1-head__star" src={RatingStar} alt="rating-star" />
              <img id="section1-head__star" src={RatingStar} alt="rating-star" />
            </div> 
          </div>
          <h2 id="section1-subtitle">Stay in the heart of Mýkonos City</h2>
          <div className="section1-cancellation">
            <img src={DateIcon} alt="date-icon" />
            <h2 id="section1-cancellation__title">Free cancellation available</h2>  
          </div>
          <p id="section1-description">
          This property is 3 minutes walk from the beach. Overlooking Mykonos Windmills, the Poseidon Hotel Suites is only 50 m from Megali Ammos Beach. The 3-star hotel offers a freshwater pool, and bright rooms with air conditioning and fan. <br /><br />
          Each of the Cycladic rooms opens to a private balcony with across to Mykonos Town, the sea and Delos. A fridge, satellite TV and safe are standard. <br /><br />
          Free two-way transfer from the airport or port is offered. Poseidon provides free Wi-Fi in public areas, and on-site parking is also free. Guests can hire Poseidon’s motor yacht and discover the magnificent beaches of Mykonos. <br /><br />
          At the breakfast room and its cool patio, guests can taste homemade local delicacies, fresh fruit and good quality coffee. The Alley Bay serves exclusive cocktails, a few steps from the Poseidon. <br /><br />
          The Poseidon is just 200 m from the famous Mykonos Windmills. Right next to the hotel, guests will find small sandy coves and a pathway that leads to the picturesque chapel of Agios Charalambis. <br /><br />
          This is our guests' favourite part of Mýkonos City, according to independent reviews. <br /><br />
          Couples particularly like the location — they rated it 9.6 for a two-person trip.
          </p>
        </div>
        <div className="details-container__body--section2">
          <h1 id="section2-title">Property info</h1>
          <h2 id="section2-detail">2 guests</h2>
          <h2 id="section2-detail">Room</h2>
          <h2 id="section2-detail">EUR 500 per night</h2>
          <h2 id="section2-detail">Mykonos City</h2>
          <h2 id="section2-detail">846 00</h2>
          <button id="section2-btn">BOOK YOUR STAY</button>
        </div>
      </div>
    </div>
  )
}

export default AccomoDetails
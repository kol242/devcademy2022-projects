import React from 'react'
import '../Common/Style/city-card.css'

const CityCard = () => {
  return (
    <div className="city-container">
      <h1 id="city-container__title">Popular locations</h1>
      <div className="city-container__card">
        <h1 id="city-container__card--title">London</h1>
        <h2 id="city-container__card--subtitle">5,102 properties</h2>
      </div> 
    </div>
  )
}

export default CityCard
import React from 'react'
import '../Common/Style/city-card.css'
import { CityCardData } from '../Common/Models/CityCard'

const CityCard = () => {
  return (
    <div className="city-container">
      <h1 id="city-container__title">Popular locations</h1>
      <div className="city-container__card">
        <h1 id="city-container__card--title">{CityCardData.name}</h1>
        <h2 id="city-container__card--subtitle">{CityCardData.count} properties</h2>
      </div> 
    </div>
  )
}

export default CityCard
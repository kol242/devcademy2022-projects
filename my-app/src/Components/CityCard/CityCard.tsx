import React from 'react'
import '../../Common/Style/city-card.css'
import { CityCardData } from '../../Common/Models/CityCard'
import CityView from './CityView'

const CityCard = () => {
  return (
    <div className="city-container">
      <h1 id="city-container__title">Popular locations</h1>
      <CityView city={CityCardData}/>
    </div>
  )
}

export default CityCard
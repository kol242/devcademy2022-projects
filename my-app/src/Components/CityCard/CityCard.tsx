import React from 'react'
import '../../Common/Style/city-card.css'
import { CityCardData } from '../../Common/Models/CityCard'
import CityView from './CityView'
import { Link } from "react-router-dom";
import Arrow from '../../Common/Images/Button/Vector.svg'

const CityCard = () => {
  return (
    <div className="city-container">
      <div className="city-container__header">
        <h1 id="city-container__header--title">Popular locations</h1>
        <Link id="city-container__header--link" to="/locations">View all locations<img src={Arrow} alt="arrow" /></Link>  
      </div>
      <CityView city={CityCardData}/>
    </div>
  )
}

export default CityCard
import React from 'react'
import { Place } from '../../Common/Models/Place'

const CityView: React.FC<{ city: Place, class: string }> = (props) => {
  const imageStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%), url(${props.city.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <div className={props.class}>
      <div className="city-container__card--image" style={imageStyle}>
        <h1 id="city-container__card--image-title">{props.city.name}</h1>
        <h2 id="city-container__card--image-subtitle">{props.city.properties} properties</h2>  
      </div>
    </div> 
  )
}

export default CityView
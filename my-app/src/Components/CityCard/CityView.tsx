import React from 'react'

type City = {
  name: string;
  count: number;
  image: any;
}

const CityView: React.FC<{ city: City }> = (props) => {
  const imageStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%), url(${props.city.image})`,
    backgroundSize: '404px 295px',
    backgroundPosition: 'center'
  }

  return (
    <div className="city-container__card" style={imageStyle}>
        <h1 id="city-container__card--title">{props.city.name}</h1>
        <h2 id="city-container__card--subtitle">{props.city.count} properties</h2>
    </div> 
  )
}

export default CityView
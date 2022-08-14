import React from 'react'

type City = {
  name: string;
  count: number;
  image: any;
}

const CityView: React.FC<{ city: City, class: string }> = (props) => {
  const imageStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%), url(${props.city.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <div className={props.class}>
      <div className="city-container__card--image" style={imageStyle}>
        <h1 id="city-container__card--image-title">{props.city.name}</h1>
        <h2 id="city-container__card--image-subtitle">{props.city.count} properties</h2>  
      </div>
    </div> 
  )
}

export default CityView
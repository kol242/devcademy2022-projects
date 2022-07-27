import React from 'react'

type City = {
    name: string,
    count: number
}

const CityView: React.FC<{ city: City }> = (props) => {
  return (
    <div className="city-container__card">
        <h1 id="city-container__card--title">{props.city.name}</h1>
        <h2 id="city-container__card--subtitle">{props.city.count} properties</h2>
    </div> 
  )
}

export default CityView
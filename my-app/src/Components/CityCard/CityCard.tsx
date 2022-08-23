import React, { useEffect } from 'react'
import '../../Common/Style/city-card.css'
import CityView from './CityView'
import { Link } from "react-router-dom";
import Arrow from '../../Common/Images/Button/Vector.svg'
import useHttp from '../../Hooks/use-http'

const CityCard = () => {
  const { fetchedData: locations, sendRequest: fetchLocations } = useHttp()

  useEffect(() => {
    fetchLocations({ 
      url: 'https://devcademy.herokuapp.com/api/Location'
    })
  }, [fetchLocations])

  return (
    <div className="city-container">
      <div className="city-container__header">
        <h1 id="city-container__header--title">Popular locations</h1>
        <Link id="city-container__header--link" to="/locations">View all locations<img src={Arrow} alt="arrow" /></Link>  
      </div>
      <div className="city-container__body">
        { locations.slice(0, 5).map((location: any, index: any) => 
          <CityView key={index} class='city-container__card' city={location}/>   
        ) }
      </div>
    </div>
  )
}

export default CityCard
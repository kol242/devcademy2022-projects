import React, { useEffect } from 'react'
import '../../Common/Style/city-card.css'
import CityView from './CityView'
import { Link } from "react-router-dom";
import Arrow from '../../Common/Images/Button/Vector.svg'
import useHttp from '../../Hooks/use-http'
import Loading from '../Loading'

const CityCard = () => {
  const { fetchedData: locations, sendRequest: fetchLocations, isLoading } = useHttp()

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
        { !isLoading ? locations.slice(0, 5).map((location: any, index: any) => 
          <CityView key={index} class='city-container__card' city={location}/>   
        ) : 
          <Loading class='city-container__card--loading' element={5}/>
        }
      </div>
    </div>
  )
}

export default CityCard
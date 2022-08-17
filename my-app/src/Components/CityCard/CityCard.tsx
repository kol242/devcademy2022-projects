import React, { useEffect, useState } from 'react'
import '../../Common/Style/city-card.css'
import CityView from './CityView'
import { Link } from "react-router-dom";
import Arrow from '../../Common/Images/Button/Vector.svg'

const CityCard = () => {
  const [locations, setLocations] = useState([])

  const fetchLocations = async () => {
    try {
      const response = await fetch(
        'https://devcademy.herokuapp.com/api/Location'
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      setLocations(data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div className="city-container">
      <div className="city-container__header">
        <h1 id="city-container__header--title">Popular locations</h1>
        <Link id="city-container__header--link" to="/locations">View all locations<img src={Arrow} alt="arrow" /></Link>  
      </div>
      <div className="city-container__body">
        { locations.slice(0, 5).map(location => 
          <CityView class='city-container__card' city={location}/>   
        ) }
      </div>
    </div>
  )
}

export default CityCard
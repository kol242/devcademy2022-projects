import React, { useEffect, useState } from 'react'
import '../../Common/Style/accomodation-card.css'
import AccView from './AccView'
import { Link } from "react-router-dom";
import Arrow from '../../Common/Images/Button/Vector.svg'

const AccomodationCard = () => {
  const [accomodations, setAccomodations] = useState([])

  const fetchLocations = async () => {
    try {
      const response = await fetch(
        'https://devcademy.herokuapp.com/api/Accomodations/recommendation'
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      setAccomodations(data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div className="acc-container">
      <div className="acc-container__header">
        <h1 id="acc-container__header--title">Homes guests love</h1>
        <Link id="acc-container__header--link" to="/favorites">View all homes<img src={Arrow} alt="arrow" /></Link>  
      </div>
      <div className="acc-container__body">
        { accomodations.slice(0, 4).map((acc, index) => 
          <AccView key={index} class='acc-container__card' data={acc}/>  
        ) }
      </div>
    </div>
  )
}

export default AccomodationCard
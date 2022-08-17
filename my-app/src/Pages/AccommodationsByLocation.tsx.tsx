import React, { useEffect, useState } from 'react'
import '../Common/Style/faovrites.css'
import AccView from '../Components/AccomodationCard/AccView'
import AdvancedSearch from '../Components/SearchForm/AdvancedSearch'
import { useLocation } from 'react-router-dom'

const AccommodationsByLocation = () => {
  const { state }: any = useLocation()
  const [accomodations, setAccomodations] = useState([])

  const fetchAccomodations = async () => {
    try {
      const response = await fetch(
        `https://devcademy.herokuapp.com/api/Accomodations/location?locationId=${state.locationID}`
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      console.log(data)
      setAccomodations(data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAccomodations();
  }, []);

  return (
    <div className="favorites-container">
      <div>
        <h1 id="favorites-container--title">Stays in {state.location}</h1>
        <h2 id="favorites-container--subtitle">{state.properties} properties</h2>  
      </div>
      <AdvancedSearch />
      <div className="favorites-container__body">
        { accomodations.map(acc => 
          <AccView class='favorites-container__card' data={acc}/>  
        ) }
      </div>
    </div>
  )
}

export default AccommodationsByLocation
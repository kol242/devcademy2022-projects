import React, { useEffect, useState } from 'react'
import '../Common/Style/faovrites.css'
import AccView from '../Components/AccomodationCard/AccView'
import AdvancedSearch from '../Components/SearchForm/AdvancedSearch'

const Favorites = () => {
  const [accomodations, setAccomodations] = useState([])

  const fetchLocations = async () => {
    try {
      const response = await fetch(
        'https://devcademy.herokuapp.com/api/Accomodations'
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
    <div className="favorites-container">
      <div>
        <h1 id="favorites-container--title">Homes guests love</h1>
        <h2 id="favorites-container--subtitle">104 properties</h2>  
      </div>
      <AdvancedSearch />
      <div className="favorites-container__body">
        { accomodations.map((acc, index) => 
          <AccView key={index} class='favorites-container__card' data={acc}/>  
        ) }
      </div>
    </div>
  )
}

export default Favorites
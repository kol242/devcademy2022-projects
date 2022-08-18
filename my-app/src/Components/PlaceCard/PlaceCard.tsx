import React, { useEffect, useState } from 'react'
import '../../Common/Style/place-card.css'
import PlaceView from './PlaceView'

const PlaceCard = () => {
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
    <div className="place-body">
      { accomodations.map((place, index) => 
        <PlaceView key={index} data={place}/>  
      ) }
    </div>
  )
}

export default PlaceCard
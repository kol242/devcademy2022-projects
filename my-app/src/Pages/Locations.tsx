import React, { useEffect, useState } from 'react'
import '../Common/Style/locations.css'
import CityView from '../Components/CityCard/CityView'
import SimpleSearch from '../Components/SearchForm/SimpleSearch'

const Locations = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [locations, setLocations] = useState([])

  const fetchLocations = async () => {
    setIsLoading(true);
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
    setIsLoading(false);
  };

  useEffect(() => {
    fetchLocations();
  }, []);
  return (
    <div className="locations-container">
      <h1 id="locations-container--title">All locations</h1>
      <SimpleSearch />
      <div className="locations-container__body">
        { isLoading && <p>Loading...</p> }
        { locations.map(locations =>
          <CityView class='locations-container__card' city={locations}/>  
        ) }  
      </div>
    </div>
  )
}

export default Locations
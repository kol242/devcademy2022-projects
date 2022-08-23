import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Place } from '../Common/Models/Place'
import '../Common/Style/locations.css'
import CityView from '../Components/CityCard/CityView'
import SimpleSearch from '../Components/SearchForm/SimpleSearch'

const Locations = () => {
  const [locations, setLocations] = useState<Place[]>([])
  const { state }: any = useLocation()

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
    <div className="locations-container">
      <h1 id="locations-container--title">All locations</h1>
      <SimpleSearch />
      <div className="locations-container__body">
        { (state ? state : locations).map((locations: any, index: any) =>
          <CityView key={index} class='locations-container__card' city={locations}/>  
        ) }  
      </div>
    </div>
  )
}

export default Locations
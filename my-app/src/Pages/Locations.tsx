import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../Common/Style/locations.css'
import CityView from '../Components/CityCard/CityView'
import SimpleSearch from '../Components/SearchForm/SimpleSearch'
import useHttp from '../Hooks/use-http'

const Locations = () => {
  const { fetchedData: locations, sendRequest: fetchLocations } = useHttp()
  const { state }: any = useLocation()

  useEffect(() => {
    fetchLocations({ 
      url: 'https://devcademy.herokuapp.com/api/Location'
    })
  }, [fetchLocations])

  return (
    <div className="locations-container">
      <h1 id="locations-container--title">All locations</h1>
      <SimpleSearch locations={locations}/>
      <div className="locations-container__body">
        { (state ? state : locations).map((locations: any, index: any) =>
          <CityView key={index} class='locations-container__card' city={locations}/>  
        ) }  
      </div>
    </div>
  )
}

export default Locations
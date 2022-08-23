import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../Common/Style/faovrites.css'
import AccView from '../Components/AccomodationCard/AccView'
import AdvancedSearch from '../Components/SearchForm/AdvancedSearch'

const Favorites = () => {
  const { state }: any = useLocation()
  const [accomodations, setAccomodations] = useState([])

  const fetchRecommendations = async () => {
    try {
      const response = await fetch('https://devcademy.herokuapp.com/api/Accomodations/recommendation')

      if (!response.ok) {
        throw new Error('Request failed!')
      }

      const data = await response.json()
      setAccomodations(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchRecommendations()
  }, [])

  return (
    <div className="favorites-container">
      <div>
        <h1 id="favorites-container--title">Homes guests love</h1>
        <h2 id="favorites-container--subtitle">{accomodations.length} properties</h2>  
      </div>
      <AdvancedSearch isFavorites={true} location={''} locationID={''} properties={0} />
      <div className="favorites-container__body">
        { (!state ? accomodations : state.filterData).map((acc: any, index: any) => 
          <AccView key={index} class='favorites-container__card' data={acc}/>  
        ) }
      </div>
    </div>
  )
}

export default Favorites
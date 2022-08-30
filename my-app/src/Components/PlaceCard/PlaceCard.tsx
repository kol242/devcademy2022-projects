import React, { useEffect } from 'react'
import '../../Common/Style/place-card.css'
import useHttp from '../../Hooks/use-http'
import Loading from '../Loading'
import PlaceView from './PlaceView'

const PlaceCard = () => {
  const { fetchedData: accomodations, sendRequest: fetchAccomodations, isLoading} = useHttp()

  useEffect(() => {
    fetchAccomodations({ 
      url: 'https://devcademy.herokuapp.com/api/Accomodations'
    })
  }, [fetchAccomodations])

  return (
    <div className="place-body">
      { !isLoading ? accomodations.map((place: any, index: any) => 
        <PlaceView key={index} data={place}/>  
      ) : <Loading class='place-container__card--loading' element={5} /> }
    </div>
  )
}

export default PlaceCard
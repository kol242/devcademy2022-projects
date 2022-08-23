import React, { useEffect } from 'react'
import '../../Common/Style/place-card.css'
import useHttp from '../../Hooks/use-http'
import PlaceView from './PlaceView'

const PlaceCard = () => {
  const { fetchedData: accomodations, sendRequest: fetchAccomodations } = useHttp()

  useEffect(() => {
    fetchAccomodations({ 
      url: 'https://devcademy.herokuapp.com/api/Accomodations',
      headers: {},
      method: 'GET',
      body: null,
      onSuccess: null,
      onFail: null  
    });
  }, [fetchAccomodations]);

  return (
    <div className="place-body">
      { accomodations.map((place: any, index: any) => 
        <PlaceView key={index} data={place}/>  
      ) }
    </div>
  )
}

export default PlaceCard
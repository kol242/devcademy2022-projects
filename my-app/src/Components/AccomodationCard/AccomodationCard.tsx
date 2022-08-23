import React, { useEffect } from 'react'
import '../../Common/Style/accomodation-card.css'
import AccView from './AccView'
import { Link } from "react-router-dom";
import Arrow from '../../Common/Images/Button/Vector.svg'
import useHttp from '../../Hooks/use-http'

const AccomodationCard = () => {
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
    <div className="acc-container">
      <div className="acc-container__header">
        <h1 id="acc-container__header--title">Homes guests love</h1>
        <Link id="acc-container__header--link" to="/favorites">View all homes<img src={Arrow} alt="arrow" /></Link>  
      </div>
      <div className="acc-container__body">
        { accomodations.slice(0, 4).map((acc: any, index: any) => 
          <AccView key={index} class='acc-container__card' data={acc}/>  
        ) }
      </div>
    </div>
  )
}

export default AccomodationCard
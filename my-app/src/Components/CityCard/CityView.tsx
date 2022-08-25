import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Place } from '../../Common/Models/Place'
import useHttp from '../../Hooks/use-http'

const CityView: React.FC<{ city: Place, class: string }> = (props) => {
  const navigate = useNavigate()
  const { fetchedData: accomodations, sendRequest: fetchAccomodations } = useHttp()
  const imageStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%), url(${props.city.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  const data = (id: any) => {
    fetchAccomodations({ 
      url: `https://devcademy.herokuapp.com/api/Accomodations/location?locationId=${id}`
    })
    return accomodations
  }

  const result = {
    filterData: data(props.city.id),
    location: props.city.name,
    locationID: props.city.id,
    properties: props.city.properties
  }

  const handleClick = () => {
    navigate("/accomodations", { state: result })
  }

  return (
    <div className={props.class} onClick={handleClick}>
      <div className="city-container__card--image" style={imageStyle}>
        <h1 id="city-container__card--image-title">{props.city.name}</h1>
        <h2 id="city-container__card--image-subtitle">{props.city.properties} properties</h2>  
      </div>
    </div> 
  )
}

export default CityView
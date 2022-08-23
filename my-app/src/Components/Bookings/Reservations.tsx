import React from 'react'
import { Reservation } from '../../Common/Models/Reservation'
import Stars from '../Stars'

const Reservations: React.FC<{ data: Reservation }> = (props) => {

  const imageStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%), url(${props.data.accomodation.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  function dateFormater(date: string | number) {
    const formatted = new Date(date)
    return formatted.toDateString()
  }

  return (
    <div className="myBookings-container__card">
      <section style={imageStyle} id="myBookings-container__card--image"/>
      <h1 id="myBookings-container__card--title">{props.data.accomodation.title}</h1>
      <h3 id="myBookings-container__card--subtitle">{props.data.accomodation.location?.name}</h3>
      <h2 id="myBookings-container__card--date">{dateFormater(props.data.checkIn)} - {dateFormater(props.data.checkOut)}</h2>
      <div className="myBookings-container__card--rating">
        <Stars category={props.data.accomodation.categorization} />
      </div> 
    </div>
  )
}

export default Reservations
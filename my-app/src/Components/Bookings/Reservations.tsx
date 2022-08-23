import React from 'react'
import RatingStar from '../../Common/Images/star.svg'
import { Reservation } from '../../Common/Models/Reservation'

const Reservations: React.FC<{ data: Reservation }> = (props) => {
  function createStar() {
    const elements = []
    const category = props.data.accomodation.categorization
    for(let i = 0; i < category; i++){
    elements.push(<img key={i} id="acc-container__card--star" src={RatingStar} alt="ratingStar" />);
    } 
    return elements;
  }

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
        { createStar() }
      </div> 
    </div>
  )
}

export default Reservations
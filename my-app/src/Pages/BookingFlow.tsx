import React from 'react'
import { useLocation } from 'react-router-dom';
import '../Common/Style/booking-flow.css'
import BookingForm from '../Components/BookingForm/BookingForm'
import Stars from '../Components/Stars'

const BookingFlow = () => {
  const { state }: any = useLocation()

  const imageStyle = {
    background: `url(${state.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div className="booking-container">
      <h1 id="booking-container__title">Book your stay</h1>
      <div className="booking-container__content">
        <BookingForm state={state}/>
        <section className="booking-container__content--card">
          <section style={imageStyle} id="card-img"/>
          <div id="card-section">
            <h1 id="card-section__title">{state.title}</h1>
            <div className="acc-container__card--rating card-stars">
              <Stars category={state.categorization}/>
            </div>
            <p id="card-section__description">{state.type}</p>
            <p id="card-section__description">{state.location?.name}</p>
            <p id="card-section__description">{state.postalCode}</p>
            <p id="card-section__description">EUR {state.price} per night</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default BookingFlow
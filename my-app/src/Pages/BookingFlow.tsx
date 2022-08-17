import React from 'react'
import { useLocation } from 'react-router-dom';
import '../Common/Style/booking-flow.css'
import BookingForm from '../Components/BookingForm/BookingForm'
import RatingStar from '../Common/Images/star.svg'

const BookingFlow = () => {
  const { state }: any = useLocation()

  function createStar() {
    const elements = []
    const category = state.categorization
    for(let i = 0; i < category; i++){
    elements.push(<img id="acc-container__card--star" src={RatingStar} alt="ratingStar" />);
    } 
    return elements;
  }

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
              { createStar() }
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
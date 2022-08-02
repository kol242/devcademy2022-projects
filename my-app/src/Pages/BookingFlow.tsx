import React from 'react'
import { useLocation } from 'react-router-dom';
import '../Common/Style/booking-flow.css'
import BookingForm from '../Components/BookingForm/BookingForm'
import RatingStar from '../Common/Images/star.svg'

const BookingFlow = () => {
  // function for creating star categorization
  function createStar() {
    const elements = []
    const category = data.categorization
    for(let i = 0; i < category; i++){
    elements.push(<img id="acc-container__card--star" src={RatingStar} alt="ratingStar" />);
    } 
    return elements;
  }

    const { state }: any = useLocation()
    const data = state

  return (
    <div className="booking-container">
      <h1 id="booking-container__title">Book your stay</h1>
      <div className="booking-container__content">
        <BookingForm />
        <section className="booking-container__content--card">
          <img id="card-img" src={data.xsmallImg} alt="card-img" />
          <div id="card-section">
            <h1 id="card-section__title">{data.title}</h1>
            <div className="acc-container__card--rating card-stars">
              { createStar() }
            </div>
            <p id="card-section__description">{data.type}</p>
            <p id="card-section__description">{data.location}</p>
            <p id="card-section__description">{data.postalCode}</p>
            <p id="card-section__description">EUR {data.price} per night</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default BookingFlow
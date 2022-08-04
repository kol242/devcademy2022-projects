import React, { useRef } from 'react'
import '../../Common/Style/booking-form.css'
import CheckIn from '../SearchForm/SearchInputs/CheckIn'
import CheckOut from '../SearchForm/SearchInputs/CheckOut'

const BookingForm = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const gustsRef = useRef<HTMLInputElement>(null)
  const checkInRef = useRef<HTMLInputElement>(null)
  const checkOutRef = useRef<HTMLInputElement>(null)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const formData = {
      fullName: nameRef.current?.value,
      checkInDate: checkInRef.current?.value,
      checkOutDate: checkOutRef.current?.value,
      email: emailRef.current?.value,
      guestsCount: Number(gustsRef.current?.value)
    }
    console.log('Form data: ', formData)
  }

  return (
    <form onSubmit={submitHandler} id="booking-container__content--form" action="submit">
        <input id="booking-input" placeholder='Full name' type="text" ref={nameRef}/>
        <input id="booking-input" placeholder='Email adress' type="text" ref={emailRef}/>
        <input id="booking-input" placeholder='Number of guests' type="number" ref={gustsRef}/>
        <div className="date-wrapper">
          <CheckIn ref={checkInRef}/>
          <CheckOut ref={checkOutRef} />
        </div>
        <button id="booking-btn">Book your stay</button>
    </form>
  )
}

export default BookingForm
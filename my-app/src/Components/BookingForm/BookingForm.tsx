import React, { useRef } from 'react'
import '../../Common/Style/booking-form.css'
import DatePicker from '../SearchForm/SearchInputs/DatePicker'

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
          <DatePicker ref={checkInRef} title={'Check in'} id={'input-date-checkin'}/>
          <DatePicker ref={checkOutRef} title={'Check out'} id={'input-date-checkout'}/>
        </div>
        <button id="booking-btn">Book your stay</button>
    </form>
  )
}

export default BookingForm
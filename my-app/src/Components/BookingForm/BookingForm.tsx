import React, { useRef } from 'react'
import '../../Common/Style/booking-form.css'

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
      guestsCount: gustsRef.current?.value
    }
    console.log('Search data: ', formData)
  }

  const checkInFocus = () => {
    const element = document.querySelector('#booking-checkin')
    element?.getAttribute('type') === 'text' ? element?.setAttribute("type", "date") : element?.setAttribute("type", "text")
  }

  const checkOutFocus = () => {
    const element = document.querySelector('#booking-checkout')
    element?.getAttribute('type') === 'text' ? element?.setAttribute("type", "date") : element?.setAttribute("type", "text")
  }

  return (
    <form onSubmit={submitHandler} id="booking-container__content--form" action="submit">
        <input id="booking-input" placeholder='Full name' type="text" ref={nameRef}/>
        <input id="booking-input" placeholder='Email adress' type="text" ref={emailRef}/>
        <input id="booking-input" placeholder='Number of guests' type="text" ref={gustsRef}/>
        <div className="date-wrapper">
          <input id="booking-checkin" type="text" placeholder="Check in" onFocus={checkInFocus} onBlur={checkInFocus} ref={checkInRef} />
          <input id="booking-checkout" type="text" placeholder="Check out" onFocus={checkOutFocus} onBlur={checkOutFocus} ref={checkOutRef}/>
        </div>
        <button id="booking-btn">Book your stay</button>
    </form>
  )
}

export default BookingForm
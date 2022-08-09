import React, { useRef } from 'react'
import '../../Common/Style/booking-form.css'
import DatePicker from '../SearchForm/SearchInputs/DatePicker'
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
      primary: {
          main: '#EF976B'
      }
  }
})

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
      <ThemeProvider theme={theme}>
        <TextField id="outlined-basic" label="Full name" variant="outlined" color="primary" inputRef={nameRef}/>  
        <TextField id="outlined-basic" label="Email adress" variant="outlined" color="primary" inputRef={emailRef}/>  
        <TextField id="outlined-basic" label="Number of guests" variant="outlined" type="number" color="primary" inputRef={gustsRef}/>  
      </ThemeProvider>
      <div className="date-wrapper">
        <DatePicker ref={checkInRef} title={'Check in'} />
        <DatePicker ref={checkOutRef} title={'Check out'} />
      </div>
      <button id="booking-btn">Book your stay</button>
    </form>
  )
}

export default BookingForm
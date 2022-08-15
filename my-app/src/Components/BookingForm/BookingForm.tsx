import React, { useRef, useState } from 'react'
import '../../Common/Style/booking-form.css'
import DatePicker from '../SearchForm/SearchInputs/DatePicker'
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReservationConfirmModal from '../Modals/ReservationConfirmModal'

const theme = createTheme({
  palette: {
      primary: {
          main: '#EF976B'
      }
  }
})

const BookingForm: React.FC<{ state: any }> = (props) => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const gustsRef = useRef<HTMLInputElement>(null)
  const checkInRef = useRef<HTMLInputElement>(null)
  const checkOutRef = useRef<HTMLInputElement>(null)

  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const modalHandler = () => {
    !modal ? setModal(true) : setModal(false);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    setModalData({
      fullName: nameRef.current?.value,
      checkInDate: checkInRef.current?.value,
      checkOutDate: checkOutRef.current?.value,
      email: emailRef.current?.value,
      guestsCount: Number(gustsRef.current?.value)
    })
    modalHandler()
  }

  return (
    <>
      { modal && <ReservationConfirmModal modalHandler={modalHandler} data={modalData} accData={props.state}/> }
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
    </>
    
  )
}

export default BookingForm
import React, { useRef, useState } from 'react'
import '../../Common/Style/booking-form.css'
import DatePicker from '../SearchForm/SearchInputs/DatePicker'
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReservationConfirmModal from '../Modals/ReservationConfirmModal'
import useValidators from '../../Hooks/use-validators'
import useHttp from '../../Hooks/use-http'

const theme = createTheme({
  palette: {
      primary: {
          main: '#EF976B'
      }
  }
})

const BookingForm: React.FC<{ state: any }> = (props) => {
  const { openSnackbar } = useHttp()
  const { nameError,
    nameValid,
    nameValidation,
    emailError,
    emailValid,
    emailValidation,
    capacityError,
    capacityValid,
    capacityValidation 
  } = useValidators()

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
    const formData = {
      fullName: nameRef.current?.value,
      checkIn: checkInRef.current?.value,
      checkOut: checkOutRef.current?.value,
      email: emailRef.current?.value,
      personCount: Number(gustsRef.current?.value)
    }
    if ( !nameError && !capacityError && !emailError ) {
      setModalData(formData)
      modalHandler()
      const form = document.getElementById('booking-container__content--form') as HTMLFormElement;
      form.reset()
    } else {
      openSnackbar('warning')
    }
  }

  return (
    <>
      { modal && 
      <ReservationConfirmModal 
        modalHandler={modalHandler} 
        data={modalData} 
        accData={props.state}
      /> }
      <form onSubmit={submitHandler} id="booking-container__content--form" action="submit">
        <ThemeProvider theme={theme}>
          <TextField 
            required
            id="outlined-basic" 
            label="Full name" 
            variant="outlined" 
            color="primary" 
            inputRef={nameRef}
            error={nameError}
            helperText={nameValid}
            onChange={(event) => nameValidation(event)}
          />  
          <TextField 
            id="outlined-basic" 
            label="Email adress" 
            variant="outlined" 
            color="primary" 
            inputRef={emailRef}
            error={emailError}
            helperText={emailValid}
            onChange={(event) => emailValidation(event)}
          />  
          <TextField 
            id="outlined-basic" 
            label="Number of guests" 
            variant="outlined" 
            type="number" 
            color="primary" 
            inputRef={gustsRef}
            error={capacityError}
            helperText={capacityValid}
            onChange={(event) => capacityValidation(event)}
          />  
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
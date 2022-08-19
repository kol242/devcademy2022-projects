import React, { useRef, useState } from 'react'
import '../../Common/Style/booking-form.css'
import DatePicker from '../SearchForm/SearchInputs/DatePicker'
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReservationConfirmModal from '../Modals/ReservationConfirmModal'
import Snackbar from '@mui/material/Snackbar';
import Alert from '../Alert'

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
  const [open, setOpen] = React.useState(false);

  type Response = {
    text: string,
    status: "success" | "error" | "info" | "warning"
  }
  const [response, setResponse] = React.useState<Response>();

  const handleSnackbar = (requestState: string) => {
    switch (requestState) {
      case 'success':
         setResponse({
          text: 'Reservation submited successfully!',
          status: 'success'
         })
        break
      case 'fail':
        setResponse({
          text: 'Something went wrong!',
          status: 'error'
        })
        break
      case 'warning':
        setResponse({
            text: 'Form is not validated',
            status: 'warning'
        })
      }
    setOpen(true)
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

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
      const form = document.getElementById('new-place-container__content--form') as HTMLFormElement;
      form.reset()
    } else {
      handleSnackbar('warning')
    }
  }

  // ============================================== VALIDATIONS ==========================================================

  const [nameError, setNameError] = React.useState(false);
  const [nameValid, setIsNameValid] = React.useState('');

  function nameValidation(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (event.target.value.length > 300) {
      setNameError(true)
      setIsNameValid('Maximum 300 characters!')
    } else {
      setIsNameValid('')
      setNameError(false)
    }
  }

  const [emailError, setEmailError] = React.useState(false);
  const [emailValid, setIsEmailValid] = React.useState('');

  function emailValidation(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      if (event.target.value.length > 100) {
        setEmailError(true)
        setIsEmailValid('Maximum 100 characters!')
      } else {
        setIsEmailValid('')
        setEmailError(false)
      }

      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if (event.target.value.match(validRegex)) {
        setIsEmailValid('')
        setEmailError(false)
      } else {
        setEmailError(true)
        setIsEmailValid('Email is not valid!')
      }
  }

  const [capacityError, setCapacityError] = React.useState(false);
  const [capacityValid, setIsCapacityValid] = React.useState('');

  function capacityValidation(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      const number = Number(event.target.value)
      if (number < 1) {
          setCapacityError(true)
          setIsCapacityValid('Minimum capacity is 1!')
      } else {
          setIsCapacityValid('')
          setCapacityError(false)
      }
  }

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
        <Alert onClose={handleClose} severity={response?.status} sx={{ width: '100%' }}>
          {response?.text}
        </Alert>
      </Snackbar>
      { modal && 
      <ReservationConfirmModal 
        modalHandler={modalHandler} 
        data={modalData} 
        accData={props.state}
        handleSnackbar={handleSnackbar}
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
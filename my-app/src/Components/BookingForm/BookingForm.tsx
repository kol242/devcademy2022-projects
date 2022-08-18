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
    setModalData(formData)
    console.log(formData)
    modalHandler()
  }

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
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
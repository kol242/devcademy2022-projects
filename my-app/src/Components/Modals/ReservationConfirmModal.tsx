import { Snackbar } from '@mui/material'
import React from 'react'
import { Accomodation } from '../../Common/Models/Accomodation'
import '../../Common/Style/modal.css'
import useHttp from '../../Hooks/use-http'
import Alert from '../Alert'

const ReservationConfirmModal: React.FC<{ modalHandler: Function, data: any, accData: Accomodation }> = (props) => {
  const { sendRequest: addReservation, snackbarResponse, isSnackbarOpen, closeSnackbar } = useHttp()

  const reservationData = {
    email: props.data.email,
    accomodationId: props.accData.id,
    checkIn: new Date(props.data.checkIn).toISOString(),
    checkOut: new Date(props.data.checkOut).toISOString(),
    personCount: Number(props.data.personCount),
    confirmed: true
  }

  const addReservationHandler = () => {
    addReservation({ 
      url: 'https://devcademy.herokuapp.com/api/Reservation',
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      body: reservationData
    })
    props.modalHandler()
  }
  
  return (
    <>
      <Snackbar open={isSnackbarOpen} autoHideDuration={6000} onClose={closeSnackbar} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
        <Alert onClose={closeSnackbar} severity={snackbarResponse?.status} sx={{ width: '100%' }}>
          {snackbarResponse?.text}
        </Alert>
      </Snackbar>
      <div className="modal-container">
        <div className="modal-container__content">
          <h1 id="content-title">Confirm booking</h1>
          <div className="content-text">
            <p>{props.accData.title}</p>
            <p>{props.data?.personCount} guests</p>
            <p>{props.data?.checkIn} - {props.data?.checkOut}</p>
            <p>{props.accData.type}</p>
            <p>{props.accData.location?.name}</p>
            <p>EUR {props.accData.price}</p>
          </div>
          <div className="content-btns">
            <button id="content-btns__btn" onClick={(event) => props.modalHandler(event)}>Cancel</button>
            <button id="content-btns__btn" onClick={addReservationHandler}>Confirm</button>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default ReservationConfirmModal
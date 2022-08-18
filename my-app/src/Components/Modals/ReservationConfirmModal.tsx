import React from 'react'
import { Accomodation } from '../../Common/Models/Accomodation'
import '../../Common/Style/modal.css'

const ReservationConfirmModal: React.FC<{ 
  modalHandler: Function, 
  data: any, accData: Accomodation, 
  handleSnackbar: any 
}> = (props) => {

  const reservationData = {
    email: props.data.email,
    accomodationId: props.accData.id,
    checkIn: new Date(props.data.checkIn).toISOString(),
    checkOut: new Date(props.data.checkOut).toISOString(),
    personCount: Number(props.data.personCount),
    confirmed: true
  }

  const addReservationHandler = async () => {
    try {
      const response = await fetch(
        'https://devcademy.herokuapp.com/api/Reservation',
        {
          method: 'POST',
          body: JSON.stringify(reservationData),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!')
      }
      props.handleSnackbar('success')
    } catch (err) {
      console.error(err);
      props.handleSnackbar('error')
    }
    props.modalHandler()
  }
  
  return (
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
  )
}

export default ReservationConfirmModal
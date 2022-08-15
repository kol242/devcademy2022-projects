import React from 'react'
import '../../Common/Style/modal.css'

const ReservationConfirmModal: React.FC<{ modalHandler: any, data: any, accData: any }> = (props) => {
  return (
    <div className="modal-container">
      <div className="modal-container__content">
        <h1 id="content-title">Confirm booking</h1>
        <div className="content-text">
          <p>{props.data?.fullName}</p>
          <p>{props.data?.guestsCount} guests</p>
          <p>{props.data?.checkInDate} - {props.data?.checkOutDate}</p>
          <p>{props.accData.type}</p>
          <p>{props.accData.location}</p>
          <p>EUR {props.accData.price}</p>
        </div>
        <div className="content-btns">
          <button id="content-btns__btn" onClick={(event) => props.modalHandler(event)}>Cancel</button>
          <button id="content-btns__btn">Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default ReservationConfirmModal
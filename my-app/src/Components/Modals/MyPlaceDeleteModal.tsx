import React from 'react'
import '../../Common/Style/modal.css'

const MyPlaceDeleteModal: React.FC<{ modalHandler: any, data: any }> = (props) => {
  console.log(props.data)
  return (
    <div className="modal-container">
      <div className="modal-container__content">
        <h1 id="content-title">Delete listing?</h1>
        <div className="content-text">
          <p>Are you sure you want to delete this listing? This action cannot be reversed.</p>
        </div>
        <div className="content-btns">
          <button id="content-btns__btn" onClick={(event) => props.modalHandler(event)}>Cancel</button>
          <button id="content-btns__btn">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default MyPlaceDeleteModal
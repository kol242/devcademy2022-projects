import React from 'react'
import '../../Common/Style/modal.css'

const MyPlaceDeleteModal: React.FC<{ modalHandler: any, data: any }> = (props) => {

  const deleteAccomodation = async () => {
    try {
      const response = await fetch(`https://devcademy.herokuapp.com/api/Accomodations/${props.data}`, { method: 'DELETE' });

      if (!response.ok) {
        throw new Error('Request failed!');
      }
    } catch (err) {
      console.error(err);
    }

    props.modalHandler()
  };

  return (
    <div className="modal-container">
      <div className="modal-container__content">
        <h1 id="content-title">Delete listing?</h1>
        <div className="content-text">
          <p>Are you sure you want to delete this listing? This action cannot be reversed.</p>
        </div>
        <div className="content-btns">
          <button id="content-btns__btn" onClick={(event) => props.modalHandler(event)}>Cancel</button>
          <button id="content-btns__btn" onClick={deleteAccomodation}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default MyPlaceDeleteModal
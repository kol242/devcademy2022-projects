import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Common/Style/modal.css'
import useHttp from '../../Hooks/use-http'

const MyPlaceDeleteModal: React.FC<{ modalHandler: any, data: any }> = (props) => {
  const { sendRequest: deleteAccomodation } = useHttp()
  const navigate = useNavigate()

  function refreshPage() {
    window.location.reload();
  }

  const deleteHandler = async () => {
    await deleteAccomodation({ 
      url: `https://devcademy.herokuapp.com/api/Accomodations/${props.data}`,
      method: 'DELETE'
    })
    navigate('/places', { state: refreshPage })
    props.modalHandler()
  }
  
  return (
    <div className="modal-container">
      <div className="modal-container__content">
        <h1 id="content-title">Delete listing?</h1>
        <div className="content-text">
          <p>Are you sure you want to delete this listing? This action cannot be reversed.</p>
        </div>
        <div className="content-btns">
          <button id="content-btns__btn" onClick={(event) => props.modalHandler(event)}>Cancel</button>
          <button id="content-btns__btn" onClick={deleteHandler}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default MyPlaceDeleteModal
import React, { useState } from 'react'
import MyPlaceDeleteModal from '../Modals/MyPlaceDeleteModal'

type Accomodation = {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  type?: string;
  categorization: number;
  personCount?: number;
  imageUrl?: string;
  freeCancelation?: boolean;
  price?: number;
  locationID?: string;
  location?: {
      name: string,
      imageUrl: string,
      postalCode: number,
      properties: number
  }
  postalCode?: number;
}

const PlaceView: React.FC<{ data: Accomodation }> = (props) => {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});
 
  const modalHandler = (data: any) => {
    setModalData(data)
    !modal ? setModal(true) : setModal(false);
  };

  const imageStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%), url(${props.data.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }


  return (
    <div className="place-container">
      { modal && <MyPlaceDeleteModal modalHandler={modalHandler} data={modalData}/> }
        <div className="place-container__card">
          <section style={imageStyle} id="place-container__card--image"/>
          <h1 id="place-container__card--title">{props.data.title}</h1>
          <h3 id="place-container__card--subtitle">{props.data.location?.name}</h3>
          <h2 id="place-container__card--detail">{props.data.subtitle}</h2>
          <div className="place-container__card--btns">
              <button id="btns-edit">EDIT</button>
              <button onClick={() => modalHandler(props.data.id)}id="btns-delete">DELETE PLACE</button>
          </div>
        </div>   
    </div>
  )
}

export default PlaceView
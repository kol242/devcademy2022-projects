import React from 'react'
import DateIcon from '../../Common/Images/date.svg'
import RatingStar from '../../Common/Images/star.svg'
import { useNavigate } from 'react-router-dom';

type Detail = {
  title: string;
  subtitle: string;
  description: string;
  type: string;
  categorization: number;
  personCount: number;
  largeImg: any;
  smallImg: any;
  xsmallImg: any;
  freeCancelation: boolean;
  price: number;
  location: string;
  postalCode: string;
}

const DetailsView: React.FC<{ details: Detail }> = (props) => {
    // function for creating star categorization
  function createStar() {
    const elements = []
    const category = props.details.categorization
    for(let i = 0; i < category; i++){
      elements.push(<img id="acc-container__card--star" src={RatingStar} alt="ratingStar" />);
    } 
    return elements;
  }

  const navigate = useNavigate()
  const send = () => {
      navigate('/booking-flow', { state: props.details })
  }

  return (
    <div className="details-container__body">
        <div className="details-container__body--section1">
          <div className="section1-head">
            <h1 id="section1-head__title">{props.details.title}</h1>
            <div>
              { createStar() }
            </div> 
          </div>
          <h2 id="section1-subtitle">{props.details.subtitle}</h2>
          <div className="section1-cancellation">
            <img src={DateIcon} alt="date-icon" />
            <h2 id="section1-cancellation__title">
              { props.details.freeCancelation ? 'Free cancellation available' : 'Free cancellation not available' }
            </h2>  
          </div>
          <p id="section1-description">{props.details.description}</p>
        </div>
        <div className="details-container__body--section2">
          <h1 id="section2-title">Property info</h1>
          <h2 id="section2-detail">{props.details.personCount} guests</h2>
          <h2 id="section2-detail">{props.details.type}</h2>
          <h2 id="section2-detail">EUR {props.details.price} per night</h2>
          <h2 id="section2-detail">{props.details.location}</h2>
          <h2 id="section2-detail">{props.details.postalCode}</h2>
          <button onClick={() => { send() }} id="section2-btn">BOOK YOUR STAY</button>
        </div>
      </div>
  )
}

export default DetailsView
import React from 'react'
import RatingStar from '../../Common/Images/star.svg'
import { useNavigate } from 'react-router-dom';

type Accomodation = {
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

const AccView: React.FC<{ data: Accomodation, class: string }> = (props) => {
    // function for creating star categorization
    function createStar() {
        const elements = []
        const category = props.data.categorization
        for(let i = 0; i < category; i++){
        elements.push(<img id="acc-container__card--star" src={RatingStar} alt="ratingStar" />);
        } 
        return elements;
    }

    const navigate = useNavigate()
    const send = () => {
        navigate('/accomodation-details', { state: props.data })
    }

    const imageStyle = {
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%), url(${props.data.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }

    return (
        <div className={props.class}>
            <section onClick={() => { send() }} style={imageStyle} id="acc-container__card--image"/>
            <h1 onClick={() => { send() }} id="acc-container__card--title">{props.data.title}</h1>
            <h3 id="acc-container__card--subtitle">{props.data.location?.name}</h3>
            <h2 id="acc-container__card--price">EUR {props.data.price}</h2>
            <div className="acc-container__card--rating">
            { createStar() }
            </div>
        </div> 
    )
}

export default AccView
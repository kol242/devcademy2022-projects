import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Accomodation } from '../../Common/Models/Accomodation';
import Stars from '../Stars'

const AccView: React.FC<{ data: Accomodation, class: string }> = (props) => {

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
                <Stars category={props.data.categorization} />
            </div>
        </div> 
    )
}

export default AccView
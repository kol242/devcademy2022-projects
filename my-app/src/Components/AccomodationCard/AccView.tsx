import React from 'react'
import RatingStar from '../../Common/Images/star.svg'
import { useNavigate } from 'react-router-dom';

type Accomodation = {
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

const AccView: React.FC<{ data: Accomodation }> = (props) => {
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

    return (
        <div className="acc-container__card">
            <img src={props.data.smallImg} alt="accomoadtion" id="acc-container__card--image"/>
            <h1 onClick={() => { send() }} id="acc-container__card--title">{props.data.title}</h1>
            <h3 id="acc-container__card--subtitle">{props.data.location}</h3>
            <h2 id="acc-container__card--price">EUR {props.data.price}</h2>
            <div className="acc-container__card--rating">
            { createStar() }
            </div>
        </div> 
    )
}

export default AccView
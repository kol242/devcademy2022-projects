import React from 'react'
import AccomodationImg from '../../Common/Images/accomodation-card.png'
import RatingStar from '../../Common/Images/star.svg'

type Accomodation = {
    title: string;
    location: string;
    price: number;
    categorization: number;
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

    return (
        <div className="acc-container__card">
            <img src={AccomodationImg} alt="accomoadtion" />
            <h1 id="acc-container__card--title">{props.data.title}</h1>
            <h3 id="acc-container__card--subtitle">{props.data.location}</h3>
            <h2 id="acc-container__card--price">EUR {props.data.price}</h2>
            <div className="acc-container__card--rating">
            { createStar() }
            </div>
        </div> 
    )
}

export default AccView
import React from 'react'
import RatingStar from '../Common/Images/star.svg'

const Stars: React.FC<{ category: number }> = (props) => {
    function createStar() {
        const elements = []
        for(let i = 0; i < props.category; i++){
          elements.push(<img key={i} id="acc-container__card--star" src={RatingStar} alt="ratingStar" />);
        } 
        return elements;
    }
  return (
    <>
        { createStar() }
    </>
  )
}

export default Stars
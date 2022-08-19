import React from 'react'
import Rating from '@mui/material/Rating';

const Categorization: React.FC<{ handleChange: Function, label: string }> = (props) => {
  return (
    <div className="categorization-section">
        <p id="categorization-section__title">{props.label}</p>
        <Rating
            name="simple-controlled"
            size='large'
            onChange={(event, newValue) => {
                props.handleChange(newValue);
            }}
            max={5}
            defaultValue={0}
        />
    </div>  
  )
}

export default Categorization

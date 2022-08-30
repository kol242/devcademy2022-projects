import React from 'react'
import Switch from '@mui/material/Switch';

const Cancellation: React.FC<{ handleChange: any, checked: boolean, label: string }> = (props) => {
  return (
    <div className="categorization-section">
        <p id="categorization-section__title">{props.label}</p>
        <Switch 
            checked={props.checked}
            onChange={props.handleChange}
            color="secondary"
        />
    </div>
  )
}

export default Cancellation
import React from 'react'
import PeopleIcon from '../../../Common/Images/people-icon.svg'

const PeopleCount = React.forwardRef((props, ref: React.Ref<HTMLInputElement>) => {
  return (
    <div className="input-wrapper">
        <label id="input-label">How many people?</label>
        <img src={PeopleIcon} alt="icon" id="input-icon"/>
        <input ref={ref} type="number"></input>
    </div>
  )
})

export default PeopleCount
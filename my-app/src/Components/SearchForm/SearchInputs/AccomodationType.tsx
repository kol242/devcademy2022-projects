import React from 'react'
import TypeIcon from '../../../Common/Images/type-icon.svg'

const AccomodationType = React.forwardRef((props, ref: React.Ref<HTMLSelectElement>) => {
  return (
    <div className="input-wrapper">
        <label>What type of accomodation?</label>
        <img src={TypeIcon} alt="icon" id="input-icon"/>
        <select name="where" id="where" ref={ref}>
          <option disabled selected></option>
          <option value="Apartment">Apartment</option>
          <option value="Hotel">Hotel</option>
        </select>
    </div>
  )
})

export default AccomodationType
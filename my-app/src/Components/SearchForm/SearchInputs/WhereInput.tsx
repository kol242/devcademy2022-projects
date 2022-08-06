import React from 'react'
import LocationIcon from '../../../Common/Images/location-icon.svg'

const WhereInput = React.forwardRef((props, ref: React.Ref<HTMLSelectElement>) => {
  return (
    <div className="input-wrapper">
        <label>Where are you going?</label>
        <img src={LocationIcon} alt="icon" id="input-icon"/>
        <select name="where" id="where" ref={ref}>
          <option disabled selected></option>
          <option value="London">London</option>
          <option value="Paris">Paris</option>
        </select>
    </div>
  )
})

export default WhereInput
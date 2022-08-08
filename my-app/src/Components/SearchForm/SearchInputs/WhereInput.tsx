import React from 'react'
import LocationIcon from '../../../Common/Images/location-icon.svg'

const WhereInput = React.forwardRef((props, ref: React.Ref<HTMLSelectElement>) => {
  return (
    <div className="input-wrapper">
        <label id="input-label">Where are you going?</label>
        <img src={LocationIcon} alt="icon" id="input-icon"/>
        <select required name="where" id="where" ref={ref}>
          <option disabled selected></option>
          <option value="Greece">Greece</option>
        </select>
    </div>
  )
})

export default WhereInput
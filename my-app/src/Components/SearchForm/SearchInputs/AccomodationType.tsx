import React from 'react'
import TypeIcon from '../../../Common/Images/type-icon.svg'

const AccomodationType = React.forwardRef((props, ref: React.Ref<HTMLSelectElement>) => {
  const types = [
    {
      type: 'Apartment',
      key: 'apartment'
    },
    {
      type: 'Room',
      key: 'room'
    },
    {
      type: 'Mobile home',
      key: 'mobile'
    }
  ]
  return (
    <div className="input-wrapper">
        <label id="input-label">What type of accomodation?</label>
        <img src={TypeIcon} alt="icon" id="input-icon"/>
        <select id="select-input" ref={ref}>
          <option disabled selected></option>
          { types.map((item) => 
            <option value={item.key}>{item.type}</option>
          ) }
        </select>
    </div>
  )
})

export default AccomodationType
import React from 'react'
import TypeIcon from '../../../Common/Images/type-icon.svg'

const AccomodationType = React.forwardRef((props, ref: React.Ref<HTMLSelectElement>) => {
  const types = ['Suite', 'Room', 'MobileHome', 'Apartment']
  return (
    <div className="input-wrapper">
        <label id="input-label">What type of accomodation?</label>
        <img src={TypeIcon} alt="icon" id="input-icon"/>
        <select defaultValue={'DEFAULT'} id="select-input" ref={ref}>
          <option disabled value='DEFAULT'></option>
          { types.map((item) => 
            <option key={item} value={item}>{item}</option>
          ) }
        </select>
    </div>
  )
})

export default AccomodationType
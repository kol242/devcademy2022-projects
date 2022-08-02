import React from 'react'

const AccomodationType = React.forwardRef((props, ref: React.Ref<HTMLSelectElement>) => {
  return (
    <div className="input-wrapper">
        <label>What type of accomodation?</label>
        <select name="where" id="where" ref={ref}>
          <option disabled selected></option>
          <option value="Apartment">Apartment</option>
          <option value="Hotel">Hotel</option>
        </select>
    </div>
  )
})

export default AccomodationType
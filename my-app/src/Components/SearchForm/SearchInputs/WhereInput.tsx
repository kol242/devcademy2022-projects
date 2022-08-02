import React from 'react'

const WhereInput = React.forwardRef((props, ref: React.Ref<HTMLSelectElement>) => {
  return (
    <div className="input-wrapper">
        <label>Where are you going?</label>
        <select name="where" id="where" ref={ref}>
          <option disabled selected></option>
          <option value="London">London</option>
          <option value="Paris">Paris</option>
        </select>
    </div>
  )
})

export default WhereInput
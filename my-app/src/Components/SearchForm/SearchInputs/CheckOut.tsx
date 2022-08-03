import React from 'react'

const CheckOut = React.forwardRef((props, ref: React.Ref<HTMLInputElement>) => {
  return (
    <div className="input-wrapper">
        <label>Check Out</label>
        <input ref={ref} type="date" required id="input-date-checkout"/>
    </div>
  )
})

export default CheckOut
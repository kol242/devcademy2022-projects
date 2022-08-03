import React from 'react'

const CheckIn = React.forwardRef((props, ref: React.Ref<HTMLInputElement>) => {
  return (
    <div className="input-wrapper">
        <label>Check In</label>
        <input ref={ref} type="date" required id="input-date-checkin" />
    </div>
  )
})

export default CheckIn
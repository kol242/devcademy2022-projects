import React from 'react'

const CheckIn = React.forwardRef((props, ref: React.Ref<HTMLInputElement>) => {
  const checkInFocus = () => {
    const element = document.querySelector('#input-date-checkin')
    element?.getAttribute('type') === 'text' ? element?.setAttribute("type", "date") : element?.setAttribute("type", "text")
  }
  return (
    <div className="input-wrapper">
        <label>Check In</label>
        <input ref={ref} type="text" id="input-date-checkin" onFocus={checkInFocus} onBlur={checkInFocus}/>
    </div>
  )
})

export default CheckIn
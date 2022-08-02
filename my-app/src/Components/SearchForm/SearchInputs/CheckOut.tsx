import React from 'react'

const CheckOut = React.forwardRef((props, ref: React.Ref<HTMLInputElement>) => {
  const checkOutFocus = () => {
    const element = document.querySelector('#input-date-checkout')
    element?.getAttribute('type') === 'text' ? element?.setAttribute("type", "date") : element?.setAttribute("type", "text")
  }

  return (
    <div className="input-wrapper">
        <label>Check Out</label>
        <input ref={ref} type="text" id="input-date-checkout" onFocus={checkOutFocus} onBlur={checkOutFocus}/>
    </div>
  )
})

export default CheckOut
import React from 'react'

const DatePicker: React.FC<{ title: string, ref: React.Ref<HTMLInputElement> }> = React.forwardRef((props, ref) => {
  return (
    <div className="input-wrapper">
        <label id="input-label">{props.title}</label>
        <input ref={ref} type="date" required id="date-input" />
    </div>
  )
})

export default DatePicker
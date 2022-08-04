import React from 'react'

const DatePicker: React.FC<{ title: string, id: string, ref: React.Ref<HTMLInputElement> }> = React.forwardRef((props, ref) => {
  return (
    <div className="input-wrapper">
        <label>{props.title}</label>
        <input ref={ref} type="date" required id={props.id} />
    </div>
  )
})

export default DatePicker
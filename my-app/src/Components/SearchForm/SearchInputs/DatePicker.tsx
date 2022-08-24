import React from 'react'
import $ from 'jquery'; 

const DatePicker: React.FC<{ title: string, ref: React.Ref<HTMLInputElement> }> = React.forwardRef((props, ref) => {
  $(function(){
    const dtToday = new Date()
    
    let month: any = dtToday.getMonth() + 1
    let day: any = dtToday.getDate()
    const year = dtToday.getFullYear()

    if(month < 10)
        month = '0' + month.toString()
    if(day < 10)
        day = '0' + day.toString()
    
    const minDate= year + '-' + month + '-' + day
    
    $('#date-input').attr('min', minDate)
  })
  
  return (
    <div className="input-wrapper">
        <label id="input-label">{props.title}</label>
        <input ref={ref} type="date" required id="date-input" />
    </div>
  )
})

export default DatePicker
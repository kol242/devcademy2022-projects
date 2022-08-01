import React from 'react'
import { useLocation } from 'react-router-dom';
import '../Common/Style/booking-flow.css'

const BookingFlow = () => {
    const { state }: any = useLocation()
    const data = state
    console.log(data)
  return (
    <div>{data.title}</div>
  )
}

export default BookingFlow
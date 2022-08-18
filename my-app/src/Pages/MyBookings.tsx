import React, { useEffect, useState } from 'react'
import '../Common/Style/my-bookings.css'
import Reservations from '../Components/Bookings/Reservations'
import { Reservation } from '../Common/Models/Reservation'

const MyBookings = () => {
  const [upcomingReservations, setUpcomingReservations] = useState<Reservation[]>([])
  const [pastReservations, setPastReservations] = useState<Reservation[]>([])

  const fetchLocations = async () => {
    try {
      const response = await fetch('https://devcademy.herokuapp.com/api/Reservation')

      if (!response.ok) {
        throw new Error('Request failed!')
      }

      const data = await response.json()
      const upcomingBookings: Reservation[] = []
      const pastBookings: Reservation[] = []

      for (const booking in data) {
        if (new Date().toISOString() < data[booking].checkIn) {
          upcomingBookings.push(data[booking])
        } else {
          pastBookings.push(data[booking])
        }
      }

      setUpcomingReservations(upcomingBookings)
      setPastReservations(pastBookings)

    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    fetchLocations()
  }, [])

  return (
    <div className="myBookings-container">
      <h1 id="myBookings-container__header">My bookings</h1>
      <h2 id="myBookings-container__header--subtitle">Upcoming bookings</h2>
      <div className="myBookings-container__body">
        { upcomingReservations.map((booking, index) => <Reservations key={index} data={booking} /> )}  
      </div>
      <h2 id="myBookings-container__header--subtitle">Past bookings</h2>
      <div className="myBookings-container__body">
        { pastReservations.map((booking, index) => <Reservations key={index} data={booking} /> )}  
      </div>
    </div>
  )
}

export default MyBookings
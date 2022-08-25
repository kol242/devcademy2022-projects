import React, { useEffect, useState } from 'react'
import '../Common/Style/my-bookings.css'
import Reservations from '../Components/Bookings/Reservations'
import { Reservation } from '../Common/Models/Reservation'
import useHttp from '../Hooks/use-http'

const MyBookings = () => {
  const [upcomingReservations, setUpcomingReservations] = useState<Reservation[]>([])
  const [pastReservations, setPastReservations] = useState<Reservation[]>([])
  const { fetchedData: reservations, sendRequest: fetchReservations } = useHttp()

  useEffect(() => {
    fetchReservations({url: 'https://devcademy.herokuapp.com/api/Reservation'})
    const upcomingBookings: Reservation[] = []
    const pastBookings: Reservation[] = []
    for (const booking in reservations) {
      if (new Date().toISOString() < reservations[booking].checkIn) {
        upcomingBookings.push(reservations[booking])
      } else {
        pastBookings.push(reservations[booking])
      }
    }
    setUpcomingReservations(upcomingBookings)
    setPastReservations(pastBookings)
  }, [fetchReservations, reservations])

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
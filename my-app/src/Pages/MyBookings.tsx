import React, { useEffect, useState } from 'react'
import '../Common/Style/my-bookings.css'
import Reservations from '../Components/Bookings/Reservations'
import { Reservation } from '../Common/Models/Reservation'
import useHttp from '../Hooks/use-http'
import Loading from '../Components/Loading'

const MyBookings = () => {
  const [upcomingReservations, setUpcomingReservations] = useState<Reservation[]>([])
  const [pastReservations, setPastReservations] = useState<Reservation[]>([])
  const { sendRequest: fetchReservations, isLoading } = useHttp()

  useEffect(() => {
    const divider = (dataObj: any) => {
      const upcomingBookings: Reservation[] = []
      const pastBookings: Reservation[] = []
      for (const booking in dataObj) {
        if (new Date().toISOString() < dataObj[booking].checkIn) {
          upcomingBookings.push(dataObj[booking])
        } else {
          pastBookings.push(dataObj[booking])
        }
      }
      setUpcomingReservations(upcomingBookings)
      setPastReservations(pastBookings)
    }
    fetchReservations({url: 'https://devcademy.herokuapp.com/api/Reservation'}, divider)
  }, [fetchReservations])

  return (
    <div className="myBookings-container">
      <h1 id="myBookings-container__header">My bookings</h1>
      <h2 id="myBookings-container__header--subtitle">Upcoming bookings</h2>
      <div className="myBookings-container__body">
        { !isLoading ? upcomingReservations.map((booking, index) => <Reservations key={index} data={booking} /> ) :
          <Loading class='myBookings-container__card--loading' element={5} />
        }  
      </div>
      <h2 id="myBookings-container__header--subtitle">Past bookings</h2>
      <div className="myBookings-container__body">
        { !isLoading ? pastReservations.map((booking, index) => <Reservations key={index} data={booking} /> ) :
          <Loading class='myBookings-container__card--loading' element={5} />
        }  
      </div>
    </div>
  )
}

export default MyBookings
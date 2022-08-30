import React, { useContext } from 'react'
import Navigation from './Navigation'
import '../Common/Style/main.css'
import Footer from './Footer'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home'
import Locations from '../Pages/Locations'
import MyBookings from '../Pages/MyBookings'
import MyPlaces from '../Pages/MyPlaces'
import Favorites from '../Pages/Favorites'
import AccomoDetails from './AccomoDetails/AccomoDetails'
import BookingFlow from '../Pages/BookingFlow'
import AccommodationsByLocation from '../Pages/AccommodationsByLocation.tsx'
import NewPlaceForm from './NewPlace/NewPlaceForm'
import EditPlaceForm from './EditPlace/EditPlaceForm'
import Login from '../Pages/Login'
import PrivateRoute from './PrivateRoute'
import AuthContext from '../Store/auth-context'

const Main = () => {
  const authCtx = useContext(AuthContext)
  const isLoggedIn = authCtx.isLoggedIn
  return (
    <div className="main-layout">
      <Navigation />
        <Routes>
          <Route path='/' element={<PrivateRoute/>}>
            <Route path='/' element={<Home />} />
          </Route>
          <Route path="/locations" element={<PrivateRoute/>}>
            <Route path="/locations" element={<Locations />} />
          </Route>
          <Route path="/my-bookings" element={<PrivateRoute/>}>
            <Route path="/my-bookings" element={<MyBookings />} />
          </Route>
          <Route path="/my-places" element={<PrivateRoute/>}>
            <Route path="/my-places" element={<MyPlaces />} />
          </Route>
          <Route path="/favorites" element={<PrivateRoute/>}>
            <Route path="/favorites" element={<Favorites />} />
          </Route>
          <Route path="/accomodations/:accomodationId" element={<PrivateRoute/>}>
            <Route path="/accomodations/:accomodationId" element={<AccomoDetails />} />
          </Route>
          <Route path="/reservation" element={<PrivateRoute/>}>
            <Route path="/reservation" element={<BookingFlow />} />
          </Route>
          <Route path="/accomodations" element={<PrivateRoute/>}>
            <Route path="/accomodations" element={<AccommodationsByLocation />} />
          </Route>
          <Route path="/my-places/new" element={<PrivateRoute/>}>
            <Route path="/my-places/new" element={<NewPlaceForm />} />
          </Route>
          <Route path="/edit-place" element={<PrivateRoute/>}>
            <Route path="/edit-place" element={<EditPlaceForm />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      { isLoggedIn && <Footer /> }
    </div>
  )
}

export default Main
import React from 'react'
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

const Main = () => {
  return (
    <div className="main-layout">
        <Navigation />
        <div className="main-layout__body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/bookings" element={<MyBookings />} />
            <Route path="/places" element={<MyPlaces />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/accomodation-details" element={<AccomoDetails />} />
            <Route path="/booking-flow" element={<BookingFlow />} />
            <Route path="/accomodation-by-location" element={<AccommodationsByLocation />} />
            <Route path="/new-place" element={<NewPlaceForm />} />
            <Route path="/edit-place" element={<EditPlaceForm />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
    </div>
  )
}

export default Main
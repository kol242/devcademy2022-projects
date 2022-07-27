import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import '../Common/Style/main.css'
import CityCard from './CityCard/CityCard'
import AccomodationCard from './AccomodationCard/AccomodationCard'
import AccomoDetails from './AccomoDetails/AccomoDetails'
import PlaceCard from './PlaceCard/PlaceCard'
import Footer from './Footer'

const Main = () => {
  return (
    <div className="main-layout">
        <Navigation />
        <Header />
        <CityCard />
        <AccomodationCard />
        <AccomoDetails />
        <PlaceCard />
        <Footer />
    </div>
  )
}

export default Main
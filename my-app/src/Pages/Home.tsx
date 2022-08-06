import React from 'react'
import AccomodationCard from '../Components/AccomodationCard/AccomodationCard'
import CityCard from '../Components/CityCard/CityCard'
import Header from '../Components/Header'

const Home = () => {
  return (
    <>
        <Header />
        <CityCard />
        <AccomodationCard />
    </>
  )
}

export default Home
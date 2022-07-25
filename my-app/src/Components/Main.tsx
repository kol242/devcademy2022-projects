import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import '../Common/Style/main.css'

const Main = () => {
  return (
    <div className="main-layout">
        <Navigation />
        <Header />
    </div>
  )
}

export default Main
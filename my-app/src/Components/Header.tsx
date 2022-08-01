import React from 'react'
import '../Common/Style/header.css'
import AccomodationSearch from './SearchForm/AccomodationSearch'

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-container__text">
        <h1 id='header-container__text--title'>Enjoy your travels</h1>
        <h2 id='header-container__text--subtitle1'>with Staycation and collect rewards</h2>
        <h3 id='header-container__text--subtitle2'>Book now & save 10% or more today</h3>  
      </div>
      <div className="header-container__form">
        <AccomodationSearch />
      </div>
    </div>
  )
}

export default Header
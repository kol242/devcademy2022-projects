import React from 'react'
import '../Common/Style/navbar.css'

const Navigation = () => {
  return (
    <nav className="navbar">
        <p id="navbar-logo">Staycation</p> 
        <div className="navbar-links">
            <a id="navbar-links__main" href="/">Locations</a>
            <a id="navbar-links__main" href="/">My places</a>
            <a id="navbar-links__main" href="/">My bookings</a>    
        </div>
        <a id="navbar-links__logout" href="/">Logout</a>
    </nav>
  )
}

export default Navigation
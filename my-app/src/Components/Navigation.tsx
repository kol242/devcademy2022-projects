import React from 'react'
import '../Common/Style/navbar.css'
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="main-layout__nav">
      <nav className="navbar">
          <Link id="navbar-logo" to="/">Staycation</Link> 
          <div className="navbar-links">
              <Link id="navbar-links__main" to="/locations">Locations</Link>
              <Link id="navbar-links__main" to="/places">My places</Link>
              <Link id="navbar-links__main" to="/bookings">My bookings</Link>    
          </div>
          <a id="navbar-links__logout" href="/">Logout</a>
      </nav>  
    </div>
  )
}

export default Navigation
import React, { useContext } from 'react'
import '../Common/Style/navbar.css'
import { Link, useNavigate } from "react-router-dom";
import AuthContext from '../Store/auth-context'

const Navigation = () => {
  const authCtx = useContext(AuthContext)
  const isLoggedIn = authCtx.isLoggedIn

  const navigate = useNavigate()

  const handleLogut = () => {
    localStorage.removeItem('userToken')
    authCtx.logout()
    navigate('/login')
  }

  return (
    <div className="main-layout__nav">
      <nav className="navbar">
          <Link id="navbar-logo" to="/">Staycation</Link> 
          { isLoggedIn && 
            <>
              <div className="navbar-links">
                  <Link id="navbar-links__main" to="/locations">Locations</Link>
                  <Link id="navbar-links__main" to="/my-places">My places</Link>
                  <Link id="navbar-links__main" to="/my-bookings">My bookings</Link>    
              </div>
              <p id="navbar-links__logout" onClick={handleLogut}>Logout</p>
            </>
          }
      </nav>  
    </div>
  )
}

export default Navigation
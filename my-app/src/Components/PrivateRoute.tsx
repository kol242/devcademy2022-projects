import React, { useEffect } from 'react'
import { Outlet, Navigate } from "react-router-dom"

const PrivateRoute = () => {
    const [loggedIn, setLoggedIn] = React.useState(true)
    return loggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
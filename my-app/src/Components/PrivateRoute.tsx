import React, { useState } from 'react'
import { Outlet, Navigate } from "react-router-dom"
import useCheckStorage from '../Hooks/use-checkStorage'

const PrivateRoute = () => {
    const [loggedIn] = useState(useCheckStorage('userToken'))
    return loggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
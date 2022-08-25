import React, { useState } from 'react'
import { Outlet, Navigate } from "react-router-dom"

const PrivateRoute = () => {
    const checkStorage = (key: any) => {
        const storedData: any = localStorage.getItem(key)
        if (storedData === null) {
          return false
        } else {
          const parsedData = JSON.parse(storedData)
          return parsedData.loggedIn  
        }
    }
    const [loggedIn] = useState(checkStorage('userToken'))
    return loggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
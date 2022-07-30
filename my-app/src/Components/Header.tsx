import React from 'react'
import HeaderImg from '../Common/Images/header.png'
import '../Common/Style/header.css'

const Header = () => {
  return (
    <>
        <img className="header-image" src={HeaderImg} alt="header" />
    </>
  )
}

export default Header
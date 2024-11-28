import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = (props) => {
  return (
    <div className="header__container">
        <Navbar />
        {props.children}
    </div>
  )
}

export default Header
import React from 'react'
import Search from "../assets/search.png"
import Notif from "../assets/notif.png"
import Login from "../assets/login.png"
import "../style/ctn/navbar.css"

function Navbar() {
  return (
    <div className='Navbar'>
        <div className="Navbar-search">
            <img src={Search} alt="" />
        </div>
        <div className="Navbar-icons">
            <img src={Notif} alt="" />
            <img src={Login} alt="" />
        </div>
    </div>
  )
}

export default Navbar
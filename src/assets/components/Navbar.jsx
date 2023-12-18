import Logo from '../img/logo.svg'
import './Navbar.css'
import React from "react"

function Navbar(){
    return(
        <div className='Navbar'>
            <div className="logo">
            <img src={Logo} alt="Logo" />
            </div>
        </div>
    )
}

export default Navbar
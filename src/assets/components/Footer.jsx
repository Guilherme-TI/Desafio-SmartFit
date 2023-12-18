import Logo from '../img/logo.svg'
import './Footer.css'
import React from "react"

function Footer(){
    return(
        <div className='Footer'>
            <div className="logo-footer">
                <img src={Logo} alt="Logo" /><br />
                <span>Todoso os direitos reservados - 2020</span>
            </div>
        </div>
    )
}

export default Footer
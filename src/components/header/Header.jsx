import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/image.webp'
import Socials from './Headersocials'

const Header = () => {
    return(
       <header>
        <div className="container header__container">
            <h5>Hello, i'm</h5>
            <h1>VINCENT LYONDO,</h1>
            <h5 className="text-light">A Software Developer.</h5>
            <CTA />
            <Socials />
            <div className="me">
                <img src={Me} alt="" />
            </div>
            <a href="#contact" className="scroll__down">Scroll Down </a>
            
        </div>
       </header>
    )
}

export default Header
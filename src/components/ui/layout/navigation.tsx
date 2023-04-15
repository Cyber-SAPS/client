import * as React from 'react'
import { Link } from "react-router-dom";

export const NavBar =({isMobile,isMobileDevice, isTablet, isDesktop}: any)=> {
    return(
        <>
        {/* Check if the viewport matchs a mobile device size or if the useragent is that of a mobile device */}
        
        {(isTablet && !isMobile) && <span>You are using a Tablet device</span>}
        {/* Mobile menu */}
        {(isMobileDevice || isMobile) &&         
        <nav className='nav-mobile'>
            <h1 className='logo-text'>LOGOM</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
        </nav>
        }
        {/* desktop menu */}
        {(isDesktop && !isMobile) && 
        <nav className='nav-desktop'>
            <h1 className='logo-text'>LOGO</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
        </nav>
        }
        </>
    )
}
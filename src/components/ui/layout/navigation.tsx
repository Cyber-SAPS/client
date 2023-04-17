import * as React from 'react'
import { Link } from "react-router-dom";
import { FaHome, FaQuestionCircle,FaEnvelope } from "react-icons/fa";


export const NavBar =({isMobile,isMobileDevice, isTablet, isDesktop}: any)=> {
    return(
        <>
        {/* Check if the viewport matchs a mobile device size or if the useragent is that of a mobile device */}
        
        {(isTablet && !isMobile) && <span>You are using a Tablet device</span>}
        {/* Mobile menu */}
        {(isMobileDevice || isMobile) &&         
        <nav className='nav-mobile bg-blue-500 text-white'>
            <h1 className='logo-text'>RSLPF</h1>
            <ul>
                <li><Link to="/" className='flex'><FaHome color="white"/>&nbsp;</Link></li>
               
                <li><Link to="faq" className='flex'><FaQuestionCircle color="white"/>&nbsp;</Link></li>
                <li><Link to="contact" className='flex'><FaEnvelope color="white"/>&nbsp;</Link></li>
                {/* <li><Link to="events" className='flex'><FaCalendarAlt color="white"/></Link></li> */}
            </ul>
        </nav>
        }
        {/* desktop menu */}
        {(isDesktop && !isMobile) && 
        <nav className='nav-desktop bg-blue-500 text-white'>
            <h1 className='logo-text'>RSLPF</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="faq">Faq</Link></li>
                <li><Link to="contact">Contact</Link></li>
                <li><Link to="events">Events</Link></li>
            </ul>
        </nav>
        }
        </>
    )
}
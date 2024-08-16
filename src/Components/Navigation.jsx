import React, { useEffect, useState } from 'react'
import logo from '../Assets/logo-gial.png'
import '../Styling/Navigation.css'
import { FaBars, FaPhone } from 'react-icons/fa';

export const Navigation = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(()=> {
    const handleScroll = () => {
      if(window.scrollY > 250){
        setSticky(true)
      }else{
        setSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
  })
  return (
    <nav className={`${isSticky ? 'sticky-nav' : ''} nav-desktop`}>
        <header>
            <img src={logo} alt="gial-logo" />
        </header>

        <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#reviews">REVIEWS</a></li>
            <a href="#contact"><li className='contact-nav'>CONTACT</li>
            <li><a href="tel:7867507518"> Free Estimates <br/><FaPhone/> 786-750-7518</a></li></a>
        </ul>
    </nav>
  )
}

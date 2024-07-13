import React, { useEffect, useState } from 'react'
import logo from '../Assets/gial-logo.png'

export const Navigation = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(()=> {
    const handleScroll = () => {
      if(window.scrollY > 50){
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
            <li><a href="#home">Home</a></li>
            <li><a href="">About us</a></li>
            <li><a href="#services">Services</a></li>
            <a href="#contact"><li className='contact-nav'>Contact</li></a>
        </ul>
    </nav>
  )
}

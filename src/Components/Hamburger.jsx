import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../Assets/gial-logo-footer.png'

export const Hamburger = () => {
    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!isOpen);
    }

    useEffect( () => {
        if(isOpen){
            document.body.classList.add('no-scroll')
        }else{
            document.body.classList.remove('no-scroll')
        }

        return () => {
            document.body.classList.remove('no-scroll')
        }
    },[isOpen])

  return (
    <div className={`${isOpen ? 'hamburger-open' : ''} hamburger-menu`}>
        <div className="menu-icon" onClick={handleClick}>
            {isOpen ? <FaTimes/> : <FaBars/>}
        </div>
        <nav className={`hamburger-content ${isOpen ? 'open':''}`}>
            <header>
                <img src={logo} alt="" />
            </header>
            <ul>
                <a href="#home" onClick={() => {setOpen(false)}}><li>Home</li></a>
                <a href=""><li>About Us</li></a>
                <a href="#services" onClick={()=> {setOpen(false)}}><li>Services</li></a>
                <a href="#contact" onClick={()=> {setOpen(false)}}><li>Contact Us</li></a>
            </ul>
        </nav>
    </div>

  )
}

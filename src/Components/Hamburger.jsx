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
    <div className='hamburger-menu'>
        <div className="menu-icon" onClick={handleClick}>
            {isOpen ? <FaTimes/> : <FaBars/>}
        </div>
        <nav className={`hamburger-content ${isOpen ? 'open':''}`}>
            <header>
                <img src={logo} alt="" />
            </header>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    </div>

  )
}

import React, { useEffect, useState } from 'react'
import { FaBars, FaPhone, FaTimes } from 'react-icons/fa';
import logo from '../Assets/gial-logo-footer.png'
import { IoHammerOutline, IoHomeOutline, IoInformationCircleOutline } from 'react-icons/io5';
import { MdOutlineComment } from 'react-icons/md';
import { RiStarSLine } from 'react-icons/ri';
import { easeInOut, motion } from 'framer-motion';
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
                <img src={logo} alt="gial-logo" />
            </header>
            <hr />
            <ul>
                <a href="#home" onClick={() => {setOpen(false)}}><li><IoHomeOutline/>Home</li></a>
                <a href="#"><li><IoInformationCircleOutline/> About Us</li></a>
                <a href="#services" onClick={()=> {setOpen(false)}}><li> <IoHammerOutline/> Services</li></a>
                <a href="#reviews" onClick={()=> {setOpen(false)}}><li> <RiStarSLine/> Reviews</li></a>
                <a href="#contact" onClick={()=> {setOpen(false)}}><li><MdOutlineComment/>Contact</li></a>
            </ul>

            <hr />

            <motion.div
            className="cta"
            whileInView={{scale:[1,1.1,1]}}
            transition={{
                repeat:Infinity,
                repeatType:'loop',
                duration:2}}
            >
                <a
                href='tel:7867507518'
                className='cta-text'>Call now <br/>(786)750-7518</a>
            </motion.div>
        </nav>
    </div>

  )
}

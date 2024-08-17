import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../Assets/gial-logo-footer.png'
import { IoHammerOutline, IoHomeOutline, IoInformationCircleOutline } from 'react-icons/io5';
import { MdOutlineComment, MdOutlinePhotoSizeSelectActual } from 'react-icons/md';
import { RiStarSLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import '../Styling/Navigation.css'

export const Hamburger = () => {
    const [isOpen, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleClick = () => {
        setOpen(!isOpen);
        console.log('Open')
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

    useEffect(()=> {
        const handleScroll = () => {
            const changePoint = 800;
            const scrollPosition = window.scrollY;
            setScrolled(scrollPosition > changePoint);
        };


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
    },[]);

  return (
    <div className='hamburger-menu'>
        <motion.div
        className={`menu-icon ${scrolled ? 'scrolled' : 'not-scrolled'}`}
        whileTap={{scale:0.9}}
        transition={{duration:0.5}}
        onClick={handleClick}>
            <FaBars/>
        </motion.div>

        <motion.div className="exit-overlay" initial={{translateX:-900}} animate={{translateX: isOpen ? 0 : -900}} transition={{duration:1}}onClick={() => setOpen(!isOpen)}></motion.div>

        <motion.nav
        className='hamburger-content'
        initial={{translateX:-800}}
        animate={{translateX: isOpen ? 0 : -800}}
        transition={{duration:.5, ease:"easeInOut"}}>
            <FaTimes className='exit-icon' onClick={handleClick}/>
            <header>
                <img src={logo} alt="gial-logo" />
            </header>
            <hr />
            <ul>
                <a href="#home" onClick={() => {setOpen(false)}}><li><IoHomeOutline/>Home</li></a>
                <a href="#services" onClick={()=> {setOpen(false)}}><li> <IoHammerOutline/> Services</li></a>
                <a href="#"><li><MdOutlinePhotoSizeSelectActual/>Gallery</li></a>
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
        </motion.nav>
    </div>

  )
}

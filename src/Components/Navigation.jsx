import React, { useEffect, useState } from 'react'
import logo from '../Assets/gial-alpha.png'
import '../Styling/Navigation.css'
import { FaPhone } from 'react-icons/fa';
import { useLocation } from 'react-router';
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineCleaningServices, MdOutlineElectricalServices, MdOutlineFormatPaint, MdOutlineHomeRepairService, MdOutlinePlumbing, MdOutlineWaterDrop, MdOutlineWindow } from 'react-icons/md';
import { IoHammerOutline } from 'react-icons/io5';

export const Navigation = () => {
  const [isSticky, setSticky] = useState(false);
  const location = useLocation();
  const isPaintingPage = location.pathname !== '/';

  // useEffect(() => {
  //   // Scroll to top whenever the route changes
  //   //but this also triggers when the user clicks on elements in the same page.
  //   window.scrollTo(0, 0);
  // }, [location]); 


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
    <nav className={`${isSticky ? 'sticky-nav' : ''} ${isPaintingPage ? 'coloredBackground' : ''} nav-desktop`}>
        <header>
            <img src={logo} alt="gial-logo" />
        </header>

        <ul>
            <li><a href="/">HOME</a></li>
            <li>
              <a href="#services">SERVICES <IoIosArrowDown size="20"/></a>
              <ul className='dropdown'>
                <li> <a href="/cleaning"> <MdOutlineCleaningServices/> Residential Cleaning  </a></li>
                <li> <a href=""> <MdOutlineWindow/> Window Cleaning</a>  </li>
                <li> <a href=""> <MdOutlineWaterDrop/> Pressure Wash</a>  </li>
                <li> <a href="/painting"> <MdOutlineFormatPaint/> Painting </a> </li>
                <li> <a href=""> <MdOutlinePlumbing/> Plumbing </a> </li>
                <li> <a href=""> <MdOutlineElectricalServices/> Electrical </a> </li>
                <li> <a href=""> <MdOutlineHomeRepairService/> Drywall </a> </li>
                <li> <a href=""> <IoHammerOutline/> Demolition </a> </li>
              </ul>
            </li>

            <li><a href="/#gallery">GALLERY</a></li>
            <li><a href="/#reviews">REVIEWS</a></li>
            <li className='contact-nav'><a href="#contact">CONTACT</a></li>
            <li><a href="tel:7867507518"> Free Estimates <br/><FaPhone/> 239-777-3713</a></li>
        </ul>
    </nav>
  )
}

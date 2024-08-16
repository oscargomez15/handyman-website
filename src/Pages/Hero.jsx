import React from 'react'
import handyman from '../Assets/handyman.jpg'
import logo from '../Assets/logo-gial.png'
import { Navigation } from '../Components/Navigation';
import { motion } from 'framer-motion';

import '../Styling/Hero.css'

export const Hero = () => {

  return (
    <section className='hero-page page' id='home'>
    <img src={handyman} alt="man-standing-with-construction-belt" className='background-image' />
      <div className="hero-container">
        <Navigation/>
          <div className='text-container'>
          <img src={logo} alt="" className='logo-hero-mb' />
            <motion.h1
            className='heading'
            initial={{scale:0.5}}
            whileInView={{scale:1}}
            transition={{duration:1}}>Transforming homes in SWFL with our <span> home improvement service </span></motion.h1>
            <motion.p
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1}}> Our expert handyman services bring quality craftsmanship to every project in <span>Cape Coral, Fort Myers, Port Charlotte, Punta Gorda, North Fort Myers, and Estero</span>. </motion.p>
              <div className="btn-group">
              <a href="#contact"><button className='quote-btn'>FREE QUOTE</button></a>
              <a href="#services"><button className='learn-more-btn'>VIEW SERVICES</button></a>
              </div>
          </div>
      </div>
    </section>
  )
}

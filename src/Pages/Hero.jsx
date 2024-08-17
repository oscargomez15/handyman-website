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
      <img src={logo} alt="" className='logo-hero-mb' />
        <Navigation/>
          <div className='text-container'>
            <motion.h1
            className='heading'
            initial={{scale:0.5}}
            whileInView={{scale:1}}
            transition={{duration:1}}><span>Transforming homes</span> in Lee, Charlotte and Collier County. </motion.h1>
            <motion.p
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1}}> Our expert handyman services bring quality craftsmanship to every project in <span>Cape Coral, Fort Myers, Port Charlotte, Punta Gorda, North Fort Myers, and Estero</span>. </motion.p>
              <div className="btn-group">
              <a href="#contact"><button tabIndex='-1' className='quote-btn'>FREE ESTIMATES</button></a>
              <a href="#services"><button tabIndex='-1' className='learn-more-btn'>VIEW SERVICES</button></a>
              </div>
              <motion.h2 
              className='mb-cta'
              initial={{scale:1}}
              animate={{scale:[1,1.1,1]}}
              transition={{duration:1, repeat:Infinity}}><a href="tel:7867507518" tabIndex='0'>Call Now:<br/> (786)750-7518</a></motion.h2>
          </div>
      </div>
    </section>
  )
}

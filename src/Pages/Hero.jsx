import React from 'react'
import heroImage from '../Assets/image-hero-fortmyers.jpeg'
import logo from '../Assets/gial-alpha.png'
import { motion } from 'framer-motion';

import '../Styling/Hero.css'

export const Hero = () => {

  return (
    <section className='hero-page page' id='home'>
    <img src={heroImage} alt="man-standing-with-construction-belt" className='background-image' />
      <div className="hero-container">
      <img src={logo} alt="gial-services-logo" className='logo-hero-mb' />
          <div className='text-container'>
            <motion.h1
            className='heading'
            initial={{scale:0.5}}
            whileInView={{scale:1}}
            transition={{duration:1}}><span> Painting & Home Improvement Services</span> in Lee & Collier County </motion.h1>
            <motion.p
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1}}> Our expert painting and home improvement services bring quality craftsmanship to every project in <span>Cape Coral, Fort Myers, Bonita Springs, Estero, and Naples</span>. Your satisfaction is guaranteed with us. </motion.p>
              <div className="btn-group">
              <a href="#contact"><button tabIndex='-1' className='quote-btn'>GET FREE ESTIMATE</button></a>
              <a href="#services"><button tabIndex='-1' className='learn-more-btn'>VIEW SERVICES</button></a>
              </div>
              <motion.h2
              className='mb-cta'
              initial={{scale:1}}
              animate={{scale:[1,1.1,1]}}
              transition={{duration:1, repeat:Infinity}}><a href="tel:2397773713" tabIndex='0'>Call Now:<br/> (239)777-3713</a></motion.h2>
          </div>
      </div>
    </section>
  )
}

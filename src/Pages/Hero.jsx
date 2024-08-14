import React from 'react'
import handyman from '../Assets/handyman.jpg'
import { Navigation } from '../Components/Navigation';
import '../Styling/Hero.css'
import { motion } from 'framer-motion';

export const Hero = () => {

  return (
    <section className='hero-page page' id='home'>
      <div className="hero-container">
      <img src={handyman} alt="man-standing-with-construction-belt" className='background-image' />
        <Navigation/>
          <div className='text-container'>
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

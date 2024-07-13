import React from 'react'
import handyman from '../Assets/handyman.jpg'
import { Navigation } from '../Components/Navigation';

export const Hero = () => {

  return (
    <section className='hero-page page' id='home'>
      <Navigation/>
      <div className='content'>
        <div className='text-container'>
          <h1 className='heading'>Transforming homes in SWFL with our <span> maintenance service </span></h1>
          <p> Trust us to transform your living space into a pristine,
            comfortable, and well-maintained haven. Experience the difference of premium home maintenance
            with us today. <span>Serving Cape Coral, Fort Myers, Punta Gorda and Estero since 2020.</span></p>
            <div className="btn-group">
            <a href="#contact"><button className='quote-btn'>Free Quote</button></a>
            <a href="#services"><button className='learn-more-btn'>View Services</button></a>
            </div>
        </div>
        <div className='image-container'>
          <img src={handyman} alt="handyman-standing" width="90%"/>
        </div>
      </div>
    </section>
  )
}

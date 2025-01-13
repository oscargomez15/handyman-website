import React from 'react'
import { Hamburger } from '../Components/Hamburger'
import { Hero } from './Hero'
import { Services } from './Services'
import { OurWork } from './OurWork'
import { WhyUs } from '../Components/WhyUs'
import { Reviews } from './Reviews'
import { Contact } from './Contact'
import { Footer } from '../Components/Footer'

export const Home = () => {
  return (
    <div className='home-page'>
        <Hero/>
        <Services/>
        <OurWork/>
        <WhyUs/>
        <Reviews/>
        <Contact/>
    </div>
  )
}

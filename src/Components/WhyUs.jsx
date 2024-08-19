import React from 'react'
import '../Styling/WhyUs.css'
import { BiHappyBeaming } from 'react-icons/bi'
import { RiSpeakLine } from 'react-icons/ri'
import { CiLocationOn } from 'react-icons/ci'
import { GrDocumentText } from 'react-icons/gr'
import construction from '../Assets/construction.jpg'

export const WhyUs = () => {
  return (
    <section className='chooseus-wrapper'>
      <div className="chooseus">
        <h1>Why Choose us?</h1>
        <div className="whyus-reasons">
          <div className="reason">
            <BiHappyBeaming size='lg'/>
            <h2>Satisfaction <br/> Guaranteed</h2>
          </div>

          <div className="reason">
            <RiSpeakLine size='lg'/>
            <h2>Excellent <br/> Communication</h2>
          </div>

          <div className="reason">
            <CiLocationOn size='lg'/>
            <h2>Locally <br/> Owned</h2>
          </div>

          <div className="reason">
            <GrDocumentText size='lg'/>
            <h2>Free <br/> Estimates</h2>
          </div>
        </div>
        <img src={construction} alt="man-drilling-screw" className='chooseus-background' loading='lazy'/>
      </div>
    </section>
  )
}

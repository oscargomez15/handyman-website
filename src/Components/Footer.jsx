import React from 'react'
import logo from '../Assets/gial-logo-footer.png'
import { IoIosHammer, IoLogoGoogle } from 'react-icons/io'
import { AiOutlineFacebook } from 'react-icons/ai'
import '../Styling/Footer.css'

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="site-map footer-section">
          <h2>Sitemap</h2>
          <ul className='footer-list'>
            <li> <a href="#home">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact us</a></li>
          </ul>
        </div>

        <div className="socials footer-section">
          <h2>Contact</h2>
          <ul className='footer-list'>
            <li>
              <a href="https://www.facebook.com/GIALServices/" target='_blank' rel='noreferrer'> <AiOutlineFacebook size="md"/> </a>
            </li>
            <li><a href="https://maps.app.goo.gl/nScSNDEyUSUgrR8q9" target='_blank' rel='noreferrer'>
              <IoLogoGoogle size="md"/></a>
            </li>
            <li><a href=""></a></li>
          </ul>

          <p className='phone-contact'>
            <span>English</span> <a href='tel:+17867736209'>(786)773-6209</a> <br/>
            <span>Spanish</span> <a href="tel:+17867507518">(786)750-7518</a> </p>
        </div>

        <div className="footer-icon">
          <IoIosHammer size="lg"/>
        </div>
      </div>

      <p className='copyright'>Copyright 2024. Website designed by Oscar Gomez.</p>
    </footer>
  )
}

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
        {/* Footer to be displayed only on screens less than 1380px*/}

        <div className='footer-info-mb'>
          <div className="site-map footer-section">
            <ul className='footer-list'>
              <h2>Sitemap</h2>
              <li> <a href="#home">Home</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact us</a></li>
            </ul>
          </div>

          <div className="socials footer-section">
            <p className='phone-contact'>
              <h2>Contact</h2>
              <span>English</span> <a href='tel:+17867736209'>(786)773-6209</a> <br/>
              <span>Spanish</span> <a href="tel:+17867507518">(786)750-7518</a> <br/>
              <a href="email:gialservices@gmail.com">gialservices@gmail.com</a>
            </p>


              <ul className='footer-list'>
              <li>
                <a href="https://www.facebook.com/GIALServices/" aria-label='visit our facebook page' target='_blank' rel='noreferrer'> <AiOutlineFacebook size="md"/> </a>
              </li>
              <li><a href="https://maps.app.goo.gl/nScSNDEyUSUgrR8q9" aria-label='visit our google page'target='_blank' rel='noreferrer'>
                <IoLogoGoogle size="md"/></a>
              </li>
              <li><a href=""></a></li>
            </ul>
          </div>
        </div>
        {/* Footer to be displayed only on screens greater than 1380px*/}
          <div className="site-map footer-section footer-sitemap-desktop">
            <ul className='footer-list'>
              <h2>Sitemap</h2>
              <li><a href="#home">Home</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact us</a></li>
            </ul>
          </div>


          <div className="socials footer-section footer-socials-desktop">
            <p className='phone-contact'>
              <h2>Contact</h2>
              <span>English</span> <a href='tel:+17867736209'>(786)773-6209</a> <br/>
              <span>Spanish</span> <a href="tel:+17867507518">(786)750-7518</a> <br/>
              <a href="email:gialservices@gmail.com">gialservices@gmail.com</a>
            </p>


              <ul className='footer-list'>
              <li>
                <a href="https://www.facebook.com/GIALServices/" aria-label='visit our faceboook page' target='_blank' rel='noreferrer'> <AiOutlineFacebook size="md"/> </a>
              </li>
              <li><a href="https://maps.app.goo.gl/nScSNDEyUSUgrR8q9" aria-label='visit our google page' target='_blank' rel='noreferrer'>
                <IoLogoGoogle size="md"/></a>
              </li>
              <li><a href=""></a></li>
            </ul>
          </div>

        <div className="footer-icon">
          <IoIosHammer size="lg"/>
        </div>
      </div>

      <p className='copyright'>Copyright 2024. Website designed by Oscar Gomez.</p>
    </footer>
  )
}

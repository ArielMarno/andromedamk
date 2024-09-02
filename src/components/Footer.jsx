import React from 'react';
import '../styles/footer.css';
import logo from '../assets/andromeda.webp';

import map from '../assets/map.png';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';

const Footer = () => {
  return (
    <div className='footer'>
        <img src={logo} alt="andromeda" className='logo'/>
        <div className='footer__links'>
            <div className='footer__links-sections'>
                <a href="#services">Services</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#about">About Us</a>
            </div>
            <div className='footer__links-socials'>
                <a href="#">LinkedIn</a>
                <a href="#">Instagram</a>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
        <div className='footer__contact'>
            <div className='location'>
                <img src={map} alt="map" />
                <p>11th Street, San Francisco</p>
            </div>
            <div className='phone'>
                <img src={phone} alt="phone" />
                <p>+55 6 555-5555</p>
            </div>
            <div className='mail'>
                <img src={mail} alt="mail" />
                <p>example@example.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
import React from 'react';
import '../styles/services.css';

const Services = () => {
  return (
    <div className='services' id='services'>
        <h2>SERVICES</h2>
        <div className='services__list'>
            <div className='item'>
                <h3>WEB DEVELOPMENT</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
            </div>
            <div className='item'>
                <h3>ADVERTISING</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
            </div>
            <div className='item'>
                <h3>GRAPHIC DESIGN</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
            </div>
            <div className='item'>
                <h3>E-COMMERCE</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
            </div>
            <a href="#" className='btn'>Free Consulting</a>
        </div>
        <div className='about__portfolio'>
            <h3>WE SHOW YOU HOW WE HELP BUSINESSES LIKE YOURS ACHIEVE THEIR GOALS.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
  )
}

export default Services
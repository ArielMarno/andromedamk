import React from 'react';
import '../styles/about.css';
import bottle from '../assets/bottle.webp';
const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about__image'>
            <img src={bottle} alt="bottle" />
        </div>
        <div className='about__content'>
            <p>WE CREATE SOLUTIONS TAILORED TO YOUR BUSINESS, BUDGET, AND NEEDS.</p>
            <p className='middle'>WHETHER YOU'RE LOOKING TO ATTRACT MORE CUSTOMERS OR IMPROVE YOUR WEB PRESENCE.</p>
            <p>WE WORK TOGETHER WITH YOU TO BRING OUT THE MAXIMUM POTENTIAL.</p>
        </div>
    </div>
  )
}

export default About
import React from 'react';
import '../styles/portfolio.css';
import arrow from '../assets/arrow.webp';

import outbreak from '../assets/theoutbreak.webp';
import nikkol from '../assets/ivonikkol.webp';
import bikeclub from '../assets/bikeclub.webp';


const Card = ({ name, image}) =>{
    return(
        <div className='card'>  
            <div className='card__title'>
                <h3>{name}</h3>
                <a href="#"><img src={arrow} alt="arrow" />View Proyect</a>
            </div>
            <div className='card__image'>
                <img src={image} alt={image} />
            </div>
            <div className='card__content'>
                <div className='card__content-item'>
                    <h4>Google Business</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='card__content-item'>
                    <h4>SEO</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='card__content-item'>
                    <h4>Webside Development</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            
        </div>
    )
} 

const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
        <h2>PORTFOLIO</h2>
        <div className='portfolio__card-container'>
            <Card name="THE OUTBREAK" image={outbreak} />
            <Card name="IVO NIKKOL" image={nikkol} />
            <Card name="BIKECLUB" image={bikeclub} />
        </div>
    </div>
  )
}

export default Portfolio
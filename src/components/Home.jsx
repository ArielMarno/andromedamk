import '../styles/home.css';
import logo from '../assets/andromeda.webp';
import head from '../assets/home.webp';
import Burguer from '../components/Burguer';
import { React, useState } from 'react';


const Home = () => {

  const[click, setClick] = useState(false);
  const handleClick = () =>{
  //setear el booleano opuesto al actual cuando se hace click en el boton
    setClick(!click);
  }


  return (
    <div className='home'>
      <div className='navbar'>
        <img src={logo} alt="logo" className='logo_responsive'/>
        <nav className={`links ${click ? 'active' : ''}`}>
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <img src={logo} alt="logo" />
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="burguer">
          <Burguer click={click} handleClick={handleClick}/> 
        </div>
      </div>
      
      <div className='home__content'>
        <div className='home__content-left'>
          <h1>WE KNOW HOW <br /><span>TO TRANSFORM</span> <span className='title_mobile'>YOUR IDEAS INTO REALITY</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className='btn_container'>
            <a href="#" className='btn'>Free Consulting</a>
            <a href="#" className='btn mobile'>Contact Us</a>
          </div>
        </div>
        <div className='home__content-img'>
          <img src={head} alt="head" />
        </div>
        <div className='home__content-right'>
          <a href="#" className='btn'>Contact Us</a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <h1>YOUR IDEAS <br /><span>INTO REALITY</span></h1>
        </div>
      </div>
        
    </div>
  )
}

export default Home
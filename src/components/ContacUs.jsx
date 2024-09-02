import React from 'react';
import '../styles/contactus.css';

const ContacUs = () => {
  return (
    <div className='contactus' id='contact'>

        <div className='getintouch'>
            <h3>GET IN TOUCH WITH US AND LET'S START WORKING TOGETHER TODAY</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <h2>CONTACT US</h2>

        <form action="post">
            <div>
                <label for="name">Name </label>
                <input type="text" name="name" id="name" />
            </div>
            <div>
                <label for="phone">Phone </label>
                <input type="number" name='phone' id='phone' />
            </div>
            <div>
                <label for="email">Email </label>
                <input type="email" name="email" id="email" />
            </div>

            <a href="#" className='btn'>Send</a>
        </form>
    </div>
  )
}

export default ContacUs
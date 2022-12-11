import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Herosection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      
      <h1>ADVENTURE AWAITS
        
      </h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          JOIN US!
        </Button>
      
      </div>
    </div>
  );
}

export default HeroSection;

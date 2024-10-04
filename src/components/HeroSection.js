import React from 'react';
import './HeroSection.css'; 
import leftHero from '../images/leftHero.png';
import rightHero from '../images/rightHero.png';


function HeroSection() {
  return (
    <div className="hero-section position-relative overflow-hidden">
      <div className='container'>
      <div className="hero-content">
        <h1 className="hero-heading mb-1 pb-3">Discover Your New Home</h1>
        <p className="hero-description">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales<br />ultrices nulla blandit volutpat.
        </p>
        <img src={leftHero} className="position-absolute leftHero" />
        <img src={rightHero} className="position-absolute rightHero" />
      </div>
      </div>
      
    </div>
  );
}

export default HeroSection;

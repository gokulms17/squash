import React from 'react';
import './Subscribe.css';
import ctaimg from '../images/cta-img.png'; 

function Subscribe() {
  const handleSubscribe = () => {
    alert('Subscribed!');
  };

  return (
    <div className="subscribe-section ">
      <div className="container position-relative">
      <div className='subscribe'>
      <img src={ctaimg} alt="Subscribe" className="img-fluid tree-house" />
        <div className="row">
          {/* Left Side: Content */}
          <div className="subscribe-content col-lg-6">
            {/* Heading */}
            <h2 className="subscribe-heading color-violet">Subscribe to get the latest
            news for you! </h2>

            {/* Email Input and Subscribe Button */}
            <div className="subscribe-form position-relative">
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className="subscribe-input"
              />
              <button 
                className="subscribe-button position-absolute bg-green" 
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Subscribe;

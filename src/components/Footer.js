import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import './Footer.css';
import logo from '../images/footerlogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-xl-around">
          {/* 1st Column */}
          <div className="col-xl-2  col-md-4 footer-column">
            <img src={logo} alt="Logo" className="footer-logo" />
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
            </p>
            <div className="footer-social">
              <FaFacebook className="social-icon bg-green" />
              <FaInstagram className="social-icon bg-green" />
              <FaTwitter className="social-icon bg-green" />
              <FaLinkedin className="social-icon bg-green" />
            </div>
          </div>

          {/* 2nd Column */}
          <div className="col-xl-2  col-md-4 footer-column">
            <h3>Contact</h3>
            <p>Phone: +1 234 567 890</p>
            <p>Email: info@example.com</p>
            <p>Address: 123 Street, City, Country</p>
          </div>

          {/* 3rd Column */}
          <div className="col-xl-2  col-md-4 footer-column">
            <h3>Pages</h3>
            <ul className="footer-list">
              <li>About Us</li>
              <li>Property</li>
              <li>Services</li>
            </ul>
          </div>

          {/* 4th Column */}
          <div className="col-xl-2  col-md-4 footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-list">
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>FAQs</li>
              <li>Support Center</li>
            </ul>
          </div>

          {/* 5th Column */}
          <div className="col-xl-2  col-md-4 footer-column">
            <h3>Subscribe</h3>
            <p>Get product updates:</p>
            <div className="subscribe-input">
              <input type="email" placeholder="Enter your email" />
              <button className="subscribe-button bg-green">
                <FaArrowRight />
              </button>
            </div>
          </div>
          <hr/>
          <div className='copyright'>
            <p className='text-center'>© 2023 Copyright Dreamzkape, All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

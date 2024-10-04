import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Navbar.css';
import logo from '../images/Logo.png';

function TopNav() {
  return (
    <div className='topnav'>
      <div className="container">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img
              src={logo} 
              width="191"
              height="60"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-between">
            <Nav className="mx-auto">
              <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
              <Nav.Link href="#about" className="nav-link">About</Nav.Link>
              <Nav.Link href="#blog" className="nav-link">Blog</Nav.Link>
              <Nav.Link href="#service" className="nav-link">Service</Nav.Link>
              <Nav.Link href="#property" className="nav-link">Property</Nav.Link>
              <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
            </Nav>
            <Button className="bg-green">Get Started</Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default TopNav;

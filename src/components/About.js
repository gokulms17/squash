import React from 'react';
import './Heading.css'; // Optional: If you want to style the heading
import './About.css'; 
import Heading from './Heading';
import about from '../images/about.png';
import iconhome from '../images/icon _smart home_.svg';
import iconuser from '../images/icon _user octagon_.svg';

function IconWithHeading({ icon, heading, description, classHeading }) {
  return (
    <div className="d-flex gap-3 align-items-center icon-heading mb-4 icon-with-heading "> {/* Add margin-bottom for spacing */}
      <div className="col-auto">
        <img src={icon} alt="Icon" style={{ width: '40px', height: '40px' }} /> {/* Icon image */}
      </div>
      <div className="col">
      <h4 className={`heading ${classHeading}`}>{heading}</h4>

        <p className="description m-0">{description}</p>
      </div>
    </div>
  );
}

function About(){
  return(
    <div className='about pt-5'>
      <div className='container d-lg-flex align-items-center'>
        <div className='content-section col-lg-6'>
          <Heading text="WHO WE ARE"  level='h4' textAlign="left" />
          <h2>Assisting individuals locating <br/>the appropriate real estate.</h2>
          
          <p>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim pu. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.</p>
          <IconWithHeading 
            icon={iconhome} 
            heading="Donec porttitor euismod" 
            description="Nullam a lacinia ipsum, nec dignissim purus. Nulla"
            
          />
          <IconWithHeading 
            icon={iconuser} 
            heading="Donec porttitor euismod" 
            description="Nullam a lacinia ipsum, nec dignissim purus. Nulla"
            classHeading = "text-black"
          />
        </div>
        <div className='image-section col-lg-6 pt-5 pt-md-0'>
          <img src={about} className='w-100'/>
        </div>
        
      </div>
    </div>
  )
}

export default About;

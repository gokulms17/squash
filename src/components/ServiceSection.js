import React from 'react';
import './ServiceSection.css'; 
import Heading from './Heading';
import serviceImage1 from '../images/servicecard1.png'; 
import serviceImage2 from '../images/servicecard2.svg'; 
import serviceImage3 from '../images/servicecard3.svg'; 
import serviceImage4 from '../images/servicecard4.svg'; 
import serviceImage5 from '../images/servicecard5.svg'; 
import serviceImagebg2 from '../images/servicecardbg2.png';
import serviceImagebg3 from '../images/servicecardbg3.png'; 


function ServiceCard({ image, heading, description, buttonText, classCard }) {
  return (
    <div className={`card ${classCard ? classCard : ''}`}>
      <img src={image} className="card-img-top" alt={heading} />
      <div className="card-body ps-0 pb-0">
        <h5 className="card-title">{heading}</h5>
        <p className="card-text" dangerouslySetInnerHTML={{ __html: description }}></p>
        <button className="btn bg-green m-0">{buttonText}</button>
      </div>
    </div>
  );
}

function ServiceSection() {
  return (
    <div className="service">
      <div className="container">
      <Heading text="Why Choose us"  level='h4' textAlign="center" />
      <h2 className="text-center">Why Choose Our Properties <br />
      Of Real Estate Industries</h2>
      <div className="row justify-content-md-center">
        <div className="col-lg-4 col-md-6 carding-space">
          <ServiceCard
            image={serviceImage1}
            heading="Budget Friendly"
            description="Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
            buttonText="Read More"
          />
        </div>
        <div className="col-lg-8 col-md-6 carding-space">
          <ServiceCard
            classCard="premium-card"
            image={serviceImage2}
            heading="Property Insurance"
            description="Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis </br>  </br>Distinctively re-engineer revolutionary meta-services and premium."
            buttonText="Read More"
          />
        </div>
      
      </div>
      <div className="row justify-content-md-center">
        <div className="col-lg-4 col-md-6 carding-space">
          <ServiceCard
            classCard="small-card"
            image={serviceImage3}
            heading="Service One"
            description="Description for service one."
            buttonText="Read More"
          />
        </div>
        <div className="col-lg-4 col-md-6 carding-space">
          <ServiceCard
            image={serviceImage4}
            heading="Service Two"
            description="Description for service two."
            buttonText="Read More"
          />
        </div>
        <div className="col-lg-4 col-md-6 carding-space">
          <ServiceCard
            image={serviceImage5}
            heading="Service Three"
            description="Description for service three."
            buttonText="Read More"
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default ServiceSection;

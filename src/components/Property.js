import React from 'react';
import './Property.css'; 
import { FaHeart, FaShareAlt, FaCar, FaBath, FaPlus, FaExpandArrowsAlt } from 'react-icons/fa'; 
import Heading from './Heading';
import property1 from '../images/property1.png'; 
import property2 from '../images/property2.png'; 
import property3 from '../images/property3.png'; 
import property4 from '../images/property4.png'; 
import property5 from '../images/property5.png';
import property6 from '../images/property6.png'; 

function PropertyCard({
  propertyImage,
  heading,
  amount,
  cars,
  baths,
  fts,
  testimonialImage,
  testimonialName,
  onSave,
  onContact,
  onShare,
}) {
  return (
    <div className="property-card">
      {/* Image Section */}
      <div className="property-image-container">
        <img src={propertyImage} alt="Property" className="property-image" />

        {/* Buttons on the left side of the image */}
        <div className="image-buttons ">
          <button className="btn bg-blue me-3  " onClick={onSave}>
          Hot offer
          </button>
          <button className="btn bg-blue" onClick={onContact}>
          Sale
          </button>
        </div>
      </div>

      {/* Heading and Amount */}
      <div className="property-info">
        <h3>{heading}</h3>
        <p className="amount color-green">{amount}</p>

        {/* Icons and Numbers */}
        <div className="icons-info">
          <span>
          {cars} <FaCar /> 
          </span>
          <span>
            {baths} <FaBath /> 
          </span>
          <span>
          {fts}  <FaExpandArrowsAlt /> 
          </span>
        </div>

        {/* Divider */}
        <hr />

        {/* Testimonial and Social Share */}
        <div className="testimonial-share">
          {/* Testimonial */}
          <div className="testimonial">
            <img
              src={testimonialImage}
              alt="User"
              className="testimonial-image"
            />
            <span className="testimonial-name">{testimonialName}</span>
          </div>

          {/* Social Share */}
          <div className="social-share" onClick={onShare}>
            <FaShareAlt />
            <FaHeart /> 
            <FaPlus /> 

          </div>
        </div>
      </div>
    </div>
  );
}


function Property() {

  const handleSave = () => alert("Property saved!");
  const handleContact = () => alert("Contact seller!");
  const handleShare = () => alert("Shared on social media!");

  return (
    <div className='property'>
    <div className="container">
    <Heading text="Latest Property"  level='h4' textAlign="center"/>
    <h2 className='text-center'>Properties for sale in your favorite <br /> area</h2>
      <div className='row'>
        <div className='col-lg-4 col-md-6'>
          <PropertyCard
            propertyImage={property1}
            heading="Beautiful Apartment"
            amount="$590,693"
            cars={4}
            baths={2}
            testimonialImage="https://via.placeholder.com/50"
            testimonialName="John Doe"
            onSave={handleSave}
            onContact={handleContact}
            onShare={handleShare}
          />
        </div>
        <div className='col-lg-4 col-md-6'>
          <PropertyCard
            propertyImage={property2}
            heading="Beautiful Apartment"
            amount="$590,693"
            cars={4}
            baths={2}
            testimonialImage="https://via.placeholder.com/50"
            testimonialName="John Doe"
            onSave={handleSave}
            onContact={handleContact}
            onShare={handleShare}
          />
        </div>
        <div className='col-lg-4 col-md-6'>
          <PropertyCard
            propertyImage={property3}
            heading="Beautiful Apartment"
            amount="$590,693"
            cars={4}
            baths={2}
            testimonialImage="https://via.placeholder.com/50"
            testimonialName="John Doe"
            onSave={handleSave}
            onContact={handleContact}
            onShare={handleShare}
          />
        </div>
        <div className='col-lg-4 col-md-6'>
          <PropertyCard
            propertyImage={property4}
            heading="Beautiful Apartment"
            amount="$590,693"
            cars={4}
            baths={2}
            testimonialImage="https://via.placeholder.com/50"
            testimonialName="John Doe"
            onSave={handleSave}
            onContact={handleContact}
            onShare={handleShare}
          />
        </div>
        <div className='col-lg-4 col-md-6'>
          <PropertyCard
            propertyImage={property5}
            heading="Beautiful Apartment"
            amount="$590,693"
            cars={4}
            baths={2}
            testimonialImage="https://via.placeholder.com/50"
            testimonialName="John Doe"
            onSave={handleSave}
            onContact={handleContact}
            onShare={handleShare}
          />
        </div>
        <div className='col-lg-4 col-md-6'>
          <PropertyCard
            propertyImage={property6}
            heading="Beautiful Apartment"
            amount="$590,693"
            cars={4}
            baths={2}
            testimonialImage="https://via.placeholder.com/50"
            testimonialName="John Doe"
            onSave={handleSave}
            onContact={handleContact}
            onShare={handleShare}
          />
        </div>
      </div>
      <div className='button-prop d-md-flex justify-conten-center'><button className="btn bg-green m-auto">See All Properties</button></div>
    </div>
    </div>
  );
};

export default Property;

import React from 'react';
import Slider from "react-slick";
import Heading from './Heading';
import carouselCard1 from '../images/carouselCard1.png'; 
import carouselCard2 from '../images/carouselCard2.png'; 
import carouselCard3 from '../images/carouselCard3.png'; 
import carouselCard4 from '../images/carouselCard4.png'; 
import carousel from '../images/carousel.png'; 
import ArrowLeft from '../images/ArrowLeft.png'; 
import ArrowRight from '../images/ArrowRight.png'; 
import Vector from '../images/Vector.svg'; 
import './CarouselSection.css';

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow next" onClick={onClick}>
      <img src={ArrowRight} />
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow prev" onClick={onClick}>
      <img src={ArrowLeft} />
    </div>
  );
};

const CarouselSection = () => {
  const properties = [
    {
      image: carouselCard1,
      city: 'New York',
      propertyCount: '250 Properties',
    },
    {
      image: carouselCard2,
      city: 'Atlanta',
      propertyCount: '250 Properties',
    },
    {
      image: carouselCard3,
      city: 'Singapore',
      propertyCount: '250 Properties',
    },
    {
      image: carouselCard4,
      city: 'Paris',
      propertyCount: '250 Properties',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, // At this width and below, it will show 1 slide
        settings: {
          slidesToShow: 1,  // Show 1 slide
          slidesToScroll: 1
    
        }
      },
      {
        breakpoint: 1024,  
        settings: {
          slidesToShow: 2,  // Show 2 slides at this size
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-section position-relative neighbor">
      <img src={carousel} className='position-absolute end-0 bottom-0'/>
      <div className='container'>
       <Heading text="Neighborhood"  level='h4' textAlign="center" />
      <h2 className="section-title">Find Your Neighborhood</h2>
      <Slider {...settings}>
        {properties.map((property, index) => (
          <div key={index} className="property-card">
            <img src={Vector} className="position-absolute card-arrow" />
            <img
              className="card-img"
              src={property.image}
              alt={`Slide ${index + 1}`}
            />
            <div className="overlay">
              <div className="city-name">{property.city}</div>
              <div className="property-count color-violet">{property.propertyCount}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default CarouselSection;

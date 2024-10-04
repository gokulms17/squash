import React from 'react';
import Slider from 'react-slick';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import Heading from './Heading';
import './TestimonialCarousel.css'; 

import { ReactComponent as Vector } from '../images/testimonialarrow.svg';
import test1 from '../images/test1.png'; 
import test2 from '../images/test2.png'; 
import test3 from '../images/test3.png'; 
import test4 from '../images/test4.png'; 

const testimonials = [
  {
    image: test1,
    name: 'Peter Parker',
    job: 'Land Seller',

  },
  {
    image: test2,
    name: 'Elena Gilberts',
    job: 'Land Seller',

  },
  {
    image: test3,
    name: 'Peter Parker',
    job: 'Land Seller',

  },
  {
    image:test4,
    name: 'Rosalina  William',
    job: 'Land Seller',

  },
];

const NextArrow = ({ onClick }) => {
  return (
    <div className="testimonial-arrow next-item" onClick={onClick}>
      <Vector />
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div className="testimonial-arrow prev-item" onClick={onClick}>
       <Vector />
    </div>
  );
};

const TestimonialCarousel = () => {
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
    <div className="testimonial-carousel container">
      <Heading text="Meet OUR TEAM"  level='h4' textAlign="center" />
      <h2 className="section-title">Our Exclusive Agents</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-content" key={index}>
            {/* Image */}
            <img src={testimonial.image} alt={testimonial.name} className="full-testimonial-image w-100" />


            {/* Name and Job */}
            <div className="testimonial-author">
              <div className="author-info">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.job}</p>
              </div>

              {/* Social Share Icons */}
              <div className="social-share">
                <FaInstagram className="social-icon" />
                <FaTwitter className="social-icon" />
                <FaFacebook className="social-icon" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;

import React from 'react';
import './Blog.css'; 
import Heading from './Heading';
import blog1 from '../images/blog1.png'; 
import blog2 from '../images/blog2.png'; 
import blog3 from '../images/blog3.png'; 

function BlogCard({ image, date, singleDate, day, author, title, description }) {
  return (
    <div className="blog-card">
      {/* Blog Image */}
      <div className="blog-image-container">
        <img src={image} alt="Blog" className="blog-image" />

        {/* Date in bottom-right of the image */}
        <div className="date-badge text-center">
          {singleDate}
          <br />
          {day}
        </div>
      </div>

      {/* Below Image: Date, Author, Heading, and Description */}
      <div className="blog-content">
        {/* Date and Author */}
        <div className="meta-info">
          <span className="blog-date color-violet">{date}</span>
          
          <span className="blog-author color-violet"> by {author}</span>
        </div>

        {/* Blog Heading */}
        <h3 className="blog-title">{title}</h3>

        {/* Blog Description */}
        <p className="blog-description">{description}</p>
      </div>
    </div>
  );
};

function Blog(){
  return(
    <div className='blog'>
      <div className='container'>
       
        <Heading text="Our Blog"  level='h4' textAlign="center" />
        <h2 className="text-center">Explore Our Blog</h2>
        <div className='row justify-content-md-center'>
          <div className='col-lg-4  col-md-6'>
          <BlogCard
            image = {blog1}
            day="Mon"
            singleDate="4"
            date="January 04, 2024"
            author="Architecture"
            title="Top 10 Home Buying Mistakes to Avoid"
            description="Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"
          />
          </div>
          <div className='col-lg-4  col-md-6'>
          <BlogCard
            image= {blog2}
            day="Mon"
            singleDate="4"
            date="January 20, 2024"
            author="Market Manager"
            title="How to Stage Your Home Quick Sale"
            description="Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc."
          />
          </div>
          <div className='col-lg-4  col-md-6 pt-md-5 pt-lg-0'>
          <BlogCard
            image= {blog3}
            day="Mon"
            singleDate="4"
            date="January 04, 2024"
            author="Architecture"
            title="5 Tips for First-Time Home Sellers"
            description="In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus."
          />
          </div>
        </div>
      </div>

    </div>
    

  )
}

export default Blog;

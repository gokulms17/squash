import React from 'react';
import './Heading.css'; 

function Heading({ text, level = 'h4', textAlign }) {
  const HeadingTag = level; 
  return (
    <div className={`border-container m-0 ${textAlign === 'center' ? 'justify-content-center' : 'justify-content-left'}`}>
      <div className="left-border"></div>
      <HeadingTag className="heading m-0">{text}</HeadingTag>
      <div className="right-border"></div>
    </div>
  );
}

export default Heading;

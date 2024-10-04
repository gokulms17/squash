import React from 'react';
import './PropertySearch.css'; 
import polygon from '../images/polygon.png'; 

function PropertySearch() {
  return (
    <div className="property-search position-relative px-2 px-md-0"> 
      <div className="button-group">
        <button className="btn bg-blue position-relative">Rent  <span className='position-absolute polygon'><img src={polygon}/></span> </button>
       
        <button className="btn btn-secondary bg-white">Sale</button>
      </div>
      
      <div className="flex-container d-lg-flex d-block container bg-white">
        <div className="form-group">
          <label htmlFor="city">Location</label>
          <select id="city" className="form-control form-select border-0">
            <option value="">Select city</option>
            <option value="city1">City 1</option>
            <option value="city2">City 2</option>
            <option value="city3">City 3</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="property-type">Property Type</label>
          <select id="property-type" className="form-control form-select border-0">
            <option value="">Select property type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="land">Land</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="rent-range">Rent Range</label>
          <select id="rent-range" className="form-control form-select border-0">
            <option value="">Select rent range</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <button className="btn btn-search bg-green">Search</button>
      </div>
      </div>
  );
}

export default PropertySearch;

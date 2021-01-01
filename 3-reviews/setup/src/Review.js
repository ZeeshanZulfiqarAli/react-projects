import React from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = ({id, name, job, image, text,count, setCount, len}) => {
  return (
    <div className="review" key={id}>
        <div className="img-container">
          <img src={image} alt={name} className="person-img"></img>
          <span className="quote-icon">
            <FaQuoteRight></FaQuoteRight>
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div>
          <FaChevronLeft className="prev-btn" onClick={ () => setCount(count-1 < 0 ? len : count-1)}></FaChevronLeft>
          <FaChevronRight className="next-btn" onClick={ () => setCount(count+1 > len ? 0 : count+1)}></FaChevronRight>
        </div>
        <button className="random-btn" onClick={ () => setCount(Math.round( Math.random()*len))}>surprise me</button>
    </div>
  );
};

export default Review;

import React, { useState } from 'react';

const Tour = ({id, tName, info ,price, image, removeTour}) => {

  const [readMore, setReadMore] = useState(info.length>100);
  return( 
    <article key={id} className="single-tour">
      <img src={image} alt={tName}></img>
      <footer>
        <div className="tour-info">
            <h4>{tName}</h4>
            <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info.slice(0,100) + "..." : info}
          <button onClick={ () => {setReadMore(!readMore);}}>
            {readMore ? "Read more" : "Show less"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>Not interested</button>
      </footer>
    </article>
  );
};

export default Tour;

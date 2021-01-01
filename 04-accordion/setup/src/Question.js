import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id, title, info}) => {

  const [isExpanded, setIsExpanded] = useState(false);

  let infoJSX, btnJSX;
  if (isExpanded){
    infoJSX = <p>{info}</p>;
    btnJSX = <AiOutlineMinus></AiOutlineMinus>;
  } else {
    infoJSX = "";
    btnJSX = <AiOutlinePlus></AiOutlinePlus>;
  }
  
  
  return (
    <div className="question" key={id}>
      <header>
        <h4>{title}</h4>
        <span className="btn" onClick={ () => { setIsExpanded(!isExpanded); }}>
          {btnJSX}
        </span>
      </header>
      {infoJSX}
    </div>
    );
};

export default Question;

import React from 'react';

const Categories = ({ cName, setCategoryList, allCategories}) => {
  return (
    
      <button className="filter-btn" onClick={ () => cName==="All" ? setCategoryList(allCategories) : setCategoryList(new Set([cName]))}>{cName}</button>
    
    
    );
};

export default Categories;

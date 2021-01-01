import React from 'react';

const List = (aPerson) => {
  let {id, name, age, image} = aPerson;
  console.log(aPerson);
  return (
    <>
      <article className="person" key={id}>
        <img src={image}></img>
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </article>
    </>
  );
};

export default List;

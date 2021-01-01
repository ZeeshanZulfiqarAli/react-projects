import React from 'react';
import Tour from './Tour';
const Tours = (l) => {
  //let id = "1", name="Zeeshan", info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur impedit harum accusamus perspiciatis libero excepturi facere atque quae fugiat voluptatum?", image="", price = 2;
  /*if (l.list.length===0){
    return <h2>loading</h2>;
  }*/
  
  let arr = l.list.map((item) => 
    <Tour key={item.id} id={item.id} tName={item.name} image={item.image} price={item.price} info={item.info} removeTour={l.removeTour}/>
  );
  return (
    <>
    {arr}
    </>
  );
};

export default Tours;
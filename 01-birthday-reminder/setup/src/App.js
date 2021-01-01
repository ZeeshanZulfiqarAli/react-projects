import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  let [peoples, setPeoples] = useState(data);
  const array = peoples.map((item)=> <List key={item.id} name={item.name} age={item.age} image ={item.image}/>);
  return (
    <main>
      <section className="container">
        <h3>{array.length} birthdays today</h3>
        {array}
        <button onClick={()=>setPeoples([])}>clear all</button>
      </section>
    </main>
    );
}

export default App;

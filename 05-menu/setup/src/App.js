import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  console.log(typeof items.map( (item) => item.category ));
  const allCategories = new Set(["All"].concat(items.map( (item) => item.category )));
  let [categoryList, setCategoryList] = useState(allCategories);
  console.log("category list",categoryList, "allCategories", allCategories);
  let arr = items.map( (item) => categoryList.has(item.category) ? <Menu key={item.id} {...item}></Menu> : "");
  console.log(typeof arr,arr);
  let cArr = []
  allCategories.forEach( (item) => cArr.push(<Categories key={item} cName={item} setCategoryList={setCategoryList} allCategories={allCategories}></Categories>));

  return (
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <div className="btn-container">
            {cArr}
          </div>
          <section className="section-center">
            {arr}
          </section>
        </section>
      </main>
  );
}

export default App;

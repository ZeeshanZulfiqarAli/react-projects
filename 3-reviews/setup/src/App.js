import React, { useState } from 'react';
import reviews from './data';
import Review from './Review';
function App() {
  let [count,setCount] = useState(0);

  return (
  <main>
    <section className="container">
      <div className="title">
        <h2>Our reviews</h2>
        <div className="underline"></div>
      </div>
      <div>
      <Review {...reviews[count]} count={count} setCount={setCount} len={reviews.length-1}/>
      </div>
    </section>
  </main>);
}

export default App;

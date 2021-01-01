import React from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

  const ques = data.map( (item) => <SingleQuestion {...item}></SingleQuestion>);

  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section>
          {ques}
        </section>
      </div>
    </main>
    );
}

export default App;

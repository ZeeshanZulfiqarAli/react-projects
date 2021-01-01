import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import axios from 'axios'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'


function App() {
  const [user, setUser] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reload, setReload] = useState(false);
  
  const getData = async () => {
    const res = await axios.get(url);
    setUser(res.data);
    setIsLoaded(true);
  }
  const removeTour = (id) => {
    setUser( user.filter((item) => item.id !== id) );
  }

  useEffect(() => {getData();},[]);
  useEffect( () => {
      if (reload){
        setIsLoaded(false);
        getData();
        setReload(false);
      }
    },
    [reload] );
  if (isLoaded === false){
    return (<main><Loading></Loading></main>);
  }
  if (user.length === 0){
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button onClick={() => {setReload(true)}} className="btn">Refresh</button>
        </div>
      </main>
    );
  }
  return (
  <main>
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        <Tours list={user} removeTour={removeTour}></Tours>
      </div>
    </section>
  </main>
  )
  
}
  
export default App

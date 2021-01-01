import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import axios from "axios";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {

  let [userData, setUserData] = useState([]);
  let [isLoaded, setIsLoaded] = useState(false);
  let [activeBtn, setActiveBtn] = useState("TOMMY");

  let data;
  async function getData(){
    let temp = await axios.get(url);
    data = temp.data;
    setUserData(data);
    setIsLoaded(true);
    console.log(temp,data);
  }

  useEffect( () => { getData(); } , []);

  let listOfCompanies = userData.map( (item) => item.company);
  let companiesJSX = listOfCompanies.map( (item) => <button key={item} className={activeBtn===item ? "job-btn active-btn": "job-btn"} onClick={(e) => {console.log(item,e,e.target.getAttribute("className")); setActiveBtn(item);}}>{item}</button>)
  console.log(listOfCompanies, activeBtn);
  let singleData = userData.filter( (item) => item.company===activeBtn);
  
  if (!isLoaded){
    return (
      <main>
        <section className="section">
          <div className="loading">
            <h1>loading...</h1>
          </div>
        </section>
      </main>
    );
  } else{
    console.log(singleData[0]);
    let id = singleData[0].id,
        title = singleData[0].title,
        order = singleData[0].order,
        dates = singleData[0].dates,
        duties = singleData[0].duties;
    return (
      <main>
        <section className="section">
          <div className="title">
            <h2>experience</h2>
            <div className="underline"></div>
          </div>
          <div className="jobs-center">
            <div className="btn-container">
              {companiesJSX}
            </div>
            
            <article className="job-info" key={id}>
              <h3>{title}</h3>
              <h4>{activeBtn}</h4>
              <p className="job-dates">{dates}</p>
              
                
                {
                  duties.map((duty,index)=><div className="job-desc" key={index}><FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight><p>{duty}</p></div>)
                }
                
              
              <button className="btn">More info</button>
            </article>
          </div>
        </section>
      </main>
    );
  }
}

export default App

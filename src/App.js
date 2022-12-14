import "./App.css";
import Axios from "axios";
import React, { useState } from "react";

const data = [
  { site_cd: "Aida", emp_mst_empl_id: 1, gender: "Female", age: 23 },
  { site_cd: "Mohan", emp_mst_empl_id: 2, gender: "Female", age:  29 },
  { site_cd: "Susan", emp_mst_empl_id: 3, gender: "Male", age:  24 },
  { site_cd: "Jason", emp_mst_empl_id: 4, gender: "Male", age:  13 },
];


function App() {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.setup + "..." + data.punchline);
      });
  };



  return (
    <>
      <div className="Header">
        Hello World ,
        <button className="button" onClick={getJoke}>Get joke</button>
        {joke}
      </div>
      
      <div className="App">
        <table>
          <tr>
            <th>site_cd</th>
            <th>emp_mst_empl_id</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.site_cd}</td>
                <td>{val.emp_mst_empl_id}</td>
                <td>{val.gender}</td>
                <td>{val.age}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default App;

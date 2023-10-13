import { useEffect, useState } from 'react';
import './App.css'

import axios from 'axios';

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    //go get the data, put it in state
    axios({
      method: 'GET',
      url: 'https://localhost:3000/meals'
    }).then((response) => {
      setMeals(response.data);
    });

  }, []);

const handleClick = () => {
  axios('http://localhost:3000/points').then((response) => {
    SVGTextPathElement(response.data);
  });

  return (
    <>
      <h1>My Meals app</h1>
      {meals.map((meal) => {
        return (
          <div key={JSON.stringify(meal)}>
            <div>{meal.name}</div>
            <div>{meal.instructions}</div>
          </div>
        )
      })}
      <button onClick={handleClick}>Show Health Points</button>
      {hp & <div>{hp}</div>}
      {/* SHOW MEALS HERE */}
    </>
  );

export default App;

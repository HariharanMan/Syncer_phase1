import React from "react";
import "./App.css";

function App() {
  const numbers = [];
  for (let i = 1; i <= 10; i++) {
    numbers.push(i);
  }

  return (
    <div className="App">
      <h1>Basic For Loop</h1>
      <div className="output">
        <p>Numbers from 1 to 10:</p>
        <ul>
          {numbers.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

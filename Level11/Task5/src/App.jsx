import React from "react";
import "./App.css";

function App() {
  const age = 20; 
  let message = "";

  if (age > 65) {
    message = "You are a senior citizen";
  } else if (age >= 18) {
    message = "You are an adult";
  } else {
    message = "You are a minor";
  }

  return (
    <div className="App">
      <h1>Age Category Checker</h1>
      <div className="output">
        <p>Age: {age}</p>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;

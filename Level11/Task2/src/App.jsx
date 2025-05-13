import React from "react";
import "./App.css";

function App() {
  // Declare variables of different types
  const myString = "123";
  const myNumber = 42;
  const myBoolean = true;
  const myNull = null;
  let myUndefined;
  const myObject = { name: "React", version: 18 };

  // Convert string to number using parseInt
  const convertedNumber = parseInt(myString);

  return (
    <div className="App">
      <h1>Data Type Exploration</h1>
      <div className="output">
        <p>Type of myString: {typeof myString}</p>
        <p>Type of myNumber: {typeof myNumber}</p>
        <p>Type of myBoolean: {typeof myBoolean}</p>
        <p>Type of myNull: {typeof myNull}</p> {/* Will return 'object' in JS */}
        <p>Type of myUndefined: {typeof myUndefined}</p>
        <p>Type of myObject: {typeof myObject}</p>
        <p>Converted Number from String "123": {convertedNumber}</p>
      </div>
    </div>
  );
}

export default App;

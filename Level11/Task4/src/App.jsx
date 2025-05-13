import React from "react";
import "./App.css";

function App() {
  const fullName = "Hariharan";
  const hometown = "Coimbatore";

  const upperName = fullName.toUpperCase();
  const nameLength = fullName.length;
  const firstName = fullName.split(" ")[0]; 
  const combinedString = fullName + " from " + hometown;

  return (
    <div className="App">
      <h1>String Manipulation</h1>
      <div className="output">
        <p>Original Full Name: {fullName}</p>
        <p>Uppercase Name: {upperName}</p>
        <p>Length of Full Name: {nameLength}</p>
        <p>First Name: {firstName}</p>
        <p>Hometown: {hometown}</p>
        <p>Concatenated String: {combinedString}</p>
      </div>
    </div>
  );
}

export default App;

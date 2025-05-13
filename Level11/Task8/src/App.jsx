import React from "react";
import "./App.css";

function App() {

  const person = {
    name: "Hariharan",
    age: 20,
    city: "Coimbatore",
    hobbies: ["Reading", "Gaming", "Cycling"]
  };

  person.job = "Software Developer";

  person.age = 20;

  person.greet = function () {
    return `Hello, my name is ${this.name}!`;
  };

  return (
    <div className="App">
      <h1>Object Creation and Access</h1>
      <div className="output">
        <p><strong>Name:</strong> {person.name}</p>
        <p><strong>Age:</strong> {person.age}</p>
        <p><strong>City:</strong> {person.city}</p>
        <p><strong>Hobbies:</strong> {person.hobbies.join(", ")}</p>
        <p><strong>Job:</strong> {person.job}</p>
        <p><strong>Greeting:</strong> {person.greet()}</p>
      </div>
    </div>
  );
}

export default App;

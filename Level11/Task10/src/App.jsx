import React from "react";
import "./App.css";

function App() {
  const firstName = "Hariharan";
  const lastName = "M V";
  const age = 20;

  const intro = `My name is ${firstName} ${lastName} and I am ${age} years old.`;

  const multiLine = `
Hello!
I'm Software Developer.
Next year, I will be ${age + 1} years old.
  `;

  // Template literal with ternary operator
  const ageMessage = `${age >= 18 ? "You are an adult." : "You are a minor."}`;

  return (
    <div className="App">
      <h1>Template Literals</h1>
      <div className="output">
        <p><strong>Intro:</strong> {intro}</p>
        <p><strong>Multi-line:</strong> <pre>{multiLine}</pre></p>
        <p><strong>Age Check:</strong> {ageMessage}</p>
      </div>
    </div>
  );
}

export default App;

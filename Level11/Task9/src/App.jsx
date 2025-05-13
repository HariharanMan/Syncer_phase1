import React from "react";
import "./App.css";

function App() {
  // Regular function
  function multiply(a, b) {
    return a * b;
  }

  // Function expression
  const divide = function (a, b) {
    return a / b;
  };

  // Arrow function
  const power = (base, exponent) => {
    return base ** exponent;
  };

  // Function calls
  const resultMultiply = multiply(6, 4);
  const resultDivide = divide(20, 5);
  const resultPower = power(2, 3);

  return (
    <div className="App">
      <h1>Function Declaration</h1>
      <div className="output">
        <p><strong>Multiply (6 * 4):</strong> {resultMultiply}</p>
        <p><strong>Divide (20 / 5):</strong> {resultDivide}</p>
        <p><strong>Power (2 ^ 3):</strong> {resultPower}</p>
      </div>
    </div>
  );
}

export default App;

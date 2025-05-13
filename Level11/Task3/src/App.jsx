import React from "react";
import "./App.css";

function App() {
  // Declare two numbers
  const num1 = 10;
  const num2 = 5;

  // Perform arithmetic operations
  const sum = num1 + num2;
  const difference = num1 - num2;
  const product = num1 * num2;
  const quotient = num1 / num2;
  const remainder = num1 % num2;
  const num3 = num1 ** num2; // Exponentiation

  return (
    <div className="App">
      <h1>Basic Arithmetic Operations</h1>
      <div className="output">
        <p>num1 = {num1}, num2 = {num2}</p>
        <p>Sum: {sum}</p>
        <p>Difference: {difference}</p>
        <p>Product: {product}</p>
        <p>Quotient: {quotient}</p>
        <p>Remainder: {remainder}</p>
        <p>num3 (num1 raised to the power of num2): {num3}</p>
      </div>
    </div>
  );
}

export default App;

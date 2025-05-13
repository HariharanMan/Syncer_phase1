import React, { useEffect } from "react";
import "./App.css";

function App() {
  const numbers = [1,2,3,4,5,6,7,8,9,10];

  // map(): square each number
  const squaredNumbers = numbers.map(num => num * num);

  // filter(): get only odd numbers
  const oddNumbers = numbers.filter(num => num % 2 !== 0);

  // reduce(): sum of all numbers
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  // forEach(): log each number and its square root
  useEffect(() => {
    console.log("Number and Square Root:");
    numbers.forEach(num => {
      console.log(`Number: ${num}, Square Root: ${Math.sqrt(num).toFixed(2)}`);
    });
  }, []);

  return (
    <div className="App">
      <h1>Array Methods</h1>
      <div className="output">
        <p><strong>Original Numbers:</strong> {numbers.join(", ")}</p>
        <p><strong>Squared Numbers:</strong> {squaredNumbers.join(", ")}</p>
        <p><strong>Odd Numbers:</strong> {oddNumbers.join(", ")}</p>
        <p><strong>Sum of All Numbers:</strong> {sum}</p>
      </div>
    </div>
  );
}

export default App;

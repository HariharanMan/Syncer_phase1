// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(null);

  const handleNumberClick = (number) => {
    setInput(input + number);
  };

  const handleOperatorClick = (op) => {
    if (input !== '') {
      setFirstOperand(parseFloat(input));
      setOperator(op);
      setInput('');
    }
  };

  const handleEqualsClick = () => {
    if (firstOperand !== null && input !== '' && operator !== null) {
      const secondOperand = parseFloat(input);
      let calculation;
      switch (operator) {
        case '+':
          calculation = firstOperand + secondOperand;
          break;
        case '-':
          calculation = firstOperand - secondOperand;
          break;
        case '*':
          calculation = firstOperand * secondOperand;
          break;
        case '/':
          calculation = secondOperand !== 0 ? firstOperand / secondOperand : 'Error';
          break;
        default:
          calculation = 'Error';
      }
      setResult(calculation);
      setInput('');
      setFirstOperand(null);
      setOperator(null);
    }
  };

  const handleClear = () => {
    setInput('');
    setFirstOperand(null);
    setOperator(null);
    setResult(null);
  };

  return (
    <div className="app-wrapper">
      <div className="calculator">
        <div className="display">
          {result !== null ? result : input || '0'}
        </div>
        <div className="buttons">
          <div className="number-buttons">
            {[1,2,3,4,5,6,7,8,9,0].map((num) => (
              <button key={num} onClick={() => handleNumberClick(num.toString())}>{num}</button>
            ))}
          </div>
          <div className="operator-buttons">
            {['+', '-', '*', '/'].map((op) => (
              <button key={op} onClick={() => handleOperatorClick(op)}>{op}</button>
            ))}
            <button onClick={handleEqualsClick}>=</button>
            <button onClick={handleClear}>C</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

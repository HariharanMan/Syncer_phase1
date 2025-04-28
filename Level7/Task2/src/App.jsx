import React from 'react';
import useCounter from './hooks/useCounter';
import './App.css';

function App() {
  const [count, increment, decrement, reset] = useCounter(0);

  return (
    <div className="app">
      <h1>useCounter Buttons</h1>
      <div className="counter-display">{count}</div>
      <div className="button-group">
        <button onClick={increment} className="btn increment">Increment</button>
        <button onClick={decrement} className="btn decrement">Decrement</button>
        <button onClick={reset} className="btn reset">Reset</button>
      </div>
    </div>
  );
}

export default App;

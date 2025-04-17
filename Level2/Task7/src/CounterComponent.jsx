import React, { useState } from 'react';
import './App.css'; 

function CounterComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2>Simple Counter</h2>
      <p>Current Count: {count}</p>
      <div className="button-group">
        <button onClick={() => setCount(count - 1)}>- Decrement</button>
        <button onClick={() => setCount(count + 1)}>+ Increment</button>
      </div>
    </div>
  );
}

export default CounterComponent;

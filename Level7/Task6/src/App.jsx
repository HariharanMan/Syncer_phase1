import React, { useState } from 'react';
import useDocumentTitle from './hooks/useDocumentTitle';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useDocumentTitle(`Count: ${count}`);

  return (
    <div className="app">
      <h1>useDocumentTitle </h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)} className="btn">
        Increment Count
      </button>
    </div>
  );
}

export default App;

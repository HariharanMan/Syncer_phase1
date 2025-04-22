import React, { useState, useCallback } from "react";
import Child from "./Child";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);

  // Memoized callback function
  const handleClick = useCallback(() => {
    setClicks((prev) => prev + 1);
  }, []);

  return (
    <div className="container">
      <h1>Memoized Callback</h1>
      <p>Parent Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment Parent Count</button>
      <Child onClick={handleClick} clicks={clicks} />
    </div>
  );
}

export default App;

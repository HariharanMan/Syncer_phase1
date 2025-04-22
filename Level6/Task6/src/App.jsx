import React, { useEffect, useState } from "react";
import "./App.css";

function TimerComponent() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Timer is running...");
    }, 1000);

    // Cleanup function
    return () => {
      console.log("Timer stopped.");
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <h1>Cleanup</h1>
      <h2>Check the console to see the timer logs every second.</h2>
    </div>
  );
}

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div className="container">
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Unmount Timer" : "Mount Timer"}
      </button>
      {showTimer && <TimerComponent />}
    </div>
  );
}

export default App;

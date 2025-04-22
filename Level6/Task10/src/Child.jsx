import React from "react";

const Child = React.memo(({ onClick, clicks }) => {
  console.log("Child component re-rendered");

  return (
    <div className="child">
      <h2>Child Component</h2>
      <p>Button clicked: {clicks} times</p>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
});

export default Child;

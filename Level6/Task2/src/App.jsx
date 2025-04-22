import React, { useState } from "react";
import "./App.css";

function ToggleComponent() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container">
      <h1>Toggle</h1>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Content" : "Show Content"}
      </button>
      {isVisible && (
        <div className="content-box">
          <p>This content is now visible!</p>
        </div>
      )}
    </div>
  );
}

export default ToggleComponent;

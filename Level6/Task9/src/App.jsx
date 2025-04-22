import React, { useRef } from "react";
import "./App.css";

function UseRefFocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Direct DOM manipulation
  };

  return (
    <div className="container">
      <h1>DOM Manipulation</h1>
      <input
        type="text"
        placeholder="Click the button to focus me"
        ref={inputRef}
        className="input"
      />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default UseRefFocusInput;

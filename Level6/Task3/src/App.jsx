import React, { useState } from "react";
import "./App.css";

function InputComponent() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <h1>Your Input</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>You typed: <strong>{text}</strong></p>
    </div>
  );
}

export default InputComponent;

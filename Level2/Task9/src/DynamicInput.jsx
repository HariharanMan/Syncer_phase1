import React, { useState } from 'react';
import './App.css'; 

const DynamicInput = () => {
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-semibold mb-2">Input Field</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Type something..."
        className="border border-gray-300 rounded-lg p-2 w-full"
      />
      <h2 className="mt-4 text-gray-700">You typed: <strong>{inputText}</strong></h2>
    </div>
  );
};

export default DynamicInput;

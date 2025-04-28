import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

function App() {
  const [name, setName] = useLocalStorage('name', '');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="app">
      <h1>useLocalStorage </h1>
      <input 
        type="text" 
        value={name} 
        onChange={handleChange} 
        placeholder="Enter your name" 
        className="input-field"
      />
      <p className="display-text">Hello, {name || "stranger"}!</p>
    </div>
  );
}

export default App;

import React from 'react';
import useInput from './hooks/useInput';
import './App.css';

function App() {
  const inputProps = useInput('');

  return (
    <div className="app">
      <h1>User Input</h1>
      <input 
        type="text" 
        placeholder="Type something..." 
        className="input-field" 
        {...inputProps}
      />
      <h1 className="display-text">You typed: {inputProps.value}</h1>
    </div>
  );
}

export default App;

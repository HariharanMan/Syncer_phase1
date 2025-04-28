import React from 'react';
import useToggle from './hooks/useToggle';
import './App.css';

function App() {
  const [isVisible, toggleVisibility] = useToggle(false);

  return (
    <div className="app">
      <h1>useToggle Show the Text</h1>
      <button onClick={toggleVisibility} className="toggle-btn">
        {isVisible ? 'Hide Content' : 'Show Content'}
      </button>

      {isVisible && (
        <div className="content-box">
          <p>This is some toggled content! </p>
        </div>
      )}
    </div>
  );
}

export default App;

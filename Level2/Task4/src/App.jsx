import React from 'react';
import GreetingComponent from './GreetingComponent';
import './App.css';

function App() {
  return (
    <div>
      <h1><GreetingComponent name="Hariharan" /></h1>
      <GreetingComponent />
    </div>
  );
}

export default App;

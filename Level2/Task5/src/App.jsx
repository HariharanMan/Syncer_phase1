import React from 'react';
import UserDetailsComponent from './UserDetailsComponent';
import './App.css';

function App() {
  return (
    <div>
      <h3><UserDetailsComponent name="Hariharan" age={21} city="Coimbatore" /></h3>
      <h3><UserDetailsComponent name="Aamirkhan" age={20} city="Chennai" /></h3>
    </div>
  );
}

export default App;

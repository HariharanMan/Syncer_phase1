import React, { useState } from 'react';
import './App.css';
import CancellableRequest from './components/CancellableRequest';

function App() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div className="container">
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? 'Unmount Component' : 'Mount Component'}
      </button>
      {showComponent && <CancellableRequest />}
    </div>
  );
}

export default App;

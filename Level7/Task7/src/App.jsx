import React from 'react';
import useWindowResize from './hooks/useWindowResize';
import './App.css';

function App() {
  const { width, height } = useWindowResize();

  return (
    <div className="app">
      <h1>useWindowResize</h1>
      <div className="size-box">
        <p>Width: {width}px</p>
        <p>Height: {height}px</p>
      </div>
    </div>
  );
}

export default App;

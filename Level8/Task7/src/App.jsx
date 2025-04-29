import React, { useEffect, useState } from 'react';
import Posts from './components/Posts';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(window.__LOADING__);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      {loading && <Loader />}
      <h1>Axios Interceptors Example</h1>
      <Posts />
    </div>
  );
}

export default App;

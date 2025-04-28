import React from 'react';
import useFetch from './hooks/useFetch';
import './App.css';

function App() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/1');

  return (
    <div className="app">
      <h1>useFetch </h1>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      {data && (
        <div className="data-container">
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default App;

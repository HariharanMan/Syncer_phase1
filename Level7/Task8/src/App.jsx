import React, { useState } from 'react';
import useDebounce from './hooks/useDebounce';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500); // Debounce by 500ms

  return (
    <div className="app">
      <h1>useDebounce </h1>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input"
      />
      <p>Search Term: {search}</p>
      <p>Debounced Term: {debouncedSearch}</p>
    </div>
  );
}

export default App;

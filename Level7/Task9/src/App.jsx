import React, { useState, useCallback } from 'react';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import './App.css';

function App() {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => i + 1));

  const loadMoreItems = useCallback(() => {
    setItems(prevItems => [
      ...prevItems,
      ...Array.from({ length: 10 }, (_, i) => prevItems.length + i + 1)
    ]);
  }, []);

  const bottomRef = useIntersectionObserver(loadMoreItems, {
    rootMargin: '100px',
  });

  return (
    <div className="app">
      <h1>Infinite Scroll</h1>
      <div className="list">
        {items.map((item) => (
          <div className="list-item" key={item}>
            Item {item}
          </div>
        ))}
        <div ref={bottomRef} className="loading">Loading more...</div>
      </div>
    </div>
  );
}

export default App;

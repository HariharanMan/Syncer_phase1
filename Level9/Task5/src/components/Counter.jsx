import React, { useEffect, useState } from 'react';
import LargeList from './LargeList';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="centered">
      <h2>Counter: {count}</h2>
      <LargeList />
    </div>
  );
};

export default Counter;

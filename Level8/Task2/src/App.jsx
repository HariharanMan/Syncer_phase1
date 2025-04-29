import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDataPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          const mockData = [
            { id: 1, name: 'Apple' },
            { id: 2, name: 'Banana' },
            { id: 3, name: 'Orange' },
          ];
          resolve(mockData);
        } else {
          reject('Failed to fetch data');
        }
      }, 2000); 
    });
  };

  useEffect(() => {
    fetchDataPromise()
      .then((receivedData) => {
        console.log('Data received:', receivedData);
        setData(receivedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <h1>Promise Example</h1>
      {loading ? (
        <p className="loading">Loading data...</p>
      ) : error ? (
        <p className="error">Error: {error}</p>
      ) : (
        <ul className="data-list">
          {data.map((item) => (
            <li key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

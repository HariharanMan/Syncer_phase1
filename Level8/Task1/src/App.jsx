import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = (callback) => {
    console.log('Fetching data...');

    setTimeout(() => {
      const mockData = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' },
      ];
      callback(mockData);
    }, 2000); 
  };


  const handleData = (receivedData) => {
    setData(receivedData);
    setLoading(false);
  };


  useEffect(() => {
    fetchData(handleData);
  }, []);

  return (
    <div className="app">
      <h1>Callback Example</h1>
      {loading ? (
        <p className="loading">Loading data...</p>
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

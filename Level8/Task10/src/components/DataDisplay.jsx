import React from 'react';
import useAxios from '../hooks/useAxios';

function DataDisplay() {
  const { data, loading, error, forceRefresh } = useAxios('https://jsonplaceholder.typicode.com/posts');

  return (
    <div className="container">
      <h1>Custom Axios Hook with Caching</h1>
      <button onClick={forceRefresh}>Force Refresh</button>

      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      {data && (
        <ul>
          {data.slice(0, 5).map(post => (
            <li key={post.id}>
              <strong>{post.title}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DataDisplay;

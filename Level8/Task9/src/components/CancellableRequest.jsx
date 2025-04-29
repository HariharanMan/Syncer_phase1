import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CancellableRequest() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cancelled, setCancelled] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios.get('https://jsonplaceholder.typicode.com/posts/1', {
      cancelToken: source.token
    })
      .then(response => {
        if (!cancelled) {
          setData(response.data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (axios.isCancel(err)) {
          console.log('Request cancelled:', err.message);
        } else {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      setCancelled(true);
      source.cancel('Component unmounted, request cancelled');
    };
  }, [cancelled]);

  return (
    <div className="container">
      <h1>Axios Request Cancellation</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      {data && (
        <div className="post">
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default CancellableRequest;

import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const cache = new Map();

function useAxios(url, config = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const forceRefreshRef = useRef(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      if (!forceRefreshRef.current && cache.has(url)) {
        console.log('Returning cached data for', url);
        setData(cache.get(url));
      } else {
        const response = await axios.get(url, config);
        cache.set(url, response.data);
        setData(response.data);
      }
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
      forceRefreshRef.current = false;
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const forceRefresh = () => {
    forceRefreshRef.current = true;
    fetchData();
  };

  return { data, loading, error, forceRefresh };
}

export default useAxios;

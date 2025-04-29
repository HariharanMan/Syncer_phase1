import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function DataFetcher() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log('Data fetched:', response.data);
      setPosts(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="app">
      <h1>Axios Data Fetcher</h1>
      {loading ? (
        <p className="loading">Loading posts...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <ul className="post-list">
          {posts.slice(0, 10).map((post) => (
            <li key={post.id} className="post-item">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DataFetcher;

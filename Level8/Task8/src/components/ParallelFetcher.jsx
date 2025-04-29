import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ParallelFetcher() {
  const [data, setData] = useState({ posts: [], users: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      setError('');

      const postsURL = 'https://jsonplaceholder.typicode.com/posts';
      const usersURL = 'https://jsonplaceholder.typicode.com/users';

      try {
        const [postsRes, usersRes] = await Promise.all([
          axios.get(postsURL),
          axios.get(usersURL)
        ]);

        setData({
          posts: postsRes.data.slice(0, 5),   
          users: usersRes.data.slice(0, 5)
        });
      } catch (err) {
        console.error(err);
        setError('Something went wrong while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Posts</h2>
      <ul>
        {data.posts.map(post => (
          <li key={post.id}><strong>{post.title}</strong></li>
        ))}
      </ul>

      <h2>Users</h2>
      <ul>
        {data.users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default ParallelFetcher;

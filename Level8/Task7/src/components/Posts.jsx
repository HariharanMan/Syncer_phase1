import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosConfig';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await axiosInstance.get('/posts');
      setPosts(response.data.slice(0, 5)); // Show only first 5 posts
    } catch (err) {
      setError('Failed to load posts.');
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="posts">
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;

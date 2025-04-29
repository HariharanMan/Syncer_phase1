import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="centered">
      <h2>Home Page</h2>
      <p>Welcome to the public Home page!</p>
      <Link to="/login">Go to Login</Link>
    </div>
  );
};

export default Home;

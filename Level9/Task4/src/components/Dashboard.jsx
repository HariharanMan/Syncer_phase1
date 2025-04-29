import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="centered">
      <h2>Dashboard</h2>
      <p>This is a protected dashboard page.</p>
      <Link to="/profile">Go to Profile</Link>
    </div>
  );
};

export default Dashboard;

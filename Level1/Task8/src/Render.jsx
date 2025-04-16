import React from 'react';
import './App.css';

const Render = ({ role, isLoggedIn }) => {
  if (!isLoggedIn) {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 m-4 rounded">
        <h3 className="text-lg font-bold">Please Log In</h3>
        <p>You need to log in to access the dashboard.</p>
      </div>
    );
  }

  if (role === 'Admin') {
    return (
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 m-4 rounded">
        <h3 className="text-lg font-bold">Hello Admin</h3>
        <p>You have full access to all features.</p>
      </div>
    );
  }

  if (role === 'User') {
    return (
      <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 m-4 rounded">
        <h3 className="text-lg font-bold">Hello User</h3>
        <p>You have limited access to your data.</p>
      </div>
    );
  }

  return null;
};

export default Render;

import React from 'react';
import './App.css';

const ConditionalMessage = ({ loggedIn }) => {
  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <h2 className="text-xl font-semibold">
        {loggedIn ? 'Welcome back!' : 'Please log in'}
      </h2>
    </div>
  );
};

export default ConditionalMessage;

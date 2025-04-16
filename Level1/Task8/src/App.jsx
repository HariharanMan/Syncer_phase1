import React from 'react';
import Render from './Render';
import './App.css';

function App() {
  const testCases = [
    { role: 'Admin', isLoggedIn: true },
    { role: 'User', isLoggedIn: true },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Conditional Rendering Dashboard</h1>
      <div className="space-y-4 w-full max-w-md">
        {testCases.map((test, index) => (
          <Render key={index} role={test.role} isLoggedIn={test.isLoggedIn} />
        ))}
      </div>
    </div>
  );
}

export default App;

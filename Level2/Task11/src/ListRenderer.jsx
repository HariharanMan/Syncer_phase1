import React from 'react';
import './App.css';

const ListRenderer = () => {
  const items = ['AI', 'FSD', 'OpenCV', 'NLP'];

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Hariharan Skills</h2>
      <ul className="list-disc pl-6 space-y-1 text-gray-800">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRenderer;

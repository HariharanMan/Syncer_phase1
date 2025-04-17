import React from 'react';
import './App.css';

const ListWithKeys = () => {
  const items = [
    { id: 1, name: 'Apples' },
    { id: 2, name: 'Bananas' },
    { id: 3, name: 'Cherries' },
    { id: 4, name: 'Dates' },
  ];

  return (
    <div className="p-6 max-w-md mx-auto mt-10 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Fruits List</h2>
      <ul className="list-disc list-inside">
        {items.map(item => (
          <li key={item.id} className="mb-1">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListWithKeys;

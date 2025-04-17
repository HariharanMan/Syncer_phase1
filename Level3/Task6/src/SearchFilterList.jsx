import React, { useState } from 'react';

const SearchFilterList = () => {
  const [query, setQuery] = useState('');

  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Coconut',
    'Grapes',
    'Strawberry',
    'Blueberry',
    'Papaya',
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-filter-container">
      <h2>Fruit Search</h2>
      <input
        type="text"
        placeholder="Search fruits..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />

      <ul className="filtered-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} className="list-item">
              {item}
            </li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilterList;

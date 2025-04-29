import React from 'react';
import { FixedSizeList as List } from 'react-window';
import '../App.css';

// Generate 10,000 dummy items
const items = Array.from({ length: 10000 }, (_, index) => `Item #${index + 1}`);

const Row = ({ index, style }) => (
  <div className="item" style={style}>
    {items[index]}
  </div>
);

const VirtualList = () => {
  return (
    <div className="container">
      <h2>Virtual Scrolling List</h2>
      <List
        height={500}         // Viewport height
        itemCount={items.length}
        itemSize={35}        // Each item's height
        width={'100%'}       // Full width
      >
        {Row}
      </List>
    </div>
  );
};

export default VirtualList;

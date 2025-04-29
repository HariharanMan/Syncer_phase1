import React from 'react';
import Search from '../components/Search';
import VirtualList from '../components/VirtualList';

function Products() {
  return (
    <div className="center">
      <h2>Product Explorer</h2>
      <Search />
      <VirtualList />
    </div>
  );
}

export default Products;

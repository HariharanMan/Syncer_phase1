import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Laptop', price: '$999' },
  { id: 2, name: 'Smartphone', price: '$499' },
  { id: 3, name: 'Headphones', price: '$199' },
];

function ProductList() {
  return (
    <div className="product-list">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.name} - {product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

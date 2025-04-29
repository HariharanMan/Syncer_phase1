import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import products from './productsData';
import '../App.css';

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);

  const [searchTerm, setSearchTerm] = useState(searchParams.get('term') || '');
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || '');

  useEffect(() => {
    const params = {};
    if (searchTerm) params.term = searchTerm;
    if (category) params.category = category;
    if (maxPrice) params.maxPrice = maxPrice;
    setSearchParams(params);

    const filtered = products.filter(product => {
      return (
        (!searchTerm || product.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!category || product.category === category) &&
        (!maxPrice || product.price <= parseInt(maxPrice))
      );
    });

    setFilteredProducts(filtered);
  }, [searchTerm, category, maxPrice, setSearchParams]);

  return (
    <div className="container">
      <h2>Product Search</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Search term"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home Appliances">Home Appliances</option>
        </select>
        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
        />
      </div>
      <ul className="results">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(p => (
            <li key={p.id}>
              <strong>{p.name}</strong> - {p.category} - ${p.price}
            </li>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;

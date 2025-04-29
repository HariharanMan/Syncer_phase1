import React from 'react';
import { useParams, Link } from 'react-router-dom';


const products = [
  { id: 1, name: 'Laptop', price: '$999', description: 'A powerful laptop for all your needs.' },
  { id: 2, name: 'Smartphone', price: '$499', description: 'Stay connected with this smartphone.' },
  { id: 3, name: 'Headphones', price: '$199', description: 'Experience high-quality sound.' },
];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail">
        <h2>Product Not Found</h2>
        <Link to="/products">Go back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <Link to="/products">Back to Products</Link>
    </div>
  );
}

export default ProductDetail;

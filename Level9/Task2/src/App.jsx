import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Product Store</h1>
        <Routes>
          
          <Route path="/" element={<Navigate to="/products" replace />} />
          
          
          <Route path="/products" element={<ProductList />} />

         
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

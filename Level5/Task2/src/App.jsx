import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import Image from "./assets/images.jpeg"; 
import SmartWatch from "./assets/Smartwatch.jpeg";
import GamingMouse from "./assets/GamingMouse.jpeg"; 
import "./App.css"; // Import your CSS file

const productsData = [
  {
    id: 1,
    name: "Wireless Headphones",
    imageUrl: Image,
    price: 99.99,
    description: "High-quality wireless headphones with noise cancellation."
  },
  {
    id: 2,
    name: "Smart Watch",
    imageUrl: SmartWatch,
    price: 149.99,
    description: "Feature-rich smartwatch with heart rate monitor."
  },
  {
    id: 3,
    name: "Gaming Mouse",
    imageUrl: GamingMouse, 
    price: 49.99,
    description: "Ergonomic gaming mouse with customizable buttons."
  }
];

const Product = ({ product, onAddToCart }) => (
  <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center hover:scale-105 transition-transform">
    <img src={product.imageUrl} alt={product.name} className="w-32 h-32 object-cover mb-4 rounded" />
    <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
    <p className="text-gray-500 mb-2">${product.price}</p>
    <button
      onClick={() => onAddToCart(product)}
      className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
    >
      Add to Cart
    </button>
  </div>
);

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">E-Commerce Store</h1>
        <div className="relative">
          <ShoppingCart size={28} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
              {cart.length}
            </span>
          )}
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productsData.map((product) => (
          <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}

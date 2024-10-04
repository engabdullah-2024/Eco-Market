import React from 'react';
import { useCart } from '../context/CartContext'; // Import the useCart hook

const ProductCard = ({ product }) => {
  const { addToCart, setSuccessMessage } = useCart(); // Use the context

  const handleAddToCart = () => {
    addToCart(product); // Add the product to the cart
    setSuccessMessage(`${product.name} added to cart!`); // Set success message
    alert(`${product.name} added to cart!`); // Optional: Show a confirmation message
  };

  return (
    <div className="border rounded-lg p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <h3 className="text-1xl font-semi-bold">{product.description}</h3>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
      <button 
        onClick={handleAddToCart} 
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

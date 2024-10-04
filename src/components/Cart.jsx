import React from 'react'; 
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Cart = () => {
  const { state, removeFromCart } = useCart(); 
  const navigate = useNavigate(); // Initialize useNavigate for redirecting

  // Calculate total price
  const totalPrice = state.cart.reduce((acc, item) => acc + item.price, 0);

  // Handle payment button click
  const handlePayment = () => {
    // Redirect to PaymentOptions page
    navigate('/paymentOptions');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h2>
      {state.cart.length === 0 ? (
        <div>
          <p className="text-gray-600">Your cart is empty.</p>
          <Link to="/">
            <button className="bg-blue-500 text-white p-4 w-[200px] rounded mt-6">Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <div>
          <ul className="space-y-4">
            {state.cart.map(item => (
              <li key={item.id} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item)} 
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3 className="mt-6 text-xl font-bold text-gray-800">
            Total Price: <span className="text-green-600">${totalPrice.toFixed(2)}</span>
          </h3>
          <button 
            onClick={handlePayment} 
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;

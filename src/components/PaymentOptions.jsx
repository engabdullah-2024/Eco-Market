import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; // Access the cart context
import { Link, useNavigate } from 'react-router-dom'; // useNavigate to navigate back

const PaymentOptions = () => {
  const { state, clearCart, setSuccessMessage } = useCart(); // Import state to check cart contents
  const [selectedOption, setSelectedOption] = useState(''); // State to store selected payment method
  const [paymentStatus, setPaymentStatus] = useState(false); // State to manage payment status
  const navigate = useNavigate(); // For navigation

  // Handle payment confirmation
  const handlePaymentConfirmation = () => {
    if (state.cart.length === 0) {
      alert('No payments made. Please add products to your cart before selecting a payment method!');
      return; // Prevent further execution
    }

    if (selectedOption) {
      // Simulate a successful payment
      alert(`Payment via ${selectedOption} is successful!`);

      // Clear the cart and show a success message
      clearCart();
      setSuccessMessage('Thank you! Your payment was successful.');

      // Set payment status to true
      setPaymentStatus(true);

      // Optionally, navigate back to the homepage or another page after confirmation
      setTimeout(() => {
        navigate('/'); // Redirect to homepage after 2 seconds
      }, 2000);
    } else {
      alert('Please select a payment option!');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Payment Method</h2>
      <div className="flex flex-col space-y-4">
        <label>
          <input
            type="radio"
            name="payment"
            value="PayPal"
            onChange={(e) => setSelectedOption(e.target.value)}
            className="mr-2"
          />
          PayPal
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="Pioneer"
            onChange={(e) => setSelectedOption(e.target.value)}
            className="mr-2"
          />
          Pioneer
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="MasterCard"
            onChange={(e) => setSelectedOption(e.target.value)}
            className="mr-2"
          />
          MasterCard
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="E-Pay"
            onChange={(e) => setSelectedOption(e.target.value)}
            className="mr-2"
          />
          E-Pay
        </label>

        {/* Adding EVC-Plus, SAAD, E-DAHAB, E-DIR options */}
        <label>
          <input
            type="radio"
            name="payment"
            value="EVC-Plus"
            onChange={(e) => setSelectedOption(e.target.value)}
            className="mr-2"
          />
          EVC-Plus
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="SAAD"
            onChange={(e) => setSelectedOption(e.target.value)}
            className="mr-2"
          />
          SAAD
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="E-DAHAB"
            onChange={(e) => setSelectedOption(e.target.value)}
            className="mr-2"
          />
          E-DAHAB
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="E-DIR"
            onChange={(e) => setSelectedOption(e.target.value)}
            className="mr-2"
          />
          E-DIR
        </label>
      </div>
      
      <button
        onClick={handlePaymentConfirmation}
        className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Confirm Payment
      </button>

      {paymentStatus && <p className="mt-4 text-green-600 font-semibold">Payment Successful! Redirecting...</p>}
      
      {/* Option to go back to cart */}
      <Link to="/cart" className="mt-4 block text-blue-500 hover:underline">
        Back to Cart
      </Link>
    </div>
  );
};

export default PaymentOptions;

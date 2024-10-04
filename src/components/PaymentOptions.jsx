import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; // Access the cart context
import { Link, useNavigate } from 'react-router-dom'; // useNavigate to navigate back

const PaymentOptions = () => {
  const { state, clearCart, setSuccessMessage } = useCart(); // Import state to check cart contents
  const [selectedOption, setSelectedOption] = useState(''); // State to store selected payment method
  const [paymentStatus, setPaymentStatus] = useState(false); // State to manage payment status
  const [amount, setAmount] = useState(''); // State to store the entered amount
  const navigate = useNavigate(); // For navigation

  // Handle payment confirmation
  const handlePaymentConfirmation = () => {
    if (state.cart.length === 0) {
      alert('No payments made. Please add products to your cart before selecting a payment method!');
      return; // Prevent further execution
    }

    if (selectedOption && amount) {
      // Simulate a successful payment
      alert(`Payment of $${amount} via ${selectedOption} is successful!`);

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
      alert('Please select a payment option and enter an amount!');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Payment Method</h2>
      
      {/* Payment Options */}
      <div className="flex flex-col space-y-4">
        {['PayPal', 'Pioneer', 'MasterCard', 'E-Pay', 'EVC-Plus', 'SAAD', 'E-DAHAB', 'E-DIR', 'Waafi', 'Dahab Plus', 'Jeep'].map((method) => (
          <div key={method} className="border p-4 rounded-lg flex flex-col">
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="payment"
                value={method}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                  setAmount(''); // Reset amount when selecting a new payment option
                }}
                className="mr-2"
              />
              {method}
            </label>
            <input
              type="number"
              placeholder="Enter amount"
              value={selectedOption === method ? amount : ''}
              onChange={(e) => setAmount(e.target.value)}
              className="border rounded px-2 py-1"
            />
          </div>
        ))}
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

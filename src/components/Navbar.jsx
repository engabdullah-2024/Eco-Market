import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa'; // Import menu and close icons
import { useCart } from '../context/CartContext'; // Import useCart to access cart state

const Navbar = () => {
  const { state } = useCart(); // Access the cart state
  const itemCount = state.cart.length; // Get the number of items in the cart
  const [searchQuery, setSearchQuery] = useState(''); // State to manage search input
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility
  const navigate = useNavigate(); // Hook to navigate to different routes

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to the products page with the search query as a URL parameter
    navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    setSearchQuery(''); // Clear the search input
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-xl font-bold">Eco Market</h1>
        </Link>
        <div className="hidden md:flex items-center"> {/* Desktop Links */}
          <form onSubmit={handleSearch} className="flex items-center mx-4">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 rounded-l-md border-none text-black"
            />
            <button type="submit" className="bg-gray-600 p-2 rounded-r-md">
              <FaSearch className="text-white" />
            </button>
          </form>
          <ul className="flex space-x-4"> {/* Using ul for the menu items */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>
        <Link className="mx-4 flex items-center" to="/cart"> {/* Cart icon separately */}
          <FaShoppingCart className="text-xl" />
          <span className="ml-2">Cart</span> {/* Cart name next to icon */}
          {itemCount > 0 && (
            <span className="ml-1 bg-red-600 rounded-full text-xs px-2 py-1">
              {itemCount}
            </span>
          )}
        </Link>
        <button 
          onClick={toggleMenu} 
          className="md:hidden flex items-center"
        >
          {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 p-4">
          <form onSubmit={handleSearch} className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 rounded-l-md border-none text-black"
            />
            <button type="submit" className="bg-gray-600 p-2 rounded-r-md">
              <FaSearch className="text-white" />
            </button>
          </form>
          <ul className="flex flex-col space-y-2"> {/* Using ul for mobile menu items */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

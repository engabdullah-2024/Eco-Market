import React from 'react';
import Products from './Products';

const Home = () => {
  return (
    <div>

   
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Welcome to Our E-Commerce Store</h1>
      <p className="mt-4">Discover our amazing products!</p>
    </div>
    <Products/>
    </div>
  );
};

export default Home;

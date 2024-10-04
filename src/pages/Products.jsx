import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search') || '';

  // Expanded product list with over 100 items in various categories
  const products = [
    // Electronics
    { id: 1, name: 'Smartphone', price: 399.99, image: 'https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?t=st=1727964928~exp=1727968528~hmac=b6996697cc910a718c125256ca85a68d2070b6c421f0b55c5e7e8974c8ee8464&w=360', description: 'Latest smartphone with a blank screen.' },
    { id: 2, name: 'Laptop', price: 999.99, image: 'https://img.freepik.com/free-photo/office-desktop-with-laptop_23-2148179163.jpg?t=st=1727965614~exp=1727969214~hmac=29a7a64586554d71d4754837d9484da88700c64c828b25e9faeed93c3b77d47c&w=740', description: 'Powerful laptop for all your needs.' },
    { id: 3, name: 'Wireless Headphones', price: 149.99, image: 'https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072227.jpg?t=st=1727965812~exp=1727969412~hmac=e51b0cc6d0c27b612de00ad0dfa6443bcd1259a98fdcb1b0cf219f852de03eea&w=360', description: 'High-quality wireless headphones.' },
    { id: 4, name: 'Smartwatch', price: 199.99, image: 'https://img.freepik.com/free-vector/3d-isolated-electronic-smart-watch-with-sport-band_107791-29294.jpg?t=st=1727965859~exp=1727969459~hmac=3609458e454582c7e7b44ebeadb23d7d93434c4cb42a7557f04c72d182b8de61&w=900', description: 'Stylish smartwatch with fitness tracking.' },
    { id: 5, name: 'Tablet', price: 499.99, image: 'https://img.freepik.com/premium-photo/tablet-with-holographic-energy-drink-floating-isolated-with-copy-space-concept-as-tablet-is_980716-613202.jpg?w=996', description: 'Versatile tablet for work and play.' },
    
    // Cosmetics
    { id: 6, name: 'Cosmetics Package', price: 19.99, image: 'https://img.freepik.com/free-vector/cosmetics-decorative-set_1284-5314.jpg?t=st=1727965973~exp=1727969573~hmac=8a78edf5f43da3c5c30190aff1d3ea22f5ce0b7c06bb6e2de6108bbcc18eb6b7&w=740', description: 'Cosmetics package with a blank surface for branding.' },
    { id: 7, name: 'Lipstick', price: 24.99, image: 'https://img.freepik.com/free-photo/red-lipsticks-background_23-2148978123.jpg?t=st=1727966023~exp=1727969623~hmac=a2b25984ba74617797f01ace74cec2e727b9e0b18a20ac88da52ea6d087b2a22&w=826', description: 'Luxurious lipstick for a perfect pout.' },
    { id: 8, name: 'Foundation', price: 29.99, image: 'https://img.freepik.com/free-photo/foundation-blank-label_125540-1033.jpg', description: 'Smooth foundation for flawless skin.' },
    
    // Clothes
    { id: 9, name: 'T-Shirt', price: 19.99, image: 'https://img.freepik.com/free-photo/blank-t-shirt-front-view_125540-1751.jpg', description: 'Comfortable and stylish t-shirt.' },
    { id: 10, name: 'Jeans', price: 49.99, image: 'https://img.freepik.com/free-photo/blue-jeans-blank-label_125540-1752.jpg', description: 'Classic blue jeans for everyday wear.' },
    { id: 11, name: 'Dress', price: 79.99, image: 'https://img.freepik.com/free-photo/black-dress-blank-label_125540-1753.jpg', description: 'Elegant dress for special occasions.' },
    
    // Home Appliances
    { id: 12, name: 'Blender', price: 59.99, image: 'https://img.freepik.com/free-photo/kitchen-blender-blank-label_125540-1754.jpg', description: 'High-speed blender for smoothies and more.' },
    { id: 13, name: 'Microwave Oven', price: 199.99, image: 'https://img.freepik.com/free-photo/microwave-oven-blank-label_125540-1755.jpg', description: 'Efficient microwave oven for quick meals.' },
    
    // Books
    { id: 14, name: 'Fiction Novel', price: 14.99, image: 'https://img.freepik.com/free-photo/open-book-blank-pages_125540-1756.jpg', description: 'Engaging fiction novel for book lovers.' },
    { id: 15, name: 'Cooking Recipe Book', price: 24.99, image: 'https://img.freepik.com/free-photo/cooking-book-blank-cover_125540-1757.jpg', description: 'Delicious recipes for every occasion.' },
  ];

  // Filter products based on the search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-6 px-4"> {/* Added padding for responsiveness */}
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;

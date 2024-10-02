import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { useFavorites } from '../FavoritesContext';

const Products = () => {
  const { addToCart } = useCart();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const products = [
    { id: 1, name: 'Syltherine', price: 250, image: '/images/image01.png', discount: '30%' },
    { id: 2, name: 'Leviosa', price: 250, image: '/images/image02.png' },
    { id: 3, name: 'Lolito', price: 700, image: '/images/image03.png', discount: '50%' },
    { id: 4, name: 'Respira', price: 500, image: '/images/image04.png', newArrival: true },
    { id: 5, name: 'Grifo', price: 250, image: '/images/image05.png', discount: '30%' },
    { id: 6, name: 'Muggo', price: 250, image: '/images/image06.png' },
    { id: 7, name: 'Pingky', price: 700, image: '/images/image07.png', discount: '50%' },
    { id: 8, name: 'Potty', price: 500, image: '/images/image08.png', newArrival: true },
  ]; 

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    addToCart(product);
  };

  const toggleFavorite = (e, product) => {
    e.preventDefault();
    if (favorites.some(item => item.id === product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
            <Link to={`/product/${product.id}`}>
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    className="bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition mr-2"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={(e) => toggleFavorite(e, product)}
                    className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-200 transition"
                  >
                    {favorites.some(item => item.id === product.id) ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="red" viewBox="0 0 24 24" stroke="red">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">CAD {product.price.toLocaleString()}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
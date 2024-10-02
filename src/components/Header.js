import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { useFavorites } from '../FavoritesContext';

const Header = () => {
  const { cart } = useCart();
  const { favorites } = useFavorites();

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const favoritesCount = favorites.length;

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Adobe Decor</Link>
        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6">
            <li><Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
            <li><Link to="/shop" className="text-gray-600 hover:text-gray-800">Shop</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <Link to="/cart" className="text-gray-600 hover:text-gray-800 relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
          <Link to="/favorites" className="text-gray-600 hover:text-gray-800 relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {favoritesCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </Link>
          <button className="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
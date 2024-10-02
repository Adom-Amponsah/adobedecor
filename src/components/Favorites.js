import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../FavoritesContext';
import { useCart } from '../CartContext';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Favorites</h1>
      {favorites.length === 0 ? (
        <p>You haven't added any favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {favorites.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">CAD. {product.price.toLocaleString()}</p>
                <div className="flex justify-between">
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-yellow-600 text-white px-4 py-2 rounded"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromFavorites(product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
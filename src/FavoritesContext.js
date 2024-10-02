import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (product) => {
    setFavorites(prevFavorites => {
      if (!prevFavorites.some(item => item.id === product.id)) {
        return [...prevFavorites, product];
      }
      return prevFavorites;
    });
  };

  const removeFromFavorites = (productId) => {
    setFavorites(prevFavorites => prevFavorites.filter(item => item.id !== productId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
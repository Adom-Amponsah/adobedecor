import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { CartProvider } from './CartContext';
import { FavoritesProvider } from './FavoritesContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

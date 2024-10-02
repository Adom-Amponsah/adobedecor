import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureIcons from './components/FeatureIcons';
import Home from './components/Home';
import Shop from './components/Shop';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Favorites from './components/Favorites';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <FeatureIcons />
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-purple-700 text-white p-4">
      <ul className="flex justify-around">
        <li>
          <Link to="/" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-gray-300">Products/Services</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

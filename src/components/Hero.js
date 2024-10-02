import React from 'react';
import { Link } from 'react-router-dom';


export const Hero = () => {
  return (
    <div className="relative bg-gray-100 h-[60vh]">
      <div className="absolute inset-0">
        <img src="/images/heroimage.png" alt="Hero" className="w-full h-[60vh] object-cover" />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-30 h-[60vh]"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="bg-white p-8 rounded-lg max-w-md">
          <h2 className="text-3xl font-bold text-yellow-600 mb-4">Discover Our New Collection</h2>
          <p className="text-gray-600 mb-6">Transform your living space with our latest decor collection! </p>
          <Link 
          to="/shop" 
          className="bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300"
        >
          Buy Now
        </Link>        </div>
      </div>
    </div>
  );
};

export default Hero;
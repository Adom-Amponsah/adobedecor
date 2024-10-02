import React from 'react';

const ProductsServices = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">Our Products & Services</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Modern Sofa Set</h2>
        <p className="text-lg text-gray-600 mb-2">Comfortable, stylish, and durable.</p>
        <p className="text-xl font-bold text-purple-700">$1,500</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Elegant Dining Table</h2>
        <p className="text-lg text-gray-600 mb-2">Solid wood, seats six.</p>
        <p className="text-xl font-bold text-purple-700">$1,200</p>
      </div>
    </div>
  );
};

export default ProductsServices;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
            <h3 className="text-xl font-bold mb-4">Adobe Decor</h3>
            <p className="text-gray-600">Toronto, ON M2R 3N7</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Shop</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Payment Options</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policies</a></li>
            </ul>
          </div>
          <div >
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <form className="flex flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="flex-grow px-2 py-2 mb-2 sm:mb-0 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-yellow-600" 
              />
              <button 
                type="submit" 
                className="bg-yellow-600 text-white px-2 py-2 rounded-r hover:bg-yellow-500 transition"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>        </div>
        <div className="mt-12 text-center text-gray-600">
          <p>&copy; 2024 Adobe Decor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
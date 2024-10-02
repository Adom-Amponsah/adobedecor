import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  console.log("Current cart:", cart); // Add this line for debugging

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal; // Add tax or shipping if needed

  return (
    <div className="bg-white">
      <div className="relative bg-gray-100 h-64">
        <img
          src="/images/heroimage.png"
          alt="Cart Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-4">Cart</h1>
          <nav className="text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">&gt;</span>
            <span>Cart</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Product</th>
                    <th className="text-left py-2">Price</th>
                    <th className="text-left py-2">Quantity</th>
                    <th className="text-left py-2">Subtotal</th>
                    <th className="text-left py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-4">
                        <div className="flex items-center">
                          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td>CAD. {item.price.toLocaleString()}</td>
                      <td>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                          className="w-16 text-center border rounded"
                        />
                      </td>
                      <td>CAD. {(item.price * item.quantity).toLocaleString()}</td>
                      <td>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-gray-100 p-6 rounded">
                <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>CAD. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Total</span>
                  <span className="font-bold">CAD. {total.toLocaleString()}</span>
                </div>
                <Link to="/checkout" className="w-full bg-yellow-600 text-white px-6 py-2 rounded block text-center">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <div>
              <h3 className="font-bold">High Quality</h3>
              <p className="text-sm">crafted from top materials</p>
            </div>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div>
              <h3 className="font-bold">Warranty Protection</h3>
              <p className="text-sm">Over 2 years</p>
            </div>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <div>
              <h3 className="font-bold">Free Shipping</h3>
              <p className="text-sm">Order over 150 $</p>
            </div>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <div>
              <h3 className="font-bold">24 / 7 Support</h3>
              <p className="text-sm">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
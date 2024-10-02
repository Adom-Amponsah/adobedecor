import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const Checkout = () => {
  const { cart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('directBankTransfer');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal; 

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'Sri Lanka',
    streetAddress: '',
    townCity: '',
    province: 'Western Province',
    zipCode: '',
    phone: '',
    emailAddress: '',
    additionalInfo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server, process payment)
    console.log('Form submitted:', formData);
    console.log('Payment method:', paymentMethod);
  };

  return (
    <div className="bg-white">
      <div className="relative bg-gray-100 h-64">
        <img
          src="/images/heroimage.png"
          alt="Checkout Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-4">Checkout</h1>
          <nav className="text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">&gt;</span>
            <span>Checkout</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Billing details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block mb-2">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-2">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="companyName" className="block mb-2">Company Name (Optional)</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="country" className="block mb-2">Country / Region</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
                required
              >
                <option value="Sri Lanka">Sri Lanka</option>
                {/* Add more countries as needed */}
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="streetAddress" className="block mb-2">Street address</label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="townCity" className="block mb-2">Town / City</label>
              <input
                type="text"
                id="townCity"
                name="townCity"
                value={formData.townCity}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="province" className="block mb-2">Province</label>
              <select
                id="province"
                name="province"
                value={formData.province}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
                required
              >
                <option value="Western Province">Western Province</option>
                {/* Add more provinces as needed */}
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="zipCode" className="block mb-2">ZIP code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="phone" className="block mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="emailAddress" className="block mb-2">Email address</label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="additionalInfo" className="block mb-2">Additional information</label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
                rows="4"
              ></textarea>
            </div>
          </div>
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Your order</h2>
            <div className="bg-gray-100 p-6 rounded">
              <div className="flex justify-between mb-2 font-bold">
                <span>Product</span>
                <span>Subtotal</span>
              </div>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between mb-2">
                  <span>{item.name} x {item.quantity}</span>
                  <span>CAD. {(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>CAD. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>CAD. {total.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div>
                <label className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="directBankTransfer"
                    checked={paymentMethod === 'directBankTransfer'}
                    onChange={() => setPaymentMethod('directBankTransfer')}
                    className="mr-2"
                  />
                  Direct Bank Transfer
                </label>
                {paymentMethod === 'directBankTransfer' && (
                  <p className="text-sm text-gray-600 ml-6 mb-2">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                  </p>
                )}
              </div>
              <div>
                <label className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    checked={paymentMethod === 'cashOnDelivery'}
                    onChange={() => setPaymentMethod('cashOnDelivery')}
                    className="mr-2"
                  />
                  Cash On Delivery
                </label>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-4">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
              </p>
              <button type="submit" className="w-full bg-yellow-600 text-white px-6 py-2 rounded">
                Place order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
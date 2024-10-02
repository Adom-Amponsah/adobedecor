import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    // Handle form submission (e.g., send data to server)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white">
      <div className="relative bg-gray-100 h-64">
        <img
          src="/images/heroimage.png"
          alt="Contact Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <nav className="text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">&gt;</span>
            <span>Contact</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Get In Touch With Us</h2>
        <p className="text-center text-gray-600 mb-12">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="mb-8">
              <h3 className="font-bold mb-2">Address</h3>
              <p className="text-gray-600">Toronto, ON M2R 3N7</p>
            </div>
            <div className="mb-8">
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-gray-600">Mobile: +1 4167889650</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Working Time</h3>
              <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email"
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  className="w-full px-3 py-2 border rounded"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-yellow-600 text-white px-6 py-2 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
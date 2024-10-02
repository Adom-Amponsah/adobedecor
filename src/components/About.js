import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white">
      <div className="relative bg-gray-100 h-64">
        <img
          src="/images/heroimage.png"
          alt="About Adobe Decor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <nav className="text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">&gt;</span>
            <span>About</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <p className="mb-6">
            Adobe Decor was founded in 2024 with a passion for creating beautiful, functional, and sustainable home furnishings. Our journey began in a small workshop in Toronto, where our team of skilled artisans crafted unique pieces that blended modern design with traditional craftsmanship.
          </p>
          <p className="mb-6">
            Over the years, we've grown from a local boutique to a nationally recognized brand, but our core values remain the same. We believe in the power of good design to transform spaces and improve lives. Every piece in our collection is thoughtfully created to bring beauty, comfort, and functionality to your home.
          </p>
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="mb-6">
            At Adobe Decor, our mission is to inspire and enable our customers to create living spaces that reflect their personal style and enhance their daily lives. We strive to offer high-quality, innovative furniture and home accessories that are not only aesthetically pleasing but also environmentally responsible.
          </p>
          <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Quality: We use only the finest materials and employ skilled craftspeople to ensure each piece meets our high standards.</li>
            <li>Sustainability: We're committed to eco-friendly practices, from sourcing sustainable materials to minimizing waste in our production process.</li>
            <li>Innovation: We continuously explore new designs and technologies to bring fresh, exciting products to our customers.</li>
            <li>Customer Satisfaction: Your happiness is our priority. We offer exceptional customer service and stand behind every product we sell.</li>
          </ul>
          <p>
            Thank you for choosing Adobe Decor. We look forward to helping you create a home that you'll love for years to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
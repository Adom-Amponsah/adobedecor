import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">About Adobe Decor</h1>
      <p className="text-gray-700 mb-6">
        Founded in 2024, Adobe Decor aims to provide high-quality, affordable furniture and home décor.
        Our mission is to help you create the home of your dreams.
      </p>
      <h2 className="text-2xl font-semibold text-purple-600 mb-4">Our Team</h2>
      <ul className="list-disc pl-6">
        <li><strong>John Doe:</strong> Founder & CEO</li>
        <li><strong>Jane Smith:</strong> Head of Design</li>
      </ul>
    </div>
  );
};

export default AboutUs;

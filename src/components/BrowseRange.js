import React from 'react';

const BrowseRange = () => {
  const categories = [
    { name: 'Dining', image: '/images/dining.png' },
    { name: 'Living', image: '/images/living.png' },
    { name: 'Bedroom', image: '/images/bedroom.png' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Browse The Range</h2>
        <p className="text-center text-gray-600 mb-12">Explore a diverse selection of decor items that elevate your space.</p>
        <div className="flex gap-12 justify-center ">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <img src={category.image} alt={category.name} className="w-full h-128  rounded-lg mb-4 object-contain" />
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseRange;
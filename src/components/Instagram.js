import React from 'react';

const Instagram = () => {
  const images = [
    '/images/image01.png',
    '/images/image02.png',
    '/images/image03.png',
    '/images/image04.png',
    '/images/image05.png',
    '/images/image06.png',
    '/images/image07.png',
    '/images/image08.png',
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-2">Share your setup with</h2>
        <p className="text-center text-3xl font-bold text-gray-800 mb-12">#AdobeDecor</p>
        <div className="grid grid-cols-4 gap-4 auto-rows-auto">
          <div className="col-span-1 row-span-2">
            <img src={images[0]} alt="Instagram 1" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="col-span-2 row-span-2 mx-6">
            <img src={images[1]} alt="Instagram 2" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src={images[2]} alt="Instagram 3" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src={images[3]} alt="Instagram 4" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src={images[4]} alt="Instagram 5" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src={images[5]} alt="Instagram 6" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src={images[6]} alt="Instagram 7" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src={images[7]} alt="Instagram 8" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
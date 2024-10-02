import React, { useState } from 'react';

const RoomInspiration = () => {
    const rooms = [
        { id: '01', name: 'Bed Room', title: 'Inner Peace', image: '/images/slider01.png' },
        { id: '02', name: 'Living Room', title: 'Cozy Corner', image: '/images/image06.png' },
        { id: '03', name: 'Kitchen', title: 'Culinary Haven', image: '/images/image05.png' },
      ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % rooms.length);
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          {/* Left part: 50+ text */}
          <div className="md:w-1/3 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">50+ Beautiful rooms inspiration</h2>
            <p className="text-gray-600 mb-6">Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
            <button className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-500 transition w-fit">
              Explore More
            </button>
          </div>

          {/* Middle part: Main image with Inner Peace text */}
          <div className="md:w-1/3 relative">
            <img src="/images/innerpeace.png" alt="Inner Peace" className="w-full h-[500px] object-cover rounded-lg" />
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-md">
              <span className="text-gray-500 text-sm">01 — Bed Room</span>
              <h3 className="text-xl font-semibold">Inner Peace</h3>
            </div>
          </div>

          {/* Right part: Image slider */}
          <div className="md:w-1/3 relative">
            <img 
              src={rooms[currentIndex].image} 
              alt={rooms[currentIndex].title} 
              className="w-full h-[300px] object-fill rounded-lg mb-4"
            />
            <button 
              onClick={nextSlide}
              className="absolute bottom-6 right-6 bg-yellow-600 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-yellow-500 transition"
            >
              <span className="sr-only">Next</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div className="flex justify-center space-x-2 mt-4">
              {rooms.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-yellow-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomInspiration;
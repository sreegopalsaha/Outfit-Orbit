import React from 'react';

const Studio = () => {
  return (
    <div className="max-w-6xl mx-auto mt-6 mb-6 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6">
        <h2 className="text-2xl font-bold text-white text-center">Outfit Orbit Studio Store</h2>
        <p className="text-white text-center mt-2">Designed by top designers from WorldWide.</p>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 text-center">Coming Soon!</h3>
        <p className="text-gray-600 text-center mt-2">
          Stay tuned for our grand opening and exclusive offers! 🎉🎉
        </p>
        <div className="mt-4 text-center">
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500 transition duration-300">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Studio;
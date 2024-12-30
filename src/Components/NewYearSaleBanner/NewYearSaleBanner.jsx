import React, { useEffect, useState } from 'react';

const NewYearSaleBanner = () => {
  const [timeLeft, setTimeLeft] = useState(72 * 60 * 60); // 72 hours in seconds
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = String(Math.floor((seconds % (60 * 60 * 24)) / (60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((seconds % (60 * 60)) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  };

  const handleExploreMoreClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="relative overflow-hidden p-8 flex flex-col items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-white opacity-10"></div>
      <div className="relative z-10">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-gray-200 to-red-200 bg-clip-text text-transparent uppercase mb-2">
          NEW YEAR SALE
        </h1>
        <h2 className="text-4xl font-bold text-red-600 mb-4">
          <span className="text-red-600 p-1">Up to 50% OFF</span>
        </h2>
        <div className="text-red-600 text-5xl font-bold p-2 rounded mb-4">
          {timeLeft > 0 ? formatTime(timeLeft) : 'Sale Ended!'}
        </div>
        <button
          onClick={handleExploreMoreClick}
          className="text-red-500 px-9 py-2 rounded transition duration-300"
        >
          Explore More
        </button>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Coming Soon!!</h2>
            <button
              onClick={handleClosePopup}
              className="bg-red-600 text-white px-4 py-2 rounded transition duration-300 hover:bg-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewYearSaleBanner;
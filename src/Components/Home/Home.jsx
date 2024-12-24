import React, { useState, useEffect } from "react";
import CategoryCards from "../CatagoryCards/CatagoryCards";
import TrendingItems from "../TrendingItems/TrendingItems";
import WinterClothing from "../SeasonalSpecialClothes/WinterClothing";
import OfferBanner from "../OfferBanner/OfferBanner";
import gozzayz from "../../assets/Images/gozzayz.png";
import vogue from "../../assets/Images/vogue1.png";
import Kids from "../../assets/Images/Kids.png";

const images = [
  { src: gozzayz, alt: "Stylish Outfit - Westworld" },
  { src: vogue, alt: 'Winter Outfit' },
  // { src: MenTrend, alt: 'Winter Outfit' },
  { src: Kids, alt: 'Winter Outfit' },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 7 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
    <div className="relative aspect-w-16 aspect-h-9 w-full h-screen overflow-hidden mb-10">
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <button className="px-6 py-2 text-lg font-semibold text-white bg-red-600 rounded hover:bg-red-500 transition duration-300">
          Explore More
        </button>
      </div>
    </div>
      <CategoryCards/>
      <TrendingItems/>
      <OfferBanner/>
      <WinterClothing/>
      
    </>
  );
};

export default Home;

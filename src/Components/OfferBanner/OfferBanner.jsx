import React from 'react';
import OfferBannerImg from '../../assets/Images/offerBanner.avif'
const OfferBanner = () => {
    const handleClick = () => {
        // Handle the click event, e.g., navigate to the offer page
        window.location.href = "#offer"; // Replace with your offer link
    };

    return (
        <div 
            className="w-4/5 h-[37vh] mx-auto my-4 cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            onClick={handleClick}
        >
            <img 
                src= {OfferBannerImg }// Replace with your offer image
                alt="Special Offer"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold">
                <span>Special Offer: 20% OFF!</span>
            </div>
        </div>
    );
};

export default OfferBanner;
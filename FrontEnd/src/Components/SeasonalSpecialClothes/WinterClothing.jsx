import React from 'react';
import winter1 from '../../assets/Images/Winter1.png'
import winter2 from '../../assets/Images/winter2.png'
import winter3 from '../../assets/Images/winter3.png'

const winterClothingItems = [
    { id: 1, name: "Bomber Jacket", image: winter1, link: "#link1"},
    { id: 2, name: "Fur Jacket", image: winter2, link: "#link2" },
    { id: 3, name: "Half Puller Sweater", image: winter3, link: "#link3",}
];

const WinterClothing = () => {
    return (
        <div className="max-w-6xl mx-auto text-center p-4">
            <h1 className="text-3xl font-bold mb-6">Winter Clothing</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {winterClothingItems.map(item => (
                    <a
                        key={item.id}
                        href={item.link}
                        className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
                    >
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{item.name}</h2>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default WinterClothing;
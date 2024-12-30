import React from 'react';
import card1 from '../../assets/Images/card4.png'
import straightjeans from '../../assets/Images/straightjeans.png'
import warptops from '../../assets/Images/warptops.png'
import politshirts from '../../assets/Images/polotshirts.png'
import overshirts from '../../assets/Images/overshirts.png'
import oversizedshirts from '../../assets/Images/oversizedshirt.png'
const trendingItems = [
    { id: 1, name: "Oversized Blazzer", image: oversizedshirts, link: "#item1" },
    { id: 2, name: "Straight Jeans", image: straightjeans, link: "#item2" },
    { id: 3, name: "Warp Tops", image: warptops, link: "#item3" },
    { id: 4, name: "Kids T-Shirts", image:  card1, link: "#item4" },
    { id: 5, name: "Polo T-Shirts", image: politshirts , link: "#item5" },
    { id: 6, name: "Overshirts", image: overshirts, link: "#item6" },
];

const TrendingItems = () => {
    return (
        <div className="max-w-6xl mx-auto text-center p-4">
            <h1 className="text-3xl font-bold mb-6">Trending Items</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {trendingItems.map(item => (
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

export default TrendingItems;
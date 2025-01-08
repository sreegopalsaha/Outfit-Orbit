import { useState, useEffect } from "react";

const OfferRelatedText = () => {
  const [currentSentence, setCurrentSentence] = useState(0);

  const sentences = [
    "Get 50% off on your first purchase!",
    "Limited time offer – Shop now!",
    "Free shipping on orders above $50.",
    "Buy 1, Get 1 free on selected items.",
    "Don't miss out on our special discounts!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentence((prev) => (prev + 1) % sentences.length); // Cycle through sentences
    }, 6000); // 7 seconds (5 seconds stay + 2 seconds transition)

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="relative overflow-hidden h-7 flex justify-center items-center bg-gray-100">
      <div
        className="absolute text-sm text-red-700 animate-slide"
        key={currentSentence} // Key ensures re-render on sentence change
      >
        {sentences[currentSentence]}
      </div>
    </div>
  );
};

export default OfferRelatedText;

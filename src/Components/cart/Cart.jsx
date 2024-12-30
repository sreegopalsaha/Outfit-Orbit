import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      image: 'https://via.placeholder.com/150',
      size: 'M',
      price: 20,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/150',
      size: 'L',
      price: 30,
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxes = subtotal * 0.1; // 10% tax
  const total = subtotal + taxes;

  return (
    <div className="container mx-auto p-4 bg-blue-400">
      {cartItems.length === 0 ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Your cart is empty!</h2>
          <p className="mt-2">Start shopping now.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Go to Store
          </button>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b py-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mr-4" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{ item.name}</h3>
                  <p className="text-sm">Size: {item.size}</p>
                  <div className="flex items-center mt-2">
                    <button onClick={() => handleQuantityChange(item.id, -1)} className="bg-gray-300 px-2 py-1 rounded">-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)} className="bg-gray-300 px-2 py-1 rounded">+</button>
                  </div>
                  <p className="mt-2">Price: ${item.price.toFixed(2)}</p>
                  <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 mt-2">Remove Item</button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 md:mt-0 md:ml-4 md:w-1/3 border p-4 bg-gray-100">
            <h2 className="text-xl font-bold mb-4">Summary</h2>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Taxes: ${taxes.toFixed(2)}</p>
            <p className="font-bold">Total: ${total.toFixed(2)}</p>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded w-full">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
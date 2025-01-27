import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginUiImg from "../../Components/LoginPage/LoginPage.jsx";
// import SignUpUiImg from "../../assets/Images/signupUiImg.jpeg"; // Make sure to replace with your actual image path

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Name:', name);
    console.log('Number:', number);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <h1 className='font-playfair text-center text-5xl md:text-9xl font-light mt-12 cursor-default'>
          OUTFIT ORBIT
      </h1>
      <div className="flex flex-col md:flex-row flex-grow">
        <div className="hidden md:block flex-1 items-center justify-center p-4">
          <img 
            src={LoginUiImg}
            srcSet="image-small.jpg 320w, 
                    image-medium.jpg 768w, 
                    image-large.jpg 1200w" // to set different images in different screen
            sizes="(max-width: 768px) 100vw, 
                  (min-width: 769px) 50vw" // to set the images sizes
  
            alt="SignUpUiImg" 
            className=' w-full max-w-md h-auto'
          />
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <form onSubmit={handleSubmit} className="w-full max-w-sm bg-[#d1e7ae] p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="appearance-none border-b border-black w-full py-2 px-2 leading-tight focus:outline-none focus:ring-0 focus:border-[#6495ED] bg-[#d1e7ae]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
                Number
              </label>
              <input
                type="tel"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
                className="appearance-none border-b border-black w-full py-2 px-2 leading-tight focus:outline-none focus:ring-0 focus:border-[#6495ED] bg-[#d1e7ae]"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="appearance-none border-b border-black w-full py-2 px-2 leading-tight focus:outline-none focus:ring-0 focus:border-[#6495ED] bg-[#d1e7ae]"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="appearance-none border-b border-black w-full py-2 px-2 leading-tight focus:outline-none focus:ring-0 focus:border-[#6495ED] bg-[#d1e7ae]"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#6495ED] hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Sign Up
              </button>
            </div>
            <p className="text-center text-gray-600 text-sm mt -7">
              Already have an account?{' '}
              <Link to="/login" className="text-purple-600 hover:text-purple-500 font-semibold">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginUiImg from "../../assets/Images/loginUiImg.jpeg";

const LoginPage = () => {
  const [Number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className=" items-start justify-start ">
        <img 
        src={LoginUiImg}
        alt="LoginUiImg" 
        className='ml-16 mt-16 w-1/2 h-auto bg-pink-700'
        />
      </div>
      <div className="flex items-center justify-center">
  <form onSubmit={handleSubmit} className="w-full max-w-sm h-64 bg-[#d1e7ae] p-8 rounded-2xl shadow-md leading-none">
    {/* <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2> */}
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Number
      </label>
      <input
        type="tel"
        id="Number"
        value={Number}
        onChange={(e) => setNumber(e.target.value)}
        required
        className="appearance-none border-b border-black w-1/2 py-2 px-2 leading-tight focus:outline-none focus:ring-0 focus:border-purple-500 bg-[#d1e7ae]"
        // placeholder="Enter your mobile number"
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
        className="appearance-none border-b border-black w-1/2 py-2 px-2 leading-tight focus:outline-none focus:ring-0 focus:border-purple-500 bg-[#d1e7ae]"
        // placeholder="********"
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        type="submit"
        className="bg-[#6495ED] hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        Login
      </button>
    </div>
    <p className="text-center text-gray-600 text-sm mt-7">
      Don't have an account?{' '}
      <Link to="/register" className="text-purple-600 hover:text-purple-500 font-semibold">
        Sign Up
      </Link>
    </p>
  </form>
</div>

          
        {/* <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login to Outfit Orbit</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="you@example.com"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="********"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
          <p className="text-center text-gray-600 text-xs mt-4">
            Don't have an account? <a href="/register" className="text-purple-600 hover:text-purple-500">Sign Up</a>
          </p>
        </form> */}
      {/* </div> */}
    </div>
  );
};

export default LoginPage;
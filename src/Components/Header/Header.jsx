import React, { useState } from 'react';
import { Link, NavLink} from 'react-router-dom';
import Cart from '../cart/Cart';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header>
        <div className="bg-gray-100 text-center py-2 text-sm text-gray-600">
          Get 15% OFF - Use Coupon Code WINTER15
        </div>
        <nav className="flex items-center justify-between py-4 px-6 border-b">
          <Link className="flex items-center">
            <img src='https://img.icons8.com/?size=100&id=pOa8st0SGd5C&format=png&color=000000' alt="Outfit Orbit" className="h-10 w-10"/>
            <span className="ml-2 text-lg font-medium text-gray-800">Outfit Orbit</span>
          </Link>
          <div className="hidden md:flex space-x-8 text-gray-600">
            <Link to="#" className="hover:text-black">MEN</Link>
            <Link to="#" className="hover:text-black">WOMEN</Link>
            <Link to="#" className="hover:text-black">KIDS</Link>
            <Link to="#" className="hover:text-black">STUDIO</Link>
            {/* Search Bar */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search for products" 
                className="border rounded-2xl py-1 px-2 text-gray-600 text-center focus:outline-slate-400"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4 text-gray-600">
            <Link to="LoginPage" className="flex items-center hover:text-black">
              <i className="fas fa-user"></i>
              <span className="ml-1">Log In</span>
            </Link>
            <Link to="Cart" className="flex items-center hover:text-black">
              <img
                src="https://img.icons8.com/?size=100&id=G7PELQpF8j6g&format=png&color=000000"
                alt="Shopping Cart"
                className="w-6 h-6"
              />
  <span className="ml-1"></span>
</Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Link>
            <button onClick={toggleSidebar} className="text-gray-600 hover:text-black">
              <img src="https://img.icons8.com/?size=100&id=PpSBa7iaIak3&format=png&color=000000" alt="Hamburger" 
              className='h-6 w-6'
              />
            </button>
            </Link>
          </div>
        </nav>
        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50 shadow-lg p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Menu </h2>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search for products" 
                  className="border rounded-2xl py-1 px-2 text-gray-600 text-center focus:outline-slate-400"
                />
              </div>
              <button onClick={toggleSidebar} className="text-gray-600 hover:text-black">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="flex flex-col space-y-2 mt-4 text-gray-600">
              <a href="#" className="hover:text-black">MEN</a>
              <a href="#" className="hover:text-black">WOMEN</a>
              <a href="#" className="hover:text-black">KIDS</a>
              <a href="#" className="hover:text-black">STUDIO</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
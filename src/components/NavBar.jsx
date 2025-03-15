import React from 'react'
import {  Home,  Ticket } from 'lucide-react';

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800/50 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Ticket className="w-6 h-6 text-purple-400" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Coupon Hub
            </h1>
          </div>
          <nav>
            <ul className="flex items-center space-x-8">
              <li>
                <a href="/" className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200">
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default NavBar

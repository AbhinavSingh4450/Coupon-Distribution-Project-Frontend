import React from "react";
import { Ticket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-lg border-t border-gray-800/50 text-gray-400 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <Ticket className="w-5 h-5 text-purple-400" />
            <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Coupon Hub
            </span>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Coupon Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

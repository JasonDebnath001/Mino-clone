// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-8 md:px-12 z-50 text-white">
      {/* Logo */}
      <img src="./logo.png" alt="Logo" className="w-30" />

      {/* Navigation links */}
      <nav className="hidden md:flex space-x-8 text-xs uppercase tracking-widest font-medium">
        <a href="#works" className="hover:text-gray-300 transition-colors">
          Works
        </a>
        <a href="#services" className="hover:text-gray-300 transition-colors">
          Services
        </a>
        <a href="#about" className="hover:text-gray-300 transition-colors">
          About
        </a>
        <a href="#careers" className="hover:text-gray-300 transition-colors">
          Careers
        </a>
        <a href="#blog" className="hover:text-gray-300 transition-colors">
          Blog
        </a>
      </nav>

      {/* Call to Action Button */}
      <button className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-gray-200 transition">
        Get in touch
      </button>
    </header>
  );
};

export default Navbar;

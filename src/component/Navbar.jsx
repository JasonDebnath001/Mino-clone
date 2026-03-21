// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [isScrolled, setIsScrolled] = useState(false);
  
  // NEW: State to control the mobile menu
  const [isOpen, setIsOpen] = useState(false);
  
  const location = useLocation();
  const currentPath = location.pathname;

  // 1. Scroll and Theme Logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section, footer, main, div");
      let currentActiveSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentActiveSection = section;
        }
      });

      if (currentActiveSection) {
        if (
          currentActiveSection.classList.contains("bg-[#f4f4f4]") ||
          currentActiveSection.classList.contains("bg-white")
        ) {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const getLinkClass = (path) => {
    const isActive = currentPath === path;
    return `transition-colors duration-300 ${
      isActive ? "text-blue-500" : "hover:text-gray-400"
    }`;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 md:px-12 z-40 transition-all duration-500 ${
          isScrolled
            ? theme === "light"
              ? "bg-[#f4f4f4]/80 backdrop-blur-md shadow-sm" 
              : "bg-black/50 backdrop-blur-md" 
            : "bg-transparent"
        } ${theme === "light" ? "text-black" : "text-white"}`}
      >
        {/* Logo */}
        <Link to="/">
          <img
            src="./logo.png"
            alt="Logo"
            className={`w-24 md:w-28 transition-all duration-500 ${
              theme === "light" ? "invert" : "invert-0"
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-xs uppercase tracking-widest font-medium transition-colors duration-500">
          <Link to="/works" className={getLinkClass("/works")}>Works</Link>
          <Link to="/services" className={getLinkClass("/services")}>Services</Link>
          <Link to="/about" className={getLinkClass("/about")}>About</Link>
          <Link to="/careers" className={getLinkClass("/careers")}>Careers</Link>
          <Link to="/blog" className={getLinkClass("/blog")}>Blog</Link>
        </nav>

        {/* Right Side Controls (CTA + Hamburger) */}
        <div className="flex items-center gap-4">
          {/* Call to Action Button */}
          <button
            className={`px-5 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wide transition-all duration-500 ${
              theme === "light"
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            Get in touch
          </button>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden p-1 focus:outline-none"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            {/* currentColor automatically matches the header text (black/white) */}
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* --- MOBILE MENU OVERLAY & DRAWER --- */}
      
      {/* 1. Dark Backdrop Overlay (Clicks close the menu) */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* 2. Slide-in Drawer (Takes 75% of screen on mobile) */}
      <div 
        className={`fixed top-0 left-0 h-full w-[75%] sm:w-[60%] bg-[#111111] z-[60] flex flex-col px-8 py-12 transform transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)} 
          className="self-start text-white/50 hover:text-white transition-colors mb-12"
          aria-label="Close Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Mobile Navigation Links */}
        {/* We explicitly set text-white here because the drawer is always dark */}
        <nav className="flex flex-col space-y-8 text-xl font-medium tracking-wide text-white">
          <Link to="/works" onClick={() => setIsOpen(false)} className={getLinkClass("/works")}>Works</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className={getLinkClass("/services")}>Services</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className={getLinkClass("/about")}>About</Link>
          <Link to="/careers" onClick={() => setIsOpen(false)} className={getLinkClass("/careers")}>Careers</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className={getLinkClass("/blog")}>Blog</Link>
        </nav>

        {/* Extra Bottom Content (Optional: Socials, Contact info, etc.) */}
        <div className="mt-auto text-white/50 text-xs tracking-widest uppercase">
          <p>Ipoly Studio © 2026</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
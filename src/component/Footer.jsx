// src/components/Footer.jsx
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Fade-in animation with safe initial visibility (no forced hidden state before scroll)
      const items = containerRef.current?.querySelectorAll(".reveal-item");
      if (!items || items.length === 0) return;

      gsap.from(items, {
        opacity: 0,
        duration: 1.5,
        stagger: 0.15,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <footer
      ref={containerRef}
      // UPDATED: Tighter vertical padding (py-12 instead of pt-24/pb-24)
      className="relative z-50 bg-black text-white py-12 px-6 md:px-12 lg:px-24 font-sans w-full"
    >
      {/* --- TOP SECTION --- */}
      {/* UPDATED: Reduced the gap to keep it compact */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
        {/* Left Side: Large Vertical Navigation */}
        {/* UPDATED: Slightly scaled down the text on desktop from 4rem to 3.5rem */}
        <nav className="flex flex-col space-y-1 text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight leading-tight">
          <Link
            to="/"
            className="reveal-item text-gray-500 hover:text-white transition-colors inline-block pointer-events-auto cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/works"
            className="reveal-item hover:text-gray-400 transition-colors inline-block pointer-events-auto cursor-pointer"
          >
            Works
          </Link>
          <Link
            to="/services"
            className="reveal-item hover:text-gray-400 transition-colors inline-block pointer-events-auto cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="reveal-item hover:text-gray-400 transition-colors inline-block pointer-events-auto cursor-pointer"
          >
            About Us
          </Link>
          <Link
            to="/careers"
            className="reveal-item hover:text-gray-400 transition-colors inline-block pointer-events-auto cursor-pointer"
          >
            Careers
          </Link>
          <Link
            to="/blog"
            className="reveal-item hover:text-gray-400 transition-colors inline-block pointer-events-auto cursor-pointer"
          >
            Blog
          </Link>
        </nav>

        {/* Right Side: Contact, Socials, and Newsletter */}
        <div className="flex flex-col w-full lg:w-[450px] xl:w-[500px] mt-4 lg:mt-0">
          <div className="flex justify-between items-start mb-12">
            {/* Contact Column */}
            <div className="reveal-item">
              <h4 className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">
                Contact
              </h4>
              <ul className="space-y-1 text-sm font-light">
                <li>+216 56 502 160</li>
                <li className="pt-1 text-gray-300">Around the world.</li>
              </ul>
            </div>

            {/* Our Voice Column */}
            <div className="reveal-item pr-8">
              <h4 className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">
                Our Voice
              </h4>
              <ul className="space-y-1 text-sm font-light">
                <li>
                  <a
                    href="https://www.instagram.com/ipoly_studio/?hi=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors flex items-center justify-between w-24"
                  >
                    Instagram <span className="text-[10px]">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/ipoly-studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors flex items-center justify-between w-24"
                  >
                    Linkedin <span className="text-[10px]">↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Row: Newsletter Subscription */}
          <div className="reveal-item">
            <h4 className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-gray-400 mb-6">
              Subscribe to our newsletter
            </h4>
            <form className="flex items-end gap-4 w-full">
              <div className="flex-grow border-b border-gray-600 pb-2">
                <input
                  type="email"
                  placeholder="Enter your email*"
                  className="bg-transparent w-full text-sm text-white placeholder-gray-400 focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-white text-black px-6 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* --- BOTTOM SECTION: Giant Logo & Copyright --- */}
      {/* UPDATED: Slashed mt-32 down to mt-16 to pull the bottom section up */}
      <div className="flex flex-col md:flex-row justify-between items-end mt-16 lg:mt-20 gap-8 md:gap-0">
        {/* Giant Logo */}
        <div className="reveal-item w-full md:w-auto">
          <img
            src="./logo.png"
            alt="Mino Logo"
            // UPDATED: Hardcoded responsive widths instead of w-full to keep it under control
            className="w-48 md:w-64 lg:w-72 h-auto object-contain object-left"
          />
        </div>

        {/* Copyright */}
        <div className="reveal-item w-full md:w-auto text-left md:text-right">
          <p className="text-[10px] md:text-xs text-gray-400 font-light leading-snug tracking-wide">
            MMXXV © Ipoly Studio. ALL
            <br />
            RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

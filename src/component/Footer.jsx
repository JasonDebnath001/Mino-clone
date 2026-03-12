// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-8 px-6 md:px-12 lg:px-24 font-sans w-full overflow-hidden">
      {/* --- TOP SECTION --- */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8">
        {/* Left Side: Large Vertical Navigation */}
        <nav className="flex flex-col space-y-1 text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight leading-tight">
          <a
            href="#"
            className="text-gray-500 hover:text-white transition-colors"
          >
            Home
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Works
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            About Us
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Careers
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Blog
          </a>
        </nav>

        {/* Right Side: Contact, Socials, and Newsletter */}
        <div className="flex flex-col w-full lg:w-[450px] xl:w-[500px] mt-4 lg:mt-0">
          {/* Top Row: Contact & Voice */}
          <div className="flex justify-between items-start mb-16">
            {/* Contact Column */}
            <div>
              <h4 className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">
                Contact
              </h4>
              <ul className="space-y-1 text-sm font-light">
                <li>+216 56 502 160</li>
                <li className="pt-1 text-gray-300">Around the world.</li>
              </ul>
            </div>

            {/* Our Voice Column */}
            <div className="pr-8">
              <h4 className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">
                Our Voice
              </h4>
              <ul className="space-y-1 text-sm font-light">
                <li>
                  <a
                    href="https://www.instagram.com/ipoly_studio/?hi=en"
                    className="hover:text-gray-300 transition-colors flex items-center justify-between w-24"
                  >
                    Instagram <span className="text-[10px]">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/ipoly-studio"
                    className="hover:text-gray-300 transition-colors flex items-center justify-between w-24"
                  >
                    Linkedin <span className="text-[10px]">↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Row: Newsletter Subscription */}
          <div>
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
      <div className="flex flex-col md:flex-row justify-between items-end mt-24 md:mt-32 gap-8 md:gap-0">
        {/* Giant Logo */}
        <div className="w-full md:w-[70%]">
          <img
            src="./logo.png"
            alt="Mino Logo"
            className="w-full h-auto object-contain object-left"
            // Ensures the image scales to fill the width but stays aligned to the left
          />
        </div>

        {/* Copyright */}
        <div className="w-full md:w-auto text-left md:text-right">
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

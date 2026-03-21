// src/components/Hero.jsx
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import heroBg from "../assets/hero-bg.jpg";

const Hero = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // Reveal animation for the text and the square
      gsap.from(".reveal-element", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative h-screen w-full bg-cover bg-center text-white flex items-end pb-12 px-6 md:px-12"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* UPDATED: Changed to flex-col on mobile so "Scroll Down" 
        doesn't squeeze the text, and md:flex-row for desktop 
      */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-0">
        {/* MAIN HERO CONTENT (Bottom Left) */}
        <div className="flex flex-col">
          {/* UPDATED: Added pb-2 to prevent the bottom of letters from getting sliced */}
          <div className="overflow-hidden pb-2">
            {/* UPDATED: text-4xl for mobile, slightly looser leading on mobile (1.1) */}
            <h1 className="reveal-element text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] md:leading-[1.05] font-bold tracking-tight">
              A New Era of
            </h1>
          </div>
          <div className="overflow-hidden pb-2">
            <h1 className="reveal-element text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] md:leading-[1.05] font-bold tracking-tight">
              Architectural Visualization
            </h1>
          </div>
          {/* The distinct white square block */}
          <div className="overflow-hidden mt-2 md:mt-4 pb-1">
            <div className="reveal-element w-4 h-4 md:w-5 md:h-5 bg-white"></div>
          </div>
        </div>

        {/* SCROLL DOWN INDICATOR (Bottom Right) */}
        {/* UPDATED: Added self-end on mobile to push it to the right side if it stacks */}
        <div className="text-[10px] md:text-xs uppercase tracking-widest font-medium mb-2 self-start md:self-end text-gray-300">
          (Scroll Down)
        </div>
      </div>
    </section>
  );
};

export default Hero;

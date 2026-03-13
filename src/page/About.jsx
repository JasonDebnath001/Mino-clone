import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const About = () => {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Animate the main center titles first
    tl.from('.center-text', {
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out',
    })
    // Animate the bottom footer elements right after
    .from('.bottom-element', {
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power2.out',
    }, "-=0.6"); // The "-=0.6" makes this animation overlap with the previous one
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative h-screen w-full bg-[#111111] text-[#e8e8e8] flex flex-col justify-center items-center overflow-hidden"
    >
      {/* --- CENTER TITLES --- */}
      <div className="flex flex-col items-center z-10 mt-12 md:mt-0">
        <h1 className="center-text text-[20vw] md:text-[14rem] font-serif leading-none tracking-tight">
          MINO
        </h1>
        <p className="center-text mt-2 md:mt-6 text-xs md:text-sm tracking-[0.5em] md:tracking-[0.8em] uppercase text-gray-400">
          Studio
        </p>
      </div>

      {/* --- BOTTOM LAYOUT --- */}
      {/* Using a 3-column grid on desktop, stacking on mobile */}
      <div className="absolute bottom-8 md:bottom-12 w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 items-end gap-8 z-10">
        
        {/* Left: Indicator */}
        <div className="bottom-element text-xs md:text-sm uppercase tracking-widest text-gray-400 hidden md:block">
          (Statement)
        </div>

        {/* Center: Paragraph */}
        <div className="bottom-element flex justify-center md:justify-start">
          <p className="max-w-md text-sm md:text-base leading-relaxed text-gray-300">
            Architecture is not merely about constructing buildings; it is about crafting environments that resonate with the human spirit. At Mino Studio, we believe that every project presents a unique opportunity to harmonize form and function, creating spaces that inspire and elevate everyday experiences.
          </p>
        </div>

        {/* Right: Scroll Indicator & Mobile Statement */}
        <div className="bottom-element flex justify-between md:justify-end text-xs md:text-sm uppercase tracking-widest text-gray-400">
          <span className="md:hidden">(Statement)</span>
          <span>(Scroll Down)</span>
        </div>

      </div>
    </section>
  );
};

export default About;
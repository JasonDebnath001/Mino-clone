// src/components/TrustReveal.jsx
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TrustReveal = () => {
  const containerRef = useRef(null);
  const slideRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%", // Keeps it pinned long enough to read and slide
          pin: true,
          scrub: 1,
        },
      });

      // Animate the single slide up from the bottom over the intro text
      tl.to({}, { duration: 0.2 }).to(slideRef.current, {
        yPercent: -100, // Slides up 100% of its height
        duration: 1,
        ease: "power2.inOut",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-[#f4f4f4] overflow-hidden"
    >
      {/* --- LAYER 1: The Intro Text --- */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#111111]">
          About <span className="text-[#0000ff]">Us.</span>
        </h2>
      </div>

      {/* --- LAYER 2: The Sliding Grid Slide --- */}
      <div
        ref={slideRef}
        className="absolute left-0 w-full h-full bg-[#f4f4f4] z-10 overflow-y-auto"
        style={{ top: "100%" }} // Starts directly below the screen
      >
        <div className="min-h-full p-6 md:p-12 lg:p-24 pb-32">
          {/* Masonry Grid Layout (3 Columns on Desktop, 1 on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* COLUMN 1: Just an image now */}
            <div className="flex flex-col gap-6 pt-0 md:pt-12">
              <div className="aspect-[4/3] w-full bg-gray-300">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Architecture 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* COLUMN 2: The Main About Us Card + Image */}
            <div className="flex flex-col gap-6">
              {/* Dark Card - Ipoly Studio Text */}
              <div className="bg-[#111111] p-8 lg:p-12 text-white flex flex-col justify-between">
                <p className="text-lg lg:text-xl font-medium leading-tight tracking-tight">
                  We are a team of storytellers, innovators, and digital artists
                  from diverse fields, united by a single purpose: to redifine
                  how your projects are visualized and experienced. At Ipoly
                  Studio, we fuse strategic insight with the art of visual
                  storytelling. We craft the narratives that turn architectural
                  visions into living experiences, elevating your project to
                  your highest potential.
                </p>
              </div>

              <div className="aspect-[4/3] w-full bg-gray-300">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
                  alt="Architecture 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* COLUMN 3: Added a 3rd image to keep the masonry layout balanced */}
            <div className="flex flex-col gap-6 pt-0 md:pt-24">
              <div className="aspect-[4/3] w-full bg-gray-300">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="Architecture 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustReveal;

// src/components/Mission.jsx
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".reveal-text", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      }).from(
        ".reveal-image",
        {
          scale: 1.1,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1"
      );
    },
    { scope: containerRef }
  );

  return (
    <section 
      ref={containerRef}
      className="w-full bg-[#f4f4f4] text-[#111111] py-24 md:py-32 px-6 md:px-12 lg:px-24"
    >
      {/* --- TOP SECTION: Heading --- */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-3 lg:col-span-3">
          <span className="reveal-text inline-block text-gray-500 text-lg md:text-xl tracking-tight">
            Our Mission
          </span>
        </div>

        <div className="md:col-span-9 lg:col-span-7">
          <h2 className="reveal-text text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-black">
            We Don't Just Visualize Space; We Curate Atmosphere.
          </h2>
        </div>
      </div>

      {/* --- BOTTOM SECTION: Image and Text --- */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-24 md:mt-48 items-end">
        <div className="md:col-span-4 lg:col-span-3 order-2 md:order-1 mt-12 md:mt-0">
          <div className="w-full aspect-square md:aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Mino Team"
              className="reveal-image w-full h-full object-cover grayscale brightness-90 transform origin-center"
            />
          </div>
        </div>

        <div className="md:col-span-6 lg:col-span-4 md:col-start-7 lg:col-start-9 order-1 md:order-2">
          {/* UPDATED CLASSES HERE: Added xl:text-lg and 2xl:text-xl */}
          <div className="reveal-text flex flex-col space-y-6 text-sm md:text-base xl:text-lg 2xl:text-xl font-normal text-gray-700 leading-relaxed">
            In an era of instant imagery, our mission is restore the human
            connection to architecture through cinematic storytelling and
            emotive digital craft.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
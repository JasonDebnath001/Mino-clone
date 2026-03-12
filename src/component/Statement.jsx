// src/components/Statement.jsx
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Statement = () => {
  const containerRef = useRef(null);
  const wordRef = useRef(null);

  useGSAP(
    () => {
      // Animate the specific word to red based on scroll position
      gsap.to(wordRef.current, {
        color: "#e04b4b", // The coral/red color from your image
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%", // Starts when the top of this section hits 75% down the screen
          end: "center center", // Ends when the section reaches the center of the screen
          scrub: true, // This ties the animation progress directly to the scrollbar!
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="h-[80vh] md:h-screen w-full bg-[#111111] flex items-center justify-center px-6"
    >
      <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium text-center leading-snug tracking-tight">
        We Convert Your Vision and Ideas Into
        <br />
        High-End Architectural <span ref={wordRef}>Visualization Experiences.</span>
      </h2>
    </section>
  );
};

export default Statement;

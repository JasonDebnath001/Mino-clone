// src/components/Statement.jsx
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Statement = () => {
  const containerRef = useRef(null);
  const wordRef = useRef(null);

  useGSAP(
    () => {
      // 1. Staggered Slide-Up Reveal (from earlier)
      gsap.from(".slide-line", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // 2. The Color Scrub (from earlier)
      gsap.to(wordRef.current, {
        color: "#e04b4b",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "center center",
          scrub: true,
        },
      });

      // 3. NEW: Push-back and fade out as it gets covered!
      gsap.to(containerRef.current, {
        opacity: 0,
        scale: 0.9, // Slightly shrinks it into the background
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", // Starts the moment the section hits the top of the screen
          end: "+=100%", // Continues for the height of the section
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="sticky top-0 z-0 h-[80vh] md:h-screen w-full bg-[#111111] flex items-center justify-center px-6"
    >
      <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium text-center leading-snug tracking-tight">
        <span className="slide-line inline-block">
          We Convert Your Vision and Ideas Into
        </span>
        <br />
        <span className="slide-line inline-block mt-2">
          High-End Architectural <span ref={wordRef}>Visualization Experiences.</span>
        </span>
      </h2>
    </section>
  );
};

export default Statement;
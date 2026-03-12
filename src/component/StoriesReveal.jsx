// src/components/StoriesReveal.jsx
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Pannellum } from "pannellum-react";

gsap.registerPlugin(ScrollTrigger);

// 1. Updated services data with the 360 images array
const servicesData = [
  {
    id: "01",
    title: "Interactive Immersive Experiences",
    desc: "From concept to real-time immersive experience. Your reality starts here.",
    media:
      "https://framerusercontent.com/assets/3iM2qvDjJhyntHaIHBlZMrlMpBE.mp4",
    type: "video",
  },
  {
    id: "02",
    title: "CGI and Still Imagery",
    desc: "A whole story behind every picture.",
    media: "./bedroom.jpg",
    type: "image",
  },
  {
    id: "03",
    title: "Cinematic Animations",
    desc: "Turning architectural concepts into stunning visual narratives.",
    media:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1920&q=80",
    type: "image",
  },
  {
    id: "04",
    title: "Virtual Tours",
    desc: "Navigate through your projects intuitively. Drag to look around.",
    // Pass the array of your 360 images here
    media: [
      "./cam 1 360_finale.jpg",
      "./cam 2 360_finale.jpg",
      "./cam espace office 360_finale.jpg",
    ],
    type: "360",
  },
  {
    id: "05",
    title: "Cinematographs",
    desc: "Still images brought subtly to life.",
    media: "./Cinematograph.mp4",
    type: "video",
  },
];

// 2. Custom helper component to handle the 360 Tour Logic
const Tour360 = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full h-full relative">
      {/* 360 Viewer */}
      <Pannellum
        width="100%"
        height="100%"
        image={images[0]} // Simply loads the first 360 image
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        autoRotate={-2} // Keeps that nice, slow cinematic rotation
        compass={false}
        showZoomCtrl={false}
        showFullscreenCtrl={false}
        mouseZoom={false}
      />
    </div>
  );
};

const StoriesReveal = () => {
  const containerRef = useRef(null);
  const introScreenRef = useRef(null);
  const introTextRef = useRef(null);

  const panelsRef = useRef([]);
  const mediaElementsRef = useRef([]);
  const textBlocksRef = useRef([]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=500%",
          pin: true,
          scrub: 1,
        },
      });

      tl.to(introTextRef.current, { opacity: 0, y: -30, duration: 1 })
        .to(introScreenRef.current, { opacity: 0, duration: 1.5 }, "-=0.5")
        .fromTo(
          mediaElementsRef.current[0],
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 2 },
          "-=1.5",
        )
        .fromTo(
          textBlocksRef.current[0],
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 1 },
          "-=0.5",
        );

      for (let i = 1; i < servicesData.length; i++) {
        tl.to(panelsRef.current[i], {
          yPercent: -100,
          duration: 2,
          ease: "power2.inOut",
        }).fromTo(
          textBlocksRef.current[i],
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 1 },
          "-=1",
        );
      }
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-[#111111] overflow-hidden"
    >
      {servicesData.map((service, index) => (
        <div
          key={service.id}
          ref={(el) => (panelsRef.current[index] = el)}
          className="absolute left-0 w-full h-full text-white bg-black"
          style={{ top: index === 0 ? "0" : "100%", zIndex: index }}
        >
          {/* Media Container */}
          <div
            ref={(el) => (mediaElementsRef.current[index] = el)}
            className="absolute inset-0 w-full h-full origin-center"
          >
            {/* Conditional rendering based on media type */}
            {service.type === "video" && (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={service.media} type="video/mp4" />
              </video>
            )}
            {service.type === "image" && (
              <img
                src={service.media}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            )}
            {service.type === "360" && <Tour360 images={service.media} />}
          </div>

          {/* Overlay Content */}
          {/* 3. ADDED `pointer-events-none` so mouse clicks pass through to the 360 viewer */}
          <div
            ref={(el) => (textBlocksRef.current[index] = el)}
            className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-24 z-10 bg-black/20 pointer-events-none"
          >
            <div className="flex items-start">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-4xl">
                {service.title}
              </h2>
              <span className="text-xl md:text-3xl font-medium ml-2 mt-2 md:mt-4">
                ({service.id})
              </span>
            </div>
            <p className="absolute bottom-12 left-6 md:left-12 lg:left-24 text-sm md:text-base font-light max-w-md">
              {service.desc}
            </p>
          </div>
        </div>
      ))}

      {/* Intro Screen */}
      <div
        ref={introScreenRef}
        className="absolute inset-0 w-full h-full bg-[#f4f4f4] flex items-center justify-center z-50"
      >
        <h2
          ref={introTextRef}
          className="text-3xl md:text-5xl lg:text-6xl font-medium text-gray-500 tracking-tight"
        >
          Check Our Portfolio <span className="text-[#8888ff]">Below.</span>
        </h2>
      </div>
    </section>
  );
};

export default StoriesReveal;

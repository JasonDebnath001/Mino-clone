import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

// Data structure holding all the services content
const servicesData = {
  "Brand Identity": {
    title: "Brand Identity",
    description: [
      "Your brand is the silent ambassador of your project. It shapes perception, builds trust, and creates a visual language that audiences recognize and remember at another level.",
      "We develop brand identities that are intentional, timeless, and aligned with your architectural and commercial goals. Built to elevate every touchpoint.",
    ],
    // Using placeholder videos that match the vibe of the reference
    videos: [
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4", // Placeholder video
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4", // Placeholder video
    ],
  },
  Images: {
    title: "Images",
    description: [
      "Striking visuals that capture the essence of your vision. We create high-end imagery that speaks louder than words.",
      "From photorealistic renders to stylized artistic interpretations, our images are crafted to inspire and engage.",
    ],
    videos: [
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    ],
  },
  Film: {
    title: "Film",
    description: [
      "Motion brings spaces to life. Our films tell compelling stories, guiding viewers through an emotional journey.",
      "We combine cinematic techniques with architectural understanding to produce films that leave a lasting impact.",
    ],
    videos: [
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    ],
  },
  "Immersive Experience": {
    title: "Immersive Experience",
    description: [
      "Step into the future with fully interactive, immersive digital environments that allow clients to explore spaces before they exist.",
      "Utilizing cutting-edge real-time technology to deliver unforgettable virtual experiences.",
    ],
    videos: [
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    ],
  },
  "Website Design": {
    title: "Website Design",
    description: [
      "Your digital storefront matters. We design and develop bespoke websites that serve as the perfect hub for your project.",
      "Combining stunning aesthetics with seamless functionality for a flawless user experience.",
    ],
    videos: [
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    ],
  },
};

const serviceList = Object.keys(servicesData);

const Services = () => {
  const [activeService, setActiveService] = useState(serviceList[0]);
  const contentRef = useRef(null);

  // GSAP animation triggered whenever the active tab changes
  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
    );
  }, [activeService]);

  const activeData = servicesData[activeService];

  return (
    <div className="min-h-screen bg-[#f4f4f5] text-gray-900 font-sans px-8 py-24 flex selection:bg-gray-300">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12 lg:gap-32">
        {/* Left Sidebar (Sticky) */}
        <aside className="w-full md:w-1/4 lg:w-1/5 relative">
          <div className="sticky top-32">
            {/* Enlarged Heading */}
            <h2 className="text-xl md:text-2xl font-medium tracking-wide text-gray-600 mb-6 uppercase">
              Services
            </h2>

            {/* Service Navigation List */}
            <ul className="flex flex-col gap-3">
              {serviceList.map((service) => (
                <li
                  key={service}
                  onClick={() => setActiveService(service)}
                  className={`cursor-pointer transition-colors duration-300 flex items-center group ${
                    activeService === service
                      ? "text-black font-normal"
                      : "text-gray-500 hover:text-gray-800 font-light"
                  }`}
                >
                  {/* Black Square for active item */}
                  <div className="w-4 flex justify-center items-center mr-2">
                    {activeService === service && (
                      <div className="w-1.5 h-1.5 bg-black"></div>
                    )}
                  </div>
                  <span className="text-[17px]">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="w-full md:w-3/4 lg:w-4/5" ref={contentRef}>
          {/* Top Section: Title and Description Grid */}
          <div className="flex flex-col xl:flex-row justify-between items-start gap-12 xl:gap-0 w-full mb-24">
            {/* Huge Title */}
            <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] font-medium leading-none tracking-tight xl:w-1/2">
              {activeData.title}
            </h1>

            {/* Description Box (Right aligned structurally like the image) */}
            <div className="xl:w-1/2 flex flex-col items-start xl:items-end text-left pt-4 xl:pt-8">
              <div className="w-full max-w-md">
                {activeData.description.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-[15px] md:text-base leading-[1.6] font-normal mb-6 text-gray-800"
                  >
                    {paragraph}
                  </p>
                ))}

                {/* View All Button */}
                <div className="flex xl:justify-end w-full mt-4">
                  <button className="bg-[#1f1f1f] text-white px-7 py-2.5 rounded-full text-xs font-semibold tracking-widest hover:bg-black transition-colors">
                    VIEW ALL
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full">
            {activeData.videos.map((videoSrc, idx) => (
              <div
                key={idx}
                className="w-full aspect-[4/3] bg-gray-200 overflow-hidden relative"
              >
                <video
                  src={videoSrc}
                  className="w-full h-full object-cover"
                  controls
                />

                {/* Optional subtle overlay text based on the image reference (e.g., "WEST RESIDENCES") */}
                <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-80 mix-blend-overlay">
                  {idx === 0 && activeService === "Brand Identity" && (
                    <h3 className="text-white text-5xl font-serif tracking-widest text-center">
                      WEST
                      <br />
                      RESIDENCES
                    </h3>
                  )}
                  {idx === 1 && activeService === "Brand Identity" && (
                    <h3 className="text-white text-4xl font-serif italic text-center">
                      Palácio do Comércio
                    </h3>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Services;

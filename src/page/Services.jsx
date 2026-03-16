import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Pannellum } from "pannellum-react";

// Data structure holding all the services content
const servicesData = {
  "Interactive Immersive Experiences": {
    title: "Intereactive Immersive Experiences",
    description: [
      "Real-time, interactive experiences that let clients explore architecture, not imagine it.",
      "Built in Unreal Engine, these experiences allow real-time navigation, lighting-changes, and fast design variantion.",
    ],
    // Using placeholder videos that match the vibe of the reference
    videos: [
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4", // Placeholder video
      "https://res.cloudinary.com/dxzuvk7np/video/upload/v1773596848/Animation_hcob1j.mp4", // Local public asset
    ],
  },
  "CGI and Still Imagery": {
    title: "CGI and Still Imagery",
    description: [
      "High end architectural imagery designed to sell spaces before they exists.",
      "We create photoreal visuals that communicate atmosphere, scale, and materiality, helping clients make confident decisions and attract buyers faster.",
    ],
    videos: [
      "https://res.cloudinary.com/dxzuvk7np/video/upload/v1773597140/newVideo_gaoqa4.mp4",
    ],
    images: [
      "https://res.cloudinary.com/dxzuvk7np/image/upload/v1773597263/ext01_v2_ckanwp.jpg",
      "https://res.cloudinary.com/dxzuvk7np/image/upload/v1773597263/ext05_v1_version2_h4kfie.jpg",
      "https://res.cloudinary.com/dxzuvk7np/image/upload/v1773641424/ext05_v1_version2_g6irpj.jpg",
      "https://res.cloudinary.com/dxzuvk7np/image/upload/v1773641468/ISSEI_5_ucuzyb.jpg",
      "https://res.cloudinary.com/dxzuvk7np/image/upload/v1773641472/ISSEI_6_g3em3n.jpg",
      "https://res.cloudinary.com/dxzuvk7np/image/upload/v1773641482/ISSEI_4_bztgdy.jpg",
      "https://res.cloudinary.com/dxzuvk7np/image/upload/v1773641483/ISSEI_1_yoqdtz.jpg",
      "https://res.cloudinary.com/dxzuvk7np/image/upload/v1773641484/ISSEI_3_kugng6.jpg",
      "https://res.cloudinary.com/dxzuvk7np/image/upload/v1773641490/ISSEI_2_vmxftq.jpg",
      "https://res.cloudinary.com/dxzuvk7np/image/upload/v1773641570/invisibleHouse_day_uvztih.jpg",
      "https://res.cloudinary.com/dxzuvk7np/image/upload/v1773641573/invisibleHouse_night_ewddyv.jpg",
    ],
  },
  "Cinematic Animations": {
    title: "Cinematic Animations",
    description: [
      "Architectural stories told through motion.",
      "We create cinematic animations that create space, scale, and atmosphere through carefully crafted camera movement, lighting, and pacing, turning architectural concepts into compelling visual narratives.",
    ],
    videos: [
      "https://res.cloudinary.com/dxzuvk7np/video/upload/v1773596848/Animation_hcob1j.mp4",
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    ],
  },
  "Virtual Tours": {
    title: "Vitual Tours",
    description: [
      "Our vitual tours allow users navigate projects intuitively, gaining a clear understanding of layout, proportions, and spatial relationships.",
      "Ideal for presentations, client reviews, and remote decision-making.",
    ],
    media: [
      {
        type: "360",
        images: [
          "./cam 1 360_finale.jpg",
          "./cam 2 360_finale.jpg",
          "./cam espace office 360_finale.jpg",
        ],
      },
      { type: "360", images: ["./bedroom.jpg"] },
    ],
  },
  "Cinematograph": {
    title: "Cinematograph",
    description: [
      "Still images brought subtly to life.",
      "Cinematographs blends high-end renders with gentle motion to create immersing, attention-grabbing visuals that elevate digital presentations without overwhelming the design.",
    ],
    videos: [
      "./Cinematograph.mp4",
    ],
    images: [
      "https://res.cloudinary.com/dxzuvk7np/image/upload/v1773643075/Background_zydf29.jpg",
      "https://res.cloudinary.com/dxzuvk7np/image/upload/v1773641570/invisibleHouse_day_uvztih.jpg",
      "https://res.cloudinary.com/dxzuvk7np/image/upload/v1773641573/invisibleHouse_night_ewddyv.jpg",
    ],
  },
  "3D Floor Plans": {
    title: "3D Floor Plans",
    description: [
      "Understand the project in one glance.",
      "Our 3D floor plans translate technical drawings into clear, visually engaging representations that communicate layout and scale, making complex plans instantly accesible to non-technical audiences.",
    ],
    videos: [
      ],
    images: [
      "https://res.cloudinary.com/dxzuvk7np/image/upload/v1773644641/Thousands_Oak_Project_final_second_floor_qlwjzv.jpg",
      "https://res.cloudinary.com/dxzuvk7np/image/upload/v1773644643/Westlake_Academy_Project_floorplan__zochh2.jpg",
      "https://res.cloudinary.com/dxzuvk7np/image/upload/v1773644649/Thousands_Oak_Project_first_floor_final_bg6utj.jpg",
      "https://res.cloudinary.com/dxzuvk7np/image/upload/v1773644655/Marfa_Project_Floorplan_j3jyec.jpg",
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

  const mediaItems = activeData.media
    ? activeData.media
    : [
        ...(activeData.videos ?? []).map((src) => ({ type: "video", src })),
        ...(activeData.images ?? []).map((src) => ({ type: "image", src })),
      ];

  // Custom helper component to handle the 360 Tour Logic
  const Tour360 = ({ images }) => {
    return (
      <div className="w-full h-full relative">
        {/* 360 Viewer */}
        <Pannellum
          width="100%"
          height="100%"
          image={images[0]} // Use the first image
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
            <h1 className="text-[2rem] md:text-[3rem] lg:text-[4rem] font-medium leading-none tracking-tight xl:w-1/2">
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
                {/* <div className="flex xl:justify-end w-full mt-4">
                  <button className="bg-[#1f1f1f] text-white px-7 py-2.5 rounded-full text-xs font-semibold tracking-widest hover:bg-black transition-colors">
                    VIEW ALL
                  </button>
                </div> */}
              </div>
            </div>
          </div>

          {/* Bottom Section: Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full">
            {mediaItems.map((item, idx) => (
              <div
                key={idx}
                className="w-full aspect-[4/3] bg-gray-200 overflow-hidden relative"
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                    loop
                  />
                ) : item.type === "360" ? (
                  <Tour360 images={item.images} />
                ) : (
                  <img
                    src={item.src}
                    alt={`${activeData.title} ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}

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

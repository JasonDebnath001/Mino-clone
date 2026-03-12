// src/components/Mission.jsx
import React from "react";

const Mission = () => {
  return (
    <section className="w-full bg-[#f4f4f4] text-[#111111] py-24 md:py-32 px-6 md:px-12 lg:px-24">
      {/* --- TOP SECTION: Heading --- */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Label - Takes up the first 3 columns on desktop */}
        <div className="md:col-span-3 lg:col-span-3">
          <span className="text-gray-500 text-lg md:text-xl tracking-tight">
            Our Mission
          </span>
        </div>

        {/* Static Main Heading - Constrained to 7 columns to leave empty space on the right */}
        <div className="md:col-span-9 lg:col-span-7">
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-black">
            We Don't Just Visualize Space; We Curate Atmosphere.
          </h2>
        </div>
      </div>

      {/* --- BOTTOM SECTION: Image and Text --- */}
      {/* Increased top margin to create that airy, editorial gap */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-24 md:mt-48 items-end">
        {/* Left Side: Grayscale Image - Constrained to 3 columns */}
        <div className="md:col-span-4 lg:col-span-3 order-2 md:order-1 mt-12 md:mt-0">
          <div className="w-full aspect-square md:aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Mino Team"
              className="w-full h-full object-cover grayscale brightness-90"
            />
          </div>
        </div>

        {/* Right Side: Paragraphs - Pushed to the far right starting at column 9 */}
        <div className="md:col-span-6 lg:col-span-4 md:col-start-7 lg:col-start-9 order-1 md:order-2">
          <div className="flex flex-col space-y-6 text-sm md:text-base font-normal text-gray-700 leading-relaxed">
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

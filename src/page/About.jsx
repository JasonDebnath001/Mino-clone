import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const About = () => {
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 1.2 } });

    tl.fromTo(p1Ref.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1 }
    )
    .fromTo(p2Ref.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1 }, 
      '-=0.8'
    );
  }, []);

  return (
    // Adjusted background to a light off-white/gray to match the image
    <div className="min-h-screen bg-[#f4f4f5] text-gray-900 font-sans px-6 py-24 flex items-center justify-center selection:bg-gray-300">
      
      {/* Main container holding both paragraphs */}
      <div className="w-full max-w-7xl flex flex-col gap-24 md:gap-32"> 
        
        {/* First Paragraph: Left Indented */}
        <div ref={p1Ref} className="w-full max-w-5xl self-start text-left">
          <p className="text-2xl md:text-3xl lg:text-[2.5rem] font-medium leading-[1.2] tracking-tight">
            We are a team of storytellers, innovators, and digital artists from diverse fields united by a singular purpose: to redifine how your projects are visualized and experienced.
          </p>
        </div>

        {/* Second Paragraph: Right Indented */}
        <div ref={p2Ref} className="w-full max-w-5xl self-end text-right">
          <p className="text-2xl md:text-3xl lg:text-[2.5rem] font-medium leading-[1.2] tracking-tight">
            At iPoly Studio, we fuse strategic insight with the art of visual storytelling. We craft the narratives that turn architectural visions into living experiences, elevating your project to your highest potential.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default About;
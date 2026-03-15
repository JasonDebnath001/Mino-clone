import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const teamMembers = [
  {
    id: 1,
    name: 'Caio Cavalcanti',
    role: 'Partner',
    description: "Caio is our artsy soul. When he's not catching waves or balancing on a slackline, he's sketching his thoughts. Don't be fooled by his calmness, as he loves adrenaline and bursts with creative ideas.",
    // Replace this with your actual image path
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop', 
  },
  {
    id: 2,
    name: 'Prem',
    role: 'Lead Developer',
    description: "The technical architect behind our digital experiences. When he's not writing flawless React and GSAP animations, he's likely busy engineering the perfect menu system for a local cafe project.",
    // Replace this with your actual image path
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop', 
  },
];

const About = () => {
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const teamSectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // We animate the text, then the team header, then stagger the image cards in
    const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 1.2 } });

    tl.fromTo(p1Ref.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(p2Ref.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.8')
      .fromTo(teamSectionRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.6')
      .fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1 },
        '-=0.8'
      );
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f4f5] text-gray-900 font-sans px-6 py-24 flex flex-col items-center selection:bg-gray-300">
      
      {/* Intro Paragraphs Section */}
      <div className="w-full max-w-7xl flex flex-col gap-24 md:gap-32 mb-40">
        <div ref={p1Ref} className="w-full max-w-5xl self-start text-left">
          <p className="text-2xl md:text-3xl lg:text-[2.5rem] font-medium leading-[1.2] tracking-tight">
            We are more than creators; we are passionate about the journey.
            Storytellers, innovators, and artists from diverse fields and
            backgrounds, united by a singular purpose: to redefine how your
            projects are perceived.
          </p>
        </div>

        <div ref={p2Ref} className="w-full max-w-5xl self-end text-right">
          <p className="text-2xl md:text-3xl lg:text-[2.5rem] font-medium leading-[1.2] tracking-tight">
            As part of Devotion Group, we fuse strategic insight with the art of visual storytelling,
            crafting narratives that elevate your projects to the next level. Guided by a humanistic
            perspective, committed partners for the long term.
          </p>
        </div>
      </div>

      {/* The Team Section */}
      <div ref={teamSectionRef} className="w-full max-w-7xl">
        {/* Header and Square */}
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-[5rem] md:text-[7rem] lg:text-[8rem] font-medium leading-none tracking-tighter">
            The Team
          </h2>
          <div className="w-3 h-3 md:w-4 md:h-4 bg-black mb-3 md:mb-5"></div>
        </div>

        {/* 2-Column Grid for exactly two pictures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-4xl">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative group cursor-pointer overflow-hidden aspect-[3/4] bg-gray-200"
            >
              {/* Base Image: Grayscale by default */}
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Overlay: Gradient & Text */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out bg-gradient-to-br from-[#50559f] via-[#7d4879] to-[#991a3a] p-6 md:p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight">
                  {member.name}
                </h3>
                <p className="text-sm md:text-base font-light mt-1 mb-3 opacity-90">
                  {member.role}
                </p>
                <p className="text-sm md:text-[15px] leading-snug font-light opacity-95">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;
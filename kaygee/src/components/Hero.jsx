import React from "react";
import { FiChevronDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Intro hero">

      <div className="container mx-auto px-6 relative z-10">
        {/* --- HEADER & PARAGRAPH ROW ON LARGE SCREENS --- */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-24 w-full">
          {/* Header */}
          <h1 className="flex-1 text-6xl md:text-8xl self-start font-extrabold leading-tight">
            Hello — I’m KayGee.
          </h1>

          {/* Paragraph */}
          <p className="flex-1 text-lg md:text-2xl self-end">
            Senior-year graphic designer focused on motion and branching into 3D modeling & texturing. I craft visuals that behave properly in production and hit like a well-placed keyframe.
          </p>
        </div>

        {/* --- CTA BUTTONS --- */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 mb-20">
          <a
            href="#projects"
            className="inline-flex items-center gap-3 text-sm md:text-base font-medium underline underline-offset-4 text-gray-900"
          >
            <FiChevronDown className="w-5 h-5 transition-transform duration-300" aria-hidden />
          </a>
        </div>

        {/* --- MOVING SKILL MARQUEE --- */}
        <div className="absolute bottom-0 left-0 w-full py-4 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee text-sm md:text-base tracking-wide font-medium text-gray-600 dark:text-gray-400">
            {[
              "Brand Identity","Motion Graphics","3D Modeling","Texturing","Color Theory",
              "Lighting","UI Design","Visual Storytelling","Typography","Look Development",
              "Rendering","Compositing",
            ]
              .concat([
                "Brand Identity","Motion Graphics","3D Modeling","Texturing","Color Theory",
                "Lighting","UI Design","Visual Storytelling","Typography","Look Development",
                "Rendering","Compositing",
              ])
              .map((skill, i) => (
                <span key={i} className="mx-8">
                  {skill}
                </span>
              ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;

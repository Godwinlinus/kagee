import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Intro hero">
      {/* --- SUBTLE BACKGROUND ANIMATION --- */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 rounded-full opacity-20"
            style={{
              width: `${Math.random() * 120 + 60}px`,
              height: `${Math.random() * 120 + 60}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out ${Math.random() * 5}s infinite alternate`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* --- HEADER & PARAGRAPH ROW ON LARGE SCREENS --- */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-24 w-full">
          {/* Header */}
          <h1 className="flex-1 text-4xl md:text-6xl self-start font-extrabold leading-tight text-gray-900 dark:text-white">
            Hello — I’m KayGee.
          </h1>

          {/* Paragraph */}
          <p className="flex-1 text-lg md:text-2xl self-end text-gray-700 dark:text-gray-300">
            Senior-year graphic designer focused on motion and branching into 3D modeling & texturing. I craft visuals that behave properly in production and hit like a well-placed keyframe.
          </p>
        </div>

        {/* --- CTA BUTTONS --- */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
          <a
            href="#projects"
            className="inline-flex items-center gap-3 text-sm md:text-base font-medium underline underline-offset-4 text-gray-900 dark:text-white"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>


        </div>
      </div>

      {/* --- MOVING SKILL MARQUEE --- */}
      <div className="absolute bottom-0 left-0 w-full py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee text-sm md:text-base tracking-wide font-medium text-gray-600 dark:text-gray-400">
          {[
            "Brand Identity","Motion Graphics","3D Modeling","Texturing","Color Theory",
            "Lighting","UI Design","Visual Storytelling","Typography","Look Development",
            "Rendering","Compositing"
          ]
            .concat([
              "Brand Identity","Motion Graphics","3D Modeling","Texturing","Color Theory",
              "Lighting","UI Design","Visual Storytelling","Typography","Look Development",
              "Rendering","Compositing"
            ])
            .map((skill, i) => (
              <span key={i} className="mx-8">
                {skill}
              </span>
            ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(-30px) translateX(20px); }
        }
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

import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const TypingHeader = ({ text }) => {
  const controls = useAnimation();

  const parent = {
    hidden: {
      transition: { staggerChildren: 0.015, staggerDirection: -1 },
    },
    visible: {
      transition: { staggerChildren: 0.035, when: "beforeChildren" },
    },
  };

  const child = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

  useEffect(() => {
    let mounted = true;

    (async () => {
      while (mounted) {
        await controls.start("visible"); // type
        await new Promise((r) => setTimeout(r, 1200)); // pause
        await controls.start("hidden"); // delete
        await new Promise((r) => setTimeout(r, 400)); // small reset pause
      }
    })();

    return () => {
      mounted = false;
      controls.stop();
    };
  }, [controls]);

  return (
    <motion.span className="inline-block" variants={parent} initial="hidden" animate={controls}>
      {Array.from(text).map((char, i) => (
        <motion.span key={i} variants={child} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}

      {/* Blinking cursor */}
      <motion.span className="ml-1 inline-block" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.9, repeat: Infinity }}>
        |
      </motion.span>
    </motion.span>
  );
};

const Hero = () => {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <section className="w-full relative min-h-screen flex items-center overflow-hidden" aria-label="Intro hero">
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-24 w-full">
          {/* Header with Framer Motion typing */}
          <h1 className="flex-1 text-5xl tracking-tighter md:text-8xl self-start leading-tight">
            <TypingHeader text="Hello, I’m  KayGee..." />
          </h1>

          {/* Paragraph */}
          <p className="flex-1 text-lg font-light md:text-2xl self-end">
            Senior-year graphic designer focused on motion and branching into 3D modeling & texturing.
          </p>
        </div>

        <div className="flex flex-col md:mt-20 sm:flex-row items-start sm:items-center gap-4 mt-8 mb-20 cursor-pointer">
          <FaArrowDown
            className="transition-transform duration-300"
            aria-hidden
            onClick={scrollToBottom}
          />
        </div>

        {/* MARQUEE */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee text-sm md:text-base tracking-wide font-medium text-gray-600 dark:text-gray-400">
            {[
              "Brand Identity",
              "Motion Graphics",
              "3D Modeling",
              "Texturing",
              "Color Theory",
              "Lighting",
              "UI Design",
              "Visual Storytelling",
              "Typography",
              "Look Development",
              "Rendering",
              "Compositing",
            ]
              .concat([
                "Brand Identity",
                "Motion Graphics",
                "3D Modeling",
                "Texturing",
                "Color Theory",
                "Lighting",
                "UI Design",
                "Visual Storytelling",
                "Typography",
                "Look Development",
                "Rendering",
                "Compositing",
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

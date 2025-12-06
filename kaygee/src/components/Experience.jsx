import React, { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { FaTrophy } from "react-icons/fa"

const ExperienceWheel = () => {
    const experiences = [
        {
            company: "PixelForge Studio",
        },
        {
            company: "Creative Hub Agency",
        },
        {
            company: "Self-employed",
        },
        {
            company: "LogoCraft",
        },
    ];

    const sectionRef = useRef(null);
    const { scrollY } = useScroll();
    const [offset, setOffset] = useState(0);

  // Get section position and height
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const handleScroll = () => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // when top is in view, 0 → when bottom hits top, experiences.length → scaled to fraction
        const progress = (windowHeight - rect.top) / (rect.height + windowHeight);
        // multiply by a number for faster cycling
        setOffset(progress * experiences.length * 6); // multiplier increases speed
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // initial call

        return () => window.removeEventListener("scroll", handleScroll);
    }, [experiences.length]);

    return (
        <section ref={sectionRef} className="relative w-full flex items-center justify-center">
        {/* Spacer to allow scrolling */}

        {/* Fixed panel */}
        <div className="inset-0 flex items-center justify-center pointer-events-none py-20">
            <div className="text-center">
                <h1 className="border-t py-8 text-3xl text-wrap font-semibold tracking-tight">6+ years working with brands</h1>
            <AnimatePresence mode="wait">
                {experiences.map((exp, i) => {
                // use fractional offset to loop
                const idx = Math.floor(offset) % experiences.length;
                if (i !== idx) return null;

                return (
                    <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    >
                        <h3 className="text-sm">{exp.company}</h3>
                    </motion.div>
                );
                })}
            </AnimatePresence>
            <div className="w-full flex justify-center mt-8">
                <FaTrophy size={30}/>
            </div>
            
            </div>
        </div>
        </section>
    );
};

export default ExperienceWheel;

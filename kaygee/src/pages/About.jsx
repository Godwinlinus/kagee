import React from "react";

const software = [
  "Blender",
  "ZBrush",
  "Substance Painter",
  "Maya",
  "Photoshop",
  "3ds Max"
];

const skills = [
  "3D Modeling",
  "Sculpting",
  "Texturing",
  "Lighting",
  "Rendering",
  "UV Mapping",
  "Lookdev"
];

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 mt-24">
      <div className="grid gap-12 md:grid-cols-3 items-start border-b pb-16">

        {/* TEXT BLOCK */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi — I’m Kay Gee, 3D artist & sculptor.
          </h1>

          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              My work plays in the space between beauty and unease. I sculpt creatures,
              environments and objects with a surreal edge, leaning into textures,
              lighting and form that feel tactile and slightly unsettling.
            </p>

            <p>
              I’m an Interactive Media Design student in Istanbul, freelancing and
              open to internships that challenge my craft and expand my world-building
              toolkit.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="mailto:makifkarasu@outlook.com"
              className="inline-block px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-lg bg-black text-white text-sm font-semibold hover:opacity-90 transition"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* ABSTRACT VISUAL ELEMENT */}
        <div className="w-full flex justify-center md:justify-end">
          <div
            className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-lg bg-gradient-to-br 
            from-violet-500 via-fuchsia-400 to-rose-400 dark:from-violet-600 
            dark:via-fuchsia-500 dark:to-rose-500 animate-pulse-slow blur-[1px]"
          />
        </div>

        {/* SOFTWARE + SKILLS */}
        <div className="md:col-span-3 mt-10">
          <div className="grid gap-8 md:grid-cols-2">

            {/* SOFTWARE */}
            <div>
              <p className="text-sm font-semibold mb-3 opacity-70">Main Software</p>
              <div className="flex flex-wrap gap-3">
                {software.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full text-sm font-medium border 
                    border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60
                    backdrop-blur-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* SKILLS */}
            <div>
              <p className="text-sm font-semibold mb-3 opacity-70">Skills</p>
              <div className="flex flex-wrap gap-3">
                {skills.map((sk) => (
                  <span
                    key={sk}
                    className="px-3 py-1.5 rounded-md text-sm font-medium border 
                    border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60
                    backdrop-blur-sm"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA FOOTER */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-10 gap-6">
        <p className="max-w-xl leading-relaxed">
          I love projects that feel like small universes. If you’re building something
          strange, cinematic, atmospheric or beautifully odd, I’d love to hear about it.
        </p>

        <div className="text-right md:text-left">
          <a
            href="mailto:makifkarasu@outlook.com"
            className="text-sm font-medium underline"
          >
            makifkarasu@outlook.com
          </a>
          <div className="text-xs text-gray-500 mt-1">
            Available for freelance & internships
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Education from "../components/Education.jsx";

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
    <section className="max-w-6xl min-h-screen mx-auto px-6 mt-40 md:mt-40">
      <div className="grid gap-12 md:grid-cols-3 items-start border-b pb-16">

        {/* TEXT BLOCK */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Hi,I’m Kayode Michael Babtunde, 3D artist & sculptor.
          </h1>

          <div className="space-y-4 text-lg font-light leading-relaxed">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis nihil rerum odit inventore tempore veniam recusandae.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti asperiores quo iusto consequatur obcaecati, fugit molestias ratione accusamus, tempora provident voluptatum accusantium alias consectetur doloribus. Iusto nemo adipisci laboriosam earum.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="mailto:kaygee@gmail.com"
              className="inline-block px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-sm font-medium transition-transform transform hover:scale-110 transition"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-white rounded-lg bg-black text-sm font-semibold transition-transform transform hover:scale-110 transition"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* ABSTRACT VISUAL ELEMENT */}
        <div className="w-full flex justify-center md:justify-end">
          <img src="/ProfilePhoto.png" alt="Progilr image" className="animate-pulse-slow" />
        </div>

        {/* SOFTWARE + SKILLS */}
        <div className="md:col-span-3 md:w-1/2 py-10">
          <div className="w-full flex flex-col gap-8">

            {/* SOFTWARE */}
            <div className="flex flex-col md:flex-row md:items-start md:gap-8 md:justify-between">
              <p className="text-sm font-semibold mb-3 md:mb-0 opacity-70">Main Software</p>
              <div className="flex flex-wrap gap-3">
                {software.map((s) => (
                  <span
                    key={s}
                    className="text-sm font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* SKILLS */}
            <div className="flex flex-col md:flex-row md:items-start md:gap-8 justify-between">
              <p className="text-sm font-semibold mb-3 md:mb-0 opacity-70">Technical Skills</p>
              <div className="flex flex-wrap gap-3">
                {skills.map((sk) => (
                  <span
                    key={sk}
                    className="text-sm font-medium"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Education />
      

      {/* CTA FOOTER */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-15 gap-6">
        <p className="max-w-xl leading-relaxed font-medium">
          I am thrilled to answer to your next project.
        </p>

        <div>
          <a
            href="mailto:Kaygee@gmail.com"
            className="text-lg font-medium"
          >
            Kaygee@gmail.com
          </a>
          <div className="text-xs text-gray-500 mt-1">
            Available for freelance & internships
          </div>
        </div>
      </div>
    </section>
  );
}

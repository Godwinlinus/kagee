import React, { useState } from "react";

const Project = () => { 
  const projects = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Project ${i + 1}`,
    description: `Detailed description of project ${i + 1}. Tools and techniques highlighted here.`,
    skills: ["React", "Tailwind", "Design", "3D Modeling"].slice(0, (i % 4) + 1),
    // Picsum Photos - reliable image source with random heights for masonry effect
    image: `https://picsum.photos/500/${Math.floor(Math.random() * 400) + 200}?random=${i}`
  }));

  const [selected, setSelected] = useState(null);

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-black dark:text-white">Projects</h2>

        {/* 2-column Masonry Grid */}
        <div className="columns-2 gap-4 space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="break-inside-avoid relative cursor-pointer rounded-xl overflow-hidden mb-4"
              onClick={() => setSelected(project)}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto object-cover rounded-xl transform transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white p-2 text-sm text-center opacity-0 hover:opacity-100 transition-opacity">
                {project.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full overflow-hidden relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 text-2xl font-bold"
            >
              &times;
            </button>

            <img
              src={selected.image}
              alt={selected.name}
              className="w-full h-96 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">{selected.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{selected.description}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Skills: {selected.skills.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;

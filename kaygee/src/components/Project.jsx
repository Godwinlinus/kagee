import React, { useState } from "react";

const Project = () => {
  // Use images that are present in `public/` (root) — repeat them to reach 12 items
  const images = [
    "/images/project-1.jpg",
    "/images/project-2.png",
    "/ProfilePhoto.png",
    "/Thumbnail.png",
    "/images/project-5.jpg",
  ];

  // Create 12 project entries, cycling the images and giving each a random height
  const projects = Array.from({ length: 12 }, (_, i) => {
    const id = i + 1;
    const img = images[i % images.length];
    return {
      id,
      name: `Project ${id}`,
      description: `Detailed description of project ${id}. Tools and techniques highlighted here.`,
      skills: ["React", "Tailwind", "Design", "3D Modeling"].slice(0, (i % 4) + 1),
      image: img,
      // random height between 200 and 520 for varied masonry
      height: Math.floor(Math.random() * 320) + 200,
    };
  });

  const [selected, setSelected] = useState(null);

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-black dark:text-white">
          Projects
        </h2>

        {/* Masonry using CSS columns; each item gets its own randomized height */}
        <div className="columns-2 gap-4 space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              style={{ height: `${project.height}px` }}
              className="break-inside-avoid relative cursor-pointer rounded-xl overflow-hidden mb-4"
              onClick={() => setSelected(project)}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-105"
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

            <img src={selected.image} alt={selected.name} className="w-full h-96 object-cover" />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
                {selected.name}
              </h3>
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

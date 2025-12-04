import React from "react";

const Footer = () => {
  const links = [
    {
      id: "linkedin",
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/your-profile",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4.98 3.5C4.98 4.6 4.06 5.5 2.96 5.5 1.86 5.5.94 4.6.94 3.5.94 2.4 1.86 1.5 2.96 1.5 4.06 1.5 4.98 2.4 4.98 3.5zM.9 8.98H5v12.5H.9V8.98zM8.77 8.98h3.84v1.7h.05c.54-1.02 1.87-2.1 3.86-2.1 4.12 0 4.88 2.7 4.88 6.2v7.72H19.4v-6.83c0-1.63-.03-3.72-2.27-3.72-2.27 0-2.62 1.78-2.62 3.61v6.94H8.77V8.98z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      id: "github",
      name: "GitHub",
      href: "https://github.com/your-username",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.7 3.07 8.68 7.33 10.08.54.1.74-.24.74-.53 0-.26-.01-1-.02-1.95-2.98.65-3.61-1.44-3.61-1.44-.49-1.26-1.2-1.6-1.2-1.6-.98-.67.07-.66.07-.66 1.08.08 1.65 1.12 1.65 1.12.96 1.64 2.52 1.17 3.14.9.1-.7.38-1.17.7-1.44-2.38-.27-4.88-1.19-4.88-5.3 0-1.17.42-2.13 1.11-2.88-.11-.28-.48-1.42.11-2.96 0 0 .9-.29 2.95 1.1a10.2 10.2 0 012.69-.36c.91 0 1.82.12 2.69.36 2.05-1.39 2.95-1.1 2.95-1.1.59 1.54.22 2.68.11 2.96.7.75 1.11 1.7 1.11 2.88 0 4.12-2.5 5.03-4.88 5.29.39.34.74 1.01.74 2.03 0 1.47-.01 2.65-.01 3.01 0 .29.19.64.75.53C19.03 20.28 22.1 16.3 22.1 11.6 22.1 5.33 17.27.5 12 .5z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      id: "email",
      name: "Email",
      href: "mailto:you@vangogh.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M2 6.5v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-11c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2zm2 .5l8 5 8-5V6.5L12 11 4 7z" fill="currentColor"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full text-gray-700 dark:text-gray-300 py-12 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <div className="font-bold text-lg md:text-xl text-black dark:text-white">© {new Date().getFullYear()} VanGogh Studio</div>
          <div className="text-sm mt-1 text-gray-500 dark:text-gray-400">
            Crafting things that don't break on the first deploy.
          </div>
        </div>

        {/* Social Links */}
        <nav aria-label="Footer" className="flex items-center gap-4 md:gap-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 transition-transform transform hover:scale-110 hover:text-indigo-600 dark:hover:text-indigo-400"
              title={link.name}
            >
              <span className="w-5 h-5">{link.icon}</span>
              <span className="hidden sm:inline">{link.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

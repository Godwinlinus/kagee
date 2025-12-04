import React from "react";
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const Footer = () => {
  const links = [
    {
      id: "linkedin",
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/your-profile",
      icon: <FiLinkedin aria-hidden size={18} />,
    },
    {
      id: "github",
      name: "GitHub",
      href: "https://github.com/your-username",
      icon: <FiGithub aria-hidden size={18} />,
    },
    {
      id: "email",
      name: "Email",
      href: "mailto:you@vangogh.com",
      icon: <FiMail aria-hidden size={18} />,
    },
  ];

  return (
    <footer className="w-full py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <div className="font-bold text-lg md:text-xl">© {new Date().getFullYear()} Kay gee</div>
        </div>

        {/* Social Links */}
        <nav aria-label="Footer" className="flex items-center gap-4 md:gap-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="flex items-center gap-2 text-sm font-medium transition-transform transform hover:scale-110 hover:text-indigo-600 dark:hover:text-indigo-400"
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

import React from "react";
import { FaTwitter, FaTiktok, FaArrowCircleUp, FaEnvelope, FaPhone, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const links = [
    {
      id: "call",
      name: "Phone",
      href: "https://github.com/your-username",
      icon: <FaPhone aria-hidden size={18} />,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      href: "https://github.com/your-username",
      icon: <FaLinkedinIn aria-hidden size={18} />,
    },
    {
      id: "instagrm",
      name: "Instagram",
      href: "https://github.com/your-username",
      icon: <FaInstagram aria-hidden size={18} />,
    },
    {
      id: "email",
      name: "Email",
      href: "mailto:you@vangogh.com",
      icon: <FaEnvelope aria-hidden size={18} />,
    },
    {
      id: "twitter",
      name: "Twitter",
      href: "#",
      icon: <FaTwitter aria-hidden size={18} />,
    },
    {
      id: "tiktok",
      name: "TikTok",
      href: "#",
      icon: <FaTiktok aria-hidden size={18} />,
    },
    {
      id: "top",
      name: "Back to top",
      href: "#",
      icon: <FaArrowCircleUp aria-hidden size={25} className="border p-1 rounded-full" />,
      scrollToTop: true,
    },
  ];

  const handleClick = (link) => {
    if (link.scrollToTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.open(link.href, link.href.startsWith("mailto:") ? "_self" : "_blank");
    }
  };

  return (
    <footer className="w-full py-12 transition-colors">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <div className="text-sm tracking-tighter">© {new Date().getFullYear()} KayGee</div>
        </div>

        {/* Social Links */}
        <nav aria-label="Footer" className="flex items-center gap-4 md:gap-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link)}
              className="flex items-center gap-2 text-sm font-medium transition-transform transform hover:scale-110"
              title={link.name}
            >
              <span className="w-5 h-5">{link.icon}</span>
              <span className="hidden sm:inline">{link.name}</span>
            </button>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const active = ({ isActive }) => (isActive ? "font-semibold tracking-tight" : "");

const Nav = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true); // controls nav visibility
  const lastScrollY = useRef(0);

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 0) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // scrolling down
        setVisible(false);
      } else {
        // scrolling up
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="w-full mx-auto fixed top-10 left-0 z-50 backdrop-blur-lg"
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -120 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2 dark:border-gray-700/30">
        {/* LOGO */}
        <NavLink to="/" className="p-1 bg-gray-100">
          <motion.img
            src="/images/KayGee.svg"
            alt="logo"
            className="h-6 w-auto"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          />
        </NavLink>

        {/* NAV TOOLS */}
        <div className="flex items-center gap-4">
          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10 text-sm">
            {["Home", "My Work", "Experience", "About"].map((item) => (
              <motion.div whileHover={{ scale: 1.08 }} className="inline-block" key={item}>
                <NavLink to={item === "About" ? "/about" : "/"} className={active}>
                  {item}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* THEME TOGGLE */}
          <motion.button
            onClick={toggleTheme}
            className="hidden md:flex px-2 transition hover:scale-110"
            aria-label="Toggle theme"
            whileTap={{ scale: 0.95 }}
          >
            {theme === "light" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>

          {/* MOBILE BUTTON */}
          <motion.button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 transition"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {mobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed top-14 right-0 mx-6 md:hidden z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col shadow-xl p-6 space-y-5 h-screen z-100">
              {["Home", "My Work", "About"].map((item) => (
                <NavLink
                  key={item}
                  to={item === "About" ? "/about" : "/"}
                  className={active}
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </NavLink>
              ))}
              <button onClick={toggleTheme} className="px-2 mt-4">
                {theme === "light" ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Nav;

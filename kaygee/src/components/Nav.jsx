import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
// import { useTheme } from "../ThemeContext";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { FaTty } from "react-icons/fa";

const active = ({ isActive }) => (isActive ? "font-semibold tracking-tight" : "");

const Nav = () => {
  // const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 0) return;

      // Hide/show nav
      setVisible(currentScrollY < lastScrollY.current || currentScrollY < 100);

      // Set scroll state for desktop menu bg
      setScrolled(currentScrollY > 50);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`w-full sticky top-0 left-0 z-50 backdrop-blur-lg transition-colors duration-300 ${
          scrolled ? "bg-black" : "bg-transparent"
        }`}
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -120 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="mx-auto flex items-center justify-between px-4 py-5 lg:py-5">
          {/* LOGO */}
          <NavLink to="/" className="p-1 text-3xl font-bold text-white">
            <motion.h2
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              kagee
            </motion.h2>
          </NavLink>

          {/* NAV TOOLS */}
          <div className="flex items-center gap-4 ">
            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-10 text-sm text-white">
              {["Home", "My Work", "Experience", "About"].map((item) => (
                <motion.div whileHover={{ scale: 1.08 }} className="inline-block hover:text-yellow-400" key={item}>
                  <NavLink to={item === "About" ? "/about" : "/"} className={active}>
                    {item}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* MOBILE BUTTON */}
            <motion.button
              onClick={() => setMobileOpen((v) => !v)}
              className="text-white lg:hidden p-2 transition border rounded hover:scale-110"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {mobileOpen ? <FiX className="w-8 h-8" /> : <FiMenu className="w-8 h-8" />}
            </motion.button>
          </div>

          {/* LET'S CONNECT (desktop) */}
          <motion.button
            // onClick={toggleTheme}
            className="hidden lg:flex items-center gap-3 px-3 py-2 transition rounded"
            aria-label="Let's connect"
            title="Let's connect"
          >
            <p className="text-lg font-medium tracking-tight text-white">LET'S CONNECT</p>

            {/* Motion-wrapped FaTty: rings while hovering the button */}
            <motion.span
              // set transform origin so rotate looks like a phone wiggle
              style={{ originX: 0.5, originY: 0.5 }}
              initial={{ rotate: 0 }}
              whileHover={{
                rotate: [0, -22, 18, -12, 8, -6, 0],
                y: [0, -1, 0, -1, 0, -0.5, 0],
                transition: { duration: 0.9, repeat: Infinity, ease: "easeInOut" },
              }}
              className="inline-flex border p-2 rounded-full bg-yellow-400"
              aria-hidden="true"
            >
              <FaTty size={30}/>
            </motion.span>
          </motion.button>
        </div>
      </motion.header>

      {/* MOBILE MENU FIXED OUTSIDE HEADER */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="text-white fixed top-0 left-0 z-50 h-screen w-2/3 p-6 flex flex-col justify-start space-y-6 bg-black lg:hidden"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.25 }}
          >
            <div className="text-3xl font-bold mb-8 border-b pb-4">kagee</div>
            {["Home", "My Work", "Experience", "About"].map((item) => (
              <NavLink
                key={item}
                to={item === "About" ? "/about" : "/"}
                className={active}
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </NavLink>
            ))}
            <button className="px-2 mt-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const active = ({ isActive }) =>
  isActive
    ? "text-black dark:text-white font-semibold tracking-tight"
    : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition";

const Nav = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full mx-auto px-6 mt-6">
      <div
        className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2
        bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-full shadow-sm border border-white/20 dark:border-gray-700/30"
      >
        {/* LOGO */}
        <NavLink to="/" className="">
          <img src="/images/KayGee.svg" alt="logo" className="h-6 w-auto font-" />
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-sm">
          <NavLink to="/" className={active}>Work</NavLink>
          <NavLink to="/about" className={active}>About</NavLink>
          <NavLink to="/PlayGround/1" className={active}>Exhibition</NavLink>
        </nav>

        {/* TOOLS */}
        <div className="flex items-center gap-4">
          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-white/40 dark:bg-gray-800/40 border border-white/20 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-700 transition"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <FiSun className="w-5 h-5 text-gray-700" />
            ) : (
              <FiMoon className="w-5 h-5 text-gray-300" />
            )}
          </button>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-xl bg-white/40 dark:bg-gray-800/40 border
            border-white/20 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-700 transition"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-24 left-0 right-0 mx-6 md:hidden transition-all duration-300 ${
          mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col z-100 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl px-6 space-y-5">
          <NavLink to="/" className={active} onClick={() => setMobileOpen(false)}>Work</NavLink>
          <NavLink to="/about" className={active} onClick={() => setMobileOpen(false)}>About</NavLink>
          <NavLink to="/PlayGround/1" className={active} onClick={() => setMobileOpen(false)}>Playground</NavLink>
          <NavLink to="/contact" className={active} onClick={() => setMobileOpen(false)}>Contact</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Nav;

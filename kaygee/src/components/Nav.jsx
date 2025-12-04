import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../ThemeContext";

const active = ({ isActive }) =>
  isActive
    ? "text-black dark:text-white font-semibold transition-colors"
    : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors";

const Nav = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full py-6 bg-white dark:bg-gray-900 transition-colors rounded-full mx-4">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="text-lg font-bold tracking-tight text-black dark:text-white">
          logo
        </div>

        {/* NAVIGATION */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <NavLink to="/" className={active}>
              Work
            </NavLink>
            <NavLink to="/about" className={active}>
              About
            </NavLink>
            <NavLink to="/PlayGround/1" className={active}>
              Playground
            </NavLink>
            <NavLink to="/contact" className={active}>
              Contact
            </NavLink>
          </nav>

          {/* DARK MODE TOGGLE */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 6.464l.707-.707a1 1 0 011.414 0zM5 11a1 1 0 100-2H4a1 1 0 100 2h1z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;

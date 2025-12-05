// Preloader.jsx
import React, { useEffect, useState } from "react";
import { ImSpinner2 } from "react-icons/im"; // react-icons (ImSpinner2 is a friendly spinner)

/**
 * Preloader
 * Props:
 * - loaded: boolean -> hide when true
 * - autoHide: boolean -> listen for window 'load' (default true)
 * - delay: ms after loaded before hiding (default 350)
 * - message: string
 */
export default function Preloader({
  loaded = false,
  autoHide = true,
  delay = 350,
  message = "Preparing KayGee Studio..."
}) {
  const [visible, setVisible] = useState(true);
  const [animPlay, setAnimPlay] = useState(true);

  useEffect(() => {
    // Respect reduced motion preference
    const mq = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq && mq.matches) setAnimPlay(false);

    // Auto-hide on window load (fallback)
    let onLoad;
    if (autoHide) {
      onLoad = () => {
        setTimeout(() => setVisible(false), delay);
      };
      if (document.readyState === "complete") {
        onLoad();
      } else {
        window.addEventListener("load", onLoad, { once: true });
      }
    }

    return () => {
      if (onLoad) window.removeEventListener("load", onLoad);
    };
  }, [autoHide, delay]);

  // Parent-controlled hide
  useEffect(() => {
    if (loaded) {
      const t = setTimeout(() => setVisible(false), delay);
      return () => clearTimeout(t);
    }
  }, [loaded, delay]);

  // Wait for fade-out before unmounting
  const [render, setRender] = useState(true);
  useEffect(() => {
    if (!visible) {
      const t = setTimeout(() => setRender(false), 420);
      return () => clearTimeout(t);
    } else {
      setRender(true);
    }
  }, [visible]);

  if (!render) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-hidden={!visible}
      className={`fixed inset-0 z-50 flex items-center justify-center
        bg-white dark:bg-gray-900 text-black dark:text-white transition-opacity
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="flex flex-col items-center gap-4 px-6">
        {/* react-icons spinner */}
        <div
          className={`relative flex items-center justify-center rounded-full
            ${animPlay ? "animate-rotate" : ""}`}
          style={{ width: 88, height: 88 }}
          aria-hidden="true"
        >
          <ImSpinner2
            className="w-14 h-14"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px rgba(59,130,246,0.9)" // subtle ring look
            }}
          />
          {/* colored arc above the spinner */}
          <svg
            viewBox="0 0 48 48"
            className="absolute inset-0 w-20 h-20"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#8b5cf6" />
                <stop offset="1" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <circle cx="24" cy="24" r="14" stroke="rgba(15,23,42,0.06)" strokeWidth="3" fill="none" />
            <path d="M38 24a14 14 0 00-14-14" stroke="url(#g1)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>

          {/* pulsing dot */}
          <span
            className={`absolute w-3 h-3 rounded-full -right-2 -top-2
              ${animPlay ? "animate-pulse-dot" : ""}`}
            style={{ background: "linear-gradient(90deg,#8b5cf6,#ec4899)" }}
          />
        </div>
      </div>

      <style>{`
        /* spinner rotate using CSS since react-icons is just an element */
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulseDot {
          0% { transform: scale(1); opacity: 0.95; }
          50% { transform: scale(1.45); opacity: 0.6; }
          100% { transform: scale(1); opacity: 0.95; }
        }
        @keyframes sweep {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
        .animate-rotate { animation: rotate 1.6s linear infinite; }
        .animate-pulse-dot { animation: pulseDot 1.2s ease-in-out infinite; }
        .animate-sweep { animation: sweep 1.6s linear infinite; }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-rotate, .animate-pulse-dot, .animate-sweep {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}

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
        bg-[#181717] transition-opacity
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
            size={20}
            style={{
              color: "transparent", // subtle ring look
            }}
          />

          {/* pulsing dot */}
          <span
            className={`absolute w-3 h-3 rounded-full -right-2 -top-2
              ${animPlay ? "animate-pulse-dot" : ""}`}
            style={{ background: "#ffff" }}
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

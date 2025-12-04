import React from 'react';

const Background = ({ count = 16 }) => {
  const circles = Array.from({ length: count }, () => ({
    w: Math.random() * 160 + 60,
    h: Math.random() * 160 + 60,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 6,
    duration: 6 + Math.random() * 12,
  }));

  return (
    <div className="fixed inset-0 -z-30 pointer-events-none">
      {circles.map((c, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20 dark:opacity-30 bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 dark:from-indigo-800 dark:via-purple-700 dark:to-pink-700"
          style={{
            width: `${c.w}px`,
            height: `${c.h}px`,
            top: `${c.top}%`,
            left: `${c.left}%`,
            animation: `float ${c.duration}s ease-in-out ${c.delay}s infinite alternate`,
          }}
        />
      ))}

      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(-40px) translateX(20px); }
        }
      `}</style>
    </div>
  );
};

export default Background;

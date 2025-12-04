import React from 'react';
export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="flex flex-col items-center gap-4 px-6">
        <svg className="w-16 h-16 text-indigo-600 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>

        <div className="text-center">
          <h2 className="text-xl font-semibold">KayGee Studio</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">Loading content — hang tight.</p>
        </div>
      </div>
    </div>
  );
}

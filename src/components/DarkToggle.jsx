// src/components/DarkToggle.jsx
export default function DarkToggle({ dark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`
        fixed top-4 right-4 z-50
        w-10 h-10 rounded-full flex items-center justify-center
        shadow-lg transition-all duration-300
        hover:scale-110 hover:rotate-12
        ${dark
          ? "bg-gray-700 text-yellow-300"
          : "bg-white text-gray-600 border border-gray-200"}
      `}
    >
      {dark ? (
        // Sun
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) : (
        // Moon
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
}

// src/components/LinkCard.jsx
import { useState } from "react";

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" fill="white" className="w-4 h-4">
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default function LinkCard({ link, index, dark }) {
  const [hovered, setHovered] = useState(false);
  const [pressed,  setPressed]  = useState(false);

  const scale = pressed ? "scale-97" : hovered ? "scale-[1.025] -translate-y-0.5" : "scale-100";

  return (
    <a
      href={link.href}
      aria-label={`${link.title} — ${link.desc}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={()   => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={()   => setPressed(false)}
      className={`
        flex items-center gap-4 p-4 rounded-2xl cursor-pointer select-none no-underline
        transition-all duration-200
        ${scale}
        ${dark
          ? "bg-gray-800 border border-gray-700/60"
          : "bg-white border border-gray-100"}
      `}
      style={{
        animationDelay: `${index * 70}ms`,
        boxShadow: hovered
          ? `0 12px 32px -4px ${link.glow}44, 0 4px 16px -4px ${link.glow}33`
          : dark
            ? "0 2px 12px rgba(0,0,0,0.35)"
            : "0 2px 12px rgba(0,0,0,0.07)",
      }}
    >
      {/* Icon blob */}
      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${link.gradient} shadow-md`}>
        {link.icon}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className={`font-semibold text-sm leading-tight mb-0.5 ${dark ? "text-white" : "text-gray-900"}`}>
          {link.title}
        </p>
        <p className={`text-xs leading-snug truncate ${dark ? "text-gray-400" : "text-gray-500"}`}>
          {link.desc}
        </p>
      </div>

      {/* Arrow */}
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br ${link.gradient}`}
        style={{ opacity: hovered ? 1 : 0.7, transition: "opacity 0.2s" }}
      >
        <ArrowIcon />
      </div>
    </a>
  );
}

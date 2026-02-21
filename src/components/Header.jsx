// src/components/Header.jsx
import logo from "../assets/logooooo-removebg-preview.png";

const tags = [
  { label: "Charity",   light: "bg-rose-50 text-rose-500",    dark: "bg-rose-900/40 text-rose-300" },
  { label: "Community", light: "bg-blue-50 text-blue-500",    dark: "bg-blue-900/40 text-blue-300" },
  { label: "Impact",    light: "bg-emerald-50 text-emerald-600", dark: "bg-emerald-900/40 text-emerald-300" },
];

export default function Header({ dark }) {
  return (
    <header className="text-center mb-8">
      <div className="relative flex items-center justify-center mb-5">
        <div className="absolute w-32 h-32 rounded-full border-2 border-blue-400 opacity-30 animate-pulse-ring" />
        <div className="absolute w-36 h-36 rounded-full border border-emerald-400 opacity-20 animate-pulse-ring delay-800" />

        <div
          className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white"
          style={{ boxShadow: "0 8px 32px rgba(59,130,246,0.25), 0 0 0 4px white" }}
        >
          <img
            src={logo}
            alt="Impact Society Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <h1 className={`text-2xl font-bold mb-2 ${dark ? "text-white" : "text-gray-900"}`}>
        Impact Society 🤍
      </h1>

      <div className="flex items-center justify-center gap-2 mb-3 flex-wrap">
        {tags.map(({ label, light, dark: dk }) => (
          <span
            key={label}
            className={`inline-flex items-center text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${dark ? dk : light}`}
          >
            {label}
          </span>
        ))}
      </div>

      <p className="text-xs font-medium text-gray-400">
        Made by CFPMS Tit Mellil Trainees 
      </p>
    </header>
  );
}

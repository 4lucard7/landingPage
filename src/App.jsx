// src/App.jsx
import { useState } from "react";
import { links, socials } from "./data/links";
import DarkToggle from "./components/DarkToggle";
import Header    from "./components/Header";
import LinkCard  from "./components/LinkCard";
import Footer    from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        dark ? "bg-gray-950" : "bg-gradient-to-br from-slate-50 via-white to-blue-50"
      }`}
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Background blobs (light mode only) */}
      {!dark && (
        <>
          <div
            className="fixed top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)", filter: "blur(60px)" }}
          />
          <div
            className="fixed bottom-0 right-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, #10b981 0%, transparent 70%)", filter: "blur(50px)" }}
          />
        </>
      )}

      {/* Dark / Light toggle */}
      <DarkToggle dark={dark} onToggle={() => setDark(!dark)} />

      {/* Page content */}
      <main className="max-w-md mx-auto px-4 pt-8 pb-12">
        <Header dark={dark} />

        {/* Link cards */}
        <div className="flex flex-col gap-3">
          {links.map((link, i) => (
            <LinkCard key={link.id} link={link} index={i} dark={dark} />
          ))}
        </div>

        <Footer dark={dark} socials={socials} />
      </main>
    </div>
  );
}

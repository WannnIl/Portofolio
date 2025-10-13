import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();
  const [activeLink, setActiveLink] = useState(null); // changed to null

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#materi', label: 'Materi' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    // pilih section yang paling "dekat" dengan center viewport
    const ids = ['hero', ...navLinks.map(n => n.href.slice(1))];
    const getSections = () => ids.map(id => document.getElementById(id)).filter(Boolean);

    let raf = null;
    const updateActive = () => {
      const sections = getSections();
      if (!sections.length) return;
      const center = window.innerHeight / 2;
      let closest = { id: null, dist: Infinity };
      sections.forEach(s => {
        const rect = s.getBoundingClientRect();
        const sCenter = rect.top + rect.height / 2;
        const dist = Math.abs(sCenter - center);
        if (dist < closest.dist) closest = { id: s.id, dist };
      });
      if (closest.id === 'hero' || closest.id == null) {
        setActiveLink(null);
      } else {
        setActiveLink('#' + closest.id);
      }
    };

    // initial check & listeners (use requestAnimationFrame for smoother updates)
    updateActive();
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateActive);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const linkBase =
    'px-3 py-1 rounded-md transition text-gray-800 dark:text-slate-200 flex items-center';

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* === LOGO === */}
        <a
          href="#hero"
          onClick={() => { setActiveLink(null); setMenuOpen(false); }}
          className="font-mono text-green-700 text-2xl tracking-wide hover:text-green-900 transition"
        >
          🛡️Rixel0x
        </a>

        {/* === NAVBAR CENTER === */}
        <nav className="hidden md:flex gap-3 text-sm opacity-90 justify-center flex-1">
          {navLinks.map(link => {
            const isActive = activeLink === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`${linkBase} ${isActive ? 'bg-green-700/25 text-white ring-1 ring-green-400/30' : 'bg-white/30 dark:bg-[#071428]/40'} hover:bg-green-700/30`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* === RIGHT SIDE === */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(prev => !prev)}
            className="p-2 rounded-md border border-green-900 bg-green-700/30 dark:bg-green-900/10 hover:bg-green-500 dark:hover:bg-green-700/30 transition"
            aria-label="Toggle theme"
            aria-pressed={darkMode}
          >
            {darkMode ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-green-900" />
            )}
          </button>

          {/* Resume button */}
          <a
            href="#resume"
            className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 border border-green-700 rounded-md text-sm font-medium hover:bg-green-700/30 bg-white/30 dark:bg-[#071428]/40"
          >
            Resume
          </a>

          {/* Burger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md bg-green-900/10 border border-green-900"
            aria-label="menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* === MOBILE MENU === */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-[#08101a] md:hidden px-6 pb-6">
          <div className="flex flex-col gap-3">
            {navLinks.map(link => {
              const isActive = activeLink === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => { setMenuOpen(false); setActiveLink(link.href); }}
                  className={`block px-3 py-2 rounded-md transition text-gray-800 dark:text-slate-200 ${isActive ? 'bg-green-700/25 text-white' : 'bg-white/30 dark:bg-[#071428]/40'} hover:bg-green-700/30`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}


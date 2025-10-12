import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#materi', label: 'Materi' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* === LOGO === */}
        <a
  href="#hero"
  className="font-mono text-green-700 text-2xl tracking-wide hover:text-green-900 transition"
>
  █ Rixel0x
</a>


        {/* === NAVBAR CENTER === */}
        <nav className="hidden md:flex gap-8 text-sm opacity-90 justify-center flex-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-green-700 transition"
            >
              {link.label}
            </a>
          ))}
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
            className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 border border-green-700 rounded-md text-sm font-medium hover:bg-green-700/30"
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
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-green-500 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

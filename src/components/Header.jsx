import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();
  const [activeLink, setActiveLink] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  const manualActiveRef = useRef(false);
  const manualTimerRef = useRef(null);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#materi', label: 'Materi' },
    { href: '#contact', label: 'Contact' },
  ];

  // handle nav clicks: smooth scroll with header offset, set active immediately,
  // and lock automatic detection for a short time so it doesn't override.
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    // header height offset
    const headerEl = document.querySelector('header');
    const headerHeight = headerEl ? headerEl.offsetHeight : 80;
    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 8;

    // set active immediately (visual feedback)
    setActiveLink(href);

    // mark manual active to avoid override by updateActive
    manualActiveRef.current = true;
    if (manualTimerRef.current) clearTimeout(manualTimerRef.current);
    manualTimerRef.current = setTimeout(() => {
      manualActiveRef.current = false;
      manualTimerRef.current = null;
      // small delay to allow browser to finish scroll
      requestAnimationFrame(() => {
        // no-op: updateActive in useEffect will run on scroll/resizes; we just leave it.
      });
    }, 700); // match smooth scroll duration (adjust if needed)

    // smooth scroll
    window.scrollTo({ top, behavior: 'smooth' });

    // close mobile menu if open
    setMenuOpen(false);
  };

  useEffect(() => {
    // pilih section yang paling "dekat" dengan center viewport
    const ids = ['hero', ...navLinks.map(n => n.href.slice(1))];
    const getSections = () => ids.map(id => document.getElementById(id)).filter(Boolean);

    let raf = null;
    const updateActive = () => {
      // if manual nav recently triggered, skip automatic override
      if (manualActiveRef.current) return;

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
      if (manualTimerRef.current) clearTimeout(manualTimerRef.current);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const linkBase =
    'px-3 py-1 rounded-md transition text-gray-800 dark:text-slate-200 flex items-center';

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#hero"
          onClick={() => { setActiveLink(null); setMenuOpen(false); }}
          className="font-mono text-green-700 text-2xl tracking-wide hover:text-green-900 transition"
        >
          🛡️Rixel0x
        </a>

        <nav className="hidden md:flex gap-3 text-sm opacity-90 justify-center flex-1">
          {navLinks.map(link => {
            const isActive = activeLink === link.href;
            const isHovered = hoveredLink === link.href;
            const bg = isHovered ? 'var(--nav-link-hover-bg)' : isActive ? 'var(--nav-active-bg)' : 'var(--nav-link-bg)';
            const color = isActive ? 'var(--nav-active-text)' : 'var(--nav-link-text)';
            const borderColor = isActive ? 'var(--nav-active-border, var(--nav-border))' : 'var(--nav-border)';
            const borderWidth = isActive ? '2px' : '1px';

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className={linkBase + ' bg-white/30 dark:bg-[#071428]/40 hover:bg-green-700/20 dark:hover:bg-green-700/30 transition text-gray-800 dark:text-slate-200'}
                style={{
                  backgroundColor: bg,
                  color,
                  border: `${borderWidth} solid ${borderColor}`,
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* right side unchanged */}
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
            className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 border border-green-700 rounded-md text-sm font-medium hover:bg-green-700/30 bg-white/30 dark:bg-green-900/10 dark:hover:bg-green-700/30"
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

      {/* mobile menu unchanged (keep click behavior) */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-[#08101a] md:hidden px-6 pb-6">
          <div className="flex flex-col gap-3">
            {navLinks.map(link => {
              const isActive = activeLink === link.href;
              const mobileBorderColor = isActive ? 'var(--nav-active-border, var(--nav-border))' : 'var(--nav-border)';
              const mobileBorderWidth = isActive ? '2px' : '1px';
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { handleNavClick(e, link.href); }}
                  className="block px-3 py-2 rounded-md transition text-gray-800 dark:text-slate-200"
                  style={{
                    backgroundColor: isActive ? 'var(--nav-active-bg)' : 'var(--nav-link-bg)',
                    color: isActive ? 'var(--nav-active-text)' : 'var(--nav-link-text)',
                    border: `${mobileBorderWidth} solid ${mobileBorderColor}`,
                  }}
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

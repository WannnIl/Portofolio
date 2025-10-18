import React, { useEffect, useState } from "react";
import hackerImg from "../assets/profile_fr.jpg";     
import matrixBg from "../assets/bluematrix.jpg";

export default function Hero() {

  const DARK_THEME_VARS = {
    /* NAV vars (dark) */
    '--nav-bg': 'rgba(10,10,10,0.75)',
    '--nav-link-bg': 'rgba(7,20,40,0.25)',
    '--nav-link-text': '#cbd5e1',
    '--nav-link-hover-bg': 'rgba(34,197,94,0.30)',
    '--nav-active-bg': 'rgba(34,197,94,0.30)',
    '--nav-active-text': '#ffffff',
    '--nav-border': 'white',

    '--project-title-color': '#22c55e',
    '--project-desc-color': '#ffffff',
    '--project-tag-color': '#22c55e', 
    '--project-tag-bg': 'rgba(52,211,153,0.06)',
    '--project-tag-border': 'rgba(52,211,153,0.18)',
    '--project-border': '#1e3a8a',
    '--project-bg': 'rgba(10, 10, 10, 0.5)',

    '--about-desc-color': 'white', 

    '--materi-item-text': '#22c55e',
    '--materi-item-bg': 'rgba(10, 10, 10, 0.5)',
    '--materi-item-border': '#1e3a8a',

    '--resume-bg': 'rgba(10, 10, 10, 0.5)',
    '--resume-text': '#cbd5e1',
    '--resume-link-color': '#22c55e',
    '--resume-link-color-hover': '#ffffff',
    '--resume-link-bg': 'rgba(20, 116, 55, 0.3)',
    '--resume-link-bg-hover': 'rgba(20, 116, 55, 0.7)',
    '--resume-link-border-color': '#1e3a8a',
    '--resume-link-border-color-hover': '#ffffff',
    '--resume-border': '#1e3a8a',
    '--resume-ts-text': '#22c55e',

    '--contact-input-text': '#cbd5e1',
    '--contact-input-border': 'white',
    '--contact-btn-bg': '#22c55e',
    '--contact-btn-text': '#0b1725',
    '--contact-btn-border': 'black',
  };

  useEffect(() => {
    Object.entries(DARK_THEME_VARS).forEach(([k, v]) => {
      document.documentElement.style.setProperty(k, v);
    });
    return () => {
      Object.keys(DARK_THEME_VARS).forEach((k) => {
        document.documentElement.style.removeProperty(k);
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const taglines = [
    "pentester › bug hunter › security researcher",
    "web developer › cybersecurity enthusiast › ctf player",
    "python › php › react › laravel › ethical hacking",
    "code › hack › secure › repeat"
  ];

  const [typed, setTyped] = useState("");
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const tagline = taglines[currentTaglineIndex];

  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 5000);
    return () => clearInterval(rotateInterval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTyped("");
    let i = 0;
    const interval = setInterval(() => {
      setTyped(tagline.slice(0, i));
      i++;
      if (i > tagline.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [tagline]);

  return (
    <section
      id="hero" 
      className="relative text-white scroll-mt-40 py-20 md:py-24 xl:py-20 2xl:py-56 md:mx-40 mt-32 rounded-2xl overflow-hidden">
      {/* Background Matrix - lembut */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{ backgroundImage: `url(${matrixBg})` }}
      ></div>

      {/* Overlay gelap tipis */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>

      {/* Konten utama */}
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center z-10">
        {/* === LEFT: Text section === */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-green-500 leading-tight drop-shadow-lg">
            Ilham Kurniawan
          </h1>
          <p className="text-green-400 font-mono mt-3 text-lg">
            $ {typed}
            <span className="animate-pulse">▮</span>
          </p>
          <p className="text-slate-300 max-w-xl mt-5 leading-relaxed">
            Information Systems student with a strong passion for cybersecurity and web development. 
            Experienced in penetration testing, bug hunting, and building web applications.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#projects"
              className="px-4 py-2 border border-green-700 rounded-md text-green-500 hover:bg-green-700/10 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-4 py-2 border border-green-900 bg-green-700/20 rounded-md text-green-400 hover:bg-green-600/30 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* === RIGHT: Image section === */}
        <div className="relative flex justify-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-green-800 shadow-[0_0_30px_#00ff99aa]">
            <img
              src={hackerImg}
              alt="Ilham Kurniawan"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
          <div className="absolute inset-0 rounded-full animate-pulse bg-green-600/10 blur-2xl"></div>
        </div>
      </div>

      {/* Sedikit efek gradient hijau di bawah */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-green-600/10 to-transparent"></div>
    </section>
  );
}

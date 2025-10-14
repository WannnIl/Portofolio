// ...existing code...
import React, { useEffect, useState } from "react";
import hackerImg from "../assets/profile_fr.jpg";
import matrixBg from "../assets/bluematrix.jpg";

export default function HeroLight() {
  // <-- mudah diubah: ubah nilai di sini untuk mengatur warna teks/tag pada mode light
  const LIGHT_THEME_VARS = {
    /* NAV vars (light) */
    '--nav-bg': 'rgba(255,255,255,0.85)',
    '--nav-link-bg': 'rgba(255,255,255,0.3)',
    '--nav-link-text': '#0f172a',
    '--nav-link-hover-bg': 'rgba(34,197,94,0.4)',
    '--nav-active-bg': 'rgba(34,197,94,0.4)',
    '--nav-active-text': '#0f172a',
    '--nav-border': 'black',

    '--project-title-color': '#1e3a8a',
    '--project-desc-color': '#000000',
    '--project-tag-color': '#22c55e',
    '--project-tag-bg': 'rgba(52,211,153,0.06)',
    '--project-tag-border': '#000000',
    '--project-border': '#000000',
    '--project-bg': '#e3edff',

    '--about-desc-color': 'black',    

    '--materi-item-text': '#1e3a8a',
    '--materi-item-bg': '#e3edff',
    '--materi-item-border': '#000000',

    '--resume-bg': '#e3edff',
    '--resume-text': '#000000',
    '--resume-link-color': '#ffffff',
    '--resume-link-color-hover': '#000000',
    '--resume-link-bg': 'rgba(20, 116, 55, 0.2)',
    '--resume-link-bg-hover': 'rgba(20, 116, 55, 0.7)',
    '--resume-link-border-color': '#22c55e',
    '--resume-link-border-color-hover': '#000000',
    '--resume-border': '#000000',
    '--resume-ts-text': '#22c55e',

    '--contact-input-text': '#0f172a',
    '--contact-input-border': 'black',
    '--contact-btn-bg': '#22c55e',
    '--contact-btn-text': 'black',
    '--contact-btn-border': 'black',
  };

  const [typed, setTyped] = useState("");
  const tagline = "pentester › bug hunter › security researcher";

  useEffect(() => {
    // set CSS variables saat HeroLight mount (light mode)
    Object.entries(LIGHT_THEME_VARS).forEach(([k, v]) => {
      document.documentElement.style.setProperty(k, v);
    });
    return () => {
      // bersihkan saat unmount supaya tidak tetap mengoverride dark mode
      Object.keys(LIGHT_THEME_VARS).forEach((k) => {
        document.documentElement.style.removeProperty(k);
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(tagline.slice(0, i));
      i++;
      if (i > tagline.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
        id="hero" 
        className="relative text-white scroll-mt-40 py-20 md:py-24 xl:py-20 2xl:py-56 md:mx-40 mt-32 rounded-2xl overflow-hidden">
          {/* Background Matrix */}
          <div
            className="absolute inset-0 bg-cover bg-center blur-sm"
            style={{ backgroundImage: `url(${matrixBg})` }}
          ></div>
    
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90"></div>
    
          <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center z-10">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-green-500 leading-tight drop-shadow-lg">
                Ilham Kurniawan
              </h1>
              <p className="text-green-400 font-mono mt-3 text-lg">
                $ {typed}
                <span className="animate-pulse">▮</span>
              </p>
              <p className="text-slate-300 max-w-xl mt-5 leading-relaxed">
                Security researcher & CTF player passionate about ethical hacking,
                automation, and digital forensics. Exploring vulnerabilities and
                building tools that empower security communities.
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
    
            {/* Image */}
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
    </section>
  );
}
// ...existing code...
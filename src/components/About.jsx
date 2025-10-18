import React from 'react';

export default function About() {
  return (
    <section id="about" className="max-w-6xl scroll-mt-20 mx-auto px-6">
      <h2 className="text-3xl font-semibold mb-4">About</h2>
      <p className="text-base text-slate-400 leading-relaxed" style={{ color: 'var(--about-desc-color' }}>
        I’m <span className="text-green-600 font-mono">Ilham Kurniawan</span>, an Information Systems student passionate about cybersecurity and web development. 
        Contributing to safer digital ecosystems through bug bounty programs, security research, 
        and open-source projects. Actively hunting bugs and competing in CTF challenges 
        to sharpen cybersecurity expertise.
      </p>
      <p className="text-base mt-3 mb-20" style={{ color: 'var(--about-desc-color' }}>
        Currently pursuing a degree in Information Systems at Hasanuddin University, I balance academics, security research, and community activities 
        while contributing to digital safety.
      </p>
    </section>
  );
}

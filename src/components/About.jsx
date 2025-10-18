import React from 'react';

export default function About() {
  return (
    <section id="about" className="max-w-6xl scroll-mt-20 mx-auto px-6">
      <h2 className="text-3xl font-semibold mb-4">About</h2>
      <p className="text-base text-slate-400 leading-relaxed" style={{ color: 'var(--about-desc-color' }}>
        I’m <span className="text-green-600 font-mono">Ilham Kurniawan</span>, a cybersecurity enthusiast and CTF player with a strong interest in 
        penetration testing, network security, and malware analysis. I love exploring vulnerabilities, 
        automating recon workflows, and sharing knowledge about ethical hacking.
      </p>
      <p className="text-base mt-3" style={{ color: 'var(--about-desc-color' }}>
        Currently pursuing a degree in Information Systems, I balance academics, research, and community activities 
        while contributing to open-source cybersecurity tools and learning advanced exploitation.
      </p>
    </section>
  );
}

import React from 'react';

export default function About() {
  return (
    <section id="about" className="max-w-6xl scroll-mt-20 mx-auto px-6">
      <h2 className="text-2xl font-semibold mb-4">About</h2>
      <p className="text-slate-400 leading-relaxed">
        I’m <span className="text-green-400 font-mono">Ilham Kurniawan</span>, a cybersecurity enthusiast and CTF player with a strong interest in 
        penetration testing, network security, and malware analysis. I love exploring vulnerabilities, 
        automating recon workflows, and sharing knowledge about ethical hacking.
      </p>
      <p className="text-slate-400 mt-3">
        Currently pursuing a degree in Information Systems, I balance academics, research, and community activities 
        while contributing to open-source cybersecurity tools and learning advanced exploitation.
      </p>
    </section>
  );
}

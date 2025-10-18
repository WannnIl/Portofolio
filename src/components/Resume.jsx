import React, { useState } from 'react';

export default function Resume() {

  const [hover, setHover] = useState(false);

  return (
    <section id="resume" className="max-w-6xl scroll-mt-20 mx-auto px-6 mb-28">
      <h2 className="text-3xl font-semibold mb-4">Resume</h2>
      <div
        className="p-6 rounded-lg"
        style={{
          backgroundColor: 'var(--resume-bg, #0b1725)',
          border: '1px solid var(--resume-border, rgba(34,197,94,0.15))',
          color: 'var(--resume-text, #cbd5e1)'
        }}
      >
        <p style={{ color: 'var(--resume-text, #cbd5e1)' }} className="mb-4">
          Download my resume for a detailed overview of my education, projects, and cybersecurity experience.
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-block px-4 py-2 rounded-md hover:opacity-95 transition"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            backgroundColor: hover ? 'var(--resume-link-bg-hover)' : 'var(--resume-link-bg)',
            color:'var(--resume-link-color-hover)',
            border: '1px solid',
            borderColor: hover ? 'var(--resume-link-border-color-hover)' : 'var(--resume-link-border-color)',
          }}
        >
          ⬇ Download Resume
        </a>
        <div className="mt-6">
          <h3 className="font-mono mb-2" style={{ color: 'var(--resume-ts-text' }}>Technical Skills</h3>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm" style={{ color: 'var(--resume-text, #cbd5e1)' }}>
            <li>• Penetration Testing & Bug Hunting</li>
            <li>• Python Automation & Scripting</li>
            <li>• Web Exploitation & Recon Tools</li>
            <li>• Linux, Git, and Networking</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

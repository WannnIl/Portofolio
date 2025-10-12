import React from 'react';

export default function Resume() {
  return (
    <section id="resume" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-semibold mb-4">Resume</h2>
      <div className="bg-[#0b1725] border border-green-900/40 p-6 rounded-lg">
        <p className="text-slate-300 mb-4">
          Download my resume for a detailed overview of my education, projects, and cybersecurity experience.
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-block px-4 py-2 border border-green-600 rounded-md hover:bg-green-600/10 text-green-400"
        >
          ⬇ Download Resume
        </a>
        <div className="mt-6">
          <h3 className="text-green-400 font-mono mb-2">Technical Skills</h3>
          <ul className="grid sm:grid-cols-2 gap-2 text-slate-400 text-sm">
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

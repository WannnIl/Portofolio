import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-8 text-center text-xs text-slate-400 flex flex-col items-center gap-2">
      <div className="flex items-center gap-2 text-green-400">
        <a
          href="https://github.com/WannnIl"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-300 transition"
        >
          <Github size={18} />
        </a>
        <a
          href="https://linkedin.com/in/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-300 transition"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="https://x.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-300 transition"
        >
          <Twitter size={18} />
        </a>
      </div>
      <div>© {new Date().getFullYear()} Ilham Kurniawan — My Portofolio</div>
    </footer>
  );
}

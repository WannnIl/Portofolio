import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto mt-20 px-6 py-8 text-center text-xs text-slate-400 flex flex-col items-center gap-2">
      {/* Garis Pemisah */}
      <div className="w-full border-t border-gray-300 dark:border-gray-700 mb-6"></div>
      
      <div className="flex items-center mb-3 gap-2 text-green-400">
        <a
          href="https://github.com/WannnIl"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-300 transition"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/ilham-kurniawan-a93b30304/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-300 transition"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="https://x.com/wannn_il"
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
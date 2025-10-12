import React from 'react';
import { materi } from '../data/materi';

export default function Materi() {
  return (
    <section id="materi" className="max-w-6xl scroll-mt-20 mx-auto px-6">
      <h2 className="text-2xl font-semibold mb-6">Materi Pembelajaran</h2>
      <ul className="grid sm:grid-cols-2 gap-3 text-slate-300">
        {materi.map((m, i) => (
          <li key={i} className="border border-green-900/40 bg-[#0b1725] rounded-lg px-4 py-3 hover:bg-green-900/10 transition">
            <span className="text-green-400 font-mono">{m}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

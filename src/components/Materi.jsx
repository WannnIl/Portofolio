import React from 'react';
import { materi } from '../data/materi';

import { Link } from 'react-router-dom';

export default function Materi() {
  return (
    <section id="materi" className="max-w-6xl scroll-mt-20 mx-auto px-6 mb-20">
      <h2 className="text-3xl font-semibold mb-6">Materi Pembelajaran</h2>
      <ul className="grid sm:grid-cols-2 gap-3" style={{ color: 'var(--materi-item-text)' }}>
        {materi.map((m, i) => (
          <li key={i}>
            <Link
              to={`/materi/${i}`}
              className="block border rounded-lg px-4 py-3 hover:scale-[1.03] transition-all cursor-pointer"
              style={{
                backgroundColor: 'var(--materi-item-bg)',
                borderColor: 'var(--materi-item-border)',
                color: 'var(--materi-item-text)'
              }}
            >
              <span className="font-mono" style={{ color: 'var(--materi-item-text)' }}>{m.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ...existing code...
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';


export default function Projects() {
return (
<section id="projects" className="max-w-6xl mx-auto px-6 py-20">
<h2 className="text-2xl font-semibold mb-6">Projects</h2>
<div className="grid sm:grid-cols-2 gap-6">
{projects.map((p) => (
<div key={p.id} className="p-4 border border-green-900/40 bg-[#0b1725] rounded-lg">
<div className="flex justify-between items-start">
<div>
{/* gunakan CSS variable (dapat diubah di HeroLight.jsx) */}
<h3 className="font-medium" style={{ color: 'var(--project-title-color, #ffffff)' }}>{p.title}</h3>
<p className="text-sm mt-1" style={{ color: 'var(--project-desc-color, #94a3b8)' }}>{p.desc}</p>
</div>
<a href={p.link} className="p-2 text-green-300 hover:text-green-100"><ExternalLink size={16} /></a>
</div>
<div className="flex flex-wrap gap-2 mt-3">
{p.tech.map((t) => (
  <span
    key={t}
    className="text-xs border rounded px-2 py-1"
    style={{
      color: 'var(--project-tag-color, #94a3b8)',
      backgroundColor: 'var(--project-tag-bg, transparent)',
      borderColor: 'var(--project-tag-border, rgba(148,163,184,0.12))'
    }}
  >
    {t}
  </span>
))}
</div>
</div>
))}
</div>
</section>
);
}
// ...existing code...
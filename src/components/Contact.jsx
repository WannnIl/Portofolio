import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <form onSubmit={(e)=>{e.preventDefault(); alert('Message sent (demo)')}} className="flex flex-col gap-4 max-w-md">
        <input
          placeholder="Your email"
          required
          className="bg-transparent px-3 py-2 rounded"
          style={{
            color: 'var(--contact-input-text)',
            border: '1px solid var(--contact-input-border)'
          }}
        />
        <textarea
          placeholder="Your message"
          rows={4}
          required
          className="bg-transparent px-3 py-2 rounded"
          style={{
            color: 'var(--contact-input-text)',
            border: '1px solid var(--contact-input-border)'
          }}
        />
        <button
          className="inline-block px-4 py-2 rounded font-medium"
          style={{
            backgroundColor: 'var(--contact-btn-bg)',
            color: 'var(--contact-btn-text)',
            border: '1px solid var(--contact-btn-border)'
          }}
        >
          Send
        </button>
      </form>
    </section>
  );
}

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Gunakan environment variables dari .env
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const autoReplyTemplateID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Validasi environment variables
    if (!serviceID || !templateID || !publicKey) {
      setMessage('❌ Konfigurasi email belum lengkap. Hubungi administrator.');
      setLoading(false);
      return;
    }

    const formData = new FormData(form.current);
    const currentDate = new Date().toLocaleString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const templateParams = {
      user_email: formData.get('user_email'),
      message: formData.get('message'),
      current_date: currentDate
    };

    // Kirim email ke Anda (notifikasi)
    const sendNotification = emailjs.send(serviceID, templateID, templateParams, publicKey);
    
    // Kirim auto-reply ke pengirim (jika template ID ada)
    const sendAutoReply = autoReplyTemplateID 
      ? emailjs.send(serviceID, autoReplyTemplateID, templateParams, publicKey)
      : Promise.resolve();

    // Tunggu kedua email terkirim
    Promise.all([sendNotification, sendAutoReply])
      .then(
        (results) => {
          console.log('SUCCESS!', results);
          setMessage('✅ Pesan berhasil dikirim! Terima kasih.');
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessage('❌ Gagal mengirim pesan. Coba lagi!');
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 max-w-md">
        <input
          type="email"
          name="user_email"
          placeholder="Your email"
          required
          className="bg-transparent px-3 py-2 rounded"
          style={{
            color: 'var(--contact-input-text)',
            border: '1px solid var(--contact-input-border)'
          }}
        />
        <textarea
          name="message"
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
          type="submit"
          disabled={loading}
          className="inline-block px-4 py-2 rounded font-medium transition-opacity disabled:opacity-50"
          style={{
            backgroundColor: 'var(--contact-btn-bg)',
            color: 'var(--contact-btn-text)',
            border: '1px solid var(--contact-btn-border)'
          }}
        >
          {loading ? 'Mengirim...' : 'Send'}
        </button>
        {message && (
          <p className="text-sm text-center mt-2">{message}</p>
        )}
      </form>
    </section>
  );
}
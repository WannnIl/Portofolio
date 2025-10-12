import React from 'react';


export default function Contact() {
return (
<section id="contact" className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl font-semibold mb-4">Contact</h2>
<form onSubmit={(e)=>{e.preventDefault(); alert('Message sent (demo)')}} className="flex flex-col gap-4 max-w-md">
<input placeholder="Your email" className="bg-transparent border border-green-800 px-3 py-2 rounded" required />
<textarea placeholder="Your message" rows={4} className="bg-transparent border border-green-800 px-3 py-2 rounded" required />
<button className="border border-green-700 bg-green-600/80 px-4 py-2 rounded font-medium">Send</button>
</form>
</section>
);
}
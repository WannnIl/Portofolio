import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { materi } from '../data/materi';
import { ArrowLeft } from 'lucide-react';

export default function MateriDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const materiData = materi[parseInt(id)];

  if (!materiData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Materi tidak ditemukan</h2>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-[#08101a] dark:via-[#071428] dark:to-[#00030a] text-gray-800 dark:text-slate-200 font-mono transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Tombol Kembali */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 mb-6 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <ArrowLeft size={20} />
          <span>Kembali</span>
        </button>

        {/* Header Materi */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-green-600">{materiData.title}</h1>
          <div className="h-1 w-30 bg-blue-600 rounded"></div>
        </div>

        {/* Konten Materi */}
        <div className="prose dark:prose-invert max-w-none">
          <div className="border border-[#000000] bg-[#e3edff] dark:border-[#1e3a8a] dark:bg-gray-800/50 rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Deskripsi</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {materiData.description || 'Deskripsi materi akan ditampilkan di sini.'}
            </p>
          </div>

          {materiData.topics && materiData.topics.length > 0 && (
            <div className="border border-[#000000] bg-[#e3edff] dark:border-[#1e3a8a] dark:bg-gray-800/50 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Topik Pembahasan</h2>
              <ul className="list-disc list-inside space-y-2">
                {materiData.topics.map((topic, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {materiData.content && (
            <div className="border border-[#000000] bg-[#e3edff] dark:border-[#1e3a8a] dark:bg-gray-800/50 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Materi Pembelajaran</h2>
              <div 
                className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: materiData.content }}
              />
            </div>
          )}
          

          {materiData.resources && materiData.resources.length > 0 && (
            <div className="border border-[#000000] bg-[#e3edff] dark:border-[#1e3a8a] dark:bg-gray-800/50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Sumber Referensi</h2>
              <ul className="space-y-2">
                {materiData.resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { skills } from '../data/skills';
import { Shield, Code, Wrench, Award, Star, Trophy, Bug, GraduationCap, X, Server } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('technical');
  const [certTab, setCertTab] = useState('professional');
  const [selectedCert, setSelectedCert] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);

  // Reset image loading saat modal dibuka
  useEffect(() => {
    if (selectedCert) {
      setImageLoading(true);
    }
  }, [selectedCert]);

  const getCategoryIcon = (category) => {
    const icons = {
      'Cybersecurity': <Shield size={20} className="text-green-500" />,
      'Programming': <Code size={20} className="text-blue-500" />,
      'Tools': <Wrench size={20} className="text-purple-500" />,
      'Operating Systems & Infrastructure': <Server size={20} className="text-orange-500" />
    };
    return icons[category] || <Star size={20} />;
  };

  return (
    <section id="skills" className="max-w-6xl scroll-mt-20 mx-auto px-6 mt-20 mb-20">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-2">Skills & Expertise</h2>
        <p className="text-sm text-slate-400">My technical and professional capabilities</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-8 flex-wrap">
        <button
          onClick={() => setActiveTab('technical')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            activeTab === 'technical'
              ? 'bg-green-600 text-white'
              : 'bg-transparent border border-gray-600 text-gray-400 hover:border-green-600 hover:text-green-500'
          }`}
        >
          💻 Technical Skills
        </button>
        <button
          onClick={() => setActiveTab('soft')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            activeTab === 'soft'
              ? 'bg-green-600 text-white'
              : 'bg-transparent border border-gray-600 text-gray-400 hover:border-green-600 hover:text-green-500'
          }`}
        >
          🤝 Soft Skills
        </button>
        <button
          onClick={() => setActiveTab('certifications')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            activeTab === 'certifications'
              ? 'bg-green-600 text-white'
              : 'bg-transparent border border-gray-600 text-gray-400 hover:border-green-600 hover:text-green-500'
          }`}
        >
          🏆 Certifications
        </button>
      </div>

      {/* Technical Skills */}
      {activeTab === 'technical' && (
        <div>
          {/* Scrolling Banner with Tech Icons */}
          <div className="my-8 py-8 rounded-2xl overflow-hidden relative">
            <div className="flex gap-8 animate-scroll-left">
              {/* First set of icons */}
              {[
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
                { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
                { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
                { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
                { name: 'Kali', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJwgMZUJAvAFdnrHOUBRkgT-NwPlmHequy6Q&s' },
                { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                { name: 'Burpsuite', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/BurpSuite_Comunity_Edition.svg/1176px-BurpSuite_Comunity_Edition.svg.png' },
                { name: 'Nmap', icon: 'https://www.uvexplorer.com/wp-content/uploads/2023/07/nmap-logo-256x256-1.png' },
                { name: 'Metasploit', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQveOHt8rUeXuPHV3s_GD9y4pzLPJ9DXXaAvA&s' },
                { name: 'Windows', icon: 'https://images.seeklogo.com/logo-png/40/1/windows-11-icon-logo-png_seeklogo-406208.png' },
                { name: 'Virtual Machines', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL4Xz9n8p3On2j-oYh8k2O46UgfcewDnPcqA&s' },
                
            ].concat([
                // Duplicate for seamless loop
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
                { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
                { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
                { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
                { name: 'Kali', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJwgMZUJAvAFdnrHOUBRkgT-NwPlmHequy6Q&s' },
                { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                { name: 'Burpsuite', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/BurpSuite_Comunity_Edition.svg/1176px-BurpSuite_Comunity_Edition.svg.png' },
                { name: 'Nmap', icon: 'https://www.uvexplorer.com/wp-content/uploads/2023/07/nmap-logo-256x256-1.png' },
                { name: 'Metasploit', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQveOHt8rUeXuPHV3s_GD9y4pzLPJ9DXXaAvA&s' },
                { name: 'Windows', icon: 'https://images.seeklogo.com/logo-png/40/1/windows-11-icon-logo-png_seeklogo-406208.png' },
                { name: 'Virtual Machines', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL4Xz9n8p3On2j-oYh8k2O46UgfcewDnPcqA&s' },
                
              ]).map((tech, idx) => (
                <div 
                  key={idx} 
                  className="flex-shrink-0 flex flex-col items-center gap-2 group"
                  title={tech.name}
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-800/50 border border-gray-700 group-hover:border-green-500 transition-all group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-500/30">
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <span className="text-xs text-gray-400 group-hover:text-green-400 transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Gradient overlays untuk fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#08101a] to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#08101a] to-transparent pointer-events-none"></div>
          </div>

          {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.technical.map((skillGroup, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-6 hover:border-green-600 transition-all"
              style={{
                backgroundColor: 'var(--project-bg)',
                borderColor: 'var(--project-border)'
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                {getCategoryIcon(skillGroup.category)}
                <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
              </div>
              <div className="space-y-4">
                {skillGroup.items.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-mono">{skill.name}</span>
                      <span className="text-xs text-green-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          </div>
        </div>
      )}

      {/* Soft Skills */}
      {activeTab === 'soft' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.soft.map((skill, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-6 hover:scale-105 hover:border-green-600 transition-all cursor-pointer text-center"
              style={{
                backgroundColor: 'var(--project-bg)',
                borderColor: 'var(--project-border)'
              }}
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="font-medium">{skill.name}</h3>
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {activeTab === 'certifications' && (
        <div>
          {/* Sub-tabs untuk certifications */}
          <div className="flex gap-2 mb-6 flex-wrap">
            <button
              onClick={() => setCertTab('professional')}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                certTab === 'professional'
                  ? 'bg-green-600/20 text-green-400 border border-green-600'
                  : 'bg-transparent border border-gray-700 text-gray-400 hover:border-green-600'
              }`}
            >
              <GraduationCap size={16} className="inline mr-1" />
              Professional
            </button>
            <button
              onClick={() => setCertTab('competitions')}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                certTab === 'competitions'
                  ? 'bg-green-600/20 text-green-400 border border-green-600'
                  : 'bg-transparent border border-gray-700 text-gray-400 hover:border-green-600'
              }`}
            >
              <Trophy size={16} className="inline mr-1" />
              Competitions
            </button>
            <button
              onClick={() => setCertTab('bugHunting')}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                certTab === 'bugHunting'
                  ? 'bg-green-600/20 text-green-400 border border-green-600'
                  : 'bg-transparent border border-gray-700 text-gray-400 hover:border-green-600'
              }`}
            >
              <Bug size={16} className="inline mr-1" />
              Bug Hunting
            </button>
          </div>

          {/* Professional Certifications */}
          {certTab === 'professional' && (
            <div className="grid md:grid-cols-2 gap-6">
              {skills.certifications.professional.map((cert, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedCert(cert)}
                  className="border rounded-lg p-6 hover:scale-[1.02] hover:border-green-600 transition-all cursor-pointer"
                  style={{
                    backgroundColor: 'var(--project-bg)',
                    borderColor: 'var(--project-border)'
                  }}
                >
                  <div className="flex items-start gap-3">
                    <GraduationCap className="text-green-500 flex-shrink-0 mt-1" size={24} />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{cert.name}</h3>
                      <p className="text-sm text-gray-400 mb-3">{cert.issuer}</p>
                      
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className={`text-xs px-2 py-1 rounded font-medium ${
                            cert.status === 'Completed'
                              ? 'bg-green-600/20 text-green-400'
                              : cert.status === 'In Progress'
                              ? 'bg-yellow-600/20 text-yellow-400'
                              : 'bg-blue-600/20 text-blue-400'
                          }`}
                        >
                          {cert.status}
                        </span>
                        <span className="text-xs text-gray-500">📅 {cert.year}</span>
                      </div>
                      
                      {cert.credentialId && (
                        <p className="text-xs text-gray-500 font-mono mb-2">
                          ID: {cert.credentialId}
                        </p>
                      )}
                      
                      {cert.link && cert.link !== '#' && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-green-500 hover:text-green-400 hover:underline inline-flex items-center gap-1"
                        >
                          🔗 Lihat Sertifikat
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Competitions */}
          {certTab === 'competitions' && (
            <div className="grid md:grid-cols-2 gap-6">
              {skills.certifications.competitions.map((cert, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedCert(cert)}
                  className="border rounded-lg p-6 hover:scale-[1.02] hover:border-green-600 transition-all cursor-pointer"
                  style={{
                    backgroundColor: 'var(--project-bg)',
                    borderColor: 'var(--project-border)'
                  }}
                >
                  <div className="flex items-start gap-3">
                    <Trophy className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{cert.name}</h3>
                      <p className="text-sm text-gray-400 mb-1">{cert.event}</p>
                      <p className="text-xs text-gray-500 mb-3">{cert.organizer}</p>
                      
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-1 rounded font-medium bg-yellow-600/20 text-yellow-400">
                          {cert.achievement}
                        </span>
                        <span className="text-xs text-gray-500">📅 {cert.year}</span>
                      </div>
                      
                      <p className="text-xs text-gray-400 mt-2">👆 Klik untuk lihat sertifikat</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bug Hunting */}
          {certTab === 'bugHunting' && (
            <div className="grid md:grid-cols-2 gap-6">
              {skills.certifications.bugHunting.map((cert, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedCert(cert)}
                  className="border rounded-lg p-6 hover:scale-[1.02] hover:border-green-600 transition-all cursor-pointer"
                  style={{
                    backgroundColor: 'var(--project-bg)',
                    borderColor: 'var(--project-border)'
                  }}
                >
                  <div className="flex items-start gap-3">
                    <Bug className="text-red-500 flex-shrink-0 mt-1" size={24} />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{cert.name}</h3>
                      <p className="text-sm text-gray-400 mb-1">
                        {cert.platform} • {cert.organization}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className={`text-xs px-2 py-1 rounded font-medium ${
                            cert.severity === 'Critical'
                              ? 'bg-red-600/20 text-red-400'
                              : cert.severity === 'High'
                              ? 'bg-orange-600/20 text-orange-400'
                              : 'bg-yellow-600/20 text-yellow-400'
                          }`}
                        >
                          {cert.severity}
                        </span>
                        <span className="text-xs text-green-400 font-semibold">
                          🎁 {cert.bounty}
                        </span>
                        <span className="text-xs text-gray-500">📅 {cert.year}</span>
                      </div>
                      
                      <p className="text-xs text-gray-400 mt-2">👆 Klik untuk lihat sertifikat</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Modal untuk menampilkan sertifikat */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-gray-900 rounded-lg overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors shadow-lg"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Certificate info */}
            <div className="p-6 bg-gradient-to-r from-green-600/20 to-blue-600/20 border-b border-gray-700">
              <h3 className="text-xl font-bold mb-2">{selectedCert.name}</h3>
              <p className="text-sm text-gray-300">
                {selectedCert.issuer || selectedCert.organizer || selectedCert.platform}
              </p>
              {selectedCert.year && (
                <p className="text-xs text-gray-400 mt-1">📅 {selectedCert.year}</p>
              )}
            </div>

            {/* Certificate image */}
            <div className="p-6 bg-gray-800 max-h-[70vh] overflow-y-auto">
              {selectedCert.imageUrl ? (
                <div className="relative min-h-[400px]">
                  {/* Loading Skeleton - dengan min height agar terlihat */}
                  {imageLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 rounded-lg z-20 min-h-[400px]">
                      <div className="w-full max-w-md px-6">
                        {/* Spinning loader - lebih besar */}
                        <div className="flex justify-center mb-6">
                          <div className="relative">
                            <div className="w-20 h-20 border-4 border-gray-700 border-t-green-500 rounded-full animate-spin"></div>
                            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-green-400 rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
                          </div>
                        </div>
                        
                        {/* Progress text - lebih besar */}
                        <p className="text-center text-white text-lg font-semibold mb-4">Loading Certificate...</p>
                        
                        {/* Animated progress bar - lebih tebal dan kontras dengan shimmer */}
                        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden mb-2 relative">
                          <div className="h-full bg-gradient-to-r from-green-600 via-green-500 to-green-400 rounded-full shadow-lg shadow-green-500/50 relative loading-shimmer" style={{ width: '100%' }}></div>
                        </div>
                        
                        {/* Loading percentage text (fake animation untuk effect) */}
                        <p className="text-center text-green-400 text-sm animate-pulse">Please wait...</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Actual Image */}
                  <img
                    src={selectedCert.imageUrl}
                    alt={selectedCert.name}
                    className={`w-full h-auto rounded-lg shadow-2xl object-contain transition-all duration-500 ${
                      imageLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                    }`}
                    style={{ maxHeight: '65vh', minHeight: '400px' }}
                    onLoad={() => {
                      // Delay sedikit agar loading terlihat (min 500ms)
                      setTimeout(() => setImageLoading(false), 500);
                    }}
                    onError={(e) => {
                      setImageLoading(false);
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/800x600/1f2937/10b981?text=Certificate+Not+Available';
                    }}
                  />
                </div>
              ) : (
                <div className="w-full h-96 flex items-center justify-center bg-gray-700 rounded-lg">
                  <div className="text-center">
                    <Award size={64} className="mx-auto mb-4 text-gray-500" />
                    <p className="text-gray-400">Gambar sertifikat belum tersedia</p>
                    <p className="text-sm text-gray-500 mt-2">Upload gambar ke imageUrl</p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer with link */}
            {selectedCert.link && selectedCert.link !== '#' && (
              <div className="p-4 bg-gray-900 border-t border-gray-700">
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 text-sm inline-flex items-center gap-2 hover:underline"
                >
                  🔗 Verifikasi Sertifikat Asli
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

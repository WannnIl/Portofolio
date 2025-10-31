export const skills = {
  technical: [
    {
      category: 'Cybersecurity',
      items: [
        { name: 'Penetration Testing', level: 75 },
        { name: 'Web Security (OWASP)', level: 85 },
        { name: 'Digital Forensics', level: 65 }
    ]
    },
    {
      category: 'Programming',
      items: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'PHP', level: 75 },
        { name: 'SQL', level: 85 },
        { name: 'React.js', level: 75 },
        { name: 'Laravel', level: 80 },
        { name: 'FastAPI', level: 75 }
      ]
    },
    {
      category: 'Tools',
      items: [
          { name: 'Git', level: 85 },
          { name: 'Burp Suite', level: 80 },
        { name: 'Metasploit', level: 70 },
        { name: 'Nmap', level: 80 }
      ]
    },
    {
        category: 'Operating Systems & Infrastructure',
        items: [
            { name: 'Linux (Kali)', level: 85 },
            { name: 'Windows', level: 90 },
            { name: 'Virtual Machines', level: 80 }
        ]
    }
  ],
  soft: [
    { name: 'Problem Solving', icon: '🧩' },
    { name: 'Team Collaboration', icon: '🤝' },
    { name: 'Research & Analysis', icon: '🔍' },
    { name: 'Time Management', icon: '⏰' }
  ],
  certifications: {
    competitions: [
      // Sertifikat dari lomba/kompetisi
      // CARA UPLOAD SERTIFIKAT:
      // 1. Upload gambar sertifikat ke Google Drive / Imgur / GitHub
      // 2. Dapatkan link publik gambar tersebut
      // 3. Masukkan link tersebut ke field 'imageUrl' di bawah
      {
        name: 'HOLOGY 7.0 Contest',
        event: 'CTF',
        organizer: 'Universitas Brawijaya',
        year: 'November 03, 2024',
        achievement: 'Certificate of Achievement',
        link: 'https://www.linkedin.com/in/ilham-kurniawan-a93b30304/details/certifications/1751977668189/single-media-viewer/?profileId=ACoAAE3D_Q8BwYJTXzdihlLb_adRKod89MxVozM',
        imageUrl: '/path/to/certificate.jpg'
      },
      {
        name: 'NETCOMP 3.0 Contest',
        event: 'CTF',
        organizer: 'Universitas Gadjah Mada (UGM)',
        year: 'January 05, 2025',
        achievement: 'Certificate of Participation',
        link: 'https://www.linkedin.com/in/ilham-kurniawan-a93b30304/details/certifications/1751976555881/single-media-viewer/?profileId=ACoAAE3D_Q8BwYJTXzdihlLb_adRKod89MxVozM',
        imageUrl: '/path/to/certificate.jpg'
      },
      {
        name: 'ARKAVIDIA 9.0 Contest',
        event: 'CTF',
        organizer: 'Institut Teknologi Bandung (ITB)',
        year: 'May 04, 2025',
        achievement: 'Certificate of Appreciation',
        link: 'https://www.linkedin.com/in/ilham-kurniawan-a93b30304/details/certifications/1751977085109/single-media-viewer/?profileId=ACoAAE3D_Q8BwYJTXzdihlLb_adRKod89MxVozM',
        imageUrl: '/path/to/certificate.jpg'
      }
    ],
    bugHunting: [
      // Sertifikat apresiasi bug hunting
      {
        name: 'Sensitive Information Disclosure (Configuration File) Discovery',
        platform: 'Pemerintahan',
        organization: 'Dinas Komunikasi, Informatika, Statistik, dan Persandian Kabupaten Gowa',
        severity: 'High',
        year: 'July 15, 2025',
        bounty: 'Certificate of Appreciation',
        link: '#',
        imageUrl: 'https://raw.githubusercontent.com/WannnIl/Sertifikat-Certificate/main/Ilham%20Kurniawan.jpg'
      },
      {
        name: 'Reflected XSS Vulnerability Discovery',
        platform: 'Pemerintahan',
        organization: 'Dinas Komunikasi dan Informatika Kabupaten Bantul',
        severity: 'Medium',
        year: 'August 06, 2025',
        bounty: 'Certificate of Appreciation',
        link: '#',
        imageUrl: 'https://raw.githubusercontent.com/WannnIl/Sertifikat-Certificate/main/Sertifikat%20Bug%20Hunter%20a.n.%20Ilham%20Kurniawan%20-%202025-08-07%2007_32_56.jpg'
      },
      {
        name: 'Configuration File Disclosure Discovery',
        platform: 'Pemerintahan',
        organization: 'Bug Bounty Program Pemerintah Provinsi Bali',
        severity: 'Medium',
        year: 'August 15, 2025',
        bounty: 'Certificate of Appreciation',
        link: '#',
        imageUrl: 'https://raw.githubusercontent.com/WannnIl/Sertifikat-Certificate/main/Sertifikat%20Apresiasi%20BBP%20Bali.jpg'
      },
      {
        name: 'SQL Injection Vulnerability Discovery',
        platform: 'Pemerintahan',
        organization: 'Dinas Komunikasi, Informatika, dan Statistik Provinsi DKI Jakarta',
        severity: 'Critical',
        year: 'August 26, 2025',
        bounty: 'Certificate of Appreciation',
        link: '#',
        imageUrl: 'https://raw.githubusercontent.com/WannnIl/Sertifikat-Certificate/refs/heads/main/240%20Ilham%20Kurniawan_signed.jpg'
      },
      {
        name: 'SQL Injection, Path Traversal, and Reflected XSS Vulnerability Discovery',
        platform: 'Pemerintahan',
        organization: 'Dinas Komunikasi, Informatika, dan Statistik Provinsi Riau',
        severity: 'Critical',
        year: 'August 26, 2025',
        bounty: 'Certificate of Appreciation',
        link: '#',
        imageUrl: 'https://raw.githubusercontent.com/WannnIl/Sertifikat-Certificate/refs/heads/main/051_Ilham%20Kurniawan%20_sign.jpg'
      },
      {
        name: 'Reflected XSS Vulnerability Discovery',
        platform: 'Pemerintahan',
        organization: 'Dinas Komunikasi, Informatika, Statistik, dan Persandian Pemerintah Kota Bekasi',
        severity: 'Medium',
        year: 'August 29, 2025',
        bounty: 'Certificate of Appreciation',
        link: '#',
        imageUrl: 'https://raw.githubusercontent.com/WannnIl/Sertifikat-Certificate/refs/heads/main/Sertifikat%20Apresiasi%20%5B4346%5D%20Ilham_sign.jpg'
      },
      {
        name: 'Sensitive Information Exposure (Hardcoded Credentials) Discovery',
        platform: 'Pemerintahan',
        organization: 'Dinas Komunikasi dan Informatika Pemerintah Kota Makassar',
        severity: 'Critical',
        year: 'September 02, 2025',
        bounty: 'Certificate of Appreciation',
        link: '#',
        imageUrl: 'https://raw.githubusercontent.com/WannnIl/Sertifikat-Certificate/refs/heads/main/SERTIFIKAT-APRESIASI-BUG-HUNTER-Ilham.jpg'
      },
      {
        name: 'Reflected XSS Vulnerability Discovery',
        platform: 'Pemerintahan',
        organization: 'Kementrian Energi dan Sumber Daya Mineral Republik Indonesia',
        severity: 'Medium',
        year: 'September 17, 2025',
        bounty: 'Certificate of Appreciation',
        link: '#',
        imageUrl: 'https://raw.githubusercontent.com/WannnIl/Sertifikat-Certificate/refs/heads/main/Sertifikat%20ESDM-CSIRT%20an.%20Ilham%20Kurniawan.png'
      },
      {
        name: 'Sensitive Information Disclosure via PHP info() Discovery',
        platform: 'Pemerintahan',
        organization: 'Sekretaris Jenderal Komisi Yudisial Republik Indonesia',
        severity: 'High',
        year: 'September 19, 2025',
        bounty: 'Certificate of Appreciation',
        link: '#',
        imageUrl: 'https://raw.githubusercontent.com/WannnIl/Sertifikat-Certificate/refs/heads/main/Ilham%20Kurniawan_sign.jpg'
      },
      {
        name: 'CVE-2025-0133 Reflected XSS',
        platform: 'Bugcrowd',
        organization: 'NASA',
        severity: 'Medium',
        year: 'September 19, 2025',
        bounty: 'Duplicate',
        link: '#',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D5622AQEa9efjtBilLA/feedshare-shrink_800/B56ZlxTJxlKAAk-/0/1758542470752?e=1762387200&v=beta&t=c8858BXcxgZUPMIshP4-EXucI_yME21z3yA9gGERjfM'
      },
      {
        name: 'Reflected XSS Vulnerability Discovery',
        platform: 'Perusahaan Media Online',
        organization: 'detikcom',
        severity: 'Medium',
        year: 'Oktober 22, 2025',
        bounty: 'Certificate of Appreciation and Merchandise',
        link: '#',
        imageUrl: 'https://raw.githubusercontent.com/WannnIl/Sertifikat-Certificate/refs/heads/main/Ilham%20Kurniawan.png'
      },
      {
        name: 'Sensitive Information Disclosure Discovery',
        platform: 'Pemerintahan',
        organization: 'Dinas Komunikasi dan Informatika Pemerintah Kabupaten Sukoharjo',
        severity: 'Medium',
        year: 'Oktober 30, 2025',
        bounty: 'Certificate of Appreciation',
        link: '#',
        imageUrl: 'https://raw.githubusercontent.com/WannnIl/Sertifikat-Certificate/refs/heads/main/ilham%20kurniawan_sign_sukoharjo.jpg'
      }
    ],
    professional: [
      // Sertifikat profesional
      {
        name: 'ITBOX Cyber Security Basic Level',
        issuer: 'ITBOX',
        year: 'July 08, 2025',
        status: 'Completed',
        credentialId: '13922E562-13950362D-1276E44A2',
        link: 'https://itbox.id/certificate-verifier/13922E562-13950362D-1276E44A2',
        imageUrl: '/path/to/certificate.jpg'
      },
      {
        name: 'ITBOX Cyber Security Intermediate Level',
        issuer: 'ITBOX',
        year: 'July 08, 2025',
        status: 'Completed',
        credentialId: '13922E562-13940CCD7-1276E44A2',
        link: 'https://itbox.id/certificate-verifier/13922E562-13940CCD7-1276E44A2',
        imageUrl: '/path/to/certificate.jpg'
      },
      {
        name: 'ITBOX Cyber Security Advanced Level',
        issuer: 'ITBOX',
        year: '2025',
        status: 'In Progress',
        credentialId: '',
        link: '#',
        imageUrl: '/path/to/certificate.jpg'
      }
    ]
  }
};

import { PartialTranslation } from '../models/language.model';

export const ID: PartialTranslation = {
  nav: {
    aboutMe: 'Tentang Saya',
    experience: 'Pengalaman',
    portfolio: 'Portofolio',
    certifications: 'Sertifikasi',
    technologies: 'Teknologi',
    contact: 'Kontak',
  },
  footer: {
    copyright: '© 2025 Muhammad Alif Budiman',
    backToTop: 'Kembali ke atas',
  },
  header: {
    lightLabel: 'terang',
    darkLabel: 'gelap',
    themeLabel: 'Tema',
    themeAriaLabel: 'Pilih tema warna',
    langAriaLabel: 'Ganti bahasa',
  },
  intro: {
    greeting: 'Halo! Nama saya',
    role: 'Full-Stack Web Developer',
    body: 'Developer berorientasi backend yang membangun aplikasi web berbasis API, sistem alur kerja, dan antarmuka responsif menggunakan Go, TypeScript, Angular, Python, dan PostgreSQL.',
    viewProjectsBtn: 'Lihat Proyek',
    downloadResumeBtn: 'Unduh Resume',
    availability: 'Terbuka untuk peluang Full-Stack dan Backend Developer',
    location: 'Bekasi / Jakarta, Indonesia',
  },
  about: {
    eyebrow: 'Pelajari lebih lanjut',
    title: 'Tentang Saya',
    p1: 'Halo, nama saya Muhammad Alif Budiman. Saya lulus dengan gelar Sarjana Ilmu Komputer dari Universitas Negeri Jakarta dan bekerja sebagai web developer full-stack dengan fokus pada pengembangan backend API.',
    p2: 'Pengalaman teknis saya mencakup Go, Node.js, TypeScript, Angular, Python, Flask, Django, PostgreSQL, dan MongoDB. Saya telah berkontribusi pada sistem alur kerja internal, pengembangan REST API, dokumentasi OpenAPI, dan program full-stack berbasis proyek.',
    p3: 'Proyek yang telah saya kerjakan antara lain backend API sektor publik internal di BKN RI, Sistem Manajemen Pasien, aplikasi manajemen tugas dengan Django REST Framework, dan website portofolio ini. Saya menghargai rekayasa berbasis bukti dan kode yang mudah dipelihara serta terdokumentasi dengan baik.',
    viewProjectsBtn: 'Lihat Proyek',
    downloadResumeBtn: 'Unduh Resume',
    photoAlt: 'Foto Muhammad Alif Budiman',
  },
  portfolio: {
    eyebrow: 'Temukan karya saya',
    title: 'Portofolio',
    viewProjectBtn: 'Lihat Proyek',
    featuredTitle: 'Proyek Unggulan',
    otherTitle: 'Proyek Lainnya',
    filterAriaLabel: 'Filter proyek',
    filters: {
      all: 'Semua',
      featured: 'Unggulan',
      backend: 'Backend / API',
      fullstack: 'Full-Stack',
      frontend: 'Frontend',
      learning: 'Pembelajaran',
      restricted: 'Terbatas',
    },
    cta: {
      demo: 'Demo Langsung',
      github: 'GitHub',
      apiDocs: 'Dokumentasi API',
      caseStudy: 'Studi Kasus',
      restricted: 'Terbatas / Internal',
      unavailable: 'Repositori tidak tersedia',
      archived: 'Demo Tidak Tersedia',
    },
    status: {
      live: 'Aktif',
      restricted: 'Terbatas',
      unavailable: 'Tidak tersedia',
      archived: 'Diarsipkan',
    },
  },
  contact: {
    eyebrow: 'Hubungi saya',
    title: 'Kontak',
    description: 'Jika Anda memiliki pertanyaan atau ingin mendiskusikan sebuah proyek, jangan ragu untuk menghubungi saya!',
    whatsappLabel: 'WhatsApp:',
    emailLabel: 'Email:',
    form: {
      name: 'Nama',
      email: 'Email',
      subject: 'Subjek',
      message: 'Pesan',
      send: 'Kirim',
      sending: 'Mengirim...',
      successMsg: 'Pesan Anda telah berhasil dikirim!',
      errorMsg: 'Gagal mengirim pesan Anda. Silakan coba lagi.',
      rateLimitMsg: 'Harap tunggu 30 detik sebelum mengirim lagi.',
      invalidEmailMsg: 'Masukkan alamat email yang valid.',
    },
  },
  ownership: {
    team: 'Proyek Tim',
    personal: 'Proyek Pribadi',
    client: 'Proyek Klien',
    internal: 'Proyek Internal',
    restricted: 'Proyek Terbatas',
  },
  seo: {
    home: {
      title: 'Muhammad Alif Budiman — Full-Stack Web Developer',
      description: 'Lulusan Ilmu Komputer dan full-stack web developer yang berspesialisasi dalam backend API, Angular, Go, TypeScript, Python, dan Django. Lihat proyek dan hubungi saya.',
    },
    about: {
      title: 'Tentang — Muhammad Alif Budiman | Lulusan Ilmu Komputer',
      description: 'Pelajari tentang Muhammad Alif Budiman — lulusan Ilmu Komputer, full-stack web developer, berpengalaman di backend API dengan Go, TypeScript, Angular, Python, dan Django.',
    },
    portfolio: {
      title: 'Portofolio — Muhammad Alif Budiman | Proyek Backend API & Full-Stack',
      description: 'Proyek backend API, full-stack, dan pengembangan web oleh Muhammad Alif Budiman, termasuk API Go, aplikasi Angular, sistem Django, dan lainnya.',
    },
    contact: {
      title: 'Kontak — Muhammad Alif Budiman',
      description: 'Hubungi Muhammad Alif Budiman — full-stack web developer. Kontak melalui email, WhatsApp, atau formulir kontak.',
    },
    project: {
      titleSuffix: '— Muhammad Alif Budiman',
    },
  },
  experience: {
    eyebrow: 'Pengalaman Kerja',
    title: 'Pengalaman',
    groups: {
      professional: 'Pengalaman Profesional',
      training: 'Pelatihan & Program',
    },
    relatedProject: 'Proyek Terkait',
    items: {
      bkn: {
        role: 'Programmer Magang — Sistem & Aplikasi Digital',
        period: 'Nov 2025 – Mei 2026',
        location: 'Jakarta Timur, Indonesia',
        description:
          'Mendukung pengembangan backend, alur kerja aplikasi digital, dan dokumentasi API untuk sistem internal sektor publik.',
        contributions: [
          'Mengembangkan dan menyempurnakan endpoint backend Go untuk modul alur kerja internal, mencakup pengambilan daftar/detail, filter, pengurutan, dan paginasi.',
          'Mengimplementasikan kontrol akses berbasis peran, transisi alur kerja, dan penanganan file multipart dengan dokumentasi OpenAPI/Swagger.',
          'Mengerjakan data terkait penjadwalan, penanganan dokumen, dan manajemen data administratif.',
        ],
      },
      'learningx-msib': {
        role: 'Studi Mandiri Bersertifikat — Pengembangan Web Full-Stack',
        period: 'Agu 2023 – Des 2023',
        location: 'Remote',
        description:
          'Menyelesaikan program pengembangan web full-stack berbasis proyek (MSIB Batch 5) mencakup frontend, backend, database, dan praktik deployment.',
        contributions: [
          'Menyelesaikan modul HTML, CSS, JavaScript, Python, Flask, MongoDB, AJAX, alur kerja CRUD, web scraping, dan deployment.',
          'Memimpin proyek Sistem Manajemen Pasien berbasis tim sebagai developer full-stack dan ketua proyek.',
        ],
      },
      mknows: {
        role: 'Backend Developer — Peserta Bootcamp',
        period: '2023',
        location: 'Remote',
        description:
          'Menyelesaikan bootcamp pengembangan backend API di M-Knows Consulting, membangun REST API berstruktur produksi dengan Node.js, Express, TypeScript, dan PostgreSQL.',
        contributions: [
          'Mengimplementasikan arsitektur MVC dengan Sequelize ORM dan PostgreSQL untuk API platform blog.',
          'Membangun autentikasi JWT, validasi input, integrasi notifikasi email, dan logging terstruktur.',
          'Menghasilkan dokumentasi API menggunakan Postman dan spesifikasi Swagger/OpenAPI.',
        ],
      },
    },
  },
  certifications: {
    eyebrow: 'Kredensial Terverifikasi',
    title: 'Sertifikasi',
    items: {
      'bkn-internship': {
        name: 'Sertifikat Magang — Sistem & Aplikasi Digital',
        issuer: 'BKN RI (Badan Kepegawaian Negara)',
        period: '2026',
        credentialLabel: 'Lihat Kredensial',
        credentialLabels: {
          bkn: 'Lihat Sertifikat BKN',
          kemnaker: 'Lihat Sertifikat Kemnaker',
        },
      },
      'cs50w': {
        name: "CS50's Web Programming with Python and JavaScript",
        issuer: 'CS50 / HarvardX',
        period: '2023',
        credentialLabel: 'Lihat Sertifikat',
      },
      'cs50x': {
        name: "CS50's Introduction to Computer Science",
        issuer: 'CS50 / HarvardX',
        period: '2023',
        credentialLabel: 'Lihat Sertifikat',
      },
      'postman-api-fundamentals': {
        name: 'API Fundamentals Student Expert',
        issuer: 'Postman',
        period: '2025',
        credentialLabel: 'Lihat Lencana',
      },
      'dicoding-backend-js': {
        name: 'Belajar Back-End Pemula dengan JavaScript',
        issuer: 'Dicoding',
        period: '2025',
        credentialLabel: 'Lihat Sertifikat',
      },
      '30-days-of-angular': {
        name: '30 Days of Angular: Build 30 Projects with Angular',
        issuer: 'Udemy',
        period: '2025',
        credentialLabel: 'Lihat Sertifikat',
      },
      'aws-cloud-gen-ai': {
        name: 'Belajar Dasar Cloud dan Gen AI di AWS',
        issuer: 'Dicoding',
        period: '2025',
        credentialLabel: 'Lihat Sertifikat',
      },
      'git-github-bootcamp': {
        name: 'The Git & Github Bootcamp',
        issuer: 'Udemy',
        period: '2025',
        credentialLabel: 'Lihat Sertifikat',
      },
      'learningx-msib': {
        name: 'Pengembangan Web Full-Stack',
        issuer: 'LearningX MSIB (Batch 5)',
        period: '2023',
        credentialLabel: 'Lihat Sertifikat',
      },
    },
  },
  technologies: {
    eyebrow: 'Kemampuan Teknis',
    title: 'Teknologi',
    groups: {
      backend: 'Backend & API',
      frontend: 'Frontend',
      databases: 'Database',
      tools: 'Alat Engineering',
    },
  },
  projects: {
    'bkn-internal-workflow-api': {
      description: 'Mengembangkan dan menyempurnakan endpoint backend Go untuk modul alur kerja internal, mencakup pengambilan daftar/detail, filter, pengurutan, paginasi, transisi alur kerja, penanganan file multipart, dan dokumentasi OpenAPI.',
      imageAlt: 'Ilustrasi arsitektur Backend API untuk sistem alur kerja internal dengan Go, RBAC, unggah file, dan dokumentasi OpenAPI',
      role: 'Backend developer — implementasi Go API dan dokumentasi Swagger/OpenAPI',
    },
    'blog-api-server': {
      description: 'REST API berbasis TypeScript untuk platform blog dengan autentikasi JWT, validasi input, integrasi PostgreSQL, notifikasi email, logging, dan dokumentasi API Postman/Swagger.',
      imageAlt: 'Diagram arsitektur backend Blog API Server dengan Express API, autentikasi, Sequelize ORM, PostgreSQL, notifikasi email, dan logging',
      role: 'Backend developer — REST API, autentikasi, validasi, integrasi database, dan dokumentasi',
    },
    'patient-management-system': {
      description: 'Sistem Manajemen Pasien berbasis Flask dan MongoDB untuk pendaftaran pasien, pengelolaan antrian, penjadwalan, rekam medis, alur kerja admin, ekspor CSV, dan pembaruan antarmuka real-time.',
      imageAlt: 'Tangkapan layar dasbor aplikasi Sistem Manajemen Pasien',
      role: 'Full-stack developer — backend API, desain database, dan ketua tim',
    },
    'task-master': {
      description: 'Aplikasi manajemen tugas dengan alur kerja harian, mingguan, dan bulanan berulang, REST API berbasis JWT, riwayat tugas, reset otomatis berbasis zona waktu, dokumentasi API Swagger, tabel data interaktif, dan ekspor Excel.',
      imageAlt: 'Tangkapan layar aplikasi manajemen tugas Task Master',
      role: 'Full-stack developer — Django REST API, reset tugas terjadwal, dan tabel data',
    },
    'portfolio-website': {
      description: 'Website portofolio Angular responsif dengan konten bilingual (EN/ID), komponen standalone yang dapat digunakan ulang, direktif kustom, dukungan tema gelap/terang, beberapa tema warna, showcase proyek, dan formulir kontak EmailJS.',
      imageAlt: 'Tangkapan layar website portofolio Muhammad Alif Budiman',
      role: 'Developer — Angular, TypeScript, SCSS, Tailwind CSS, i18n, unit testing',
    },
    'numble': {
      description: 'Permainan puzzle angka berbasis web di mana pemain menggabungkan angka untuk mencapai target menggunakan kemampuan matematika. Dibangun sebagai proyek tim.',
      imageAlt: 'Tangkapan layar antarmuka permainan puzzle angka Numble',
      role: 'Frontend developer — logika permainan dan UI',
    },
    'password-security': {
      description: 'Aplikasi web Angular untuk keamanan kata sandi: menghasilkan kata sandi kuat, memeriksa kebocoran data melalui API Have I Been Pwned, menganalisis kekuatan kata sandi, dan menjelaskan praktik keamanan kata sandi.',
      imageAlt: 'Tangkapan layar aplikasi Password Security Angular yang menampilkan pemeriksa kekuatan kata sandi dan deteksi kebocoran',
      role: 'Developer — Angular, integrasi API, analisis kata sandi',
    },
    'crypto-charts': {
      description: 'Grafik harga cryptocurrency real-time dan informasi koin yang dibangun dengan Angular, menggunakan API crypto publik. Dikembangkan sebagai bagian dari kursus 30 Days of Angular.',
      imageAlt: 'Tangkapan layar aplikasi Crypto Charts Angular yang menampilkan grafik harga real-time',
      role: 'Developer — Angular, integrasi API, visualisasi data',
    },
    'resume-builder': {
      description: 'Aplikasi web berbasis Angular untuk membuat, mengedit, dan mengunduh resume profesional. Dilengkapi form yang dapat diedit, pratinjau resume secara langsung, dan pembuatan PDF.',
      imageAlt: 'Tangkapan layar Resume Builder dengan pratinjau langsung dan ekspor PDF',
      role: 'Developer — Angular, penanganan form, pembuatan PDF',
    },
    'typing-game': {
      description: 'Tes kecepatan dan akurasi mengetik interaktif dengan tantangan mengetik, papan peringkat, tema yang dapat dikustomisasi, dan statistik performa terperinci.',
      imageAlt: 'Tangkapan layar antarmuka tes kecepatan mengetik Typing Game',
      role: 'Developer — Angular, penanganan input real-time, pelacakan statistik',
    },
    'checkers': {
      description: 'Permainan Checkers berbasis web yang dibangun dengan Angular. Menampilkan gameplay berbasis giliran, pergerakan bidak, penangkapan, promosi raja, dan kondisi akhir permainan dengan penerapan aturan lengkap.',
      imageAlt: 'Tangkapan layar permainan papan Checkers di Angular',
      role: 'Developer — Angular, logika permainan, arsitektur komponen',
    },
  },
  projectContext: {
    'bkn-professional': 'Pengalaman Profesional · BKN RI',
    'learningx-msib-capstone': 'Proyek Akhir MSIB · LearningX',
    'cs50w-capstone': 'Proyek Akhir Kursus · CS50W',
    'mknows-bootcamp': 'Proyek Bootcamp · M-Knows Consulting',
    'independent': 'Proyek Mandiri',
    'udemy-angular': 'Latihan Kursus · Udemy',
  },
};

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
    copyright: '© Muhammad Alif Budiman',
    backToTop: 'Kembali ke atas',
  },
  header: {
    lightLabel: 'terang',
    darkLabel: 'gelap',
    themeLabel: 'Tema',
    themeAriaLabel: 'Pilih tema warna',
    langAriaLabel: 'Ganti bahasa',
    navAriaLabel: 'Toggle menu navigasi',
    darkModeAriaLabel: 'Toggle mode gelap',
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
      liveApi: 'API Langsung',
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
    description: 'Terbuka untuk peluang Backend dan Full-Stack Developer, kolaborasi teknis, serta pengembangan aplikasi web berbasis API.',
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
        period: 'Nov 2025 – 23 Mei 2026',
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
    featuredHeading: 'Kredensial Unggulan',
    additionalHeading: 'Kredensial Tambahan',
    showMore: 'Tampilkan Lebih Banyak Kredensial',
    showLess: 'Sembunyikan Kredensial Tambahan',
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
  quickFacts: {
    featuredCaseStudies: 'Studi Kasus Unggulan',
    experienceEntries: 'Pengalaman Profesional & Pelatihan',
    verifiedCredentials: 'Kredensial Terverifikasi',
    targetRoles: 'Terbuka untuk Posisi',
    targetRolesValue: 'Backend · Full-Stack',
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
    'stockdata': {
      description: 'Sistem manajemen inventaris berbasis web yang dikembangkan sebagai proyek HCI universitas untuk klien nyata. Fitur meliputi pengelolaan produk, kategori, pengurutan, pencarian, dan deployment langsung.',
      imageAlt: 'Tangkapan layar aplikasi web manajemen inventaris StockData',
      role: 'Berkontribusi pada pengembangan fitur backend (edit dan pengurutan), implementasi frontend, desain mockup UI, pengaturan hosting live, dan debugging.',
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
    'stockdata-hci': 'Proyek Tim Berbasis Klien · Universitas',
  },
  caseStudies: {
    common: {
      back: 'Kembali ke Portofolio',
      notFound: 'Proyek tidak ditemukan.',
      comingSoon: 'Studi kasus lengkap akan segera tersedia.',
      visualEvidence: 'Bukti Visual',
    },
    sectionHeadings: {
      overview: 'Gambaran Umum',
      context: 'Konteks',
      responsibilities: 'Tanggung Jawab',
      architecture: 'Arsitektur',
      'engineering-decisions': 'Keputusan Rekayasa Utama',
      'technology-stack': 'Tumpukan Teknologi',
    },
    'bkn-internal-workflow-api': {
      sections: {
        overview:
          'Mengembangkan endpoint API backend dengan Go untuk sistem alur kerja internal instansi pemerintah yang mendukung proses administrasi digital di lingkungan instansi sektor publik.',
        context:
          'Magang profesional di BKN RI (Badan Kepegawaian Negara), Nov 2025 – 23 Mei 2026. Peran: Programmer Intern — Sistem & Aplikasi Digital.',
        responsibilities: [
          'Mengimplementasikan endpoint REST API Go untuk operasi list, detail, dan pengambilan data.',
          'Menambahkan filter, pengurutan, dan paginasi pada endpoint pengambilan data.',
          'Bekerja dengan kontrol akses berbasis peran melalui integrasi Keycloak untuk autentikasi dan otorisasi.',
          'Mengimplementasikan penanganan unggah berkas multipart untuk proses berbasis dokumen.',
          'Memelihara dokumentasi OpenAPI/Swagger untuk endpoint yang diimplementasikan.',
          'Mengerjakan data terkait penjadwalan, penanganan dokumen, dan pengelolaan data administratif.',
          'Menangani transisi alur kerja dengan membaca dan memperbarui status pada data alur kerja yang sudah ada.',
        ],
        architecture:
          'Sistem dibangun menggunakan Go untuk layanan backend dan mengikuti struktur REST API berlapis. Autentikasi dan otorisasi ditangani melalui integrasi Keycloak. Unggahan berkas diproses melalui penangan multipart, dan endpoint didokumentasikan dengan OpenAPI/Swagger.',
        'engineering-decisions': [
          'Mengimplementasikan paginasi mengikuti konvensi aplikasi yang sudah ada.',
          'Bekerja dalam integrasi Keycloak yang sudah ada untuk autentikasi dan otorisasi alih-alih membuat autentikasi kustom.',
          'Menjaga dokumentasi OpenAPI/Swagger tetap selaras dengan endpoint yang diimplementasikan.',
          'Memanfaatkan kembali struktur berlapis yang sudah ada agar endpoint baru konsisten dengan sisa basis kode.',
        ],
        'technology-stack':
          'Go · REST API · OpenAPI / Swagger · Keycloak · Multipart File Upload · Filter · Pengurutan · Paginasi',
      },
      media: {
        'bkn-arch': {
          alt: 'Diagram arsitektur API yang dianonimkan: lapisan klien, auth/authz, layanan Go API, akses data, dan sumber data internal',
          caption: 'Diagram konseptual yang dianonimkan — tidak ada detail arsitektur internal nyata yang disertakan',
        },
        'bkn-flow': {
          alt: 'Siklus hidup permintaan RBAC: validasi token JWT, pemeriksaan peran/izin, handler endpoint, respons 200 OK atau penolakan 401/403',
          caption: 'Siklus hidup permintaan RBAC yang dianonimkan — tidak ada nama endpoint atau peran nyata yang disertakan',
        },
      },
      accessNote: 'Sistem internal — tidak dapat diakses secara publik.',
      confidentialityNote:
        'Sesuai dengan kerahasiaan magang: tidak ada jalur endpoint internal, skema basis data, nama alur kerja, nama aplikasi, detail domain, atau tangkapan layar data nyata yang disertakan.',
    },
    'blog-api-server': {
      sections: {
        overview:
          'REST API terstruktur produksi untuk platform blog, dibangun dalam Bootcamp Backend API Development M-Knows Consulting pada 2023. Mengimplementasikan CRUD penuh, autentikasi, notifikasi email, dan dokumentasi API.',
        context:
          'Proyek bootcamp di M-Knows Consulting — program Backend API Development. Peran: Backend Developer. Tahun: 2023.',
        responsibilities: [
          'Merancang dan mengimplementasikan arsitektur MVC dengan Node.js, Express, dan TypeScript.',
          'Mengintegrasikan Sequelize ORM dengan PostgreSQL untuk pengelolaan data relasional.',
          'Membangun autentikasi berbasis JWT (register, login, refresh token, rute terproteksi).',
          'Mengimplementasikan validasi input dan penanganan error terstruktur.',
          'Mengintegrasikan notifikasi email menggunakan layanan email pihak ketiga (Nodemailer).',
          'Menyiapkan logging terstruktur dengan Winston.',
          'Menghasilkan dokumentasi API menggunakan Postman dan spesifikasi swagger.yaml.',
        ],
        architecture:
          'MVC tiga lapis: controller menangani routing HTTP, service berisi logika bisnis, dan model dipetakan ke PostgreSQL melalui Sequelize. Middleware autentikasi menjaga rute terproteksi, dan middleware logging menangkap metadata request/response.',
        'engineering-decisions': [
          'Memilih pemisahan MVC berlapis agar routing, logika bisnis, dan akses data tetap dapat diuji secara independen.',
          'Menggunakan JWT dengan refresh token agar API tetap stateless sambil mendukung sesi yang lebih panjang.',
          'Memusatkan validasi dan penanganan error agar endpoint mengembalikan bentuk error yang konsisten.',
        ],
        'technology-stack':
          'Node.js · Express · TypeScript · Sequelize · PostgreSQL · JWT · Validasi · Logging · Notifikasi Email · Dokumentasi Postman · Swagger / OpenAPI',
      },
      media: {
        'blog-screenshot': {
          alt: 'Kartu proyek Blog API Server yang menampilkan REST API untuk platform blog berbasis Node.js, Express, dan TypeScript',
          caption: 'Blog API Server — deployment Vercel',
        },
        'blog-arch': {
          alt: 'Arsitektur MVC Blog API: rute Express, controller dengan middleware autentikasi dan validasi, lapisan service, Sequelize ORM, database PostgreSQL, dengan email dan logging sebagai cross-cutting concern',
          caption: 'Arsitektur MVC tiga lapis dengan cross-cutting concern email dan logging',
        },
      },
      accessNote:
        'Deployment publik Vercel tersedia di https://express-blog-dun.vercel.app/. Kode sumber GitHub juga tersedia.',
    },
    'patient-management-system': {
      sections: {
        overview:
          'Sistem Pengelolaan Pasien berbasis web yang dibangun untuk proyek akhir MSIB Batch 5 di LearningX (2023). Mengelola registrasi pasien, antrean janji temu, rekam medis, dan alur kerja administratif untuk konteks klinik.',
        context:
          'Proyek akhir MSIB di LearningX — Full-Stack Web Development (Batch 5), Agu–Des 2023. Peran: Full-Stack Developer & Ketua Tim. Proyek tim (3 anggota).',
        responsibilities: [
          'Memimpin perencanaan proyek, pembagian tugas, dan integrasi antara frontend dan backend.',
          'Merancang skema dokumen MongoDB untuk pasien, janji temu, antrean, dan rekam medis.',
          'Membangun rute backend Flask untuk CRUD pasien, penjadwalan janji temu, pengelolaan antrean, dan ekspor CSV.',
          'Mengimplementasikan pembaruan antarmuka real-time berbasis AJAX untuk status antrean dan janji temu.',
          'Mengembangkan alur kerja admin termasuk pencatatan rekam medis dan pengelolaan janji temu.',
          'Menangani deployment ke Glitch (kini diarsipkan).',
        ],
        'technology-stack': 'Python · Flask · MongoDB · HTML · CSS · JavaScript · AJAX',
      },
      media: {
        'patient-screenshot': {
          alt: 'Aplikasi web Sistem Pengelolaan Pasien yang menampilkan pendaftaran pasien, antrean janji temu, dan pengelolaan rekam medis',
          caption: 'Sistem Pengelolaan Pasien — proyek akhir MSIB Batch 5 di LearningX',
        },
        'patient-flow': {
          alt: 'Diagram alur pasien: pasien mendaftar dan bergabung ke antrean, dokter memanggil pasien, dokter mencatat konsultasi, admin mengekspor laporan CSV',
          caption: 'Alur inti pendaftaran pasien dan konsultasi',
        },
      },
      accessNote: 'Hosting Glitch tidak lagi tersedia (platform ditutup). Kode sumber GitHub tetap dapat diakses.',
    },
    'task-master': {
      sections: {
        overview:
          'Aplikasi web manajemen tugas yang dikembangkan sebagai proyek akhir CS50W (2023). Memiliki alur tugas berulang harian, mingguan, dan bulanan dengan reset otomatis yang sadar zona waktu, REST API yang diamankan JWT, tabel data interaktif, dan ekspor Excel.',
        context:
          "CS50's Web Programming with Python and JavaScript — Proyek Akhir. Peran: Full-Stack Developer. Tahun: Jul–Agu 2023.",
        responsibilities: [
          'Merancang dan mengimplementasikan API Django REST Framework dengan autentikasi JWT (djangorestframework-simplejwt).',
          'Membangun logika reset tugas terjadwal yang sadar zona waktu untuk siklus tugas harian, mingguan, dan bulanan.',
          'Mengintegrasikan DataTables untuk paginasi, pengurutan, dan filter data tugas sisi server.',
          'Mengimplementasikan ekspor Excel menggunakan openpyxl untuk pelaporan riwayat tugas.',
          'Menyiapkan dokumentasi Swagger/OpenAPI melalui drf-spectacular.',
          'Men-deploy ke PythonAnywhere dengan backend PostgreSQL.',
        ],
        architecture:
          'Django menyajikan template frontend sementara DRF menyediakan lapisan API. Autentikasi berbasis JWT dengan dukungan refresh token. Reset tugas terjadwal dipicu oleh management command Django atau cron, dan DataTables terhubung ke API DRF untuk penanganan data sisi server.',
        'technology-stack':
          'Django · Django REST Framework · PostgreSQL · JWT · Swagger / OpenAPI · DataTables · Ekspor Excel · Reset Tugas Terjadwal',
      },
      media: {
        'taskmaster-screenshot': {
          alt: 'Aplikasi web Task Master yang menampilkan antarmuka manajemen tugas dengan pelacakan tugas berulang dan tabel data',
          caption: 'Task Master — proyek akhir CS50W, live di PythonAnywhere',
        },
        'taskmaster-flow': {
          alt: 'Alur reset tugas berulang: pemicu cron mengevaluasi tanggal jatuh tempo untuk tugas harian, mingguan, dan bulanan, mereset tugas yang melewati batas ke status pending, mencatat event reset',
          caption: 'Alur reset tugas berulang yang sadar zona waktu',
        },
      },
    },
    'portfolio-website': {
      sections: {
        overview:
          'Situs portofolio pribadi yang dibangun dengan Angular 20, SCSS, dan Tailwind CSS v4. Memiliki konten dwibahasa EN/ID, beberapa tema warna, mode gelap/terang, directive kursor kustom, formulir kontak EmailJS, dan unit test Karma/Jasmine.',
        context: 'Proyek mandiri. Tahun: 2025 (aktif). Peran: Developer.',
        responsibilities: [
          'Merancang dan mengimplementasikan komponen Angular standalone untuk setiap bagian portofolio.',
          'Membangun sistem i18n kustom menggunakan objek terjemahan TypeScript bertipe dengan pencarian dot-path dan fallback EN.',
          'Mengimplementasikan ThemeService yang mengelola mode gelap/terang dan beberapa tema warna melalui CSS custom properties dan localStorage.',
          'Menulis CustomCursorDirective yang menangani pergerakan mouse untuk pengalaman kursor kustom.',
          'Mengintegrasikan EmailJS untuk pengiriman formulir kontak serverless tanpa backend.',
          'Menyiapkan unit test Karma/Jasmine yang mencakup service, komponen, directive, dan rute.',
          'Men-deploy melalui angular-cli-ghpages ke GitHub Pages dengan CNAME kustom.',
        ],
        architecture:
          'Single-Page Application dengan Angular router (scroll in-memory + fragment anchor). Setiap bagian adalah komponen standalone, terjemahan diselesaikan saat runtime melalui LanguageService, dan tema diterapkan melalui override variabel CSS document.documentElement.',
        'technology-stack':
          'Angular 20 · TypeScript · SCSS · Tailwind CSS v4 · EmailJS · i18n (kustom) · Karma / Jasmine · GitHub Pages',
      },
      media: {
        'portfolio-screenshot': {
          alt: 'Situs portofolio yang menampilkan bagian pengenalan dengan konten hero, fakta cepat, dan tombol aksi',
          caption: 'Situs portofolio — Angular 20, live di GitHub Pages',
        },
        'portfolio-arch': {
          alt: 'Arsitektur situs portofolio: sinyal LanguageService, ThemeService, SeoService, komponen Angular standalone, berkas data, build prerender statis, dideploy ke GitHub Pages',
          caption: 'Arsitektur Angular SSG: komponen, service, prerender statis, deployment GitHub Pages',
        },
      },
    },
  },
};

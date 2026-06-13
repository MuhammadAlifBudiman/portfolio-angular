import { PartialTranslation } from '../models/language.model';

export const ID: PartialTranslation = {
  nav: {
    aboutMe: 'Tentang Saya',
    portfolio: 'Portofolio',
    contact: 'Kontak',
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
    body: 'Lulusan Ilmu Komputer dengan fokus pada pengembangan backend API, sistem alur kerja, dan aplikasi web responsif menggunakan Go, TypeScript, Angular, Python, Flask, Django, PostgreSQL, dan MongoDB.',
    aboutMeBtn: 'Tentang Saya',
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
    },
    status: {
      live: 'Aktif',
      restricted: 'Terbatas',
      unavailable: 'Tidak tersedia',
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
  },
  experience: {
    eyebrow: 'Pengalaman Kerja',
    title: 'Pengalaman',
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
          'Menyelesaikan program pengembangan web full-stack berbasis proyek yang mencakup frontend, backend, database, dan praktik deployment.',
        contributions: [
          'Menyelesaikan modul HTML, CSS, JavaScript, Python, Flask, MongoDB, AJAX, alur kerja CRUD, web scraping, dan deployment.',
          'Berkontribusi pada Sistem Manajemen Pasien berbasis tim sebagai developer full-stack.',
        ],
      },
    },
  },
  certifications: {
    eyebrow: 'Sertifikasi',
    title: 'Sertifikasi',
    items: {
      'learningx-msib': {
        name: 'Pengembangan Web Full-Stack',
        issuer: 'LearningX MSIB',
        period: '2023',
      },
      'bkn-internship': {
        name: 'Sertifikat Magang',
        issuer: 'BKN RI (Badan Kepegawaian Negara)',
        period: '2026',
      },
    },
  },
  projects: {
    'bkn-internal-workflow-api': {
      description: 'Mengembangkan dan menyempurnakan endpoint backend Go untuk modul alur kerja internal, mencakup pengambilan daftar/detail, filter, pengurutan, paginasi, transisi alur kerja, penanganan file multipart, dan dokumentasi OpenAPI.',
      imageAlt: 'Ilustrasi arsitektur Backend API untuk sistem alur kerja internal dengan Go, RBAC, unggah file, dan dokumentasi OpenAPI',
      role: 'Backend developer — implementasi Go API dan dokumentasi Swagger/OpenAPI',
    },
    'blog-api-server': {
      description: 'REST API berbasis TypeScript untuk platform blog dengan autentikasi, validasi, integrasi PostgreSQL, notifikasi email, logging, dan dokumentasi API.',
      imageAlt: 'Diagram arsitektur backend Blog API Server dengan Express API, autentikasi, Sequelize ORM, PostgreSQL, notifikasi email, dan logging',
      role: 'Backend developer — REST API, autentikasi, validasi, integrasi database, dan dokumentasi',
    },
    'klinik-google': {
      description: 'Sistem Manajemen Pasien berbasis Flask dan MongoDB untuk pendaftaran pasien, pengelolaan antrian, penjadwalan, rekam medis, alur kerja admin, ekspor CSV, dan pembaruan antarmuka real-time.',
      imageAlt: 'Tangkapan layar dasbor aplikasi Sistem Manajemen Pasien',
      role: 'Full-stack developer — backend API dan desain database',
    },
    'numble': {
      description: 'Numble adalah permainan puzzle angka berbasis web yang menarik dan adiktif, menantang pemain untuk menggunakan kemampuan matematika mereka.',
      imageAlt: 'Tangkapan layar antarmuka permainan tebak angka Numble',
      role: 'Frontend developer — logika permainan dan UI',
    },
    'bemy': {
      description: 'Platform bagi individu untuk menemukan teman ngobrol dan terlibat dalam percakapan virtual.',
      imageAlt: 'Tangkapan layar aplikasi pencocokan teman chat BeMy',
      role: 'Frontend developer — antarmuka pencocokan dan UI chat',
    },
    'stock-data': {
      description: 'Website Kontrol Inventaris untuk memfasilitasi pengelolaan stok dan memastikan ketersediaan produk di berbagai marketplace.',
      imageAlt: 'Tangkapan layar sistem manajemen inventaris StockData',
      role: 'Full-stack developer — logika inventaris dan sinkronisasi marketplace',
    },
    'task-master': {
      description: 'Aplikasi manajemen tugas dengan alur kerja harian, mingguan, dan bulanan berulang, REST API berbasis JWT, riwayat tugas, reset otomatis berbasis zona waktu, dokumentasi API Swagger, tabel data interaktif, dan ekspor Excel.',
      imageAlt: 'Tangkapan layar aplikasi manajemen tugas Task Master',
      role: 'Full-stack developer — Django REST API, reset tugas terjadwal, dan tabel data',
    },
    'portfolio-website': {
      description: 'Website portofolio Angular responsif dengan konten bilingual (EN/ID), komponen standalone yang dapat digunakan ulang, direktif kustom, dukungan tema gelap/terang, showcase proyek, dan formulir kontak EmailJS.',
      imageAlt: 'Tangkapan layar website portofolio Muhammad Alif Budiman',
      role: 'Developer — Angular, TypeScript, SCSS, Tailwind CSS, i18n',
    },
    'color-tap': {
      description: 'Permainan berbasis web yang adiktif ini dirancang untuk menguji refleks dan kemampuan pengenalan warna Anda dengan cara yang menyenangkan dan menarik.',
      imageAlt: 'Tangkapan layar permainan tap warna Color Tap di browser',
    },
    'coffee-shop': {
      description: 'Website CoffeeShop adalah tujuan serbaguna Anda untuk pengalaman kopi yang menyenangkan.',
      imageAlt: 'Tangkapan layar aplikasi web Coffee Shop',
    },
    'checkers': {
      description: 'Permainan Checkers berbasis web yang dibangun dengan Angular, menampilkan gameplay berbasis giliran, pergerakan bidak, penangkapan, promosi raja, dan kondisi akhir permainan. Menerapkan aturan Checkers dengan struktur modular untuk skalabilitas.',
      imageAlt: 'Tangkapan layar permainan papan Checkers di Angular',
    },
    'minesweeper': {
      description: 'Implementasi berbasis web dari permainan Minesweeper klasik yang dibangun dengan Angular. Pemain mengungkap sel di grid untuk menghindari ranjau tersembunyi dan mengungkap angka yang menunjukkan ranjau di sekitarnya.',
      imageAlt: 'Tangkapan layar antarmuka grid permainan Minesweeper',
    },
    'resume-builder': {
      description: 'ResumeBuilder adalah aplikasi web berbasis Angular yang membantu pengguna membuat, mengedit, dan mengunduh resume profesional. Dilengkapi form yang dapat diedit, pratinjau resume secara langsung, dan pembuatan PDF.',
      imageAlt: 'Tangkapan layar Resume Builder dengan pratinjau langsung dan ekspor PDF',
    },
    'quiz-app': {
      description: 'QuizzApp adalah aplikasi kuis berbasis web yang dibangun dengan Angular. Memungkinkan pengguna mengikuti kuis, membuat kuis kustom, dan melihat riwayat kuis mereka.',
      imageAlt: 'Tangkapan layar Quiz App yang menampilkan pembuatan kuis dan riwayat',
    },
    'typing-game': {
      description: 'TypingGame adalah aplikasi berbasis web yang membantu pengguna meningkatkan kecepatan dan akurasi mengetik melalui tes interaktif. Dilengkapi tantangan mengetik, papan peringkat, tema yang dapat dikustomisasi, dan statistik performa terperinci.',
      imageAlt: 'Tangkapan layar antarmuka tes kecepatan mengetik Typing Game',
    },
  },
};

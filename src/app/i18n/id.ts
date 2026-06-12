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
    role: 'Web Developer',
    body: 'Saya membangun aplikasi web dengan Angular, Python, dan Flask — mulai dari sistem manajemen pasien dan alat inventaris hingga permainan tebak kata. Saat ini sedang menempuh studi Informatika dan terbuka untuk kolaborasi.',
    aboutMeBtn: 'Tentang Saya',
  },
  about: {
    eyebrow: 'Pelajari lebih lanjut',
    title: 'Tentang Saya',
    p1: 'Halo, nama saya Muhammad Alif Budiman. Saya sedang menempuh studi Informatika dan bekerja sebagai web developer dengan keahlian di pengembangan frontend maupun backend.',
    p2: 'Saya memulai belajar pemrograman dengan Python sebagai bahasa pertama. Dalam berbagai proyek, saya telah membangun aplikasi dengan Angular, TypeScript, JavaScript, Flask, dan MongoDB — mencakup segalanya mulai dari komponen UI hingga REST API dan desain database.',
    p3: 'Salah satu proyek yang cukup kompleks yang pernah saya kerjakan adalah Klinik Google, sistem manajemen pasien yang dibangun dengan Flask dan MongoDB untuk menangani pendaftaran pasien dan data kesehatan. Proyek itu menuntut saya berpikir cermat tentang integritas data dan alur kerja multi-pengguna, yang membentuk cara saya mendekati desain backend.',
    viewProjectsBtn: 'Lihat Proyek',
    downloadResumeBtn: 'Unduh Resume',
    photoAlt: 'Foto Muhammad Alif Budiman',
  },
  portfolio: {
    eyebrow: 'Temukan karya saya',
    title: 'Portofolio',
    viewProjectBtn: 'Lihat Proyek',
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
      title: 'Muhammad Alif Budiman — Web Developer | Portofolio',
      description: 'Web developer yang berspesialisasi dalam Angular dan aplikasi full-stack. Lihat proyek-proyek saya dan hubungi saya.',
    },
    about: {
      title: 'Tentang — Muhammad Alif Budiman',
      description: 'Pelajari tentang Muhammad Alif Budiman — web developer, latar belakang, keahlian, dan pengalaman.',
    },
    portfolio: {
      title: 'Portofolio — Muhammad Alif Budiman',
      description: 'Proyek pengembangan web pilihan oleh Muhammad Alif Budiman, termasuk aplikasi Angular, sistem full-stack, dan permainan browser.',
    },
    contact: {
      title: 'Kontak — Muhammad Alif Budiman',
      description: 'Hubungi Muhammad Alif Budiman melalui email, WhatsApp, atau formulir kontak.',
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
      description: 'Sistem Manajemen Pasien ini menggunakan Flask dan MongoDB untuk meningkatkan efisiensi pendaftaran pasien, kualitas layanan kesehatan, dan pengelolaan data pasien.',
      imageAlt: 'Tangkapan layar dasbor manajemen pasien Klinik Google',
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
      description: 'Task Master adalah aplikasi web berfitur lengkap yang membantu pengguna mengelola tugas harian, mingguan, dan bulanan mereka secara efisien.',
      imageAlt: 'Tangkapan layar aplikasi manajemen tugas Task Master',
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

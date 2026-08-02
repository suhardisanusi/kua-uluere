import {
  NewsItem,
  StaffItem,
  KuaStats,
  ServiceSop,
  ConsultationTicket,
  BannerAnnouncement,
  DatabaseSchemaTable,
  SystemTimelinePhase,
  CloudTestPlan
} from '../types';

export const INITIAL_KUA_STATS: KuaStats = {
  nikahBulanIni: 14,
  nikahTahunIni: 128,
  masjidMusholla: 38,
  tanahWakafSertifikat: 24,
  penyuluhPAI: 8,
  penghuluAktif: 3,
  luasWilayahKm: 67.4,
  jumlahDesa: 6,
  lastUpdated: '02 Agustus 2026'
};

export const DESA_ULUERE = [
  { name: 'Desa Bonto Marannu', capital: 'Pusat Pemerintahan Kecamatan & KUA', masjidCount: 8, wakafCount: 6 },
  { name: 'Desa Rianta', capital: 'Dusun Rianta', masjidCount: 6, wakafCount: 4 },
  { name: 'Desa Bonto Lojong', capital: 'Dusun Loka', masjidCount: 7, wakafCount: 5 },
  { name: 'Desa Bonto Tallasa', capital: 'Dusun Tallasa', masjidCount: 5, wakafCount: 3 },
  { name: 'Desa Bonto Daeng', capital: 'Dusun Bonto Daeng', masjidCount: 6, wakafCount: 3 },
  { name: 'Desa Bonto Tangnga', capital: 'Dusun Tangnga', masjidCount: 6, wakafCount: 3 }
];

export const INITIAL_STAFF: StaffItem[] = [
  {
    id: 'staf-01',
    name: 'H. Muhammad Syarif, S.Ag., M.H.',
    nip: '19780412 200501 1 004',
    position: 'Kepala KUA',
    status: 'PNS',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    bio: 'Mengabdi di Kementerian Agama sejak 2005. Memimpin KUA Kecamatan Uluere dalam mewujudkan pelayanan publik berintegritas, ramah, berbasis digital, dan menuju Zona Integritas (WBK).',
    phone: '0812-4234-5678',
    email: 'kua.uluere@kemenag.go.id'
  },
  {
    id: 'staf-02',
    name: 'Ustadz Ahmad Fauzi, S.H.I.',
    nip: '19830915 200912 1 002',
    position: 'Penghulu',
    status: 'PNS',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    bio: 'Penghulu Muda KUA Uluere. Aktif dalam pelayanan akad nikah, verifikasi berkas SIMKAH, bimbingan calon pengantin (Suscatin), dan konsultasi hukum keluarga Islam.',
    phone: '0852-9988-1122'
  },
  {
    id: 'staf-03',
    name: 'Drs. H. Abdullah Mansyur',
    nip: '19721104 199903 1 001',
    position: 'Penghulu',
    status: 'PNS',
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    bio: 'Penghulu Madya berpengalaman lebih dari 20 tahun. Koordinator Bimbingan Manasik Haji dan Pengawasan Baitul Maal/Wakaf Kecamatan Uluere.',
    phone: '0813-5544-3321'
  },
  {
    id: 'staf-04',
    name: 'Siti Rahmah, S.Pd.I.',
    nip: '19890620 201903 2 011',
    position: 'Penyuluh Agama Islam (PAI)',
    status: 'PPPK',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    bio: 'Penyuluh Agama Islam Fungsional bidang Pemberdayaan Zakat & Wakaf serta Pembinaan Majelis Taklim perempuan di Desa Bonto Marannu dan Bonto Lojong.',
    phone: '0821-9087-6543'
  },
  {
    id: 'staf-05',
    name: 'Kamaruddin, S.Th.I.',
    nip: '19910214 202321 1 008',
    position: 'Penyuluh Agama Islam (PAI)',
    status: 'PPPK',
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
    bio: 'Penyuluh Agama Islam Fungsional bidang Bimbingan Remaja Usia Sekolah (BRUS), pencegahan pernikahan dini, dan literasi moderasi beragama.',
    phone: '0853-4123-9876'
  },
  {
    id: 'staf-06',
    name: 'Nurul Hidayah, A.Md.',
    nip: '19950810 202012 2 015',
    position: 'Staf Administrasi',
    status: 'PNS',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
    bio: 'Pengelola Data SIMKAH & Layanan Administrasi Umum. Bertanggung jawab atas verifikasi dokumen, pencetakan Buku Nikah, dan layanan persuratan kUA.',
    phone: '0812-7766-5544'
  }
];

export const INITIAL_NEWS: NewsItem[] = [
  {
    id: 'berita-01',
    title: 'KUA Uluere Bantaeng Buka Layanan Bimbingan Manasik Haji Mandiri Tingkat Kecamatan',
    slug: 'bimbingan-manasik-haji-kua-uluere',
    category: 'Kegiatan',
    summary: 'Kantor Urusan Agama Kecamatan Uluere menggelar pembukaan Bimbingan Manasik Haji tingkat kecamatan bagi jamaah calon haji asal Uluere Kabupaten Bantaeng.',
    content: `KUA Kecamatan Uluere, Kabupaten Bantaeng resmi membuka kegiatan Bimbingan Manasik Haji Mandiri Tingkat Kecamatan bagi para Jamaah Calon Haji (JCH) yang terdaftar untuk keberangkatan musim haji tahun ini.

Acara pembukaan yang diselenggarakan di Aula Serbaguna KUA Uluere, Desa Bonto Marannu ini dihadiri langsung oleh Kepala KUA Uluere, para Penghulu, serta jajaran Penyuluh Agama Islam (PAI) Fungsional.

Dalam sambutannya, Kepala KUA Uluere, H. Muhammad Syarif, S.Ag., M.H., menyampaikan bahwa bimbingan manasik ini bertujuan untuk memberikan pemahaman komprehensif mengenai syariat, rukun, wajib, serta tata cara pelaksanaan ibadah haji dan umrah agar jamaah dapat menjalankan ibadah secara mandiri, khusyuk, dan sesuai tuntunan rasulullah SAW.

"Kami berkomitmen memberikan pelayanan terbaik, mulai dari bimbingan manasik, pemeriksaan berkas administrasi, hingga pendampingan spiritual secara gratis tanpa dipungut biaya apapun," tegas beliau.

Selama 8 kali pertemuan ke depan, para jamaah akan dibekali materi fikh haji, kesehatan haji di Arab Saudi, simulasi thawaf dan sa'i, serta wawasan moderasi beragama selama menjalankan ibadah di tanah suci.`,
    author: 'Admin KUA Uluere',
    date: '01 Agustus 2026',
    imageUrl: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&auto=format&fit=crop&q=80',
    views: 342,
    featured: true
  },
  {
    id: 'berita-02',
    title: 'Sosialisasi Pencegahan Perkahwinan Anak dan Program BRUS di SMA Negeri Uluere Bantaeng',
    slug: 'sosialisasi-brus-pencegahan-nikah-dini',
    category: 'Edukasi Syariah',
    summary: 'Penyuluh Agama Islam KUA Uluere mengedukasi ratusan siswa SMA tentang pentingnya kesiapan usia nikah, kesehatan reproduksi, dan Bimbingan Remaja Usia Sekolah.',
    content: `Sebagai langkah konkret menekan angka pernikahan dini dan stunting di Kabupaten Bantaeng, Tim Penyuluh Agama Islam (PAI) KUA Kecamatan Uluere menggelar program Bimbingan Remaja Usia Sekolah (BRUS) di SMAN Uluere.

Kegiatan ini diikuti oleh lebih dari 150 siswa-siswi kelas XI dan XII. Materi disampaikan oleh Kamaruddin, S.Th.I. bersama jajaran PAI Uluere.

Dalam paparannya, dijelaskan bahwa berdasarkan UU No. 16 Tahun 2019 perubahan atas UU No. 1 Tahun 1974 tentang Perkawinan, batas usia minimal menikah baik bagi laki-laki maupun perempuan adalah 19 tahun.

"Pernikahan bukan hanya ikatan ijab kabul, tetapi ikatan lahir batin yang membutuhkan kesiapan mental, fisik, finansial, dan pemahaman keagamaan yang matang. Melalui BRUS, remaja diajak untuk fokus mengejar cita-cita dan membendung pergaulan bebas," jelas Kamaruddin.

Kepala Sekolah SMAN Uluere mengapresiasi kolaborasi rutin ini dan berharap KUA Uluere terus menjadi pelopor edukasi keluarga sakinah di kalangan remaja di wilayah pegunungan Uluere.`,
    author: 'Penyuluh PAI Uluere',
    date: '28 Juli 2026',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
    views: 215,
    featured: false
  },
  {
    id: 'berita-03',
    title: 'Penerbitan Akta Ikrar Wakaf (AIW) Gratis bagi Pengurus Masjid Bonto Lojong',
    slug: 'penerbitan-akta-ikrar-wakaf-gratis',
    category: 'Kegiatan',
    summary: 'KUA Uluere menyerahkan Dokumen Akta Ikrar Wakaf (AIW) tanah masjid seluas 650 m² di Desa Bonto Lojong untuk kepastian hukum aset keagamaan umat.',
    content: `Kepala Kantor Urusan Agama (KUA) Kecamatan Uluere menyerahkan secara resmi Akta Ikrar Wakaf (AIW) dan Surat Pengesahan Nazhir kepada pengurus Masjid Nurul Huda di Desa Bonto Lojong, Kecamatan Uluere, Kabupaten Bantaeng.

Proses penandatanganan Ikrar Wakaf disaksikan oleh Pejabat Pembuat Akta Ikrar Wakaf (PPAIW) KUA Uluere, Nazhir Wakaf, saksi-saksi dari aparat desa, serta tokoh masyarakat setempat.

Tanah wakaf seluas 650 meter persegi tersebut diserahkan oleh keluarga Wakif untuk pembangunan sarana ibadah dan Taman Pendidikan Al-Qur'an (TPQ).

"Seluruh proses pengurusan AIW di KUA Uluere adalah 100% GRATIS tanpa biaya. Kami mengimbau seluruh pengurus masjid, musholla, pesantren, dan pekuburan Islam di Kecamatan Uluere yang belum memiliki sertifikat AIW untuk segera mendaftarkan aset wakafnya ke KUA demi keamanan hukum jangka panjang," tutur H. Muhammad Syarif.`,
    author: 'PPAIW KUA Uluere',
    date: '20 Juli 2026',
    imageUrl: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&auto=format&fit=crop&q=80',
    views: 189,
    featured: false
  },
  {
    id: 'berita-04',
    title: 'Transparansi Tarif PNBP Nikah: Rp0 di KUA vs Rp600.000 di Luar Kantor / Hari Libur',
    slug: 'transparansi-tarif-pnbp-nikah-kua',
    category: 'Pengumuman',
    summary: 'Penjelasan resmi PP No. 59 Tahun 2018 mengenai biaya pencatatan nikah. KUA Uluere menjamin bebas pungli dan transparansi penuh via SIMKAH Kemenag.',
    content: `KUA Kecamatan Uluere mengingatkan seluruh calon pengantin (Catin) dan masyarakat Kabupaten Bantaeng mengenai aturan resmi Peraturan Pemerintah (PP) Nomor 59 Tahun 2018 tentang Jenis dan Tarif atas Jenis Penerimaan Negara Bukan Pajak (PNBP) di Kementerian Agama.

Ketentuan Biaya Pencatatan Nikah:
1. Nikah di KUA (Balai Nikah) pada jam kerja kantor (Senin-Jumat, 07.30 - 16.00 WITA): Biaya Rp 0,- (GRATIS/NOL RUPIAH).
2. Nikah di Luar KUA (Rumah/Gedung/Masjid) atau Di Luar Jam Kerja / Hari Libur: Biaya Rp 600.000,- (Enam Ratus Ribu Rupiah).

Catatan Penting Security & Akuntabilitas:
- Pembayaran biaya Rp 600.000,- dilakukan LANGSUNG oleh Catin melalui Kode Bayar (Billing MPN G2) yang diterbitkan sistem SIMKAH Web.
- Pembayaran dapat dilakukan via Bank BRI, BNI, Mandiri, BSI, Pos Indonesia, Tokopedia, atau Teller/ATM/Mobile Banking resmi.
- Dilarang keras menyerahkan uang tunai kepada Penghulu atau Staf KUA. KUA Uluere berpredikat ZI (Zona Integritas) Tolak Gratifikasi dan Pungli.`,
    author: 'Humas KUA Uluere',
    date: '15 Juli 2026',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=80',
    views: 512,
    featured: true
  }
];

export const INITIAL_BANNERS: BannerAnnouncement[] = [
  {
    id: 'b-01',
    title: 'Selamat Datang di Portal Resmi KUA Kecamatan Uluere',
    subtitle: 'Kabupaten Bantaeng - Kementerian Agama Republik Indonesia',
    imageUrl: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1600&auto=format&fit=crop&q=80',
    linkUrl: '#layanan',
    active: true,
    order: 1
  },
  {
    id: 'b-02',
    title: 'Layanan SIMKAH Web Terintegrasi',
    subtitle: 'Daftar nikah online dengan cepat, transparan, dan dapatkan kepastian tarif PNBP resmi.',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&auto=format&fit=crop&q=80',
    linkUrl: '#simkah',
    active: true,
    order: 2
  },
  {
    id: 'b-03',
    title: 'Zona Integritas - KUA Bebas Pungli & Gratifikasi',
    subtitle: 'Kami berkomitmen memberikan pelayanan prima, melayani sepenuh hati dengan prinsip Ikhlas Beramal.',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&auto=format&fit=crop&q=80',
    linkUrl: '#profil',
    active: true,
    order: 3
  }
];

export const INITIAL_TICKETS: ConsultationTicket[] = [
  {
    id: 't-101',
    ticketCode: 'KUA-ULU-20260801-01',
    senderName: 'Andi Rahmat Hidayat',
    senderPhone: '081299887766',
    senderEmail: 'andi.rahmat@gmail.com',
    village: 'Desa Bonto Marannu',
    category: 'Pendaftaran SIMKAH',
    subject: 'Syarat Pendaftaran Nikah untuk Calon Pengantin Asal Luar Kabupaten Bantaeng',
    message: 'Assalamu alaikum Wr. Wb. Pak Kepala KUA, calon istri saya berasal dari Kab. Bulukumba. Mohon penjelasan berkas Rekomendasi Nikah N6 dari KUA Bulukumba dan apakah bisa didaftarkan via SIMKAH online?',
    status: 'Selesai',
    createdAt: '01 Agustus 2026, 09:15 WITA',
    reply: 'Wa alaikum salam Wr. Wb. Saudara Andi Rahmat. Ya, betul. Calon istri dari luar kabupaten wajib mengurus Surat Rekomendasi Nikah dari KUA kecamatan setempat di Bulukumba. Berkas tersebut diunggah bersama N1-N4 ke portal SIMKAH Web (simkah.kemenag.go.id) atau diserahkan langsung ke staf KUA Uluere paling lambat 10 hari kerja sebelum hari akad.',
    repliedAt: '01 Agustus 2026, 11:30 WITA'
  },
  {
    id: 't-102',
    ticketCode: 'KUA-ULU-20260801-02',
    senderName: 'H. Ruslan Bonto Lojong',
    senderPhone: '085341223344',
    village: 'Desa Bonto Lojong',
    category: 'Konsultasi Wakaf',
    subject: 'Permohonan Sertifikasi Akta Ikrar Wakaf (AIW) Musholla Al-Ikhlas',
    message: 'Tabe Ustadz, pengurus musholla di RW 02 Loka Desa Bonto Lojong mau mengurus AIW tanah wakaf dari almarhum H. Mansyur. Berkas apa saja yang perlu disiapkan ke KUA Uluere?',
    status: 'Diproses',
    createdAt: '01 Agustus 2026, 14:20 WITA',
    reply: 'Wa alaikum salam. Tabe Pak H. Ruslan, staf PPAIW KUA Uluere siap melayani. Syarat utama: 1) Surat Kepemilikan Tanah/Sertifikat Asli/Petok C, 2) Fotokopi KTP Wakif/Ahli Waris, Nazhir (3 orang), & 2 Orang Saksi, 3) Surat Pernyataan Tidak Dalam Sengketa dari Kepala Desa Bonto Lojong. Tim kami siap hadir untuk ikrar wakaf di lokasi.',
    repliedAt: '01 Agustus 2026, 16:00 WITA'
  }
];

export const SERVICES_LIST: ServiceSop[] = [
  {
    id: 'srv-01',
    title: 'Pendaftaran & Pencatatan Nikah (SIMKAH)',
    category: 'Pernikahan',
    description: 'Pelayanan pendaftaran, verifikasi berkas, dan pencatatan akad nikah resmi di KUA Kecamatan Uluere dengan terbitnya Buku Nikah Kemenag & Kartu Nikah Digital.',
    requirements: [
      'Surat Pengantar Nikah dari Desa/Kelurahan (Model N1 - N4)',
      'Persetujuan Calon Pengantin & Surat Izin Orang Tua (jika di bawah 21 tahun)',
      'Fotokopi KTP, KK, & Akta Kelahiran Calon Pengantin',
      'Pasfoto ukuran 2x3 (4 lembar) dan 4x6 (2 lembar) latar biru',
      'Surat Keterangan Imunisasi TT & Pemeriksaan Kesehatan Catin dari Puskesmas Uluere',
      'Surat Rekomendasi Nikah dari KUA asal (jika calon dari luar kec/kab)',
      'Akta Cerai / Surat Kematian (jika status Duda / Janda)'
    ],
    duration: '10 Hari Kerja Sebelum Akad Nikah',
    cost: 'Rp 0,- (Di KUA jam kerja) / Rp 600.000,- (Luar KUA / Libur via Bank)',
    legalBasis: 'PMA No. 20 Tahun 2019 & PP No. 59 Tahun 2018',
    simkahIntegrated: true
  },
  {
    id: 'srv-02',
    title: 'Penerbitan Akta Ikrar Wakaf (AIW) & APAIW',
    category: 'Wakaf',
    description: 'Pelayanan pengesahan dan pembuatan Akta Ikrar Wakaf (AIW) / Akta Pengganti AIW bagi objek tanah atau bangunan keagamaan di wilayah Kecamatan Uluere.',
    requirements: [
      'Surat Kepemilikan Tanah (Sertifikat / Petok C / Kohir)',
      'Surat Pernyataan Pemilikan Tanah Tidak Dalam Sengketa dari Kepala Desa',
      'Fotokopi KTP Wakif, Nazhir (minimal 3 orang), dan 2 Orang Saksi',
      'Surat Susunan Pengurus Nazhir Wakaf dari Desa',
      'Denah Lokasi Sketsa Tanah Wakaf'
    ],
    duration: '3 - 5 Hari Kerja',
    cost: 'Rp 0,- (GRATIS)',
    legalBasis: 'UU No. 41 Tahun 2004 tentang Wakaf & PP No. 42 Tahun 2006'
  },
  {
    id: 'srv-03',
    title: 'Bimbingan Manasik Haji & Umrah Kecamatan',
    category: 'Haji & Umrah',
    description: 'Pelayanan bimbingan manasik haji kelompok tingkat kecamatan bagi Jamaah Calon Haji (JCH) terdaftar Kabupaten Bantaeng asal Kecamatan Uluere.',
    requirements: [
      'Bukti Pel its/Setoran Awal BPIH dari Bank Penerima Setoran',
      'SPPH (Surat Pendaftaran Pergi Haji) resmi Kemenag Bantaeng',
      'Fotokopi KTP & Buku Tabungan Haji'
    ],
    duration: '8 Kali Pertemuan Sesuai Jadwal Tahunan KUA',
    cost: 'Rp 0,- (GRATIS)',
    legalBasis: 'PMA No. 13 Tahun 2021 tentang Penyelenggaraan Ibadah Haji Reguler'
  },
  {
    id: 'srv-04',
    title: 'Konsultasi Keluarga Sakinah & Mediasi',
    category: 'Konsultasi',
    description: 'Layanan bimbingan perkawinan, konseling konflik rumah tangga, fasilitasi BP4, dan kursus calon pengantin (Suscatin) mandiri.',
    requirements: [
      'Kartu Identitas (KTP / KK)',
      'Mengisi Formulir Konsultasi KUA Uluere'
    ],
    duration: 'Langsung / Sesuai Janji Temu Penghulu',
    cost: 'Rp 0,- (GRATIS)',
    legalBasis: 'Keputusan Dirjen Bimas Islam No. 881 Tahun 2017'
  }
];

export const DATABASE_SCHEMA_CONFIG: DatabaseSchemaTable[] = [
  {
    tableName: 'kua_berita',
    description: 'Menyimpan data publikasi berita, pengumuman, edukasi syariah, dan artikel kegiatan kantor KUA Uluere.',
    columns: [
      { name: 'id', type: 'BIGINT UNSIGNED', constraints: 'PRIMARY KEY, AUTO_INCREMENT', description: 'ID unik berita' },
      { name: 'title', type: 'VARCHAR(255)', constraints: 'NOT NULL', description: 'Judul berita/pengumuman' },
      { name: 'slug', type: 'VARCHAR(255)', constraints: 'UNIQUE, INDEX', description: 'URL friendly slug' },
      { name: 'category', type: "ENUM('Kegiatan','Pengumuman','Edukasi Syariah','Khutbah')", constraints: 'NOT NULL', description: 'Kategori konten' },
      { name: 'summary', type: 'TEXT', constraints: 'NOT NULL', description: 'Ringkasan singkat' },
      { name: 'content', type: 'LONGTEXT', constraints: 'NOT NULL', description: 'Isi lengkap berita HTML/Markdown' },
      { name: 'author_name', type: 'VARCHAR(100)', constraints: 'NOT NULL', description: 'Nama penulis/staf' },
      { name: 'image_url', type: 'VARCHAR(500)', constraints: 'NULLABLE', description: 'Link foto cover' },
      { name: 'views_count', type: 'INT UNSIGNED', constraints: 'DEFAULT 0', description: 'Jumlah pembaca' },
      { name: 'is_featured', type: 'BOOLEAN', constraints: 'DEFAULT FALSE', description: 'Disematkan di halaman depan' },
      { name: 'created_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP', description: 'Waktu buat' }
    ]
  },
  {
    tableName: 'kua_pegawai',
    description: 'Menyimpan profil struktur organisasi, Kepala KUA, Penghulu, Penyuluh PAI, dan Staf Administrasi.',
    columns: [
      { name: 'id', type: 'BIGINT UNSIGNED', constraints: 'PRIMARY KEY, AUTO_INCREMENT', description: 'ID pegawai' },
      { name: 'nip', type: 'VARCHAR(30)', constraints: 'UNIQUE, INDEX', description: 'NIP resmi Kemenag' },
      { name: 'full_name', type: 'VARCHAR(150)', constraints: 'NOT NULL', description: 'Nama lengkap + gelar' },
      { name: 'position', type: "ENUM('Kepala KUA','Penghulu','Penyuluh Agama Islam (PAI)','Staf Administrasi')", constraints: 'NOT NULL', description: 'Jabatan resmi' },
      { name: 'employee_status', type: "ENUM('PNS','PPPK','Non-ASN')", constraints: 'NOT NULL', description: 'Status kepegawaian' },
      { name: 'photo_url', type: 'VARCHAR(500)', constraints: 'NULLABLE', description: 'Foto profil resmi' },
      { name: 'bio_summary', type: 'TEXT', constraints: 'NULLABLE', description: 'Profil & riwayat pengabdian' },
      { name: 'phone_number', type: 'VARCHAR(20)', constraints: 'NULLABLE', description: 'Kontak dinas' },
      { name: 'is_active', type: 'BOOLEAN', constraints: 'DEFAULT TRUE', description: 'Status keaktifan' }
    ]
  },
  {
    tableName: 'kua_statistik_realtime',
    description: 'Data statistik agregat tahunan & bulanan wilayah Kecamatan Uluere (jumlah nikah, masjid, wakaf, desa).',
    columns: [
      { name: 'id', type: 'INT UNSIGNED', constraints: 'PRIMARY KEY, AUTO_INCREMENT', description: 'ID record' },
      { name: 'nikah_bulan_ini', type: 'INT UNSIGNED', constraints: 'DEFAULT 0', description: 'Jumlah akad nikah bulan berjalan' },
      { name: 'nikah_tahun_ini', type: 'INT UNSIGNED', constraints: 'DEFAULT 0', description: 'Total akad nikah tahunan' },
      { name: 'masjid_musholla_count', type: 'INT UNSIGNED', constraints: 'DEFAULT 0', description: 'Jumlah rumah ibadah terdaftar' },
      { name: 'tanah_wakaf_certified', type: 'INT UNSIGNED', constraints: 'DEFAULT 0', description: 'Jumlah bidang tanah wakaf ber-AIW' },
      { name: 'penyuluh_pai_count', type: 'INT UNSIGNED', constraints: 'DEFAULT 0', description: 'Jumlah penyuluh aktif' },
      { name: 'last_updated', type: 'DATETIME', constraints: 'NOT NULL', description: 'Waktu pemutakhiran data' }
    ]
  },
  {
    tableName: 'kua_konsultasi_pengaduan',
    description: 'Penyimpanan pesan pengaduan, konsultasi keluarga, dan permohonan informasi warga.',
    columns: [
      { name: 'id', type: 'BIGINT UNSIGNED', constraints: 'PRIMARY KEY, AUTO_INCREMENT', description: 'ID tiket' },
      { name: 'ticket_code', type: 'VARCHAR(50)', constraints: 'UNIQUE, INDEX', description: 'Kode acak unik tiket warga' },
      { name: 'sender_name', type: 'VARCHAR(100)', constraints: 'NOT NULL', description: 'Nama pemohon' },
      { name: 'sender_phone', type: 'VARCHAR(25)', constraints: 'NOT NULL', description: 'Nomor WhatsApp active' },
      { name: 'village_origin', type: 'VARCHAR(100)', constraints: 'NOT NULL', description: 'Desa di Uluere' },
      { name: 'category', type: 'VARCHAR(100)', constraints: 'NOT NULL', description: 'Kategori pertanyaan/pengaduan' },
      { name: 'message', type: 'TEXT', constraints: 'NOT NULL', description: 'Uraian pengaduan/konsultasi' },
      { name: 'status', type: "ENUM('Menunggu','Diproses','Selesai')", constraints: "DEFAULT 'Menunggu'", description: 'Status penanganan' },
      { name: 'admin_reply', type: 'TEXT', constraints: 'NULLABLE', description: 'Tanggapan resmi staf KUA' },
      { name: 'replied_at', type: 'TIMESTAMP', constraints: 'NULLABLE', description: 'Waktu jawaban' }
    ]
  }
];

export const SYSTEM_TIMELINE_PHASES: SystemTimelinePhase[] = [
  {
    phase: 'Fase 1',
    title: 'Analisis Kebutuhan & Perancangan Arsitektur (Minggu 1-2)',
    duration: '2 Minggu',
    milestones: [
      'Pengumpulan data statistik & profil KUA Kecamatan Uluere Bantaeng',
      'Penyusunan dokumen SOP pelayanan & kalkulator PNBP Nikah',
      'Desain Wireframe UI/UX dengan palet warna resmi Kemenag RI',
      'Perancangan skema database MySQL 8.0 (InnoDB Engine, utf8mb4) & Relasi ERD'
    ],
    deliverables: ['Dokumen SRS (Software Requirement Spec)', 'Wireframe UI/UX Desktop & Mobile', 'ERD Schema SQL MySQL']
  },
  {
    phase: 'Fase 2',
    title: 'Pengembangan Front-End & Portal Layanan Publik (Minggu 3-5)',
    duration: '3 Minggu',
    milestones: [
      'Pembuatan modul Beranda, Banner Slider, & Quick Search',
      'Integrasi Widget Jadwal Shalat Real-Time Kemenag Wilayah Bantaeng',
      'Pengembangan Kalkulator Biaya Nikah Transparan (Rp0 vs Rp600.000)',
      'Halaman Profil Organisasi, Struktur Pegawai, & Wilayah 6 Desa Uluere'
    ],
    deliverables: ['Responsive Front-End App', 'Widget Jadwal Shalat Component', 'Formulir Pengaduan Online']
  },
  {
    phase: 'Fase 3',
    title: 'Pengembangan Back-End API & CMS Admin Panel (Minggu 6-8)',
    duration: '3 Minggu',
    milestones: [
      'Pembuatan RESTful API Express.js dengan Proteksi JWT & CSRF',
      'Modul CMS Manajemen Berita, Pengumuman, & Running Text',
      'Modul CRUD Pegawai, Statistik KUA, & Banner Slider',
      'Modul Inbox Manajemen Konsultasi / Pengaduan Warga'
    ],
    deliverables: ['Express / Laravel API Service', 'Dashboard Admin CMS Panel', 'Role-Based Access Control']
  },
  {
    phase: 'Fase 4',
    title: 'Integrasi Sistem SIMKAH Web & WhatsApp Gateway (Minggu 9-10)',
    duration: '2 Minggu',
    milestones: [
      'Penyediaan API Endpoint & Deep Linking ke SIMKAH Web Kemenag',
      'Integrasi Notifikasi Automatic WhatsApp Gateway untuk Tiket Konsultasi',
      'Pengujian Keamanan (Security Audit, SQL Injection & XSS Sanitization)'
    ],
    deliverables: ['Integrasi SIMKAH Bridge', 'WhatsApp Notification Module', 'Laporan Audit Keamanan']
  },
  {
    phase: 'Fase 5',
    title: 'Uji Coba Pengguna (UAT) & Pelatihan Staf KUA Uluere (Minggu 11)',
    duration: '1 Minggu',
    milestones: [
      'User Acceptance Testing (UAT) bersama Kepala KUA & Operator SIMKAH',
      'Penyusunan Buku Panduan Penggunaan (User Manual) CMS Admin',
      'Pelatihan teknis pengisian konten & penanganan konsultasi warga'
    ],
    deliverables: ['Berita Acara UAT', 'Buku Panduan Manual Admin', 'Sertifikat Kesiapan Operasional']
  },
  {
    phase: 'Fase 6',
    title: 'Deploy Cloud Container & Pemeliharaan System (Minggu 12+)',
    duration: 'Berkelanjutan',
    milestones: [
      'Deployment ke Google Cloud Run / Cloud SQL dengan SSL HTTPS Domain Resmi',
      'Konfigurasi CDN, Caching, Auto-scaling, & Scheduled Database Backup',
      'Monitoring Performa Real-Time & Layanan Helpdesk Maintenance'
    ],
    deliverables: ['Sistem Live Production (SSL)', 'Cloud Infrastructure Monitoring', 'SLA Pemeliharaan 99.9%']
  }
];

export const CLOUD_TESTING_PLAN: CloudTestPlan[] = [
  {
    testType: 'Load Testing (Uji Beban)',
    tool: 'k6 / Apache JMeter',
    targetMetric: '1,000 Concurrent Users (RPS > 500 req/sec)',
    methodology: 'Simulasi lonjakan pengunjung pada musim pendaftaran nikah / bulan Ramadhan untuk memastikan halaman Beranda & Jadwal Shalat tetap responsif < 1.2 detik.'
  },
  {
    testType: 'Stress Testing (Uji Ketahanan)',
    tool: 'Locust / Artillery',
    targetMetric: 'Failure Rate < 0.01% under 5x Peak Load',
    methodology: 'Pengujian batas maksimal kapasitas pod Cloud Run saat pengiriman form konsultasi serentak dan pencarian berita.'
  },
  {
    testType: 'Security & Vulnerability Scan',
    tool: 'OWASP ZAP / SonarQube',
    targetMetric: 'Zero High / Critical Vulnerabilities',
    methodology: 'Pengujian penetrasi otomatis untuk celah SQL Injection, XSS, CSRF bypass, dan keamanan otentikasi login admin CMS.'
  },
  {
    testType: 'Latency & Mobile Speed Test',
    tool: 'Google Lighthouse / WebPageTest',
    targetMetric: 'Performance Score > 95/100, FCP < 0.8s',
    methodology: 'Optimasi kompresi gambar WebP, caching browser, lazy-loading, dan minifikasi bundle JavaScript untuk masyarakat pegunungan Uluere dengan jaringan mobile 3G/4G.'
  }
];

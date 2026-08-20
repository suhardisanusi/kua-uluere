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
  {
    name: 'Desa Bonto Marannu',
    code: '73.03.06.2001',
    capital: 'Pusat Pemerintahan Kecamatan Uluere & Kantor KUA Uluere',
    masjidCount: 8,
    wakafCount: 6,
    description: 'Ibu kota Kecamatan Uluere, pusat kawasan wisata alam Loka, perkebunan apel, hortikultura, dan pusat fasilitas pelayanan publik KUA.'
  },
  {
    name: 'Desa Bonto Lojong',
    code: '73.03.06.2002',
    capital: 'Kawasan Dataran Tinggi Loka Uluere',
    masjidCount: 7,
    wakafCount: 5,
    description: 'Wilayah pegunungan tinggi penghasil kentang & wortel utama, dengan pusat pembinaan majelis taklim serta pengasuhan TPQ yang aktif.'
  },
  {
    name: 'Desa Bonto Tallasa',
    code: '73.03.06.2003',
    capital: 'Dusun Tallasa',
    masjidCount: 6,
    wakafCount: 4,
    description: 'Rintisan Kampung Moderasi Beragama (KMB) pertama di Kecamatan Uluere dengan tingkat keharmonisan sosial dan gotong royong warga yang tinggi.'
  },
  {
    name: 'Desa Bonto Rannu',
    code: '73.03.06.2004',
    capital: 'Dusun Bonto Rannu',
    masjidCount: 5,
    wakafCount: 3,
    description: 'Desa agrowisata dataran tinggi pegunungan Uluere, kaya akan aset tanah wakaf produktif perkebunan dan pembinaan PAI Fungsional KUA.'
  },
  {
    name: 'Desa Bonto Daeng',
    code: '73.03.06.2005',
    capital: 'Dusun Bonto Daeng',
    masjidCount: 6,
    wakafCount: 3,
    description: 'Kawasan pertanian dataran tinggi Uluere di sisi timur, pusat pembinaan zakat fitrah dan bakti sosial keagamaan KUA Uluere.'
  },
  {
    name: 'Desa Bonto Tangnga',
    code: '73.03.06.2006',
    capital: 'Dusun Bonto Tangnga',
    masjidCount: 6,
    wakafCount: 3,
    description: 'Wilayah pegunungan tengah Uluere dengan fokus pembinaan akurasi kalibrasi arah kiblat tempat ibadah serta bimbingan keluarga sakinah.'
  }
];

export const INITIAL_STAFF: StaffItem[] = [
  {
    id: 'staf-01',
    name: 'Zainuddin Samad, S.Ag.',
    nip: '19760815 200312 1 003',
    position: 'Kepala KUA',
    status: 'PNS',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    bio: 'Kepala KUA Kecamatan Uluere & Pejabat Pembuat Akta Ikrar Wakaf (PPAIW). Memimpin transformasi digital SIMKAH, pembentukan Kampung Moderasi Beragama, dan Zona Integritas (WBK) KUA Uluere.',
    phone: '0812-4234-5678',
    email: 'kua.uluere@kemenag.go.id'
  },
  {
    id: 'staf-02',
    name: 'H. Abustam, S.Ag.',
    nip: '19710310 199803 1 002',
    position: 'Penghulu',
    status: 'PNS',
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    bio: 'Penghulu Madya KUA Uluere. Berpengalaman lebih dari 20 tahun dalam verifikasi keabsahan dokumen nikah, pelayanan akad nikah, serta bimbingan manasik haji mandiri.',
    phone: '0852-9988-1122'
  },
  {
    id: 'staf-03',
    name: 'Syahruddin, S.Ag., M.Pd.I.',
    nip: '19790512 200604 1 005',
    position: 'Penghulu',
    status: 'PNS',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    bio: 'Penghulu Muda KUA Uluere & Fasilitator Bimbingan Perkawinan (Bimwin) Terakreditasi Kemenag. Aktif membekali calon pengantin dengan manajemen konflik rumah tangga sakinah.',
    phone: '0813-5544-3321'
  },
  {
    id: 'staf-04',
    name: 'Ustadz Muhammad Sukri, S.Pd.I.',
    nip: '19851120 201101 1 009',
    position: 'Penyuluh Agama Islam (PAI)',
    status: 'PNS',
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
    bio: 'Penyuluh Agama Islam Fungsional KUA Uluere. Koordinator Program Bimbingan Remaja Usia Sekolah (BRUS) dan edukasi pencegahan pernikahan dini di sekolah-sekolah se-Kecamatan Uluere.',
    phone: '0853-4123-9876'
  },
  {
    id: 'staf-05',
    name: 'Kasmawati, S.H.I.',
    nip: '19890620 201903 2 011',
    position: 'Penyuluh Agama Islam (PAI)',
    status: 'PPPK',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    bio: 'Penyuluh PAI & Pendamping Proses Produk Halal (P3H). Mendampingi puluhan UMKM makanan olahan kentang Uluere mendaftarkan Sertifikat Halal Gratis (SEHATI) BPJPH Kemenag.',
    phone: '0821-9087-6543'
  },
  {
    id: 'staf-06',
    name: 'Syamsuddin, S.Pd.',
    nip: '19920415 202321 1 012',
    position: 'Staf Administrasi',
    status: 'PPPK',
    photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
    bio: 'Operator SIMKAH Web & Pengelola Administrasi Publik KUA Uluere. Mengelola pendaftaran nikah online, kartu nikah digital ber-QR Code, dan penerbitan rekomendasi nikah.',
    phone: '0813-8899-7711'
  },
  {
    id: 'staf-07',
    name: 'Nurhidayah, A.Md.',
    nip: '19950810 202012 2 015',
    position: 'Staf Administrasi',
    status: 'PNS',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
    bio: 'Staf Keuangan & Pelayanan Publik KUA Uluere. Bertanggung jawab atas pengawasan transparansi PNBP nikah Rp0, pencetakan buku nikah, serta administrasi legalitas persuratan.',
    phone: '0812-7766-5544'
  },
  {
    id: 'staf-08',
    name: 'Ustadz Ahmad Ridwan, S.Ag.',
    nip: 'Honorer / PAIN Kemenag',
    position: 'Penyuluh Agama Islam (PAI)',
    status: 'Non-ASN',
    photoUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=80',
    bio: 'Penyuluh Agama Islam Non-PNS (PAIN) KUA Uluere wilayah Desa Bonto Marannu & Bonto Lojong. Aktif membina majelis taklim, khotib Jumat, dan pendataan rumah ibadah.',
    phone: '0823-4455-6677'
  }
];

export const INITIAL_NEWS: NewsItem[] = [
  // --- 2026 ---
  {
    id: 'berita-2026-01',
    title: 'KUA Uluere Bantaeng Buka Layanan Bimbingan Manasik Haji Mandiri Tingkat Kecamatan',
    slug: 'bimbingan-manasik-haji-kua-uluere',
    category: 'Kegiatan',
    summary: 'Kantor Urusan Agama Kecamatan Uluere menggelar pembukaan Bimbingan Manasik Haji tingkat kecamatan bagi jamaah calon haji asal Uluere Kabupaten Bantaeng.',
    content: `KUA Kecamatan Uluere, Kabupaten Bantaeng resmi membuka kegiatan Bimbingan Manasik Haji Mandiri Tingkat Kecamatan bagi para Jamaah Calon Haji (JCH) yang terdaftar untuk keberangkatan musim haji tahun ini.

Acara pembukaan yang diselenggarakan di Aula Serbaguna KUA Uluere, Desa Bonto Marannu ini dihadiri langsung oleh Kepala KUA Uluere, para Penghulu, serta jajaran Penyuluh Agama Islam (PAI) Fungsional.

Dalam sambutannya, Kepala KUA Uluere menyampaikan bahwa bimbingan manasik ini bertujuan untuk memberikan pemahaman komprehensif mengenai syariat, rukun, wajib, serta tata cara pelaksanaan ibadah haji dan umrah secara mandiri dan khusyuk.`,
    author: 'Admin KUA Uluere',
    date: '01 Agustus 2026',
    year: 2026,
    imageUrl: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&auto=format&fit=crop&q=80',
    views: 342,
    featured: true,
    sourceName: 'Humas Kemenag Kab. Bantaeng',
    sourceUrl: 'https://bantaeng.kemenag.go.id/'
  },
  {
    id: 'berita-2026-02',
    title: 'Sosialisasi Pencegahan Perkahwinan Anak dan Program BRUS di SMA Negeri Uluere Bantaeng',
    slug: 'sosialisasi-brus-pencegahan-nikah-dini',
    category: 'Edukasi Syariah',
    summary: 'Penyuluh Agama Islam KUA Uluere mengedukasi ratusan siswa SMA tentang pentingnya kesiapan usia nikah, kesehatan reproduksi, dan Bimbingan Remaja Usia Sekolah.',
    content: `Sebagai langkah konkret menekan angka pernikahan dini dan stunting di Kabupaten Bantaeng, Tim Penyuluh Agama Islam (PAI) KUA Kecamatan Uluere menggelar program Bimbingan Remaja Usia Sekolah (BRUS) di SMAN Uluere.

Dalam paparannya, dijelaskan bahwa berdasarkan UU No. 16 Tahun 2019 tentang Perkawinan, batas usia minimal menikah baik bagi laki-laki maupun perempuan adalah 19 tahun.`,
    author: 'Penyuluh PAI Uluere',
    date: '28 Juli 2026',
    year: 2026,
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
    views: 215,
    featured: false,
    sourceName: 'Merdeka.com & Kemenag Sulsel',
    sourceUrl: 'https://www.merdeka.com/'
  },
  {
    id: 'berita-2026-03',
    title: 'Penerbitan Akta Ikrar Wakaf (AIW) Gratis bagi Pengurus Masjid Bonto Lojong',
    slug: 'penerbitan-akta-ikrar-wakaf-gratis',
    category: 'Kegiatan',
    summary: 'KUA Uluere menyerahkan Dokumen Akta Ikrar Wakaf (AIW) tanah masjid seluas 650 m² di Desa Bonto Lojong untuk kepastian hukum aset keagamaan umat.',
    content: `Kepala KUA Uluere menyerahkan secara resmi Akta Ikrar Wakaf (AIW) dan Surat Pengesahan Nazhir kepada pengurus Masjid Nurul Huda di Desa Bonto Lojong, Kecamatan Uluere, Kabupaten Bantaeng.

Proses penandatanganan Ikrar Wakaf disaksikan oleh PPAIW KUA Uluere, Nazhir Wakaf, saksi-saksi dari aparat desa, serta tokoh masyarakat setempat. Seluruh pengurusan AIW di KUA Uluere adalah 100% GRATIS.`,
    author: 'PPAIW KUA Uluere',
    date: '20 Juli 2026',
    year: 2026,
    imageUrl: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&auto=format&fit=crop&q=80',
    views: 189,
    featured: false,
    sourceName: 'Kanwil Kemenag Sulsel',
    sourceUrl: 'https://sulsel.kemenag.go.id/'
  },
  {
    id: 'berita-2026-04',
    title: 'Transparansi Tarif PNBP Nikah: Rp0 di KUA vs Rp600.000 di Luar Kantor / Hari Libur',
    slug: 'transparansi-tarif-pnbp-nikah-kua',
    category: 'Pengumuman',
    summary: 'Penjelasan resmi PP No. 59 Tahun 2018 mengenai biaya pencatatan nikah. KUA Uluere menjamin bebas pungli dan transparansi penuh via SIMKAH Kemenag.',
    content: `KUA Kecamatan Uluere mengingatkan seluruh calon pengantin (Catin) dan masyarakat Kabupaten Bantaeng mengenai aturan resmi PP No. 59 Tahun 2018 tentang Jenis dan Tarif atas PNBP di Kementerian Agama.

Ketentuan Biaya Nikah:
1. Nikah di KUA (Balai Nikah) pada jam kerja kantor: Biaya Rp 0,- (GRATIS/NOL RUPIAH).
2. Nikah di Luar KUA atau Hari Libur: Biaya Rp 600.000,- (Enam Ratus Ribu Rupiah) langsung via SIMKAH Kode Billing ke Kas Negara.`,
    author: 'Humas KUA Uluere',
    date: '15 Juli 2026',
    year: 2026,
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=80',
    views: 512,
    featured: true,
    sourceName: 'SIMKAH Kemenag RI',
    sourceUrl: 'https://simkah.kemenag.go.id/'
  },
  {
    id: 'berita-2026-05',
    title: 'Pembinaan Kemakmuran Masjid & Kalibrasi Arah Kiblat Menyambut Ramadhan 1447 H',
    slug: 'pembinaan-kemakmuran-masjid-ramadhan-2026',
    category: 'Kegiatan',
    summary: 'KUA Uluere mengumpulkan pengurus takmir masjid se-Kecamatan Uluere guna menyelaraskan jadwal imsakiyah dan akurasi arah kiblat.',
    content: `Dalam rangka menyambut Bulan Suci Ramadhan 1447 H, KUA Kecamatan Uluere menggelar Pertemuan Pembinaan Kemakmuran Masjid bersama 24 pengurus takmir masjid dan musholla se-Kecamatan Uluere.

Agenda utama meliputi penetapan jadwal imsakiyah resmi Kemenag Bantaeng, sosialisasi panduan pengeras suara masjid, serta layanan kalibrasi arah kiblat gratis menggunakan kompas kiblat presisi dan teodolit digital.`,
    author: 'Penyuluh Agama KUA',
    date: '12 Februari 2026',
    year: 2026,
    imageUrl: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&auto=format&fit=crop&q=80',
    views: 298,
    featured: false,
    sourceName: 'Bantaeng Kemenag Portal',
    sourceUrl: 'https://bantaeng.kemenag.go.id/'
  },

  // --- 2025 ---
  {
    id: 'berita-2025-01',
    title: 'KUA Uluere Tegaskan Penangguhan Berkas Administrasi Nikah demi Ketertiban Hukum & SIMKAH',
    slug: 'penjelasan-kua-uluere-penangguhan-berkas-nikah-2025',
    category: 'Pengumuman',
    summary: 'Kepala KUA Uluere Zainuddin Samad menegaskan pentingnya alur pendaftaran 10 hari kerja, kelengkapan rekomendasi nikah, dan kepatuhan aturan perundang-undangan.',
    content: `Kepala KUA Kecamatan Uluere, Zainuddin Samad, memberikan klarifikasi resmi mengenai penangguhan berkas pendaftaran pencatatan nikah seorang warga yang sempat viral di media sosial.

Pihak KUA Uluere menegaskan bahwa seluruh proses pendaftaran nikah wajib tunduk pada Peraturan Menteri Agama (PMA) No. 20 Tahun 2019, di mana pendaftaran nikah idealnya dilakukan paling lambat 10 hari kerja sebelum hari H akad nikah.

"Penangguhan dilakukan murni atas pertimbangan verifikasi syarat administrasi, seperti kelengkapan berkas rekomendasi nikah antar-KUA dan adanya tanggapan masyarakat. Jika yang bersangkutan mengajukan permohonan poligami, wajib memiliki izin resmi penetapan Pengadilan Agama terlebih dahulu," tegas Zainuddin Samad.`,
    author: 'Zainuddin Samad (Kepala KUA Uluere)',
    date: '22 Oktober 2025',
    year: 2025,
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80',
    views: 890,
    featured: true,
    sourceName: 'Tribunnews Makassar / Tribun-Timur.com',
    sourceUrl: 'https://makassar.tribunnews.com/'
  },
  {
    id: 'berita-2025-02',
    title: 'Pengukuran Arah Kiblat Masif 12 Masjid & Musholla Desa Rianta dan Bonto Tangnga',
    slug: 'pengukuran-arah-kiblat-masif-2025',
    category: 'Kegiatan',
    summary: 'Tim Falakiyah KUA Uluere melakukan akurasi arah kiblat di 12 tempat ibadah menggunakan instrumen teodolit dan matahari Rashdul Kiblat.',
    content: `Tim Penyelenggara Syariah dan Falakiyah KUA Uluere melaksanakan kegiatan Pengukuran Arah Kiblat Masif untuk 12 masjid dan musholla baru di wilayah Desa Rianta dan Desa Bonto Tangnga, Kabupaten Bantaeng.

Pengukuran dilakukan saat fenomena Rashdul Kiblat dengan tingkat akurasi tinggi. Hasil verifikasi diterbitkan Sertifikat Arah Kiblat Resmi Kemenag tanpa dipungut biaya.`,
    author: 'Tim Falak KUA Uluere',
    date: '18 Mei 2025',
    year: 2025,
    imageUrl: 'https://images.unsplash.com/photo-1590076175571-4b5459efb08c?w=800&auto=format&fit=crop&q=80',
    views: 310,
    featured: false,
    sourceName: 'Kanwil Kemenag Sulsel',
    sourceUrl: 'https://sulsel.kemenag.go.id/'
  },
  {
    id: 'berita-2025-03',
    title: 'KUA Uluere Raih Award Predikat Zona Integritas (WBK) Kemenag Bantaeng 2025',
    slug: 'penghargaan-zi-wbk-kua-uluere-2025',
    category: 'Pengumuman',
    summary: 'Atas komitmen pelayanan nikah Rp0 di KUA dan inovasi tanpa pungli, KUA Uluere dianugerahi piagam Zona Integritas Wilayah Bebas dari Korupsi.',
    content: `Kantor Urusan Agama (KUA) Kecamatan Uluere sukses meraih penghargaan predikat Zona Integritas (ZI) Menuju Wilayah Bebas dari Korupsi (WBK) tingkat Kantor Kementerian Agama Kabupaten Bantaeng tahun 2025.

Penghargaan diserahkan langsung oleh Kepala Kantor Kemenag Kabupaten Bantaeng atas capaian zero-pungli, transparansi biaya PNBP nikah, kecuatan kepuasan masyarakat mencapai 94.8%, dan kerapian tata kelola persuratan.`,
    author: 'Humas Kemenag Bantaeng',
    date: '10 Januari 2025',
    year: 2025,
    imageUrl: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&auto=format&fit=crop&q=80',
    views: 640,
    featured: true,
    sourceName: 'Kemenag Bantaeng Official',
    sourceUrl: 'https://bantaeng.kemenag.go.id/'
  },

  // --- 2024 ---
  {
    id: 'berita-2024-01',
    title: 'Sosialisasi Integrasi SIMKAH Web Generasi Terbaru Bagi Catin se-Kecamatan Uluere',
    slug: 'sosialisasi-simkah-web-2024',
    category: 'Edukasi Syariah',
    summary: 'KUA Uluere memperkenalan fitur baru pendaftaran nikah mandiri via HP dan kartu nikah digital berbasis QR Code resmi Kemenag.',
    content: `Jajaran Penghulu dan Staf Administrasi KUA Uluere menggelar Sosialisasi Aplikasi SIMKAH Web Generasi Terbaru di Aula Kantor Camat Uluere.

Peserta sosialisasi mencakup para Kepala Desa, Sekretaris Desa, dan Pembantu Pegawai Pencatat Nikah (P3N). Dijelaskan bahwa pendaftaran nikah kini dapat diakses langsung oleh Catin melalui HP, terhubung otomatis dengan database NIK Dukcapil, serta menerbitkan Kartu Nikah Digital ber-QR Code.`,
    author: 'Operator SIMKAH Uluere',
    date: '22 Desember 2024',
    year: 2024,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    views: 385,
    featured: false,
    sourceName: 'SIMKAH Web Kemenag',
    sourceUrl: 'https://simkah.kemenag.go.id/'
  },
  {
    id: 'berita-2024-02',
    title: 'Pelaksanaan Bimbingan Perkawinan (Bimwin) Mandiri untuk Catin Pegunungan Uluere',
    slug: 'bimwin-mandiri-catin-uluere-2024',
    category: 'Kegiatan',
    summary: 'KUA Uluere membekali 20 pasang Calon Pengantin dengan pengetahuan kesehatan reproduksi, manajemen konflik rumah tangga, dan pondasi pilar keluarga sakinah.',
    content: `Sebanyak 20 pasang calon pengantin dari 6 desa di Kecamatan Uluere mengikuti Bimbingan Perkawinan (Bimwin) Mandiri Angkatan II yang diselenggarakan oleh KUA Kecamatan Uluere.

Narasumber Bimwin terdiri dari Kepala KUA, Fasilitator Bimwin Terakreditasi Kemenag, serta Petugas Kesehatan Puskesmas Uluere. Catin diajarkan tentang pola komunikasi suami istri, pondasi keagamaan, serta kewaspadaan dini kesehatan kehamilan.`,
    author: 'Fasilitator Bimwin KUA',
    date: '17 Agustus 2024',
    year: 2024,
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
    views: 290,
    featured: false,
    sourceName: 'Kemenag Bantaeng Portal',
    sourceUrl: 'https://bantaeng.kemenag.go.id/'
  },
  {
    id: 'berita-2024-03',
    title: 'Sertifikasi & Penataan Wakaf Produktif Kebun Apel & Hortikultura Desa Bonto Marannu',
    slug: 'sertifikasi-wakaf-produktif-2024',
    category: 'Kegiatan',
    summary: 'KUA Uluere bersama BPN Bantaeng menyelesaikan sertifikasi tanah wakaf produktif untuk kemaslahatan masjid dan kas pemberdayaan umat.',
    content: `KUA Kecamatan Uluere bersinergi dengan Badan Pertanahan Nasional (BPN) Kabupaten Bantaeng menyerahkan Sertifikat Tanah Wakaf Produktif seluas 1.200 m² di Desa Bonto Marannu.

Lahan wakaf ini dikelola oleh Nazhir Wakaf Desa untuk perkebunan hortikultura dan apel pegunungan, di mana hasil panennya dimanfaatkan untuk operasional TPQ dan pembinaan dhuafa di wilayah Uluere.`,
    author: 'PPAIW KUA Uluere',
    date: '05 Maret 2024',
    year: 2024,
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80',
    views: 350,
    featured: false,
    sourceName: 'Kanwil Kemenag Sulsel',
    sourceUrl: 'https://sulsel.kemenag.go.id/'
  },

  // --- 2023 ---
  {
    id: 'berita-2023-01',
    title: 'Peresmian Gedung Balai Nikah & Manasik Haji KUA Uluere oleh Kakanwil Kemenag Sulsel',
    slug: 'peresmian-gedung-balai-nikah-kua-uluere-2023',
    category: 'Kegiatan',
    summary: 'Momen bersejarah peresmian gedung pelayanan baru KUA Uluere yang representatif dan ramah disabilitas di Desa Bonto Marannu.',
    content: `Kepala Kantor Wilayah Kementerian Agama Provinsi Sulawesi Selatan meresmikan penggunaan Gedung Balai Nikah dan Manasik Haji KUA Kecamatan Uluere di Desa Bonto Marannu, Bantaeng.

Gedung baru bernuansa hijau keemasan ini dilengkapi fasilitas Aula Balai Nikah modern, ruang konseling keluarga privat, sarana ramah disabilitas, serta sistem antrean pelayanan digital.`,
    author: 'Humas KUA Uluere',
    date: '12 Oktober 2023',
    year: 2023,
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    views: 720,
    featured: true,
    sourceName: 'Humas Kemenag Sulsel',
    sourceUrl: 'https://sulsel.kemenag.go.id/'
  },
  {
    id: 'berita-2023-02',
    title: 'Pelatihan Khotib Jumat & Pembinaan Imam Masjid se-Kecamatan Uluere',
    slug: 'pelatihan-khotib-jumat-uluere-2023',
    category: 'Khutbah',
    summary: 'KUA Uluere menggembleng 30 Khotib dan Imam Masjid tentang penyusunan materi khutbah yang menyejukkan, berwawasan kebangsaan, dan Islam rahmatan lil alamin.',
    content: `Sebanyak 30 orang Khotib Jumat dan Imam Masjid perwakilan dari seluruh desa di Kecamatan Uluere mengikuti Pelatihan Penyusunan Naskah Khutbah Jumat dan Retorika Dakwah di KUA Uluere.

Pelatihan menekankan pentingnya khutbah yang mempererat persatuan ummat, menghindari ujaran kebencian, serta mengangkat topik-topik edukatif seperti bahaya judi online, kebersihan lingkungan pegunungan, dan bakti anak kepada orang tua.`,
    author: 'Penyuluh PAI Fungsional',
    date: '04 Juni 2023',
    year: 2023,
    imageUrl: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&auto=format&fit=crop&q=80',
    views: 410,
    featured: false,
    sourceName: 'Tribunnews Makassar',
    sourceUrl: 'https://makassar.tribunnews.com/'
  },
  {
    id: 'berita-2023-03',
    title: 'Baksos Ramadhan KUA Uluere: Penyaluran Zakat Fitrah & Sembako Dhuafa Bonto Daeng',
    slug: 'baksos-ramadhan-kua-uluere-2023',
    category: 'Kegiatan',
    summary: 'Staf KUA Uluere membagikan 80 paket beras dan sembako kepada lansia dan keluarga prasejahtera di dusun terpencil Desa Bonto Daeng.',
    content: `Dalam mengisi berkah bulan suci Ramadhan, keluarga besar KUA Kecamatan Uluere menyalurkan paket bakti sosial berupa sembako dan uang tunai zakat fitrah kepada 80 kepala keluarga dhuafa di Desa Bonto Daeng.

Penyaluran dilakukan langsung menyusuri wilayah dataran tinggi Uluere guna memastikan bantuan diterima warga prasejahtera yang berhak.`,
    author: 'Unit Zakat KUA Uluere',
    date: '19 April 2023',
    year: 2023,
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80',
    views: 330,
    featured: false,
    sourceName: 'BAZNAS & Kemenag Bantaeng',
    sourceUrl: 'https://bantaeng.kemenag.go.id/'
  },

  // --- 2022 ---
  {
    id: 'berita-2022-01',
    title: 'Bimtek Pendampingan Sertifikasi Halal Gratis (SEHATI) Bagi UMKM Kuliner Uluere',
    slug: 'bimtek-sertifikasi-halal-sehati-2022',
    category: 'Edukasi Syariah',
    summary: 'Pendamping Proses Produk Halal (P3H) KUA Uluere mendampingi puluhan pedagang kentang dan makanan olahan lokal mendaftarkan sertifikat halal gratis.',
    content: `KUA Kecamatan Uluere menerjunkan Pendamping Proses Produk Halal (P3H) untuk mendampingi 35 UMKM lokal pengolahan makanan khas Uluere mendaftarkan Sertifikasi Halal Gratis (SEHATI) program Badan Penyelenggara Jaminan Produk Halal (BPJPH) Kemenag.

Melalui sertifikasi ini, produk olahan kentang, kripik, dan kopi pegunungan Uluere mendapatkan label Halal Indonesia resmi sehingga daya saing pasar UMKM meningkat pesat.`,
    author: 'Pendamping Halal KUA',
    date: '08 November 2022',
    year: 2022,
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80',
    views: 395,
    featured: false,
    sourceName: 'BPJPH Kemenag RI (Halal.go.id)',
    sourceUrl: 'https://halal.go.id/'
  },
  {
    id: 'berita-2022-02',
    title: 'Pembentukan Kampung Moderasi Beragama (KMB) Pertama di Desa Bonto Tallasa Uluere',
    slug: 'pembentukan-kampung-moderasi-beragama-2022',
    category: 'Kegiatan',
    summary: 'Desa Bonto Tallasa ditetapkan sebagai rintisan Kampung Moderasi Beragama atas tingginya sikap toleransi, gotong royong, dan keharmonisan sosial warga.',
    content: `KUA Kecamatan Uluere bersama jajaran Muspika Kecamatan Uluere meresmikan Desa Bonto Tallasa sebagai Kampung Moderasi Beragama (KMB) rintisan pertama di Kecamatan Uluere, Bantaeng.

Program KMB mengedepankan nilai-nilai komitmen kebangsaan, toleransi antar sesama warga, anti-kekerasan, serta penyerapan tradisi lokal yang santun dan bernilai Islami.`,
    author: 'Penyuluh Agama KUA',
    date: '15 Juni 2022',
    year: 2022,
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80',
    views: 480,
    featured: false,
    sourceName: 'Kanwil Kemenag Sulsel',
    sourceUrl: 'https://sulsel.kemenag.go.id/'
  },

  // --- 2021 ---
  {
    id: 'berita-2021-01',
    title: 'Pemberlakuan Prokes Ketat & Layanan Akad Nikah KUA Uluere Masa Pandemi',
    slug: 'pemberlakuan-prokes-akad-nikah-2021',
    category: 'Pengumuman',
    summary: 'KUA Uluere menerapkan skema pembatasan jumlah hadir akad nikah maksimal 10 orang dan pemeriksaan swab demi keselamatan jamaah catin.',
    content: `Kantor Urusan Agama (KUA) Kecamatan Uluere memberlakukan Surat Edaran Dirjen Bimas Islam Kemenag mengenai protokol kesehatan penyelenggaraan akad nikah di Balai Nikah KUA Uluere.

Seluruh prosesi akad disemprot disinfektan secara berkala, membatasi wali dan saksi hadir maksimal 10 orang, serta menggunakan masker dan sarung tangan medis guna menjaga keselamatan warga pegunungan Uluere.`,
    author: 'Humas KUA Uluere',
    date: '11 September 2021',
    year: 2021,
    imageUrl: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=800&auto=format&fit=crop&q=80',
    views: 520,
    featured: false,
    sourceName: 'Merdeka.com & Kemenag Sulsel',
    sourceUrl: 'https://www.merdeka.com/'
  },
  {
    id: 'berita-2021-02',
    title: 'Pendataan Rumah Ibadah & Inventarisasi Potensi Wakaf Kecamatan Uluere Bantaeng',
    slug: 'pendataan-masjid-inventarisasi-wakaf-2021',
    category: 'Kegiatan',
    summary: 'Langkah awal pemetaan digital KUA Uluere mencatat 24 masjid/musholla dan 18 persil tanah wakaf di 6 desa pegunungan Bantaeng.',
    content: `Tim Pemetaan Administrasi KUA Kecamatan Uluere merampungkan program pendataan lapang rumah ibadah (masjid dan musholla) serta inventarisasi potensi aset wakaf di 6 desa se-Kecamatan Uluere.

Data ini menjadi basis database terpadu KUA Uluere dalam memberikan pembinaan arah kiblat, fasilitasi legalitas AIW, dan penyaluran insentif guru mengaji TPQ.`,
    author: 'Tim Data KUA Uluere',
    date: '03 Maret 2021',
    year: 2021,
    imageUrl: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&auto=format&fit=crop&q=80',
    views: 310,
    featured: false,
    sourceName: 'Kemenag Kab. Bantaeng',
    sourceUrl: 'https://bantaeng.kemenag.go.id/'
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

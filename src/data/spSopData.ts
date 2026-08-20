import { SpSopKuaItem } from '../types';

export const KUA_SP_CATEGORIES = [
  {
    letter: 'A',
    name: 'Nikah & Rujuk',
    fullName: 'Pelayanan, Pengawasan, Pencatatan Pernikahan, serta Pelaporan Nikah dan Rujuk',
    count: 20,
    color: 'emerald'
  },
  {
    letter: 'B',
    name: 'Bimwin & Sakinah',
    fullName: 'Pelayanan Bimbingan Perkawinan dan Keluarga Sakinah',
    count: 3,
    color: 'amber'
  },
  {
    letter: 'C',
    name: 'Kemasjidan',
    fullName: 'Pelayanan Bimbingan Kemasjidan',
    count: 6,
    color: 'teal'
  },
  {
    letter: 'D',
    name: 'Konsultasi Syariah',
    fullName: 'Pelayanan Konsultasi Syariah',
    count: 2,
    color: 'indigo'
  },
  {
    letter: 'E',
    name: 'Penerangan Agama',
    fullName: 'Pelayanan Bimbingan dan Penerangan Agama Islam',
    count: 3,
    color: 'blue'
  },
  {
    letter: 'F',
    name: 'Zakat & Wakaf',
    fullName: 'Pelayanan Bimbingan Zakat dan Wakaf',
    count: 7,
    color: 'green'
  },
  {
    letter: 'G',
    name: 'Data & Informasi',
    fullName: 'Pengelolaan Data dan Pemanfaatan Informasi Keagamaan',
    count: 3,
    color: 'purple'
  },
  {
    letter: 'H',
    name: 'Ketatausahaan',
    fullName: 'Pelaksanaan Ketatausahaan dan Kerumahtanggaan KUA',
    count: 2,
    color: 'cyan'
  },
  {
    letter: 'I',
    name: 'Penugasan Menteri',
    fullName: 'Fungsi lain Berdasarkan Penugasan Menteri',
    count: 2,
    color: 'rose'
  }
];

export const SP_SOP_KUA_DATA: SpSopKuaItem[] = [
  // A. Pelayanan, Pengawasan, Pencatatan Pernikahan, serta Pelaporan Nikah dan Rujuk (1-20)
  {
    no: 1,
    code: 'SOP-KUA-A01',
    categoryGroup: 'A. Pelayanan, Pengawasan, Pencatatan Pernikahan, serta Pelaporan Nikah dan Rujuk',
    categoryLetter: 'A',
    title: 'Layanan pendaftaran kehendak nikah',
    description: 'Pelayanan penerimaan berkas pendaftaran kehendak nikah baik secara langsung di PTSP KUA maupun melalui portal terintegrasi SIMKAH Web.',
    legalBasis: 'PMA No. 20 Tahun 2019 tentang Pencatatan Pernikahan & PP No. 59 Tahun 2018',
    duration: '15 Menit',
    cost: 'Rp 0,- (Di KUA Jam Kerja) / Rp 600.000,- (Luar KUA / Libur via Bank/Kode Billing)',
    output: 'Bukti Pendaftaran Nikah / Kode Billing Pembayaran PNBP SIMKAH',
    requirements: [
      'Surat Pengantar Nikah dari Desa/Kelurahan (Model N1 - N4)',
      'Fotokopi KTP, KK, dan Akta Kelahiran Calon Pengantin',
      'Pasfoto ukuran 2x3 (4 lembar) dan 4x6 (2 lembar) latar biru',
      'Surat Rekomendasi Nikah dari KUA setempat (jika nikah di luar wilayah kecamatan)',
      'Surat Izin Orang Tua (N5) jika catin berusia di bawah 21 tahun'
    ]
  },
  {
    no: 2,
    code: 'SOP-KUA-A02',
    categoryGroup: 'A. Pelayanan, Pengawasan, Pencatatan Pernikahan, serta Pelaporan Nikah dan Rujuk',
    categoryLetter: 'A',
    title: 'Layanan pemeriksaan nikah',
    description: 'Proses penelitian berkas kelengkapan administrasi nikah, keabsahan wali, persetujuan catin, dan verifikasi status hukum oleh Penghulu KUA.',
    legalBasis: 'PMA No. 20 Tahun 2019 Pasal 10 - 13 & KMA No. 841 Tahun 2024',
    duration: '30 Menit',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Lembar Pemeriksaan Nikah (Model N6 / NB) & Pengesahan Status Catin',
    requirements: [
      'Hadir Calon Pengantin Laki-laki & Perempuan serta Wali Nikah (atau berwakil)',
      'Membawa berkas pendaftaran nikah asli (KTP, KK, Akta Kelahiran)',
      'Dokumen pendukung khusus (Akta Cerai/Kematian jika pernah menikah sebelumnya)'
    ]
  },
  {
    no: 3,
    code: 'SOP-KUA-A03',
    categoryGroup: 'A. Pelayanan, Pengawasan, Pencatatan Pernikahan, serta Pelaporan Nikah dan Rujuk',
    categoryLetter: 'A',
    title: 'Layanan penerbitan surat keterangan ikrar berwakil wali',
    description: 'Pelayanan pengesahan dan pelimpahan wewenang ikrar ijab kabul dari wali nasab sah kepada Penghulu / Orang lain yang ditunjuk.',
    legalBasis: 'PMA No. 20 Tahun 2019 & Kompilasi Hukum Islam (KHI) Pasal 28',
    duration: '20 Menit',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Surat Keterangan Ikrar Berwakil Wali (Tawkil Wali) Berstempel Resmi',
    requirements: [
      'Hadir Wali Nasab Asli dengan membawa KTP & Kartu Keluarga',
      'Surat Pernyataan Pelimpahan Wali (Tawkil Wali) dari Desa',
      'Fotokopi KTP penerima kuasa taukil wali'
    ]
  },
  {
    no: 4,
    code: 'SOP-KUA-A04',
    categoryGroup: 'A. Pelayanan, Pengawasan, Pencatatan Pernikahan, serta Pelaporan Nikah dan Rujuk',
    categoryLetter: 'A',
    title: 'Layanan pemberitahuan kekurangan syarat/penolakan',
    description: 'Penerbitan surat pemberitahuan resmi apabila terdapat kekurangan syarat administrasi atau halangan hukum perundang-undangan pernikahan.',
    legalBasis: 'PMA No. 20 Tahun 2019 Pasal 15 & UU No. 1 Tahun 1974 jo UU No. 16 Tahun 2019',
    duration: '1 Hari Kerja',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Surat Pemberitahuan Kekurangan Syarat (N8) / Surat Penolakan Nikah (N9)',
    requirements: [
      'Berkas pendaftaran nikah yang telah diperiksa oleh Penghulu',
      'Identitas resmi pemohon / catin yang bersangkutan'
    ]
  },
  {
    no: 5,
    code: 'SOP-KUA-A05',
    categoryGroup: 'A. Pelayanan, Pengawasan, Pencatatan Pernikahan, serta Pelaporan Nikah dan Rujuk',
    categoryLetter: 'A',
    title: 'Layanan pengumuman nikah',
    description: 'Penempelan pengumuman kehendak nikah pada papan pengumuman KUA dan publikasi sistem SIMKAH Web selama 10 hari kerja sebelum hari akad.',
    legalBasis: 'PMA No. 20 Tahun 2019 Pasal 14',
    duration: '10 Hari Kerja (Masa Pengumuman Publik)',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Lembar Pengumuman Nikah (Model N7) Terpublikasi',
    requirements: [
      'Berkas nikah yang telah dinyatakan lengkap dan memenuhi syarat pada pemeriksaan nikah'
    ]
  },
  {
    no: 6,
    code: 'SOP-KUA-A06',
    categoryGroup: 'A. Pelayanan, Pengawasan, Pencatatan Pernikahan, serta Pelaporan Nikah dan Rujuk',
    categoryLetter: 'A',
    title: 'Layanan pelaksanaan dan pencatatan nikah',
    description: 'Kehadiran Penghulu dalam menghadiri, memandu, mengawasi prosesi ikrar akad nikah, serta mencatat peristiwa nikah secara sah dalam Register Nikah.',
    legalBasis: 'PMA No. 20 Tahun 2019 & PP No. 59 Tahun 2018',
    duration: '45 - 60 Menit (Prosesi Akad Nikah)',
    cost: 'Rp 0,- (Di KUA Jam Kerja) / Rp 600.000,- (Luar KUA / Libur via Bank Kas Negara)',
    output: 'Akta Nikah (Model N) Terdaftar Resmi dalam Register KUA',
    requirements: [
      'Kehadiran Calon Pengantin Laki-laki dan Perempuan',
      'Kehadiran Wali Nikah Sah / Taukil Wali',
      'Kehadiran 2 (Dua) Orang Saksi Nikah Laki-laki Dewasa Muslim',
      'Bukti Pelunasan PNBP (jika akad di luar kantor/libur)'
    ]
  },
  {
    no: 7,
    code: 'SOP-KUA-A07',
    categoryGroup: 'A. Pelayanan, Pengawasan, Pencatatan Pernikahan, serta Pelaporan Nikah dan Rujuk',
    categoryLetter: 'A',
    title: 'Layanan penyerahan buku nikah',
    description: 'Penyerahan Dokumen Akta Nikah berupa Kutipan Akta Nikah (Buku Nikah Suami & Istri) dan akses Kartu Nikah Digital langsung setelah akad.',
    legalBasis: 'PMA No. 20 Tahun 2019 Pasal 27',
    duration: 'Seketika Setelah Akad Selesai / Maksimal 1 Hari Kerja',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Buku Nikah Asli (Suami & Istri) + Kartu Nikah Digital Kemenag',
    requirements: [
      'Telah melaksanakan akad nikah yang dinyatakan sah oleh Penghulu',
      'Penandatanganan Akta Nikah oleh Pengantin, Wali, Saksi, dan Penghulu'
    ]
  },
  {
    no: 8,
    code: 'SOP-KUA-A08',
    categoryGroup: 'A. Pelayanan, Pengawasan, Pencatatan Pernikahan, serta Pelaporan Nikah dan Rujuk',
    categoryLetter: 'A',
    title: 'Layanan pelaporan nikah',
    description: 'Pengiriman laporan rekapitulasi data peristiwa nikah & rujuk bulanan/tahunan dari KUA Kecamatan ke Kantor Kemenag Kabupaten Bantaeng & Kanwil.',
    legalBasis: 'PMA No. 20 Tahun 2019 & Juknis Bimas Islam Kemenag RI',
    duration: 'Setiap Tanggal 5 Awal Bulan',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Laporan Rekapitulasi Peristiwa Nikah & Rujuk (LPNR) Terintegrasi',
    requirements: [
      'Rekapitulasi Register Akta Nikah & Struk PNBP SIMKAH Bulan Berjalan'
    ]
  },
  {
    no: 9,
    code: 'SOP-KUA-A09',
    categoryGroup: 'A. Pelayanan, Pengawasan, Pencatatan Pernikahan, serta Pelaporan Nikah dan Rujuk',
    categoryLetter: 'A',
    title: 'Layanan penerbitan surat rekomendasi nikah',
    description: 'Penerbitan surat rekomendasi bagi warga domisili Kecamatan Uluere yang akan melaksanakan akad nikah di luar wilayah kecamatan/kabupaten.',
    legalBasis: 'PMA No. 20 Tahun 2019 Pasal 7',
    duration: '15 - 20 Menit',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Surat Rekomendasi Nikah Resmi KUA Kecamatan Uluere',
    requirements: [
      'Surat Pengantar Nikah dari Desa/Kelurahan domisili (N1-N4)',
      'Fotokopi KTP, KK, & Akta Kelahiran catin',
      'Pasfoto 2x3 (3 lembar) latar belakang warna biru'
    ]
  },
  {
    no: 10,
    code: 'SOP-KUA-A10',
    categoryGroup: 'A. Pelayanan, Pengawasan, Pencatatan Pernikahan, serta Pelaporan Nikah dan Rujuk',
    categoryLetter: 'A',
    title: 'Layanan perbaikan data nikah',
    description: 'Perbaikan kekeliruan penulisan huruf/angka pada Buku Nikah yang disebabkan oleh kekhilafan penulisan administrasi tanpa mengubah identitas hukum.',
    legalBasis: 'PMA No. 20 Tahun 2019 Pasal 37',
    duration: '15 Menit',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Buku Nikah dengan Catatan Perbaikan Resmi Berstempel KUA',
    requirements: [
      'Buku Nikah Asli yang keliru penulisan',
      'Fotokopi Dokumen Autentik (KTP, KK, Ijazah, atau Akta Kelahiran)',
      'Surat Permohonan Perbaikan Data Nikah'
    ]
  },
  {
    no: 11,
    code: 'SOP-KUA-A11',
    categoryGroup: 'A. Pelayanan, Pengawasan, Pencatatan Pernikahan, serta Pelaporan Nikah dan Rujuk',
    categoryLetter: 'A',
    title: 'Layanan perubahan data nikah',
    description: 'Pencatatan perubahan data identitas pada Akta Nikah berdasarkan penetapan resmi Pengadilan Negeri / Pengadilan Agama atau instansi terkait.',
    legalBasis: 'PMA No. 20 Tahun 2019 Pasal 38 & UU No. 24 Tahun 2013 tentang Adminduk',
    duration: '1 Hari Kerja',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Catatan Perubahan Data Identitas pada Akta Nikah & SIMKAH',
    requirements: [
      'Salinan Penetapan Pengadilan Negeri/Agama tentang Perubahan Identitas',
      'Buku Nikah Asli (Suami & Istri)',
      'KTP & KK terbaru yang telah disesuaikan oleh Disdukcapil'
    ]
  },
  {
    no: 12,
    code: 'SOP-KUA-A12',
    categoryGroup: 'A. Pelayanan, Pengawasan, Pencatatan Pernikahan, serta Pelaporan Nikah dan Rujuk',
    categoryLetter: 'A',
    title: 'Layanan penggantian buku nikah',
    description: 'Penerbitan Buku Nikah pengganti (Duplikat Akta Nikah) bagi pasangan suami istri yang Buku Nikahnya rusak berat atau hilang.',
    legalBasis: 'PMA No. 20 Tahun 2019 Pasal 39',
    duration: '1 Hari Kerja',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Duplikat Kutipan Akta Nikah Resmi Kementerian Agama',
    requirements: [
      'Surat Keterangan Kehilangan dari Kepolisian (jika hilang)',
      'Buku Nikah Asli yang rusak (jika rusak)',
      'Fotokopi KTP & KK Suami Istri',
      'Pasfoto gandeng 3x4 (2 lembar) latar belakang warna biru'
    ]
  },
  {
    no: 13,
    code: 'SOP-KUA-A13',
    categoryGroup: 'A. Pelayanan, Pengawasan, Pencatatan Pernikahan, serta Pelaporan Nikah dan Rujuk',
    categoryLetter: 'A',
    title: 'Layanan legalisasi buku nikah',
    description: 'Pengesahan dan pembubuhan cap stempel legalisir sah pada fotokopi Buku Nikah untuk keperluan pengurusan administrasi dinas, perbankan, & visa.',
    legalBasis: 'PMA No. 20 Tahun 2019 Pasal 42',
    duration: '10 - 15 Menit',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Fotokopi Buku Nikah Berstempel Legalisir Sah KUA Uluere',
    requirements: [
      'Menunjukkan Buku Nikah Asli (Suami atau Istri)',
      'Fotokopi Buku Nikah yang akan dilegalisir (maksimal 5 set)',
      'Fotokopi KTP pemohon legalisir'
    ]
  },
  {
    no: 14,
    code: 'SOP-KUA-A14',
    categoryGroup: 'A. Pelayanan, Pengawasan, Pencatatan Pernikahan, serta Pelaporan Nikah dan Rujuk',
    categoryLetter: 'A',
    title: 'Layanan penerbitan surat keterangan status belum menikah',
    description: 'Penerbitan surat keterangan resmi keagamaan yang menerangkan bahwa warga bersangkutan berstatus perawan/perjaka/belum pernah menikah.',
    legalBasis: 'PMA No. 20 Tahun 2019 & Standar Pelayanan PTSP Kemenag',
    duration: '15 Menit',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Surat Keterangan Belum Menikah Resmi KUA Uluere',
    requirements: [
      'Surat Pengantar Belum Menikah dari Kepala Desa/Kelurahan',
      'Fotokopi KTP & Kartu Keluarga Pemohon',
      'Surat Pernyataan Belum Pernah Menikah bermaterai 10.000'
    ]
  },
  {
    no: 15,
    code: 'SOP-KUA-A15',
    categoryGroup: 'A. Pelayanan, Pengawasan, Pencatatan Pernikahan, serta Pelaporan Nikah dan Rujuk',
    categoryLetter: 'A',
    title: 'Layanan pendaftaran bukti nikah luar negeri',
    description: 'Pelayanan penerimaan pencatatan dan pendaftaran Surat Bukti Perkawinan warga muslim yang dilaksanakan di luar negeri.',
    legalBasis: 'PMA No. 20 Tahun 2019 Pasal 44 & UU No. 24 Tahun 2013',
    duration: '1 Hari Kerja',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Surat Tanda Bukti Pendaftaran Nikah Luar Negeri Kemenag',
    requirements: [
      'Sertifikat/Akta Nikah Luar Negeri Asli & Terjemahan Resmi Bahasa Indonesia',
      'Surat Keterangan dari KBRI / Perwakilan RI di Negara Asal Nikah',
      'Fotokopi Paspor & KTP Suami Istri'
    ]
  },
  {
    no: 16,
    code: 'SOP-KUA-A16',
    categoryGroup: 'A. Pelayanan, Pengawasan, Pencatatan Pernikahan, serta Pelaporan Nikah dan Rujuk',
    categoryLetter: 'A',
    title: 'Layanan pencatatan isbat nikah',
    description: 'Pencatatan dan penerbitan Buku Nikah berdasarkan salinan Penetapan Isbat Nikah yang telah berkekuatan hukum tetap dari Pengadilan Agama.',
    legalBasis: 'PMA No. 20 Tahun 2019 Pasal 36 & KHI Pasal 7',
    duration: '1 Hari Kerja',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Buku Nikah Asli Penerbitan Hasil Isbat Nikah Pengadilan Agama',
    requirements: [
      'Salinan Penetapan Isbat Nikah dari Pengadilan Agama (Asli & Fotokopi)',
      'Fotokopi KTP & KK Suami Istri',
      'Pasfoto 2x3 (4 lembar) dan 3x4 (2 lembar) latar biru'
    ]
  },
  {
    no: 17,
    code: 'SOP-KUA-A17',
    categoryGroup: 'A. Pelayanan, Pengawasan, Pencatatan Pernikahan, serta Pelaporan Nikah dan Rujuk',
    categoryLetter: 'A',
    title: 'Layanan pencatatan perjanjian nikah',
    description: 'Pencatatan Perjanjian Perkawinan (Pranikah / Saat Nikah) yang dibuat di hadapan Notaris pada Akta Nikah dan Register KUA.',
    legalBasis: 'PMA No. 20 Tahun 2019 Pasal 31 & Mahkamah Konstitusi No. 69/PUU-XIII/2015',
    duration: '30 Menit',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Catatan Perjanjian Nikah pada Akta Nikah & Catatan Khusus Buku Nikah',
    requirements: [
      'Akta Notaris Perjanjian Perkawinan Asli & Salinan',
      'Dokumen identitas resmi kedua belah pihak (KTP/Paspor)'
    ]
  },
  {
    no: 18,
    code: 'SOP-KUA-A18',
    categoryGroup: 'A. Pelayanan, Pengawasan, Pencatatan Pernikahan, serta Pelaporan Nikah dan Rujuk',
    categoryLetter: 'A',
    title: 'Layanan pencatatan pembatalan/perubahan perjanjian nikah',
    description: 'Pencatatan adanya perubahan atau pencabutan perjanjian perkawinan berdasarkan kesepakatan Notaris / penetapan Pengadilan.',
    legalBasis: 'PMA No. 20 Tahun 2019 Pasal 32 & KUHPerdata Pasal 147',
    duration: '1 Hari Kerja',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Catatan Perubahan Perjanjian Nikah pada Register KUA',
    requirements: [
      'Akta Notaris Perubahan/Pembatalan Perjanjian Nikah',
      'Buku Nikah Asli Suami Istri'
    ]
  },
  {
    no: 19,
    code: 'SOP-KUA-A19',
    categoryGroup: 'A. Pelayanan, Pengawasan, Pencatatan Pernikahan, serta Pelaporan Nikah dan Rujuk',
    categoryLetter: 'A',
    title: 'Layanan pencatatan rujuk',
    description: 'Pencatatan peristiwa rujuknya suami istri yang masih dalam masa iddah talak raj\'i di hadapan Penghulu KUA.',
    legalBasis: 'PMA No. 20 Tahun 2019 Bab VI & KHI Pasal 163 - 169',
    duration: '45 Menit',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Kutipan Buku Pendaftaran Rujuk (Model N10) & Pengembalian Buku Nikah',
    requirements: [
      'Surat Keterangan Rujuk dari Desa/Kelurahan',
      'Akta Cerai Asli Talak Raj\'i dari Pengadilan Agama',
      'Persetujuan Istri & Kehadiran 2 Orang Saksi Rujuk'
    ]
  },
  {
    no: 20,
    code: 'SOP-KUA-A20',
    categoryGroup: 'A. Pelayanan, Pengawasan, Pencatatan Pernikahan, serta Pelaporan Nikah dan Rujuk',
    categoryLetter: 'A',
    title: 'Layanan pengajuan pembatalan nikah',
    description: 'Fasilitasi pencatatan administrasi dan penarikan Buku Nikah atas putusan pembatalan perkawinan yang dikabulkan oleh Pengadilan Agama.',
    legalBasis: 'PMA No. 20 Tahun 2019 Pasal 40 & KHI Pasal 70 - 76',
    duration: '1 Hari Kerja',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Pencoretan Akta Nikah dalam Register & Penarikan Buku Nikah',
    requirements: [
      'Salinan Putusan/Penetapan Pembatalan Nikah Pengadilan Agama yang BHT',
      'Buku Nikah Asli kedua belah pihak'
    ]
  },

  // B. Pelayanan Bimbingan Perkawinan dan Keluarga Sakinah (21-23)
  {
    no: 21,
    code: 'SOP-KUA-B21',
    categoryGroup: 'B. Pelayanan Bimbingan Perkawinan dan Keluarga Sakinah',
    categoryLetter: 'B',
    title: 'Layanan bimbingan perkawinan pra nikah',
    description: 'Penyelenggaraan Kursus Calon Pengantin (Suscatin) / Bimwin Mandiri Tatap Muka untuk membekali catin dengan fondasi keluarga sakinah & pencegahan stunting.',
    legalBasis: 'Keputusan Dirjen Bimas Islam No. 189 Tahun 2021 & PMA No. 30 Tahun 2020',
    duration: '2 Hari (16 Jam Pelajaran) / Sesuai Jadwal KUA',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Sertifikat Bimbingan Perkawinan (Bimwin) Resmi Kemenag',
    requirements: [
      'Terdaftar sebagai calon pengantin di KUA Uluere',
      'Mengisi formulir kepesertaan Bimwin Pranikah'
    ]
  },
  {
    no: 22,
    code: 'SOP-KUA-B22',
    categoryGroup: 'B. Pelayanan Bimbingan Perkawinan dan Keluarga Sakinah',
    categoryLetter: 'B',
    title: 'Layanan bimbingan keluarga sakinah',
    description: 'Pelayanan pembinaan, sosialisasi, dan edukasi pilar keluarga sakinah, ketahanan keluarga, & moderasi beragama bagi pasangan suami istri di desa.',
    legalBasis: 'PMA No. 19 Tahun 2018 & Juknis Ketahanan Keluarga Bimas Islam',
    duration: '2 Jam per Sesi Pembinaan',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Buku Saku Pembinaan Keluarga Sakinah & Konseling Keagamaan',
    requirements: [
      'Pasangan Suami Istri / Pengurus Majelis Taklim Desa'
    ]
  },
  {
    no: 23,
    code: 'SOP-KUA-B23',
    categoryGroup: 'B. Pelayanan Bimbingan Perkawinan dan Keluarga Sakinah',
    categoryLetter: 'B',
    title: 'Layanan bimbingan konseling dan mediasi keluarga (masa nikah)',
    description: 'Layanan konseling keagamaan dan mediasi konflik rumah tangga oleh Penghulu/Penyuluh PAI BP4 KUA guna mencegah perceraian.',
    legalBasis: 'Keputusan Dirjen Bimas Islam No. 881 Tahun 2017 & Musyawarah BP4',
    duration: '60 - 90 Menit per Sesi Mediasi',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Berita Acara Hasil Konseling / Islah Mediasi Keluarga BP4',
    requirements: [
      'Hadir Suami dan Istri yang bersangkutan',
      'Mengisi Form Permohonan Konseling Mediasi BP4 KUA'
    ]
  },

  // C. Pelayanan Bimbingan Kemasjidan (24-29)
  {
    no: 24,
    code: 'SOP-KUA-C24',
    categoryGroup: 'C. Pelayanan Bimbingan Kemasjidan',
    categoryLetter: 'C',
    title: 'Layanan penerbitan ID masjid/musala melalui SIMAS',
    description: 'Penginputan data geospasial, legalitas, dan penerbitan Nomor ID Nasional Masjid/Musholla ke dalam Sistem Informasi Masjid (SIMAS) Kemenag RI.',
    legalBasis: 'Keputusan Dirjen Bimas Islam No. DJ.II/802 Tahun 2014 tentang Standar Pengelolaan SIMAS',
    duration: '1 Hari Kerja',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Nomor ID Masjid/Musholla Nasional (SIMAS Kemenag RI)',
    requirements: [
      'Surat Permohonan Penerbitan ID SIMAS dari Takmir Masjid/Musholla',
      'Surat Keterangan Dominasi / Kepemilikan Tanah dari Desa',
      'Foto Bangunan Masjid (Tampak Depan, Dalam, & Imaman) & Koordinat GPS'
    ]
  },
  {
    no: 25,
    code: 'SOP-KUA-C25',
    categoryGroup: 'C. Pelayanan Bimbingan Kemasjidan',
    categoryLetter: 'C',
    title: 'Layanan penerbitan surat keterangan terdaftar masjid/musala pada SIMAS',
    description: 'Penerbitan Surat Keterangan Terdaftar (SKT) resmi dari KUA bagi masjid/musholla yang data nomor ID SIMAS-nya sudah terverifikasi.',
    legalBasis: 'Juknis SIMAS Kemenag RI & Kepdirjen Bimas Islam',
    duration: '20 Menit',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Surat Keterangan Terdaftar (SKT) SIMAS Berstempel KUA Uluere',
    requirements: [
      'Sudah memiliki Nomor ID SIMAS Terdaftar',
      'Surat Permohonan SKT dari Pengurus Takmir'
    ]
  },
  {
    no: 26,
    code: 'SOP-KUA-C26',
    categoryGroup: 'C. Pelayanan Bimbingan Kemasjidan',
    categoryLetter: 'C',
    title: 'Layanan penerbitan surat rekomendasi bantuan masjid/musala',
    description: 'Penerbitan Surat Rekomendasi KUA sebagai syarat pengajuan bantuan hibah pembangunan/rehabilitasi masjid ke Kemenag / Pemda / Baznas.',
    legalBasis: 'PMA No. 19 Tahun 2018 & Juknis Bantuan Kemasjidan Bimas Islam',
    duration: '30 Menit',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Surat Rekomendasi Bantuan Rumah Ibadah KUA Uluere',
    requirements: [
      'Surat Permohonan Rekomendasi Bantuan dari Takmir Masjid',
      'Proposal Pengajuan Bantuan Pembangunan/Rehabilitasi Masjid',
      'SK Terdaftar SIMAS Kemenag'
    ]
  },
  {
    no: 27,
    code: 'SOP-KUA-C27',
    categoryGroup: 'C. Pelayanan Bimbingan Kemasjidan',
    categoryLetter: 'C',
    title: 'Layanan penerbitan surat rekomendasi perubahan status musala menjadi masjid',
    description: 'Verifikasi kelayakan jamaah & penerbitan rekomendasi perubahan status fungsi musholla/langgar menjadi Masjid Jami/Tafshil.',
    legalBasis: 'Keputusan Dirjen Bimas Islam No. DJ.II/802 Tahun 2014',
    duration: '1 - 2 Hari Kerja (Termasuk Verifikasi Lapangan)',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Surat Rekomendasi Perubahan Status Musholla Menjadi Masjid',
    requirements: [
      'Surat Permohonan & Berita Acara Musyawarah Warga Desa',
      'Kapasitas Bangunan Memenuhi Syarat Shalat Jum\'at (>40 Jamaah)',
      'Surat Rekomendasi dari Kepala Desa & MUI Kecamatan'
    ]
  },
  {
    no: 28,
    code: 'SOP-KUA-C28',
    categoryGroup: 'C. Pelayanan Bimbingan Kemasjidan',
    categoryLetter: 'C',
    title: 'Layanan perubahan data masjid/musala',
    description: 'Pemutakhiran data profil, struktur takmir, foto bangunan, atau luas tanah masjid/musholla pada aplikasi SIMAS Kemenag.',
    legalBasis: 'Juknis SIMAS Kemenag RI',
    duration: '20 Menit',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Update Profil Terverifikasi pada Portal SIMAS Kemenag',
    requirements: [
      'Surat Pengantar Perubahan Data dari Pengurus Takmir Masjid',
      'Dokumen Pendukung Perubahan (SK Takmir Baru / Sertifikat Wakaf)'
    ]
  },
  {
    no: 29,
    code: 'SOP-KUA-C29',
    categoryGroup: 'C. Pelayanan Bimbingan Kemasjidan',
    categoryLetter: 'C',
    title: 'Layanan surat rekomendasi penetapan kepengurusan takmir masjid besar',
    description: 'Penerbitan rekomendasi pengesahan pengurus Takmir Masjid Besar Kecamatan Uluere untuk ditetapkan oleh Camat / Kemenag Kab. Bantaeng.',
    legalBasis: 'Keputusan Dirjen Bimas Islam No. DJ.II/802 Tahun 2014',
    duration: '1 Hari Kerja',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Surat Rekomendasi Penetapan Kepengurusan Takmir Masjid Besar',
    requirements: [
      'Berita Acara Hasil Musyawarah Pembentukan Takmir Masjid Besar',
      'Daftar Susunan Pengurus Takmir Masjid Besar Kecamatan Uluere'
    ]
  },

  // D. Pelayanan Konsultasi Syariah (30-31)
  {
    no: 30,
    code: 'SOP-KUA-D30',
    categoryGroup: 'D. Pelayanan Konsultasi Syariah',
    categoryLetter: 'D',
    title: 'Layanan konsultasi hukum Islam (fikih ibadah, hukum waris, hukum keluarga)',
    description: 'Pelayanan konsultasi keagamaan tatap muka / online mengenai fikih ibadah, faraidh (pembagian waris syariah), & hukum munakahat oleh Penghulu.',
    legalBasis: 'PMA No. 19 Tahun 2018 Bab II Tugas & Fungsi KUA',
    duration: '30 - 45 Menit Sesi Konsultasi',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Lembar Fatwa/Tausiyah Syariah & Rincian Pembagian Waris Faraidh',
    requirements: [
      'Identitas Pemohon (KTP/KK)',
      'Data Silsilah Ahli Waris & Aset Harta Peninggalan (Khusus Konsultasi Waris)'
    ]
  },
  {
    no: 31,
    code: 'SOP-KUA-D31',
    categoryGroup: 'D. Pelayanan Konsultasi Syariah',
    categoryLetter: 'D',
    title: 'Layanan kalibrasi arah kiblat',
    description: 'Pelayanan pengukuran, verifikasi, dan sertifikasi akurasi arah kiblat bagi masjid, musholla, pemakaman, atau rumah warga menggunakan instrumen falakiyah.',
    legalBasis: 'Juknis Pembinaan Syariah & Falakiyah Dirjen Bimas Islam Kemenag RI',
    duration: '1 Hari Kerja (Pengukuran Lapangan)',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Sertifikat Arah Kiblat Resmi KUA Kecamatan Uluere',
    requirements: [
      'Surat Permohonan Pengukuran Arah Kiblat dari Takmir / Panitia Pembangunan',
      'Lokasi Tempat Ibadah di Wilayah Kecamatan Uluere'
    ]
  },

  // E. Pelayanan Bimbingan dan Penerangan Agama Islam (32-34)
  {
    no: 32,
    code: 'SOP-KUA-E32',
    categoryGroup: 'E. Pelayanan Bimbingan dan Penerangan Agama Islam',
    categoryLetter: 'E',
    title: 'Layanan bimbingan dan penyuluhan keagamaan',
    description: 'Penugasan Penyuluh Agama Islam (PAI) untuk memberikan bimbingan keagamaan pada majelis taklim, sekolah, kelompok binaan, & mualaf.',
    legalBasis: 'PMA No. 19 Tahun 2018 & Keputusan Menpan RB tentang Jabatan Fungsional PAI',
    duration: 'Sesuai Jadwal Majelis Binaan PAI',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Jadwal & Laporan Pelaksanaan Penyuluhan Agama Islam Fungsional',
    requirements: [
      'Surat Permohonan Jadwal Ustaz / Penyuluh PAI dari Pengurus Majelis'
    ]
  },
  {
    no: 33,
    code: 'SOP-KUA-E33',
    categoryGroup: 'E. Pelayanan Bimbingan dan Penerangan Agama Islam',
    categoryLetter: 'E',
    title: 'Layanan sosialisasi dan edukasi produk halal',
    description: 'Fasilitasi dampingan sertifikasi halal gratis (Sehati / Self Declare) bagi pelaku UMKM kuliner & makanan olahan warga Uluere oleh Pendamping PPH KUA.',
    legalBasis: 'UU No. 33 Tahun 2014 tentang Jaminan Produk Halal & PMA No. 20 Tahun 2021',
    duration: '3 - 7 Hari Kerja (Sampai Terbit Sertifikat BPJPH)',
    cost: 'Rp 0,- (Program SEHATI BPJPH Kemenag Gratis)',
    output: 'STTD BPJPH & Sertifikat Halal Resmi bagi UMKM Kuliner Uluere',
    requirements: [
      'KTP & NIB (Nomor Induk Berusaha) Pelaku Usaha',
      'Foto Produk & Rincian Bahan Makanan Murni Halal'
    ]
  },
  {
    no: 34,
    code: 'SOP-KUA-E34',
    categoryGroup: 'E. Pelayanan Bimbingan dan Penerangan Agama Islam',
    categoryLetter: 'E',
    title: 'Layanan pencegahan konflik sosial berdimensi keagamaan',
    description: 'Fasilitasi forum dialog moderasi beragama, pendampingan kedamaian antar-warga, & penanganan cepat isu keagamaan sensitif.',
    legalBasis: 'Perpres No. 58 Tahun 2023 tentang Penguatan Moderasi Beragama & PMA No. 19 Tahun 2018',
    duration: '24 Jam Tim Respons Cepat KUA',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Berita Acara Islah Moderasi Beragama & Rekomendasi Keharmonisan Desa',
    requirements: [
      'Laporan dari Tokoh Agama / Tokoh Masyarakat / Kepala Desa'
    ]
  },

  // F. Pelayanan Bimbingan Zakat dan Wakaf (35-41)
  {
    no: 35,
    code: 'SOP-KUA-F35',
    categoryGroup: 'F. Pelayanan Bimbingan Zakat dan Wakaf',
    categoryLetter: 'F',
    title: 'Layanan bimbingan zakat dan wakaf',
    description: 'Konsultasi perhitungan nishab zakat mal/fitrah, pendaftaran Unit Pengumpul Zakat (UPZ) Desa, serta konsultasi tata kelola aset wakaf.',
    legalBasis: 'UU No. 23 Tahun 2011 tentang Pengelolaan Zakat & UU No. 41 Tahun 2004',
    duration: '20 Menit',
    cost: 'Rp 0,- (GRATIS)',
    output: 'SK Pembentukan UPZ KUA / Lembar Perhitungan Zakat Mal',
    requirements: [
      'Daftar Pengurus UPZ Masjid / Identitas Muzzaki / Wakif'
    ]
  },
  {
    no: 36,
    code: 'SOP-KUA-F36',
    categoryGroup: 'F. Pelayanan Bimbingan Zakat dan Wakaf',
    categoryLetter: 'F',
    title: 'Layanan pembuatan AIW atau APAIW',
    description: 'Proses ikrar wakaf di hadapan Kepala KUA selaku Pejabat Pembuat Akta Ikrar Wakaf (PPAIW) serta penerbitan Dokumen Akta Ikrar Wakaf (AIW/APAIW).',
    legalBasis: 'UU No. 41 Tahun 2004 tentang Wakaf & PP No. 42 Tahun 2006',
    duration: '45 Menit (Proses Ikrar Wakaf PPAIW)',
    cost: 'Rp 0,- (GRATIS 100%)',
    output: 'Dokumen Asli Akta Ikrar Wakaf (AIW / APAIW Model W2 / W2a)',
    requirements: [
      'Sertifikat Tanah Asli / Bukti Kepemilikan Hak atas Tanah',
      'Surat Keterangan Tidak Dalam Sengketa dari Kepala Desa',
      'Fotokopi KTP Wakif, Nazhir (minimal 3 orang), dan 2 Saksi'
    ]
  },
  {
    no: 37,
    code: 'SOP-KUA-F37',
    categoryGroup: 'F. Pelayanan Bimbingan Zakat dan Wakaf',
    categoryLetter: 'F',
    title: 'Layanan pendaftaran tanah wakaf',
    description: 'Pengurusan rekomendasi dan pengawalan sertifikasi tanah wakaf ke Kantor Pertanahan (BPN) Kabupaten Bantaeng.',
    legalBasis: 'PMA No. 73 Tahun 2013 & Nota Kesepahaman Kemenag - ATR/BPN',
    duration: '2 Hari Kerja (Fasilitasi Berkas KUA ke BPN)',
    cost: 'Rp 0,- (Fasilitasi KUA Gratis)',
    output: 'Surat Pengantar Sertifikasi Tanah Wakaf KUA ke BPN Bantaeng',
    requirements: [
      'Dokumen AIW / APAIW Asli dari PPAIW KUA',
      'Formulir Permohonan Sertifikasi Wakaf dari BPN'
    ]
  },
  {
    no: 38,
    code: 'SOP-KUA-F38',
    categoryGroup: 'F. Pelayanan Bimbingan Zakat dan Wakaf',
    categoryLetter: 'F',
    title: 'Layanan mutasi harta benda wakaf',
    description: 'Fasilitasi penelitian administrasi dan rekomendasi ruwslag (tukar ganti) / perubahan peruntukan harta benda wakaf.',
    legalBasis: 'UU No. 41 Tahun 2004 Pasal 40 - 41 & PP No. 42 Tahun 2006',
    duration: '3 Hari Kerja',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Surat Rekomendasi Mutasi Harta Benda Wakaf KUA ke BWI / Kemenag',
    requirements: [
      'Alasan Darurat / Kepentingan Umum Penukaran Harta Wakaf',
      'Persetujuan Badan Wakaf Indonesia (BWI) & Pertimbangan Menteri Agama',
      'Dokumen Harta Penukar yang Minimal Senilai dan Sejenis'
    ]
  },
  {
    no: 39,
    code: 'SOP-KUA-F39',
    categoryGroup: 'F. Pelayanan Bimbingan Zakat dan Wakaf',
    categoryLetter: 'F',
    title: 'Layanan AIW atau APAIW yang hilang/rusak',
    description: 'Penerbitan Duplikat Akta Ikrar Wakaf (AIW/APAIW) atas dokumen wakaf resmi yang hilang atau mengalami kerusakan fisik.',
    legalBasis: 'PP No. 42 Tahun 2006 & Juknis Tata Kelola Wakaf Bimas Islam',
    duration: '1 Hari Kerja',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Duplikat AIW / APAIW Berstempel Sah PPAIW KUA Uluere',
    requirements: [
      'Surat Keterangan Kehilangan Dokumen dari Kepolisian (jika hilang)',
      'Fisik AIW Asli yang Rusak (jika rusak)',
      'Surat Keterangan dari Pengurus Nazhir Wakaf Desa'
    ]
  },
  {
    no: 40,
    code: 'SOP-KUA-F40',
    categoryGroup: 'F. Pelayanan Bimbingan Zakat dan Wakaf',
    categoryLetter: 'F',
    title: 'Layanan surat rekomendasi penggantian nazir',
    description: 'Penerbitan surat rekomendasi pergantian perorangan / badan hukum Nazhir Wakaf karena meninggal dunia, mengundurkan diri, atau berhenti.',
    legalBasis: 'PMA No. 73 Tahun 2013 & Juknis Pengelolaan Wakaf BWI',
    duration: '1 Hari Kerja',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Surat Rekomendasi Penggantian Nazhir Wakaf KUA Uluere',
    requirements: [
      'Berita Acara Musyawarah Pergantian Nazhir Desa',
      'Surat Keterangan Kematian / Pengunduran Diri Nazhir Lama',
      'Daftar Calon Susunan Nazhir Baru (minimal 3 orang KTP setempat)'
    ]
  },
  {
    no: 41,
    code: 'SOP-KUA-F41',
    categoryGroup: 'F. Pelayanan Bimbingan Zakat dan Wakaf',
    categoryLetter: 'F',
    title: 'Layanan penerbitan surat pengesahan nazir dan penggantian nazir (penyeragaman SOP)',
    description: 'Penyeragaman SOP pengesahan Nazhir Wakaf baru / perpanjangan masa bakti oleh PPAIW KUA Kecamatan Uluere.',
    legalBasis: 'KMA No. 841 Tahun 2024 & PMA No. 73 Tahun 2013',
    duration: '1 Hari Kerja',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Surat Pengesahan Nazhir Wakaf (Model W4) PPAIW KUA Uluere',
    requirements: [
      'SK Susunan Nazhir dari Desa & KUA',
      'Fotokopi KTP & KK seluruh Pengurus Nazhir Wakaf'
    ]
  },

  // G. Pengelolaan Data dan Pemanfaatan Informasi Keagamaan (42-44)
  {
    no: 42,
    code: 'SOP-KUA-G42',
    categoryGroup: 'G. Pengelolaan Data dan Pemanfaatan Informasi Keagamaan',
    categoryLetter: 'G',
    title: 'Layanan penyediaan data keagamaan dan data sarana keagamaan',
    description: 'Pelayanan permintaan data keagamaan (data nikah, data masjid, data lembaga keagamaan, data penyuluh) untuk keperluan riset / instansi.',
    legalBasis: 'UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik (KIP)',
    duration: '30 Menit',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Buku Rekapitulasi Data Keagamaan / Cetak Data Digital KUA',
    requirements: [
      'Surat Permohonan Data Resmi dari Kampus / Sekolah / Instansi',
      'Identitas Diri Pemohon (KTP / Kartu Mahasiswa)'
    ]
  },
  {
    no: 43,
    code: 'SOP-KUA-G43',
    categoryGroup: 'G. Pengelolaan Data dan Pemanfaatan Informasi Keagamaan',
    categoryLetter: 'G',
    title: 'Layanan penerbitan surat rekomendasi bantuan keagamaan',
    description: 'Penerbitan surat rekomendasi bagi organisasi Islam / lembaga sosial keagamaan yang mengajukan permohonan bantuan dana hibah.',
    legalBasis: 'PMA No. 19 Tahun 2018 & Juknis Hibah Kemenag RI',
    duration: '1 Hari Kerja',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Surat Rekomendasi Bantuan Keagamaan KUA Uluere',
    requirements: [
      'Proposal Pengajuan Bantuan Ormas / Lembaga',
      'SK Kepengurusan Lembaga Keagamaan Terdaftar'
    ]
  },
  {
    no: 44,
    code: 'SOP-KUA-G44',
    categoryGroup: 'G. Pengelolaan Data dan Pemanfaatan Informasi Keagamaan',
    categoryLetter: 'G',
    title: 'Layanan penerbitan surat rekomendasi pendirian majelis taklim',
    description: 'Verifikasi kelayakan dan penerbitan Surat Rekomendasi Pendaftaran Majelis Taklim ke Kantor Kemenag Kabupaten Bantaeng.',
    legalBasis: 'PMA No. 29 Tahun 2019 tentang Majelis Taklim',
    duration: '1 Hari Kerja',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Surat Rekomendasi Pendaftaran Majelis Taklim KUA Uluere',
    requirements: [
      'Formulir Permohonan Pendaftaran Majelis Taklim',
      'Susunan Pengurus, Jamaah Minimal 15 Orang, & Tempat Kegiatan Fixed',
      'Surat Keterangan KUA / Desa'
    ]
  },

  // H. Pelaksanaan Ketatausahaan dan Kerumahtanggaan KUA (45-46)
  {
    no: 45,
    code: 'SOP-KUA-H45',
    categoryGroup: 'H. Pelaksanaan Ketatausahaan dan Kerumahtanggaan KUA',
    categoryLetter: 'H',
    title: 'Layanan persuratan',
    description: 'Pelayanan penerimaan, pencatatan, verifikasi disposisi surat masuk, serta pengiriman surat keluar dinas KUA Kecamatan Uluere.',
    legalBasis: 'PMA No. 9 Tahun 2016 tentang Pedoman Tata Naskah Dinas Kemenag RI',
    duration: '10 - 15 Menit',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Nomor Agenda Surat Masuk / Bukti Resi Pengiriman Surat Keluar',
    requirements: [
      'Surat Dinas Resmi Berstempel Lembaga / Pengirim'
    ]
  },
  {
    no: 46,
    code: 'SOP-KUA-H46',
    categoryGroup: 'H. Pelaksanaan Ketatausahaan dan Kerumahtanggaan KUA',
    categoryLetter: 'H',
    title: 'Layanan kearsipan',
    description: 'Pengelolaan penyimpanan dokumen register nikah, berkas ikrar wakaf, dan arsip keagamaan secara aman & teratur pada ruang arsip KUA.',
    legalBasis: 'UU No. 43 Tahun 2009 tentang Kearsipan & PMA Tata Naskah Dinas',
    duration: '20 Menit (Pencarian Arsip Fisik)',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Layanan Penelusuran Arsip Akta Nikah / AIW Historis',
    requirements: [
      'Surat Permohonan Penelusuran Arsip Keagamaan',
      'KTP & Bukti Kepemilikan Hak Informasi'
    ]
  },

  // I. Fungsi lain Berdasarkan Penugasan Menteri (47-48)
  {
    no: 47,
    code: 'SOP-KUA-I47',
    categoryGroup: 'I. Fungsi lain Berdasarkan Penugasan Menteri',
    categoryLetter: 'I',
    title: 'Layanan deteksi dan cegah dini konflik sosial berdimensi keagamaan',
    description: 'Pemantauan, koordinasi lintas sektoral (Camat, Kapolsek, Danramil), dan laporan kewaspadaan dini isu keagamaan di wilayah Uluere.',
    legalBasis: 'Perpres No. 58 Tahun 2023 & Instruksi Menteri Agama RI',
    duration: '24 Jam Monitoring Keagamaan',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Laporan Sistem Kewaspadaan Dini Keagamaan (SKDK) KUA',
    requirements: [
      'Informasi / Laporan Masukan Masyarakat / PAI Lapangan'
    ]
  },
  {
    no: 48,
    code: 'SOP-KUA-I48',
    categoryGroup: 'I. Fungsi lain Berdasarkan Penugasan Menteri',
    categoryLetter: 'I',
    title: 'Layanan jaminan produk halal',
    description: 'Pusat layanan informasi, verifikasi data pendamping PPH, dan sosialisasi Wajib Halal Oktober bagi usaha mikro & kecil (UMK) Uluere.',
    legalBasis: 'UU No. 33 Tahun 2014 & Keputusan Kepala BPJPH Kemenag RI',
    duration: '15 Menit (Konsultasi Layanan Halal)',
    cost: 'Rp 0,- (GRATIS)',
    output: 'Fasilitasi Pendaftaran Sertifikat Halal Gratis (SEHATI) BPJPH',
    requirements: [
      'Pelaku Usaha Mikro Kecil (UMK) Makanan/Minuman Olahan',
      'Memiliki KTP & NIB Usaha'
    ]
  }
];

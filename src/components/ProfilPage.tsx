import React, { useState } from 'react';
import { INITIAL_STAFF, INITIAL_DESA, INITIAL_HISTORICAL_HEADS } from '../data/mockData';
import { StaffItem, DesaItem, HistoricalHeadItem } from '../types';
import { Building2, Award, Users, MapPin, CheckCircle, ShieldCheck, Mail, Phone, Clock, FileCheck, History } from 'lucide-react';

interface ProfilPageProps {
  sectionTab?: string;
  staffList?: StaffItem[];
  desaList?: DesaItem[];
  historicalHeads?: HistoricalHeadItem[];
  onNavigateTab?: (tab: string) => void;
}

export const ProfilPage: React.FC<ProfilPageProps> = ({
  sectionTab = 'sejarah',
  staffList = INITIAL_STAFF,
  desaList = INITIAL_DESA,
  historicalHeads = INITIAL_HISTORICAL_HEADS,
  onNavigateTab
}) => {
  const [activeSub, setActiveSub] = useState<string>(sectionTab);
  const [filterRole, setFilterRole] = useState<string>('Semua');

  const filteredStaff = staffList.filter((s) => {
    if (filterRole === 'Semua') return true;
    if (filterRole === 'Penghulu') return s.position === 'Penghulu' || s.position === 'Kepala KUA';
    if (filterRole === 'Penyuluh') return s.position === 'Penyuluh Agama Islam (PAI)';
    if (filterRole === 'Staf') return s.position === 'Staf Administrasi' || s.position === 'Pramubakti';
    return true;
  });

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Banner Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-emerald-950 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Profil Organisasi KUA Uluere</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
              Kantor Urusan Agama Kecamatan Uluere
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              Kementerian Agama Kabupaten Bantaeng - Kantor Wilayah Kementerian Agama Provinsi Sulawesi Selatan. Melayani dengan prinsip <strong>Ikhlas Beramal</strong>.
            </p>
          </div>
        </div>

        {/* Sub Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
          <button
            onClick={() => setActiveSub('sejarah')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${
              activeSub === 'sejarah' ? 'bg-emerald-700 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Sejarah, Visi & Misi</span>
          </button>

          <button
            onClick={() => setActiveSub('geografis')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${
              activeSub === 'geografis' ? 'bg-emerald-700 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Kondisi Geografis & Demografis</span>
          </button>

          <button
            onClick={() => setActiveSub('pegawai')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${
              activeSub === 'pegawai' ? 'bg-emerald-700 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Profil SDM Saat Ini</span>
          </button>

          <button
            onClick={() => setActiveSub('kepala-masa-ke-masa')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${
              activeSub === 'kepala-masa-ke-masa' ? 'bg-emerald-700 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <History className="w-4 h-4 text-amber-500" />
            <span>Kepala KUA Masa ke Masa</span>
          </button>

          <button
            onClick={() => setActiveSub('wilayah')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${
              activeSub === 'wilayah' ? 'bg-emerald-700 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Wilayah Kerja (6 Desa Uluere)</span>
          </button>

          <button
            onClick={() => setActiveSub('maklumat')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${
              activeSub === 'maklumat' ? 'bg-emerald-700 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Maklumat & Integritas</span>
          </button>
        </div>

        {/* Section 1: Sejarah, Visi & Misi */}
        {activeSub === 'sejarah' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              
              {/* Kedudukan & Tugas Regulasi Kemenag */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold font-mono">
                    Kedudukan & Tugas Regulasi Kemenag RI
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold font-mono">
                    KMA 373/2002 & KMA 517/2001
                  </span>
                </div>

                <h2 className="text-2xl font-bold font-serif text-slate-900">
                  Profil & Kedudukan Kedinasan KUA Uluere
                </h2>

                <div className="prose text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 font-normal">
                  <p className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                    Kantor Urusan Agama (KUA) merupakan bagian dari struktur Kementerian Agama yang bertugas menyelenggarakan sebagian tugas umum pemerintahan dan pembangunan di bidang agama. KUA merupakan bagian paling bawah dari struktur Kementerian Agama yang berhubungan langsung dengan masyarakat dalam satu wilayah kecamatan, sebagaimana ditegaskan dalam <strong>Keputusan Menteri Agama Nomor 517 Tahun 2001</strong> bahwa Kantor Urusan Agama bertugas melaksanakan sebagian tugas Kantor Kementerian Agama Kabupaten/Kota di bidang Urusan Agama Islam di wilayah kecamatan.
                  </p>
                  
                  <p className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200/70">
                    Dalam <strong>Keputusan Menteri Agama (KMA) Nomor 373 Tahun 2002 Pasal 88</strong> disebutkan bahwa tugas dari Seksi Urusan Agama Islam adalah mengadakan pelayanan di bidang kepenghuluan, bimbingan keluarga sakinah, pangan halal, ibadah sosial serta pengembangan kemitraan umat Islam.
                  </p>
                </div>
              </div>

              {/* Sejarah Perjalanan Gedung & Kepemimpinan */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <h3 className="text-xl font-bold font-serif text-emerald-900 flex items-center gap-2">
                  <History className="w-5 h-5 text-amber-500" />
                  <span>Sejarah Perjalanan & Pendirian Kantor</span>
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-emerald-800 font-mono">Penetapan Pendirian KMA 323 / 2002</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-bold font-mono">2003 – 2005</span>
                    </div>
                    <p>
                      Kantor Urusan Agama (KUA) Kecamatan Uluere Kabupaten Bantaeng ditetapkan berdasarkan <strong>Keputusan Menteri Agama (KMA) Nomor 323 Tahun 2002</strong>. Selanjutnya ditetapkan <strong>Bapak Ambo Tuwo, S.Ag.</strong> sebagai Kepala Kantor Urusan Agama Kec. Uluere yang pertama (2003 s/d 2005) dengan menempati sebuah ruangan pada Kantor Camat Uluere sebagai Kantor sementara.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-emerald-800 font-mono">Peletakan Batu Pertama & Imbal Swadaya</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-bold font-mono">15 Februari 2006</span>
                    </div>
                    <p>
                      Kemudian pada tanggal <strong>15 Februari 2006</strong>, peletakan batu pertama pendirian Kantor Urusan Agama (KUA) Kecamatan Uluere Kabupaten Bantaeng dengan sistem Imbal Swadaya Masyarakat di bawah kepemimpinan <strong>Bapak H. Arifuddin, Lc</strong> (2005 s/d 2008), berlanjut kepada Kepala KUA yang baru <strong>Bapak Hamka, S.Ag.</strong> (2008 – Januari 2010).
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-emerald-900 font-mono">Pembangunan Pagar Permanen DIPA & Kepemimpinan Sekarang</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-800 text-amber-300 font-bold font-mono">2010 – Sekarang</span>
                    </div>
                    <p>
                      Selanjutnya, pada tanggal <strong>01 Mei 2011</strong> pembangunan pagar permanen sepanjang 67 M keliling bersumber dari DIPA Kementerian Agama Tahun Anggaran 2011 di bawah kepemimpinan <strong>Bapak H. Saharuddin R, S.Ag.</strong> (2010). Kemudian pada tanggal <strong>21 Mei 2013</strong>, <strong>Sahruddin, S.Ag., M.Pd.I.</strong> resmi dilantik sebagai Kepala Kantor Urusan Agama Kecamatan Uluere dan menjabat hingga sekarang.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 Pilar Pelayanan Kedinasan Utama */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  Empat Pilar Layanan Kedinasan Utama KUA Uluere
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                      <span className="text-base">💍</span>
                      <span>1. Bidang Kepenghuluan</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Dalam bidang kepenghuluan Kantor Urusan Agama Kecamatan menyelenggarakan Pelayanan Pencatatan Nikah dan Rujuk, beserta pelaporannya secara berkala dengan program kerja yang terukur dan terarah.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                      <span className="text-base">👨‍👩‍👧</span>
                      <span>2. Bidang Keluarga Sakinah</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Bersama Badan Pembinaan, Penasehatan, dan Pelestarian Perkawinan (BP4) menyelenggarakan Pembinaan dan sosialisasi tentang Program Keluarga Sakinah, baik secara individual ataupun kolektif melalui pembinaan rutin terencana dan terkoordinasi dengan instansi setingkat kecamatan.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                      <span className="text-base">🏷️</span>
                      <span>3. Bidang Produk Pangan Halal</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Bersama Majelis Ulama Indonesia (MUI) / BPJPH memfasilitasi penerbitan sertifikat halal sekaligus mengadakan pembinaan mengenai prosedur pangan halal secara syariah ataupun secara regulasi hukum.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                      <span className="text-base">🤝</span>
                      <span>4. Ibadah Sosial & Kemitraan</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Pengelolaan Zakat, Penerbitan Akta Ikrar Wakaf (AIW) gratis, Bimbingan Manasik Haji Kecamatan, pendaftaran ID SIMAS Masjid, & Moderasi Beragama.
                    </p>
                  </div>
                </div>
              </div>

              {/* Visi & Misi Kemenag */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <h3 className="text-xl font-bold font-serif text-emerald-900">
                  Visi & Misi Kementerian Agama RI
                </h3>

                <div className="p-4 bg-emerald-900 text-white rounded-2xl shadow border border-emerald-800 text-xs font-serif italic leading-relaxed">
                  "Kementerian Agama yang Profesional dan Andal dalam Membangun Masyarakat yang Saleh, Moderat, Cerdas dan Unggul untuk Mewujudkan Indonesia Maju yang Berdaulat, Mandiri, dan Berkepribadian Berdasarkan Gotong Royong."
                </div>

                <div>
                  <h4 className="font-bold text-sm text-slate-900 mb-2">Misi Utama KUA Uluere:</h4>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Mewujudkan pelayanan pencatatan nikah dan rujuk yang akuntabel, transparan, dan bebas dari pungutan liar.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Meningkatkan kualitas bimbingan keluarga sakinah, bimbingan calon pengantin (Suscatin), dan bimbingan remaja usia sekolah (BRUS).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Mengoptimalkan tata kelola dan legalitas aset wakaf melalui penerbitan Akta Ikrar Wakaf (AIW) gratis di Kecamatan Uluere.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Meningkatkan kualitas bimbingan manasik haji dan pelayanan ibadah sosial keagamaan umat.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-lg border border-slate-800 space-y-4">
                <h3 className="font-bold text-base text-amber-400">Prinsip Kerja KUA Uluere</h3>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                    <strong className="text-white block font-semibold mb-1">Dasar Hukum Regulasi Utama:</strong>
                    • KMA No. 323 Tahun 2002 (Pendirian KUA Uluere)<br />
                    • KMA No. 517 Tahun 2001 (Tugas KUA Kecamatan)<br />
                    • KMA No. 373 Tahun 2002 Pasal 88 (Tugas Seksi Urais)<br />
                    • KMA No. 841 Tahun 2024 (48 Standar Pelayanan & SOP)
                  </div>
                  <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                    <strong className="text-white block font-semibold mb-1">5 Nilai Budaya Kerja Kemenag:</strong>
                    1. Integritas<br />
                    2. Profesionalitas<br />
                    3. Inovasi<br />
                    4. Tanggung Jawab<br />
                    5. Keteladanan
                  </div>
                  <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                    <strong className="text-white block font-semibold mb-1">Motto Pelayanan:</strong>
                    "Ikhlas Beramal - Ramah, Cepat, Bebas Pungli & Melayani Sepenuh Hati."
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section 1.5: Kondisi Geografis & Demografis (Data Resmi Blog / Dokumentasi KUA) */}
        {activeSub === 'geografis' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            
            {/* Title Header with Official Reference */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold font-mono mb-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Data Resmi Statistik & Profil Wilayah</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
                  Kondisi Geografis dan Demografis KUA Uluere Kab. Bantaeng
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Dokumentasi resmi profil wilayah kedinasan Kantor Urusan Agama Kecamatan Uluere, Kabupaten Bantaeng.
                </p>
              </div>

              <a
                href="https://bantaeng-kuauluere.blogspot.com/2020/06/kondisi-geografis-dan-demografis.html"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shrink-0"
              >
                <span>Sumber Berita Resmi (Blogspot KUA)</span>
              </a>
            </div>

            {/* Content Section 1: Lokasi & Luas Wilayah */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
                <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-emerald-700" />
                  <span>Lokasi Kantor & Wilayah Administrasi</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  Kantor Urusan Agama (KUA) Kecamatan Uluere Kabupaten Bantaeng, terletak di <strong>Dusun Loka Desa Bonto Marannu</strong> dengan jarak dari Ibu Kota Kabupaten Bantaeng <strong>± 22 Km</strong> sebelah Selatan Kabupaten Bantaeng.
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  Kecamatan Uluere dengan luas wilayah <strong>± 102,36 Ha</strong> terbagi ke dalam 6 (enam) Desa resmi:
                </p>
                <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-800 pt-1">
                  <li className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-700 text-white font-mono font-bold text-xs flex items-center justify-center">1</span>
                    <span>Desa Bonto Marannu (Ibu Kota Kecamatan)</span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-700 text-white font-mono font-bold text-xs flex items-center justify-center">2</span>
                    <span>Desa Bonto Tangnga</span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-700 text-white font-mono font-bold text-xs flex items-center justify-center">3</span>
                    <span>Desa Bonto Tallasa</span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-700 text-white font-mono font-bold text-xs flex items-center justify-center">4</span>
                    <span>Desa Bonto Rannu</span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-700 text-white font-mono font-bold text-xs flex items-center justify-center">5</span>
                    <span>Desa Bonto Daeng</span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-700 text-white font-mono font-bold text-xs flex items-center justify-center">6</span>
                    <span>Desa Bonto Lojong</span>
                  </li>
                </ol>
              </div>

              {/* Batas Geografis Card */}
              <div className="lg:col-span-4 bg-emerald-950 text-white p-6 rounded-3xl shadow-lg border border-emerald-800 space-y-4">
                <h3 className="font-bold text-base text-amber-400">Batas Geografis Wilayah</h3>
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 bg-emerald-900/80 rounded-xl border border-emerald-700/60">
                    <span className="text-amber-300 font-bold uppercase block text-[10px]">a. Sebelah Utara:</span>
                    <strong className="text-white font-semibold">Kecamatan Sinoa</strong>
                  </div>
                  <div className="p-3 bg-emerald-900/80 rounded-xl border border-emerald-700/60">
                    <span className="text-amber-300 font-bold uppercase block text-[10px]">b. Sebelah Selatan:</span>
                    <strong className="text-white font-semibold">Kabupaten Gowa & Kabupaten Sinjai</strong>
                  </div>
                  <div className="p-3 bg-emerald-900/80 rounded-xl border border-emerald-700/60">
                    <span className="text-amber-300 font-bold uppercase block text-[10px]">c. Sebelah Timur:</span>
                    <strong className="text-white font-semibold">Kabupaten Jeneponto</strong>
                  </div>
                  <div className="p-3 bg-emerald-900/80 rounded-xl border border-emerald-700/60">
                    <span className="text-amber-300 font-bold uppercase block text-[10px]">d. Sebelah Barat:</span>
                    <strong className="text-white font-semibold">Kecamatan Sinoa</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Demografi & Karakteristik Pelayanan Nikah Adat */}
            <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200 space-y-4">
              <h3 className="font-bold text-base text-emerald-950 flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-700" />
                <span>Demografi Penduduk & Karakteristik Pelayanan Keagamaan</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                Penduduk yang mendiami wilayah Kecamatan Uluere merupakan penduduk yang <strong>homogen</strong>. Hal itu dapat terlihat dari data statistik kependudukan Kecamatan Uluere. Dengan jumlah penduduk sebanyak <strong>11.090 jiwa</strong>, yang memeluk <strong>Agama Islam 100%</strong> sehingga sangat berpengaruh terhadap pelayanan kepada masyarakat, khususnya pernikahan, dengan rincian peristiwa nikah (seperti pada tahun 2011 sebanyak 150 kesemuanya dilaksanakan di luar Balai Nikah sebagaimana lazimnya kebiasaan/adat masyarakat Kabupaten Bantaeng).
              </p>
            </div>

            {/* Ketenagaan SDM & Komoditas Unggulan Pegunungan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Ketenagaan & Pembina Lapangan */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-700" />
                  <span>Struktur Ketenagaan Pembina Keagamaan</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  Dalam melaksanakan tugas pencatatan nikah, Kepala Kantor merangkap sekaligus penghulu Kantor Urusan Agama (KUA) Kecamatan Uluere, dibantu oleh <strong>Imam Pembantu Penghulu setiap Desa sejumlah 6 (enam) orang</strong>.
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  Sedangkan dalam pembinaan keagamaan/penyuluhan dibantu oleh para <strong>Penyuluh Agama Islam Non PNS sebanyak 6 orang</strong>.
                </p>
              </div>

              {/* Mata Pencaharian & Komoditas Pertanian Pegunungan */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>Mata Pencaharian & Komoditas Pertanian</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  Kecamatan Uluere merupakan wilayah pedesaan dengan kondisi dataran tinggi / pegunungan, mata pencaharian utama penduduknya adalah <strong>bertani / berkebun</strong>, dengan komoditas unggulannya:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['Kentang 🥔', 'Kol 🥬', 'Wortel 🥕', 'Bawang Merah 🧅', 'Jagung 🌽', 'Padi 🌾', 'Apel 🍎', 'Strowberi 🍓'].map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-xl bg-emerald-800 text-white font-bold text-xs shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Section 2: Profil Kepala KUA & Pegawai */}
        {activeSub === 'pegawai' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold font-serif text-slate-900">
                  Sumber Daya Manusia (SDM) KUA Uluere
                </h2>
                <p className="text-xs text-slate-500">
                  Daftar Kepala KUA, Penghulu, Penyuluh Agama Islam (PAI), dan Staf Administrasi resmi Kementerian Agama.
                </p>
              </div>

              <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200">
                {['Semua', 'Penghulu', 'Penyuluh', 'Staf'].map((role) => (
                  <button
                    key={role}
                    onClick={() => setFilterRole(role)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                      filterRole === role ? 'bg-emerald-700 text-white' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStaff.map((staff) => (
                <div
                  key={staff.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={staff.photoUrl}
                        alt={staff.name}
                        referrerPolicy="no-referrer"
                        className="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-600 shadow-md shrink-0"
                      />
                      <div>
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                          {staff.status}
                        </span>
                        <h3 className="font-bold text-sm text-slate-900 mt-1">{staff.name}</h3>
                        <p className="text-xs text-emerald-700 font-semibold">{staff.position}</p>
                        <p className="text-[11px] text-slate-400 font-mono mt-0.5">NIP: {staff.nip}</p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                      {staff.bio}
                    </p>
                  </div>

                  {staff.phone && (
                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-emerald-600" />
                        {staff.phone}
                      </span>
                      <a
                        href={`https://wa.me/62${staff.phone.replace(/[^0-9]/g, '').substring(1)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-700 hover:underline font-semibold"
                      >
                        WhatsApp Direct
                      </a>
                    </div>
                  )}

                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 2.5: Kepala KUA dari Masa ke Masa */}
        {activeSub === 'kepala-masa-ke-masa' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            <div className="border-b border-slate-100 pb-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold mb-2">
                <History className="w-3.5 h-3.5 text-amber-600" />
                <span>Rekam Jejak Kepemimpinan Institusi</span>
              </div>
              <h2 className="text-2xl font-bold font-serif text-slate-900">
                Daftar Kepala KUA Kecamatan Uluere dari Masa ke Masa
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Data resmi riwayat pejabat Kepala Kantor Urusan Agama Kecamatan Uluere, Kabupaten Bantaeng dari periode awal hingga saat ini:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {historicalHeads.map((head, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${
                    head.status === 'Aktif Menjabat'
                      ? 'bg-gradient-to-br from-emerald-900 to-slate-900 text-white border-emerald-700 shadow-xl ring-2 ring-amber-400/50'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-emerald-300 hover:shadow-md'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        head.status === 'Aktif Menjabat'
                          ? 'bg-amber-400 text-emerald-950 shadow'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {head.period}
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                        head.status === 'Aktif Menjabat' ? 'bg-emerald-800 text-emerald-200' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {head.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <img
                        src={head.photoUrl}
                        alt={head.name}
                        referrerPolicy="no-referrer"
                        className={`w-16 h-16 rounded-2xl object-cover border-2 shadow-md shrink-0 ${
                          head.status === 'Aktif Menjabat' ? 'border-amber-400' : 'border-emerald-600'
                        }`}
                      />
                      <div>
                        <h3 className={`font-bold text-base font-serif ${
                          head.status === 'Aktif Menjabat' ? 'text-amber-300' : 'text-slate-900'
                        }`}>
                          {head.name}
                        </h3>
                        <p className={`text-xs font-mono mt-0.5 ${
                          head.status === 'Aktif Menjabat' ? 'text-emerald-200' : 'text-slate-500'
                        }`}>
                          NIP: {head.nip}
                        </p>
                      </div>
                    </div>

                    <div className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                      head.status === 'Aktif Menjabat'
                        ? 'bg-emerald-800/60 text-emerald-100 border border-emerald-700/60'
                        : 'bg-white text-slate-600 border border-slate-200/80'
                    }`}>
                      <strong className={`block text-[10px] uppercase font-bold mb-1 ${
                        head.status === 'Aktif Menjabat' ? 'text-amber-300' : 'text-emerald-800'
                      }`}>
                        Capaian & Program Unggulan Masa Jabatan:
                      </strong>
                      {head.achievements}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 3: Wilayah Kerja 6 Desa, Kondisi Geografis & Demografis */}
        {activeSub === 'wilayah' && (
          <div className="space-y-8">
            
            {/* Header Geographic & Demographic Overview Card */}
            <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-800 space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-emerald-800/80 pb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-emerald-950 text-xs font-bold font-mono mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Profil Geografis & Demografis KUA Uluere</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                    Kondisi Geografis & Demografis Kecamatan Uluere
                  </h2>
                  <p className="text-xs sm:text-sm text-emerald-100 mt-1 max-w-3xl">
                    Kantor Urusan Agama (KUA) Kecamatan Uluere Kabupaten Bantaeng terletak di <strong>Dusun Loka, Desa Bonto Marannu</strong> dengan jarak dari Ibu Kota Kabupaten Bantaeng <strong>± 22 Km</strong> di sebelah Selatan Kabupaten Bantaeng.
                  </p>
                </div>

                <div className="bg-emerald-900/80 p-4 rounded-2xl border border-emerald-700/60 text-center shrink-0">
                  <span className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider block">Luas Wilayah:</span>
                  <span className="text-2xl font-black text-amber-300 font-mono">± 102,36 Ha</span>
                  <span className="text-[11px] text-emerald-200 block mt-0.5">Dataran Tinggi / Pegunungan</span>
                </div>
              </div>

              {/* Demographic & Service Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div className="bg-emerald-900/60 p-4 rounded-2xl border border-emerald-700/50 space-y-1">
                  <span className="text-emerald-300 font-bold block text-[11px]">Jumlah Penduduk:</span>
                  <span className="text-xl font-bold text-white font-mono">11.090 Jiwa</span>
                  <span className="text-[10px] text-amber-300 font-semibold block">100% Agama Islam</span>
                </div>

                <div className="bg-emerald-900/60 p-4 rounded-2xl border border-emerald-700/50 space-y-1">
                  <span className="text-emerald-300 font-bold block text-[11px]">Homogenitas Keagamaan:</span>
                  <span className="text-xl font-bold text-emerald-200 font-mono">100% Muslim</span>
                  <span className="text-[10px] text-slate-300 block">Sangat Mempengaruhi Layanan</span>
                </div>

                <div className="bg-emerald-900/60 p-4 rounded-2xl border border-emerald-700/50 space-y-1">
                  <span className="text-emerald-300 font-bold block text-[11px]">Imam Pembantu Penghulu:</span>
                  <span className="text-xl font-bold text-amber-300 font-mono">6 Orang</span>
                  <span className="text-[10px] text-emerald-200 block">1 Orang Setiap Desa</span>
                </div>

                <div className="bg-emerald-900/60 p-4 rounded-2xl border border-emerald-700/50 space-y-1">
                  <span className="text-emerald-300 font-bold block text-[11px]">Penyuluh Agama Islam:</span>
                  <span className="text-xl font-bold text-white font-mono">6 Orang Non-PNS</span>
                  <span className="text-[10px] text-emerald-200 block">Pembinaan 6 Desa</span>
                </div>
              </div>
            </div>

            {/* Grid 2 Kolom: Batas Geografis & Komoditas Unggulan Pertanian */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Batas Geografis */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-700" />
                  <span>Batas Geografis Wilayah Kecamatan Uluere</span>
                </h3>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-slate-400 font-bold text-[10px] uppercase block">⬆️ Sebelah Utara:</span>
                    <strong className="text-slate-900 text-xs">Kecamatan Sinoa</strong>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-slate-400 font-bold text-[10px] uppercase block">⬇️ Sebelah Selatan:</span>
                    <strong className="text-slate-900 text-xs">Kab. Gowa & Kab. Sinjai</strong>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-slate-400 font-bold text-[10px] uppercase block">➡️ Sebelah Timur:</span>
                    <strong className="text-slate-900 text-xs">Kabupaten Jeneponto</strong>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-slate-400 font-bold text-[10px] uppercase block">⬅️ Sebelah Barat:</span>
                    <strong className="text-slate-900 text-xs">Kecamatan Sinoa</strong>
                  </div>
                </div>
              </div>

              {/* Mata Pencaharian & Komoditas Unggulan Pegunungan */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>Mata Pencaharian & Komoditas Unggulan</span>
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Kecamatan Uluere merupakan wilayah pedesaan dengan kondisi dataran tinggi / pegunungan. Mata pencaharian utama penduduknya adalah <strong>bertani / berkebun</strong> dengan komoditas unggulan:
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {['Kentang 🥔', 'Kol 🥬', 'Wortel 🥕', 'Bawang Merah 🧅', 'Jagung 🌽', 'Padi 🌾', 'Apel 🍎', 'Stroberi 🍓'].map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 font-bold text-xs shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="p-3 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200 text-[11px] font-medium leading-snug">
                  <strong>Karakteristik Pelayanan Nikah:</strong> Kebiasaan/adat masyarakat Kabupaten Bantaeng mayoritas melaksanakan akad nikah di luar Balai Nikah (di kediaman/masjid setempat).
                </div>
              </div>

            </div>

            {/* List 6 Desa Resmi Uluere */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  Daftar 6 Desa Resmi di Wilayah Kerja KUA Uluere
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Terbagi ke dalam 6 desa resmi Kabupaten Bantaeng dengan koordinasi 6 Orang Imam Pembantu Penghulu & 6 Orang Penyuluh Agama Islam Non-PNS:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {desaList.map((desa, idx) => (
                  <div key={desa.name} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white font-bold flex items-center justify-center text-xs shadow-sm font-mono">
                          0{idx + 1}
                        </div>
                        <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                          {desa.code}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-bold text-base text-slate-900">{desa.name}</h4>
                        <p className="text-[11px] text-emerald-800 font-semibold">{desa.capital}</p>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {desa.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 border-t border-slate-200/60 pt-3 mt-4">
                      <div className="bg-white p-2 rounded-xl border border-slate-100">
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Rumah Ibadah:</span>
                        <span className="font-bold text-emerald-800">{desa.masjidCount} Masjid/Musholla</span>
                      </div>
                      <div className="bg-white p-2 rounded-xl border border-slate-100">
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Aset Wakaf:</span>
                        <span className="font-bold text-emerald-800">{desa.wakafCount} AIW Resmi</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Section 4: Maklumat Pelayanan & Integritas */}
        {activeSub === 'maklumat' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <FileCheck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold font-serif text-slate-900">
                Maklumat Pelayanan KUA Kecamatan Uluere
              </h2>
              <p className="text-xs text-slate-500">
                Komitmen Tertulis Jajaran Pegawai & Penghulu KUA Uluere Kabupaten Bantaeng
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-900 text-white space-y-4 max-w-3xl mx-auto text-center shadow-lg border border-emerald-800">
              <p className="text-sm font-serif italic text-amber-200 leading-relaxed">
                "Dengan ini, kami seluruh Pegawai Kantor Urusan Agama (KUA) Kecamatan Uluere menyatakan sanggup menyelenggarakan pelayanan sesuai standar pelayanan yang telah ditetapkan dan apabila tidak menepati janji ini, kami siap menerima sanksi sesuai peraturan perundang-undangan yang berlaku."
              </p>
              <div className="text-xs text-emerald-200 font-bold uppercase tracking-wider">
                — Kepala KUA Kecamatan Uluere Kabupaten Bantaeng
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <ShieldCheck className="w-6 h-6 text-emerald-700" />
                <h3 className="font-bold text-sm text-slate-900">Bebas Pungli & Gratifikasi</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tidak menerima imbalan, hadiah, atau uang dalam bentuk apapun di luar tarif PNBP resmi pemerintah.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <Clock className="w-6 h-6 text-emerald-700" />
                <h3 className="font-bold text-sm text-slate-900">Kepastian Waktu Pelayanan</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Semua berkas nikah & wakaf diproses tepat waktu sesuai SOP (Paling lambat 10 hari kerja sebelum akad).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <CheckCircle className="w-6 h-6 text-emerald-700" />
                <h3 className="font-bold text-sm text-slate-900">Kemudahan Konsultasi</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Layanan konsultasi online via WhatsApp dan website resmi direspon maksimal 1x24 jam kerja.
                </p>
              </div>
            </div>

            {onNavigateTab && (
              <div className="text-center pt-4 border-t border-slate-100">
                <button
                  onClick={() => onNavigateTab('layanan-sop')}
                  className="px-6 py-3 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs rounded-2xl shadow-md transition-all flex items-center gap-2 mx-auto"
                >
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Buka Katalog Lengkap 48 Standar Pelayanan (SP) & SOP KUA</span>
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

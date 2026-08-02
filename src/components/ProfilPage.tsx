import React, { useState } from 'react';
import { INITIAL_STAFF, DESA_ULUERE } from '../data/mockData';
import { StaffItem } from '../types';
import { Building2, Award, Users, MapPin, CheckCircle, ShieldCheck, Mail, Phone, Clock, FileCheck } from 'lucide-react';

interface ProfilPageProps {
  sectionTab?: string;
}

export const ProfilPage: React.FC<ProfilPageProps> = ({ sectionTab = 'sejarah' }) => {
  const [activeSub, setActiveSub] = useState<string>(sectionTab);
  const [filterRole, setFilterRole] = useState<string>('Semua');

  const filteredStaff = INITIAL_STAFF.filter((s) => {
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
            onClick={() => setActiveSub('pegawai')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${
              activeSub === 'pegawai' ? 'bg-emerald-700 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Profil Kepala & Pegawai</span>
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
              <div>
                <h2 className="text-2xl font-bold font-serif text-slate-900 mb-3">
                  Sejarah Singkat KUA Kecamatan Uluere
                </h2>
                <div className="prose text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 font-normal">
                  <p>
                    Kantor Urusan Agama (KUA) Kecamatan Uluere didirikan sebagai unit pelaksana teknis (UPT) Kementerian Agama di tingkat kecamatan untuk melayani urusan keagamaan masyarakat di kawasan pegunungan Uluere, Kabupaten Bantaeng, Sulawesi Selatan.
                  </p>
                  <p>
                    Seiring perkembangan administrasi pemerintahan dan pemekaran wilayah di Kabupaten Bantaeng, KUA Kecamatan Uluere menaungi 6 desa meliputi Desa Bonto Marannu, Desa Rianta, Desa Bonto Lojong, Desa Bonto Tallasa, Desa Bonto Daeng, dan Desa Bonto Tangnga.
                  </p>
                  <p>
                    Sebagai garda terdepan Kementerian Agama, KUA Uluere bertransformasi dari sekadar kantor pencatatan nikah (Balai Nikah) menjadi pusat layanan keagamaan terpadu mencakup Bimbingan Perkawinan, Pembinaan Keluarga Sakinah, Pengelolaan Zakat & Wakaf, Bimbingan Manasik Haji & Umrah, serta Moderasi Beragama berbasis digital via SIMKAH Web.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 space-y-4">
                <h3 className="text-xl font-bold font-serif text-emerald-900">
                  Visi & Misi Kementerian Agama RI
                </h3>

                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-xs text-emerald-900 font-semibold">
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
                    <strong className="text-white block font-semibold">5 Nilai Budaya Kerja Kemenag:</strong>
                    1. Integritas<br />
                    2. Profesionalitas<br />
                    3. Inovasi<br />
                    4. Tanggung Jawab<br />
                    5. Keteladanan
                  </div>
                  <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                    <strong className="text-white block font-semibold">Motto Pelayanan:</strong>
                    "Ikhlas Beramal - Ramah, Cepat, Bebas Pungli & Melayani Sepenuh Hati."
                  </div>
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

        {/* Section 3: Wilayah Kerja 6 Desa */}
        {activeSub === 'wilayah' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-bold font-serif text-slate-900">
                Wilayah Kerja KUA Kecamatan Uluere
              </h2>
              <p className="text-xs text-slate-500">
                Kantor Urusan Agama Kecamatan Uluere mengampu pelayanan keagamaan pada 6 desa resmi Kabupaten Bantaeng:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {DESA_ULUERE.map((desa, idx) => (
                <div key={desa.name} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white font-bold flex items-center justify-center text-xs">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900">{desa.name}</h3>
                      <p className="text-[11px] text-slate-500">{desa.capital}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 border-t border-slate-200/60 pt-3 mt-2">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Rumah Ibadah:</span>
                      <span className="font-semibold text-emerald-800">{desa.masjidCount} Masjid</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Aset Wakaf:</span>
                      <span className="font-semibold text-emerald-800">{desa.wakafCount} AIW Ber-Sertifikat</span>
                    </div>
                  </div>
                </div>
              ))}
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
          </div>
        )}

      </div>
    </div>
  );
};

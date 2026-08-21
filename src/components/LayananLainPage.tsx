import React, { useState } from 'react';
import { HeartHandshake, BookOpen, Heart, CheckCircle2, Coins, ExternalLink, ShieldCheck } from 'lucide-react';

interface LayananLainPageProps {
  initialTab?: 'wakaf' | 'haji' | 'sakinah';
  onNavigateTab: (tab: string) => void;
}

export const LayananLainPage: React.FC<LayananLainPageProps> = ({ initialTab = 'wakaf', onNavigateTab }) => {
  const [activeTab, setActiveTab] = useState<'wakaf' | 'haji' | 'sakinah'>(initialTab);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Banner Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-emerald-950 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Layanan Keagamaan & Sosial KUA Uluere</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
              Wakaf, Zakat, Manasik Haji & Bimbingan Keluarga
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              Pelayanan legalitas aset wakaf (AIW), konsultasi zakat, bimbingan manasik haji kecamatan, serta program bimbingan keluarga sakinah.
            </p>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center gap-2 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
          <button
            onClick={() => setActiveTab('wakaf')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'wakaf' ? 'bg-emerald-700 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Akta Ikrar Wakaf (AIW) & Zakat</span>
          </button>

          <button
            onClick={() => setActiveTab('haji')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'haji' ? 'bg-emerald-700 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Bimbingan Manasik Haji</span>
          </button>

          <button
            onClick={() => setActiveTab('sakinah')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'sakinah' ? 'bg-emerald-700 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>Keluarga Sakinah & BRUS Remaja</span>
          </button>
        </div>

        {/* Tab 1: Wakaf & Zakat */}
        {activeTab === 'wakaf' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">PPAIW KUA Uluere</span>
              <h2 className="text-2xl font-bold font-serif text-slate-900 mt-1">
                Penerbitan Akta Ikrar Wakaf (AIW) & APAIW 100% Gratis
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                KUA Kecamatan Uluere bertindak selaku Pejabat Pembuat Akta Ikrar Wakaf (PPAIW) untuk menjamin legalitas hukum tanah/aset masjid, musholla, pesantren, dan pekuburan Islam.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Persyaratan Permohonan Akta Ikrar Wakaf (AIW):</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                    <span>Surat Kepemilikan Tanah Asli (Sertifikat Hak Milik / Petok C / Kohir)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                    <span>Surat Pernyataan Pemilikan Tanah Tidak Dalam Sengketa dari Kepala Desa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                    <span>Fotokopi KTP Wakif (Pemberi Wakaf) / Ahli Waris</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                    <span>Fotokopi KTP Pengurus Nazhir Wakaf (Minimal 3 orang)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                    <span>Fotokopi KTP 2 Orang Saksi Pembacaan Ikrar Wakaf</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 bg-emerald-900 text-white rounded-2xl shadow-md space-y-4">
                <h3 className="font-bold text-sm text-amber-400">Konsultasi Zakat & Wakaf</h3>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  Penyuluh Agama Islam (PAI) KUA Uluere melayani konsultasi perhitungan Zakat Maal, Zakat Fitrah, Zakat Pertanian/Perkebunan hasil kopi & sayuran Uluere, serta registrasi Lembaga Amil Zakat / UPZ Desa.
                </p>
                <button
                  onClick={() => onNavigateTab('pengaduan')}
                  className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-emerald-950 text-xs font-bold rounded-xl transition-colors"
                >
                  Ajukan Konsultasi AIW / Zakat
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Manasik Haji */}
        {activeTab === 'haji' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Bimbingan Haji Reguler</span>
              <h2 className="text-2xl font-bold font-serif text-slate-900 mt-1">
                Bimbingan Manasik Haji Mandiri Kecamatan Uluere
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Bimbingan manasik haji diselenggarakan secara gratis bagi Jamaah Calon Haji (JCH) terdaftar dari 6 desa di Kecamatan Uluere.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <BookOpen className="w-6 h-6 text-emerald-700" />
                <h3 className="font-bold text-sm text-slate-900">8 Pertemuan Klasikal</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Materi fikh haji, rukun, wajib, syariat ihram, & simulasi tawaf/sa'i di Aula KUA Uluere.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <ShieldCheck className="w-6 h-6 text-emerald-700" />
                <h3 className="font-bold text-sm text-slate-900">Pemeriksaan & Kesehatan</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Penyuluhan istitha'ah kesehatan haji bekerja sama dengan Puskesmas Uluere & Dinkes Bantaeng.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-700" />
                <h3 className="font-bold text-sm text-slate-900">Pendampingan Administrasi</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Verifikasi paspor, pelunasan BPIH, & pembuatan dokumen keimigrasian haji reguler.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Keluarga Sakinah & BRUS */}
        {activeTab === 'sakinah' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">BP4 & Penyuluhan Agama</span>
              <h2 className="text-2xl font-bold font-serif text-slate-900 mt-1">
                Bimbingan Perkawinan (Suscatin) & BRUS Remaja
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Program Bimbingan Remaja Usia Sekolah (BRUS) untuk pencegahan pernikahan anak, stunting, serta Bimbingan Calon Pengantin.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="font-bold text-sm text-slate-900">Program Suscatin Calon Pengantin</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Setiap calon pengantin yang mendaftar di KUA Uluere wajib mengikuti Bimbingan Perkawinan (Bimwin/Suscatin) selama 2 hari untuk dibekali fondasi agama, manajemen keuangan keluarga, kesehatan reproduksi, & pengasuhan anak.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="font-bold text-sm text-slate-900">BRUS (Bimbingan Remaja Usia Sekolah)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Penyuluh PAI KUA Uluere hadir berkala di SMAN/SMPN se-Kecamatan Uluere memberikan edukasi pendewasaan usia perkawinan (minimal 19 tahun) demi menekan angka putus sekolah dan risiko stunting.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

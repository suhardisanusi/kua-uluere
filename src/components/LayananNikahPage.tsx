import React, { useState } from 'react';
import { FileCheck, DollarSign, Calculator, ExternalLink, ShieldAlert, CheckCircle2, AlertCircle, ArrowRight, BookOpen } from 'lucide-react';

export const LayananNikahPage: React.FC = () => {
  const [locationType, setLocationType] = useState<'KUA' | 'LUAR'>('KUA');
  const [dayType, setDayType] = useState<'KERJA' | 'LIBUR'>('KERJA');

  const isFree = locationType === 'KUA' && dayType === 'KERJA';
  const totalCost = isFree ? 0 : 600000;

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Banner Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-emerald-950 text-xs font-bold uppercase tracking-wider">
              <FileCheck className="w-3.5 h-3.5" />
              <span>Standar Pelayanan Nikah KUA Uluere</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
              Pendaftaran Pencatatan Nikah & SIMKAH
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              Panduan lengkap pendaftaran nikah, alur administrasi N1-N4, integrasi SIMKAH Web, serta Kalkulator Biaya PNBP resmi Kemenag RI.
            </p>
          </div>
        </div>

        {/* Kalkulator Biaya Nikah Transparan Section */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-amber-500" />
                <span>Simulasi Biaya Resmi (PP No. 59 Tahun 2018)</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-1">
                Kalkulator Biaya Pencatatan Nikah
              </h2>
            </div>

            <div className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-semibold border border-emerald-200">
              Bebas Pungli & Transparan via SIMKAH
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Calculator Options Form */}
            <div className="lg:col-span-7 space-y-5">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  1. Pilih Lokasi Pelaksanaan Akad Nikah:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setLocationType('KUA')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      locationType === 'KUA'
                        ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-600/30'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-900">Di Balai Nikah KUA</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Kantor KUA Kecamatan Uluere</div>
                  </button>

                  <button
                    onClick={() => setLocationType('LUAR')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      locationType === 'LUAR'
                        ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-600/30'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-900">Di Luar Balai Nikah KUA</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Rumah / Masjid / Gedung Warga</div>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  2. Pilih Waktu & Hari Akad Nikah:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setDayType('KERJA')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      dayType === 'KERJA'
                        ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-600/30'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-900">Jam Kerja Kantor</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Senin - Jumat (07.30 - 16.00 WITA)</div>
                  </button>

                  <button
                    onClick={() => setDayType('LIBUR')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      dayType === 'LIBUR'
                        ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-600/30'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-900">Di Luar Jam Kerja / Hari Libur</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Sabtu, Minggu / Libur Nasional</div>
                  </button>
                </div>
              </div>

            </div>

            {/* Cost Result Display */}
            <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                Hasil Rincian Biaya PNBP Resmi
              </span>

              <div className="py-2 border-b border-emerald-800">
                <div className="text-3xl sm:text-4xl font-black font-serif text-white">
                  Rp {totalCost.toLocaleString('id-ID')}
                </div>
                <div className="text-xs text-amber-300 font-semibold mt-1">
                  {isFree ? '100% GRATIS (Nol Rupiah)' : 'Tarif Resmi PNBP Kementerian Agama RI'}
                </div>
              </div>

              <div className="space-y-2 text-xs text-emerald-100 leading-relaxed">
                {isFree ? (
                  <p>
                    ✓ Akad nikah dilaksanakan di Balai Nikah KUA Uluere pada jam kerja kantor tidak dikenakan biaya apapun.
                  </p>
                ) : (
                  <p>
                    ✓ Pembayaran dilakukan via Kode Billing SIMKAH ke Kas Negara melalui Bank BRI, BNI, Mandiri, BSI, Pos Indonesia, atau Tokopedia.
                  </p>
                )}
                <p className="text-[11px] text-slate-300 italic">
                  * Dilarang keras menyerahkan uang tunai kepada Penghulu atau Staf KUA Uluere.
                </p>
              </div>

              <a
                href="https://simkah.kemenag.go.id"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-xs rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <span>Dapatkan Kode Billing di SIMKAH</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

        {/* Flowchart Alur Pelayanan Nikah */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              Alur & Tahapan Pelayanan Nikah di KUA Uluere
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Diproses paling lambat 10 (sepuluh) hari kerja sebelum hari akad nikah.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white font-bold text-xs flex items-center justify-center">
                01
              </div>
              <h3 className="font-bold text-sm text-slate-900">Surat Pengantar Desa (N1-N4)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Catin mengurus surat N1 (Pengantar Nikah), N2 (Permohonan), N4 (Persetujuan Catin) di Kantor Desa asal di Uluere.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white font-bold text-xs flex items-center justify-center">
                02
              </div>
              <h3 className="font-bold text-sm text-slate-900">Pemeriksaan Kesehatan Catin</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Melakukan tes kesehatan & imunisasi TT catin di Puskesmas Uluere / Loka untuk mendapatkan Surat Keterangan Sehat.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white font-bold text-xs flex items-center justify-center">
                03
              </div>
              <h3 className="font-bold text-sm text-slate-900">Pendaftaran SIMKAH & Verifikasi</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mendaftar via SIMKAH Web atau diserahkan ke staf KUA Uluere. Verifikasi berkas, wali nikah, & penerbitan Kode Billing PNBP.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-emerald-950 font-bold text-xs flex items-center justify-center">
                04
              </div>
              <h3 className="font-bold text-sm text-slate-900">Suscatin & Terbit Buku Nikah</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mengikuti Bimbingan Perkawinan (Suscatin). Pelaksanaan akad nikah oleh Penghulu & penyerahan Buku Nikah + Kartu Nikah Digital.
              </p>
            </div>

          </div>
        </div>

        {/* Checklist Persyaratan Berkas */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-xl font-bold font-serif text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Checklist Kelengkapan Berkas Pendaftaran Nikah</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <strong className="text-slate-900 font-bold block">1. Berkas Wajib Catin Laki-Laki & Perempuan:</strong>
              <ul className="space-y-1 list-disc list-inside">
                <li>Surat Pengantar Nikah dari Desa (Model N1 - N4)</li>
                <li>Fotokopi KTP, Kartu Keluarga (KK), & Akta Kelahiran/Ijazah</li>
                <li>Pasfoto ukuran 2x3 (4 lembar) & 4x6 (2 lembar) latar biru</li>
                <li>Surat Keterangan Kesehatan & Imunisasi Catin dari Puskesmas</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <strong className="text-slate-900 font-bold block">2. Berkas Khusus (Jika Ada Condition):</strong>
              <ul className="space-y-1 list-disc list-inside">
                <li>Surat Rekomendasi Nikah KUA (Jika calon dari luar kec/kab)</li>
                <li>Akta Cerai Asli Pengadilan Agama (Bagi Duda / Janda Cerai)</li>
                <li>Surat Keterangan Kematian N6 (Bagi Duda / Janda Mati)</li>
                <li>Izin Dispensasi Nikah dari Pengadilan Agama (Jika usia &lt; 19 thn)</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/mockData';
import { ServiceSop } from '../types';
import { FileText, ExternalLink, Clock, DollarSign, CheckCircle2, ChevronRight, X, Sparkles, BookOpen } from 'lucide-react';

interface QuickServicesProps {
  onNavigateTab: (tab: string) => void;
}

export const QuickServices: React.FC<QuickServicesProps> = ({ onNavigateTab }) => {
  const [selectedSop, setSelectedSop] = useState<ServiceSop | null>(null);

  return (
    <section id="layanan" className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            Portal Layanan Mandiri KUA Uluere
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-slate-900">
            Standar Pelayanan & Informasi Publik
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Akses cepat informasi pendaftaran nikah online, biaya PNBP transparan, pengurusan wakaf, bimbingan manasik haji, dan konsultasi keluarga.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider border border-emerald-100">
                    {srv.category}
                  </span>
                  {srv.simkahIntegrated && (
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-bold flex items-center gap-1">
                      SIMKAH Web
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                  {srv.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {srv.description}
                </p>

                <div className="pt-2 space-y-2 border-t border-slate-100 text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="line-clamp-1">{srv.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="line-clamp-1 font-semibold text-slate-800">{srv.cost}</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedSop(srv)}
                  className="text-xs font-bold text-emerald-800 hover:text-emerald-900 flex items-center gap-1 group-hover:underline"
                >
                  <span>Syarat & SOP</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                {srv.simkahIntegrated ? (
                  <a
                    href="https://simkah.kemenag.go.id"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 shadow-sm"
                  >
                    <span>Daftar SIMKAH</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <button
                    onClick={() => onNavigateTab('pengaduan')}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-900 rounded-lg text-xs font-semibold transition-colors"
                  >
                    Konsultasi
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Extra Highlight Banner: SIMKAH & Tarif PNBP Nikah */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-800 via-emerald-900 to-slate-900 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-emerald-950 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Transparansi Tarif PNBP Nikah KUA Uluere</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Berapa Biaya Pencatatan Nikah di KUA Kecamatan Uluere?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              Nikah di Balai Nikah KUA pada jam kerja kantor adalah <strong>Rp 0,- (GRATIS)</strong>. Apabila nikah dilaksanakan di luar kantor / rumah / hari libur, dikenakan biaya resmi PNBP sebesar <strong>Rp 600.000,-</strong> yang dibayarkan langsung via Kode Billing SIMKAH ke Kas Negara (Bank BRI/BNI/Mandiri/BSI).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={() => onNavigateTab('layanan-nikah')}
              className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Simulasi & Kalkulator Nikah</span>
            </button>
            <a
              href="https://simkah.kemenag.go.id"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors border border-emerald-500 flex items-center justify-center gap-2"
            >
              <span>Portal SIMKAH Web</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Modal Detail SOP Pelayanan */}
      {selectedSop && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  SOP
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">{selectedSop.title}</h3>
                  <p className="text-xs text-slate-500">Dasar Hukum: {selectedSop.legalBasis}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedSop(null)}
                className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 p-4 rounded-xl text-xs leading-relaxed text-slate-700 border border-slate-200">
                <strong className="block text-slate-900 mb-1">Deskripsi Layanan:</strong>
                {selectedSop.description}
              </div>

              <div>
                <h4 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Persyaratan Dokumen Administrasi:</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedSop.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-emerald-50/80 p-4 rounded-xl border border-emerald-100 text-xs">
                <div>
                  <span className="text-slate-500 block">Jangka Waktu Penyelesaian:</span>
                  <span className="font-bold text-slate-900">{selectedSop.duration}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Biaya Layanan Resmi:</span>
                  <span className="font-bold text-emerald-800">{selectedSop.cost}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedSop(null)}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
              >
                Tutup Window
              </button>
              {selectedSop.simkahIntegrated ? (
                <a
                  href="https://simkah.kemenag.go.id"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 shadow-md"
                >
                  <span>Daftar via SIMKAH Web</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <button
                  onClick={() => {
                    setSelectedSop(null);
                    onNavigateTab('pengaduan');
                  }}
                  className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-colors"
                >
                  Tanyakan via Konsultasi WA
                </button>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

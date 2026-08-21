import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/mockData';
import { ServiceSop } from '../types';
import { FileText, ExternalLink, Clock, Tag, CheckCircle2, X, ArrowRight } from 'lucide-react';

interface QuickServicesProps {
  onNavigateTab: (tab: string) => void;
}

export const QuickServices: React.FC<QuickServicesProps> = ({ onNavigateTab }) => {
  const [selectedSop, setSelectedSop] = useState<ServiceSop | null>(null);

  return (
    <section id="layanan" className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Minimalis */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Standar Pelayanan Publik KUA
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Informasi syarat & tarif resmi PNBP KUA Kecamatan Uluere
          </p>
        </div>

        {/* 4 Clean Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES_LIST.map((srv) => (
            <div
              key={srv.id}
              onClick={() => setSelectedSop(srv)}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider border border-emerald-100">
                    {srv.category}
                  </span>
                  {srv.simkahIntegrated && (
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-bold">
                      SIMKAH
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-sm text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                  {srv.title}
                </h3>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{srv.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                  <Tag className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{srv.cost}</span>
                </div>

                <div className="pt-2 text-emerald-700 font-bold text-xs flex items-center justify-between group-hover:translate-x-1 transition-transform">
                  <span>Lihat Syarat & SOP</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal Detail SOP Pelayanan */}
      {selectedSop && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-slate-800 rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div>
                <h3 className="font-bold text-base text-slate-900">{selectedSop.title}</h3>
                <p className="text-xs text-slate-500">Dasar Hukum: {selectedSop.legalBasis}</p>
              </div>
              <button
                onClick={() => setSelectedSop(null)}
                className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="bg-slate-50 p-3 rounded-xl text-slate-700 border border-slate-200 leading-relaxed">
                {selectedSop.description}
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Persyaratan Dokumen Administrasi:</span>
                </h4>
                <ul className="space-y-1.5 text-slate-700">
                  {selectedSop.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3 bg-emerald-50 p-3 rounded-xl border border-emerald-100 text-xs">
                <div>
                  <span className="text-slate-500 block">Jangka Waktu:</span>
                  <strong className="text-slate-900">{selectedSop.duration}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Biaya Resmi:</span>
                  <strong className="text-emerald-800">{selectedSop.cost}</strong>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-end gap-2 text-xs">
              <button
                onClick={() => setSelectedSop(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl"
              >
                Tutup
              </button>
              {selectedSop.simkahIntegrated ? (
                <a
                  href="https://simkah.kemenag.go.id"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl flex items-center gap-1 shadow-sm"
                >
                  <span>Daftar SIMKAH Web</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <button
                  onClick={() => {
                    setSelectedSop(null);
                    onNavigateTab('pengaduan');
                  }}
                  className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl"
                >
                  Konsultasi WA
                </button>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

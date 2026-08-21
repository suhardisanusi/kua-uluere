import React, { useState } from 'react';
import {
  MapPin,
  Compass,
  ExternalLink,
  ShieldCheck,
  Search,
  Filter
} from 'lucide-react';
import { PetaPointItem, DesaItem } from '../types';
import { INITIAL_PETA_POINTS, INITIAL_DESA } from '../data/mockData';

interface InteractiveMapProps {
  points?: PetaPointItem[];
  desaList?: DesaItem[];
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  points = INITIAL_PETA_POINTS,
  desaList = INITIAL_DESA
}) => {
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<'semua' | 'masjid' | 'wakaf'>('semua');
  const [selectedDesaFilter, setSelectedDesaFilter] = useState<string>('semua');
  const [activePoint, setActivePoint] = useState<PetaPointItem | null>(points[0] || null);

  const filteredPoints = points.filter((p) => {
    const matchesType = selectedTypeFilter === 'semua' || p.type === selectedTypeFilter;
    const matchesDesa = selectedDesaFilter === 'semua' || p.desaName === selectedDesaFilter;
    return matchesType && matchesDesa;
  });

  const masjidCount = points.filter((p) => p.type === 'masjid').length;
  const wakafCount = points.filter((p) => p.type === 'wakaf').length;

  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-5">
      
      {/* Header Minimalis */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-3">
        <div>
          <h2 className="text-xl font-bold font-serif text-slate-900">
            🗺️ Peta Titik Masjid & Tanah Wakaf
          </h2>
          <p className="text-xs text-slate-500">6 Desa Kecamatan Uluere Bantaeng</p>
        </div>

        {/* Clean Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
          <button
            onClick={() => setSelectedTypeFilter('semua')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              selectedTypeFilter === 'semua' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Semua ({points.length})
          </button>
          <button
            onClick={() => setSelectedTypeFilter('masjid')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              selectedTypeFilter === 'masjid' ? 'bg-emerald-800 text-white' : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
            }`}
          >
            🕌 Masjid ({masjidCount})
          </button>
          <button
            onClick={() => setSelectedTypeFilter('wakaf')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              selectedTypeFilter === 'wakaf' ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-900 border border-amber-200'
            }`}
          >
            📜 Wakaf ({wakafCount})
          </button>

          <select
            value={selectedDesaFilter}
            onChange={(e) => setSelectedDesaFilter(e.target.value)}
            className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none"
          >
            <option value="semua">Filter Desa: Semua</option>
            {desaList.map((d) => (
              <option key={d.id} value={d.name}>{d.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Grid: Left Location Cards vs Right Detail Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Location Points Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[460px] overflow-y-auto pr-1">
          {filteredPoints.map((point) => {
            const isSelected = activePoint?.id === point.id;
            const isMasjid = point.type === 'masjid';

            return (
              <div
                key={point.id}
                onClick={() => setActivePoint(point)}
                className={`p-4 rounded-2xl cursor-pointer transition-all border text-xs space-y-2 ${
                  isSelected
                    ? isMasjid
                      ? 'bg-emerald-950 text-white border-emerald-700 shadow-md ring-2 ring-emerald-500'
                      : 'bg-amber-950 text-white border-amber-700 shadow-md ring-2 ring-amber-500'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                    isMasjid
                      ? isSelected ? 'bg-emerald-800 text-emerald-200' : 'bg-emerald-100 text-emerald-800'
                      : isSelected ? 'bg-amber-800 text-amber-200' : 'bg-amber-100 text-amber-900'
                  }`}>
                    {isMasjid ? '🕌 SIMAS' : '📜 Wakaf AIW'}
                  </span>
                  <span className={`text-[10px] font-bold ${isSelected ? 'text-amber-300' : 'text-slate-500'}`}>
                    {point.desaName}
                  </span>
                </div>

                <h4 className="font-bold text-sm leading-snug">{point.name}</h4>
                <p className={`text-[11px] truncate ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  {point.alamat}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right: Clean Detail Card */}
        <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          {activePoint ? (
            <div className="space-y-3 text-xs">
              <div>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                  activePoint.type === 'masjid' ? 'bg-emerald-800 text-emerald-200' : 'bg-amber-800 text-amber-200'
                }`}>
                  {activePoint.type === 'masjid' ? 'Masjid SIMAS' : 'Aset Wakaf AIW'}
                </span>
                <h3 className="text-base font-bold text-white mt-1 font-serif">{activePoint.name}</h3>
                <p className="text-slate-400 text-[11px] mt-0.5">{activePoint.desaName} • {activePoint.alamat}</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                {activePoint.simasId && (
                  <div className="flex justify-between p-2 rounded-xl bg-slate-800">
                    <span className="text-slate-400">ID SIMAS:</span>
                    <strong className="font-mono text-emerald-400">{activePoint.simasId}</strong>
                  </div>
                )}

                {activePoint.aiwNumber && (
                  <div className="flex justify-between p-2 rounded-xl bg-slate-800">
                    <span className="text-slate-400">No. AIW KUA:</span>
                    <strong className="font-mono text-amber-400">{activePoint.aiwNumber}</strong>
                  </div>
                )}

                {activePoint.luasM2 && (
                  <div className="flex justify-between p-2 rounded-xl bg-slate-800">
                    <span className="text-slate-400">Luas Tanah:</span>
                    <strong className="text-white">{activePoint.luasM2} m²</strong>
                  </div>
                )}

                {activePoint.nazhirTakmirName && (
                  <div className="p-2 bg-slate-800 rounded-xl">
                    <span className="text-slate-400 block text-[10px]">Pengelola / Takmir:</span>
                    <strong className="text-white">{activePoint.nazhirTakmirName}</strong>
                  </div>
                )}
              </div>

              {activePoint.googleMapsUrl && (
                <button
                  onClick={() => window.open(activePoint.googleMapsUrl, '_blank')}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all mt-2"
                >
                  <Compass className="w-4 h-4 text-amber-300" />
                  <span>Petunjuk Jalan (Google Maps)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          ) : (
            <div className="text-slate-400 text-xs py-8 text-center">Pilih lokasi di sebelah kiri.</div>
          )}

          <div className="text-[10px] text-slate-400 text-center pt-2 border-t border-slate-800">
            Diverifikasi PPAIW & Bimas Islam KUA Uluere
          </div>
        </div>

      </div>

    </div>
  );
};

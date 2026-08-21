import React, { useState } from 'react';
import {
  BarChart3,
  Heart,
  Coins,
  Award,
  Users,
  Compass,
  MapPin,
  Search,
  Filter,
  ArrowRight
} from 'lucide-react';
import { InteractiveMap } from './InteractiveMap';
import {
  ZakatWakafDesa,
  HewanQurbanDesa,
  LokasiSholatIed,
  NikahBulananStats,
  DesaItem,
  PetaPointItem
} from '../types';
import {
  INITIAL_ZAKAT_WAKAF,
  INITIAL_HEWAN_QURBAN,
  INITIAL_LOKASI_SHOLAT_IED,
  INITIAL_NIKAH_BULANAN,
  INITIAL_DESA,
  INITIAL_PETA_POINTS
} from '../data/mockData';

interface InfografisPageProps {
  zakatWakafData?: ZakatWakafDesa[];
  hewanQurbanData?: HewanQurbanDesa[];
  lokasiSholatIedData?: LokasiSholatIed[];
  nikahBulananData?: NikahBulananStats[];
  petaPointsData?: PetaPointItem[];
  desaList?: DesaItem[];
}

export const InfografisPage: React.FC<InfografisPageProps> = ({
  zakatWakafData = INITIAL_ZAKAT_WAKAF,
  hewanQurbanData = INITIAL_HEWAN_QURBAN,
  lokasiSholatIedData = INITIAL_LOKASI_SHOLAT_IED,
  nikahBulananData = INITIAL_NIKAH_BULANAN,
  petaPointsData = INITIAL_PETA_POINTS,
  desaList = INITIAL_DESA
}) => {
  const [mainView, setMainView] = useState<'grafik' | 'peta' | 'sholat_ied'>('grafik');
  const [grafikSubCategory, setGrafikSubCategory] = useState<'semua' | 'nikah' | 'zakat_wakaf' | 'qurban'>('semua');

  const [selectedDesaFilter, setSelectedDesaFilter] = useState<string>('semua');
  const [sholatIedSearch, setSholatIedSearch] = useState<string>('');

  // Totals
  const totalZakatFitrahJiwa = zakatWakafData.reduce((acc, curr) => acc + curr.zakatFitrahJiwa, 0);
  const totalZakatMalRupiah = zakatWakafData.reduce((acc, curr) => acc + curr.zakatMalRupiah, 0);
  const totalWakafAiw = zakatWakafData.reduce((acc, curr) => acc + curr.wakafAiwCount, 0);
  const totalSapi = hewanQurbanData.reduce((acc, curr) => acc + curr.sapiCount, 0);
  const totalKambing = hewanQurbanData.reduce((acc, curr) => acc + curr.kambingCount, 0);
  const totalNikahTahun = nikahBulananData.reduce((acc, curr) => acc + curr.total, 0);
  const totalPetaPoints = petaPointsData.length;

  const maxZakatMal = Math.max(...zakatWakafData.map((d) => d.zakatMalRupiah));
  const maxHewanCount = Math.max(...hewanQurbanData.map((d) => Math.max(d.sapiCount, d.kambingCount)));
  const maxNikahMonth = Math.max(...nikahBulananData.map((d) => d.total));

  const filteredLokasiSholat = lokasiSholatIedData.filter((item) => {
    const matchesDesa = selectedDesaFilter === 'semua' || item.desaName === selectedDesaFilter;
    const matchesSearch =
      item.namaLokasi.toLowerCase().includes(sholatIedSearch.toLowerCase()) ||
      item.khatib.toLowerCase().includes(sholatIedSearch.toLowerCase()) ||
      item.desaName.toLowerCase().includes(sholatIedSearch.toLowerCase());
    return matchesDesa && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Top Banner Minimalis */}
      <section className="bg-emerald-950 text-white py-6 px-4 sm:px-6 lg:px-8 border-b border-emerald-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold font-serif text-white">
              📊 Data Transparan KUA Uluere
            </h1>
            <p className="text-xs text-emerald-300">Statistik Keagamaan & Pemetaan Digital 6 Desa</p>
          </div>

          {/* Clean Top View Selector (Only 3 Simple Buttons) */}
          <div className="bg-emerald-900/90 p-1.5 rounded-2xl border border-emerald-700 flex items-center gap-1">
            <button
              onClick={() => setMainView('grafik')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                mainView === 'grafik' ? 'bg-amber-400 text-slate-950 shadow-sm' : 'text-emerald-100 hover:bg-emerald-800'
              }`}
            >
              📊 Grafik & Data
            </button>
            <button
              onClick={() => setMainView('peta')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                mainView === 'peta' ? 'bg-amber-400 text-slate-950 shadow-sm' : 'text-emerald-100 hover:bg-emerald-800'
              }`}
            >
              🗺️ Peta Digital
            </button>
            <button
              onClick={() => setMainView('sholat_ied')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                mainView === 'sholat_ied' ? 'bg-amber-400 text-slate-950 shadow-sm' : 'text-emerald-100 hover:bg-emerald-800'
              }`}
            >
              🕌 Sholat Ied
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* VIEW 1: GRAFIK & DATA */}
        {mainView === 'grafik' && (
          <div className="space-y-6">
            
            {/* Filter Bar Single Line */}
            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-500">Tampilkan:</span>
                <select
                  value={grafikSubCategory}
                  onChange={(e) => setGrafikSubCategory(e.target.value as any)}
                  className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-xl font-bold text-slate-800 focus:outline-none"
                >
                  <option value="semua">Semua Ringkasan Data</option>
                  <option value="nikah">💍 Peristiwa Nikah ({totalNikahTahun})</option>
                  <option value="zakat_wakaf">🌾 Zakat & Wakaf AIW</option>
                  <option value="qurban">🐄 Hewan Qurban ({totalSapi} Sapi)</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <select
                  value={selectedDesaFilter}
                  onChange={(e) => setSelectedDesaFilter(e.target.value)}
                  className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-xl font-bold text-slate-800 focus:outline-none"
                >
                  <option value="semua">Filter: Semua 6 Desa</option>
                  {desaList.map((d) => (
                    <option key={d.id} value={d.name}>{d.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* 4 Minimal Metric Cards */}
            {(grafikSubCategory === 'semua') && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div
                  onClick={() => setGrafikSubCategory('nikah')}
                  className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-emerald-500 cursor-pointer shadow-sm"
                >
                  <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase">
                    <span>Peristiwa Nikah</span>
                    <Heart className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-black text-slate-900 mt-2 font-serif">
                    {totalNikahTahun} <span className="text-xs font-sans text-slate-500 font-normal">Pasang</span>
                  </div>
                </div>

                <div
                  onClick={() => setGrafikSubCategory('zakat_wakaf')}
                  className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-amber-500 cursor-pointer shadow-sm"
                >
                  <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase">
                    <span>Zakat Fitrah</span>
                    <Coins className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="text-2xl font-black text-slate-900 mt-2 font-serif">
                    {totalZakatFitrahJiwa.toLocaleString('id-ID')} <span className="text-xs font-sans text-slate-500 font-normal">Jiwa</span>
                  </div>
                </div>

                <div
                  onClick={() => setGrafikSubCategory('zakat_wakaf')}
                  className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-teal-500 cursor-pointer shadow-sm"
                >
                  <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase">
                    <span>Wakaf Ber-AIW</span>
                    <Award className="w-4 h-4 text-teal-600" />
                  </div>
                  <div className="text-2xl font-black text-slate-900 mt-2 font-serif">
                    {totalWakafAiw} <span className="text-xs font-sans text-slate-500 font-normal">Bidang</span>
                  </div>
                </div>

                <div
                  onClick={() => setGrafikSubCategory('qurban')}
                  className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-indigo-500 cursor-pointer shadow-sm"
                >
                  <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase">
                    <span>Hewan Qurban</span>
                    <Users className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div className="text-2xl font-black text-slate-900 mt-2 font-serif">
                    {totalSapi} Sapi <span className="text-xs font-sans text-slate-400 font-normal">/ {totalKambing} Kambing</span>
                  </div>
                </div>

              </div>
            )}

            {/* Sub-view: Nikah */}
            {(grafikSubCategory === 'semua' || grafikSubCategory === 'nikah') && (
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="font-bold text-sm text-slate-900">📈 Tren Nikah Bulanan (2026)</h3>
                  <div className="flex items-center gap-3 text-xs font-bold">
                    <span className="flex items-center gap-1 text-emerald-700"><span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span> Kantor (Rp0)</span>
                    <span className="flex items-center gap-1 text-amber-700"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Luar Kantor</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {nikahBulananData.map((item) => {
                    const percentKantor = Math.round((item.diKantor / maxNikahMonth) * 100);
                    const percentLuar = Math.round((item.luarKantor / maxNikahMonth) * 100);

                    return (
                      <div key={item.bulan} className="space-y-1">
                        <div className="flex justify-between text-xs font-bold text-slate-700">
                          <span>{item.bulan}</span>
                          <span className="font-mono text-emerald-800">{item.total} Pasang</span>
                        </div>
                        <div className="h-3.5 bg-slate-100 rounded-full overflow-hidden flex gap-0.5 border border-slate-200">
                          <div style={{ width: `${percentKantor}%` }} className="bg-emerald-600 h-full"></div>
                          <div style={{ width: `${percentLuar}%` }} className="bg-amber-400 h-full"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Sub-view: Zakat & Wakaf */}
            {(grafikSubCategory === 'semua' || grafikSubCategory === 'zakat_wakaf') && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
                  <h3 className="font-bold text-sm text-slate-900">🌾 Zakat Fitrah & Mal per Desa</h3>

                  <div className="space-y-2">
                    {zakatWakafData
                      .filter((d) => selectedDesaFilter === 'semua' || d.desaName === selectedDesaFilter)
                      .map((item) => {
                        const percentRupiah = Math.round((item.zakatMalRupiah / maxZakatMal) * 100);

                        return (
                          <div key={item.desaId} className="p-3 bg-slate-50 rounded-xl space-y-1 text-xs">
                            <div className="flex justify-between font-bold text-slate-900">
                              <span>{item.desaName}</span>
                              <span className="text-emerald-800 font-mono">Rp {item.zakatMalRupiah.toLocaleString('id-ID')}</span>
                            </div>
                            <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                              <div style={{ width: `${percentRupiah}%` }} className="bg-emerald-600 h-full"></div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 space-y-3 text-xs">
                  <h3 className="font-bold text-sm text-white">📜 Legalitas Wakaf AIW</h3>
                  
                  <div className="p-3 bg-slate-800 rounded-xl flex justify-between">
                    <span>Ber-AIW KUA</span>
                    <strong className="text-amber-400 font-mono">{totalWakafAiw} Bidang</strong>
                  </div>
                  <div className="p-3 bg-slate-800 rounded-xl flex justify-between">
                    <span>Sertifikat BPN</span>
                    <strong className="text-emerald-400 font-mono">{zakatWakafData.reduce((a, b) => a + b.wakafSertifikatCount, 0)} Bidang</strong>
                  </div>
                </div>
              </div>
            )}

            {/* Sub-view: Qurban */}
            {(grafikSubCategory === 'semua' || grafikSubCategory === 'qurban') && (
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <h3 className="font-bold text-sm text-slate-900">🐄 Perolehan Qurban Idul Adha</h3>
                  <div className="text-xs font-bold text-slate-600">Total: {totalSapi} Sapi / {totalKambing} Kambing</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                  {hewanQurbanData
                    .filter((d) => selectedDesaFilter === 'semua' || d.desaName === selectedDesaFilter)
                    .map((item) => (
                      <div key={item.desaId} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                        <strong className="font-bold text-slate-900 block">{item.desaName}</strong>
                        <div className="flex justify-between text-indigo-900 font-bold">
                          <span>Sapi: {item.sapiCount}</span>
                          <span>Kambing: {item.kambingCount}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

          </div>
        )}

        {/* VIEW 2: PETA DIGITAL */}
        {mainView === 'peta' && (
          <InteractiveMap points={petaPointsData} desaList={desaList} />
        )}

        {/* VIEW 3: SHOLAT IED */}
        {mainView === 'sholat_ied' && (
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <h3 className="font-bold text-sm text-slate-900">🕌 Titik Lokasi Sholat Idul Fitri & Adha</h3>

              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari lokasi, khatib..."
                  value={sholatIedSearch}
                  onChange={(e) => setSholatIedSearch(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 bg-slate-100 rounded-xl text-xs focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              {filteredLokasiSholat.map((lokasi) => (
                <div key={lokasi.id} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                  <div className="flex justify-between items-start">
                    <strong className="font-bold text-slate-900">{lokasi.namaLokasi}</strong>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                      {lokasi.desaName}
                    </span>
                  </div>
                  <div className="text-slate-600">Khatib: <strong className="text-slate-800">{lokasi.khatib}</strong></div>
                  <div className="text-slate-600">Imam: <strong className="text-slate-800">{lokasi.imam}</strong></div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

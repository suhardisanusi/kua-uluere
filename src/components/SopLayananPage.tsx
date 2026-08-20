import React, { useState, useMemo } from 'react';
import { SP_SOP_KUA_DATA, KUA_SP_CATEGORIES } from '../data/spSopData';
import { SpSopKuaItem } from '../types';
import {
  FileText,
  Search,
  CheckCircle,
  Clock,
  ShieldCheck,
  Award,
  ChevronRight,
  Printer,
  Sparkles,
  Info,
  X,
  Phone,
  LayoutGrid,
  List,
  BookOpen,
  Filter,
  ExternalLink,
  Building2,
  Check
} from 'lucide-react';

interface SopLayananPageProps {
  onNavigateTab?: (tab: string) => void;
}

export const SopLayananPage: React.FC<SopLayananPageProps> = ({ onNavigateTab }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedSop, setSelectedSop] = useState<SpSopKuaItem | null>(null);

  // Filtered SOP data
  const filteredData = useMemo(() => {
    return SP_SOP_KUA_DATA.filter((item) => {
      const matchCat = selectedCategory === 'ALL' || item.categoryLetter === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.no.toString() === q ||
        item.title.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.categoryGroup.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.legalBasis.toLowerCase().includes(q) ||
        item.requirements.some((r) => r.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Top Header Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 text-white p-6 sm:p-10 shadow-2xl border border-emerald-800/50">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-800/80 border border-emerald-700 text-emerald-200 text-xs font-bold flex items-center gap-1.5 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Standar Regulasi Kemenag RI</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
                KMA No. 841 Tahun 2024 & PMA No. 20/2019
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white flex items-center gap-3">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400 shrink-0" />
                <span>48 Standar Pelayanan (SP) & SOP KUA</span>
              </h1>
              <p className="text-sm sm:text-base text-emerald-100 max-w-3xl leading-relaxed">
                Daftar lengkap 48 Standar Pelayanan dan Standar Operasional Prosedur (SOP) resmi Kantor Urusan Agama (KUA) Kecamatan Uluere, Kabupaten Bantaeng. Transparan, kepastian hukum, bebas pungli, dan 100% melayani sepenuh hati.
              </p>
            </div>

            {/* Metric Overview Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-emerald-800/60 text-xs">
              <div className="bg-emerald-900/60 p-3 rounded-2xl border border-emerald-700/50">
                <span className="text-emerald-400 font-semibold block text-[11px]">Total Standar Pelayanan:</span>
                <span className="text-xl font-bold text-white font-mono">48 SP & SOP</span>
              </div>
              <div className="bg-emerald-900/60 p-3 rounded-2xl border border-emerald-700/50">
                <span className="text-emerald-400 font-semibold block text-[11px]">Kategori Utama:</span>
                <span className="text-xl font-bold text-amber-300 font-mono">9 Kelompok (A-I)</span>
              </div>
              <div className="bg-emerald-900/60 p-3 rounded-2xl border border-emerald-700/50">
                <span className="text-emerald-400 font-semibold block text-[11px]">Tarif Resmi KUA:</span>
                <span className="text-xl font-bold text-emerald-300 font-mono">Rp 0,- (GRATIS)</span>
              </div>
              <div className="bg-emerald-900/60 p-3 rounded-2xl border border-emerald-700/50">
                <span className="text-emerald-400 font-semibold block text-[11px]">Akad Luar KUA/Libur:</span>
                <span className="text-xl font-bold text-amber-400 font-mono">Rp 600.000 (Kas Negara)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border border-slate-200 space-y-4">
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari berdasarkan nomor (1-48), nama layanan, kata kunci berkas, atau regulasi..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 text-xs sm:text-sm rounded-2xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Layout Toggle & Print */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    viewMode === 'grid'
                      ? 'bg-white text-emerald-800 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Grid Kartu</span>
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    viewMode === 'table'
                      ? 'bg-white text-emerald-800 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <List className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Tabel Regulasi</span>
                </button>
              </div>

              <button
                onClick={handlePrint}
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                title="Cetak Standar Pelayanan"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Cetak SOP</span>
              </button>
            </div>
          </div>

          {/* Category Filter Pills (A - I) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                selectedCategory === 'ALL'
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>Semua 48 Layanan</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${selectedCategory === 'ALL' ? 'bg-emerald-700 text-amber-300' : 'bg-slate-200 text-slate-700'}`}>
                48
              </span>
            </button>

            {KUA_SP_CATEGORIES.map((cat) => (
              <button
                key={cat.letter}
                onClick={() => setSelectedCategory(cat.letter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                  selectedCategory === cat.letter
                    ? 'bg-emerald-800 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span className="font-mono text-amber-500 font-bold">{cat.letter}.</span>
                <span>{cat.name}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${selectedCategory === cat.letter ? 'bg-emerald-700 text-amber-300' : 'bg-slate-200 text-slate-700'}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

        </div>

        {/* Results Stats */}
        <div className="flex items-center justify-between text-xs text-slate-500 px-1">
          <span>Menampilkan <strong>{filteredData.length}</strong> dari total 48 Standar Pelayanan KUA</span>
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="text-emerald-700 hover:underline font-bold">
              Reset Pencarian
            </button>
          )}
        </div>

        {/* GRID VIEW */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredData.map((item) => (
              <div
                key={item.no}
                className="bg-white rounded-3xl p-5 border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group cursor-pointer"
                onClick={() => setSelectedSop(item)}
              >
                <div className="space-y-3">
                  
                  {/* Card Header Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-7 h-7 rounded-xl bg-emerald-900 text-amber-400 font-mono font-bold text-xs flex items-center justify-center shadow-inner">
                        {item.no}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-mono font-bold uppercase">
                        {item.code}
                      </span>
                    </div>

                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-semibold">
                      Kelompok {item.categoryLetter}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Requirements Snippet */}
                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Persyaratan Utama ({item.requirements.length}):
                    </span>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {item.requirements.slice(0, 2).map((req, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] line-clamp-1">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                      {item.requirements.length > 2 && (
                        <span className="text-[10px] text-emerald-700 font-bold block pt-0.5">
                          + {item.requirements.length - 2} syarat lainnya...
                        </span>
                      )}
                    </ul>
                  </div>

                </div>

                {/* Card Footer Details */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      <span>{item.duration}</span>
                    </span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {item.cost.includes('Rp 0') ? 'Rp 0,- (Gratis)' : item.cost.split('/')[0]}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1 font-bold text-emerald-800 group-hover:translate-x-1 transition-transform">
                    <span>Lihat Detail SOP Lengkap</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* TABLE VIEW */}
        {viewMode === 'table' && (
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold text-[11px] uppercase tracking-wider">
                    <th className="py-3.5 px-4 font-mono w-12 text-center">No</th>
                    <th className="py-3.5 px-4 font-mono w-28">Kode SOP</th>
                    <th className="py-3.5 px-4">Nama Standar Pelayanan (SP)</th>
                    <th className="py-3.5 px-4">Dasar Hukum Regulasi</th>
                    <th className="py-3.5 px-4 w-28">Jangka Waktu</th>
                    <th className="py-3.5 px-4 w-32">Tarif / Biaya</th>
                    <th className="py-3.5 px-4 text-center w-24">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredData.map((item, idx) => (
                    <tr key={item.no} className="hover:bg-emerald-50/50 transition-colors group">
                      <td className="py-3 px-4 font-mono font-bold text-center text-slate-700 bg-slate-50/50">
                        {item.no}
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-emerald-800">
                        {item.code}
                      </td>
                      <td className="py-3 px-4">
                        <strong className="text-slate-900 font-bold block text-xs group-hover:text-emerald-800 transition-colors">
                          {item.title}
                        </strong>
                        <span className="text-[11px] text-slate-500 block mt-0.5 line-clamp-1">
                          {item.description}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-[11px] text-slate-600 max-w-xs">
                        {item.legalBasis}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-mono text-slate-700 whitespace-nowrap">
                        {item.duration}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-bold text-emerald-800 whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900">
                          {item.cost.includes('Rp 0') ? 'Rp 0,- (Gratis)' : item.cost.split('/')[0]}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => setSelectedSop(item)}
                          className="px-2.5 py-1 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg text-[11px] font-bold shadow-sm transition-colors"
                        >
                          Detail SOP
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredData.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
            <Info className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="font-bold text-slate-800 text-base">Tidak ada Standar Pelayanan yang cocok</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Coba ubah kata kunci pencarian atau pilih kategori kelompok A-I lainnya.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-emerald-800 text-white text-xs font-bold rounded-xl hover:bg-emerald-700"
            >
              Tampilkan Semua 48 SP & SOP
            </button>
          </div>
        )}

      </div>

      {/* INTERACTIVE DETAIL MODAL */}
      {selectedSop && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-lg bg-emerald-950 text-amber-400 font-mono font-bold text-xs">
                    No. {selectedSop.no}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-emerald-100 text-emerald-900 text-xs font-mono font-bold border border-emerald-200">
                    {selectedSop.code}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-xs font-semibold">
                    Kelompok {selectedSop.categoryLetter}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug pt-1">
                  {selectedSop.title}
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  {selectedSop.categoryGroup}
                </p>
              </div>

              <button
                onClick={() => setSelectedSop(null)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-5 text-xs">
              
              {/* Description */}
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Deskripsi Ruang Lingkup Layanan:</h4>
                <p className="text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  {selectedSop.description}
                </p>
              </div>

              {/* Legal Basis */}
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Dasar Hukum Regulasi Kementerian Agama:</h4>
                <p className="text-emerald-900 font-semibold leading-relaxed bg-emerald-50/70 p-3 rounded-2xl border border-emerald-200 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{selectedSop.legalBasis}</span>
                </p>
              </div>

              {/* Requirements List */}
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Persyaratan Dokumen & Berkas:</h4>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                  {selectedSop.requirements.map((req, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Output, Duration & Cost Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-slate-900 text-white p-3.5 rounded-2xl space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Hasil / Produk Output:</span>
                  <span className="font-bold text-amber-300 text-xs block leading-snug">{selectedSop.output}</span>
                </div>

                <div className="bg-slate-900 text-white p-3.5 rounded-2xl space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Waktu Penyelesaian:</span>
                  <span className="font-bold text-emerald-300 text-xs block leading-snug font-mono">{selectedSop.duration}</span>
                </div>

                <div className="bg-slate-900 text-white p-3.5 rounded-2xl space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Biaya / Tarif Resmi:</span>
                  <span className="font-bold text-white text-xs block leading-snug">{selectedSop.cost}</span>
                </div>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 pt-4">
              <a
                href={`https://wa.me/6281242345678?text=Assalamu%20alaikum%20Staf%20KUA%20Uluere,%20saya%20ingin%20bertanya%20mengenai%20${encodeURIComponent(selectedSop.title)}...`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>Konsultasi Layanan Ini via WhatsApp</span>
              </a>

              <button
                onClick={() => setSelectedSop(null)}
                className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
              >
                Tutup Detail
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

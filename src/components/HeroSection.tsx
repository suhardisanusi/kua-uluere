import React, { useState, useEffect } from 'react';
import { BannerAnnouncement } from '../types';
import { Search, ChevronLeft, ChevronRight, FileCheck2, HeartHandshake, BookOpen, MessageSquare, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  banners: BannerAnnouncement[];
  onQuickSearch: (query: string) => void;
  onNavigateTab: (tab: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  banners,
  onQuickSearch,
  onNavigateTab
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSearch, setActiveSearch] = useState('');

  const activeBanners = banners.filter((b) => b.active);

  useEffect(() => {
    if (activeBanners.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activeBanners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [activeBanners.length]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeSearch.trim()) {
      onQuickSearch(activeSearch);
    }
  };

  const current = activeBanners[currentSlide] || activeBanners[0];

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      
      {/* Background Banner Carousel */}
      <div className="absolute inset-0 z-0">
        <img
          src={current?.imageUrl || 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1600&auto=format&fit=crop&q=80'}
          alt="Hero Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 transition-all duration-1000 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-emerald-950/70" />
      </div>

      {/* Decorative Islamic Geometric Pattern Borders */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-600 via-amber-400 to-emerald-600 z-10" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-24">
        
        {/* Top Announcement Badge & Running Text */}
        <div className="mb-6 flex flex-col md:flex-row items-stretch md:items-center gap-3">
          <div className="bg-amber-500 text-emerald-950 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shrink-0 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Info Resmi KUA</span>
          </div>
          <div className="bg-emerald-950/80 backdrop-blur border border-emerald-800/80 text-emerald-100 text-xs px-3.5 py-1.5 rounded-lg flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
              <span>📌 <strong>SIMKAH Web:</strong> Pendaftaran Nikah KUA Uluere wajib 10 hari kerja sebelum akad.</span>
              <span>• 📌 <strong>Transparansi Biaya:</strong> Nikah di KUA jam kerja Rp 0 (GRATIS), luar kantor/libur Rp 600.000 via MPN G2.</span>
              <span>• 📌 <strong>Bimbingan Manasik Haji:</strong> Pendaftaran kelompok manasik haji KUA Uluere dibuka setiap hari kerja.</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Title & Description */}
          <div className="lg:col-span-8 space-y-5">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/70 text-emerald-200 text-xs font-semibold border border-emerald-700/60 backdrop-blur">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              <span>Sistem Informasi Terpadu KUA Uluere Bantaeng</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-serif text-white leading-tight tracking-tight">
              {current?.title || 'Portal Resmi KUA Uluere'}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
              {current?.subtitle || 'Layanan Administrasi Pernikahan, Wakaf, Bimbingan Manasik Haji, dan Konsultasi Islam Berintegritas Tinggi untuk Masyarakat Kecamatan Uluere, Kab. Bantaeng.'}
            </p>

            {/* Quick Access Search Box */}
            <form onSubmit={handleSearchSubmit} className="pt-2 max-w-2xl">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 absolute left-4 text-emerald-600" />
                <input
                  type="text"
                  value={activeSearch}
                  onChange={(e) => setActiveSearch(e.target.value)}
                  placeholder="Ketik informasi yang Anda cari (contoh: Syarat Nikah, Biaya PNBP, Wakaf, Jadwal Haji)..."
                  className="w-full pl-12 pr-28 py-3.5 bg-white text-slate-800 placeholder-slate-400 rounded-2xl text-xs sm:text-sm font-medium shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-400/50 transition-all border border-slate-200"
                />
                <button
                  type="submit"
                  className="absolute right-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors shadow-md flex items-center gap-1.5"
                >
                  <span>Cari Info</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {/* Hero Quick Action Cards */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <button
                onClick={() => onNavigateTab('layanan-nikah')}
                className="p-3 rounded-xl bg-slate-800/80 hover:bg-emerald-900/90 border border-slate-700 hover:border-emerald-600 transition-all text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-600/30 text-emerald-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <FileCheck2 className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs text-white">Daftar Nikah</div>
                <div className="text-[10px] text-slate-400">SIMKAH & Tarif PNBP</div>
              </button>

              <button
                onClick={() => onNavigateTab('layanan-wakaf')}
                className="p-3 rounded-xl bg-slate-800/80 hover:bg-emerald-900/90 border border-slate-700 hover:border-emerald-600 transition-all text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs text-white">Akta Wakaf</div>
                <div className="text-[10px] text-slate-400">Pengurusan AIW Gratis</div>
              </button>

              <button
                onClick={() => onNavigateTab('layanan-haji')}
                className="p-3 rounded-xl bg-slate-800/80 hover:bg-emerald-900/90 border border-slate-700 hover:border-emerald-600 transition-all text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-600/30 text-emerald-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs text-white">Manasik Haji</div>
                <div className="text-[10px] text-slate-400">Bimbingan Kecamatan</div>
              </button>

              <button
                onClick={() => onNavigateTab('pengaduan')}
                className="p-3 rounded-xl bg-slate-800/80 hover:bg-emerald-900/90 border border-slate-700 hover:border-emerald-600 transition-all text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs text-white">Konsultasi WA</div>
                <div className="text-[10px] text-slate-400">Pengaduan & Tanya Jawab</div>
              </button>
            </div>

          </div>

          {/* Carousel Navigator / Card Highlights */}
          <div className="lg:col-span-4 bg-slate-800/90 backdrop-blur rounded-2xl p-6 border border-slate-700 shadow-2xl space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-700 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Highlight Kantor
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + activeBanners.length) % activeBanners.length)}
                  className="p-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono px-2 text-slate-400">
                  {currentSlide + 1}/{activeBanners.length}
                </span>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % activeBanners.length)}
                  className="p-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-sm text-white line-clamp-2">
                {current?.title}
              </h3>
              <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                {current?.subtitle}
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigateTab('profil-sejarah')}
                className="w-full py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Selengkapnya tentang KUA Uluere</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

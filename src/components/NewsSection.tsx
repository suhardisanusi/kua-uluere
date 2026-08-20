import React, { useState } from 'react';
import { NewsItem } from '../types';
import { Newspaper, Calendar, Eye, User, Search, Tag, X, ChevronRight, Share2, ExternalLink, Sparkles } from 'lucide-react';

interface NewsSectionProps {
  newsList: NewsItem[];
  searchQuery: string;
  maxItems?: number;
  onNavigateTab?: (tab: string) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ newsList, searchQuery, maxItems, onNavigateTab }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedYear, setSelectedYear] = useState<string>('Semua');
  const [activeNews, setActiveNews] = useState<NewsItem | null>(null);

  const categories = ['Semua', 'Kegiatan', 'Pengumuman', 'Edukasi Syariah', 'Khutbah'];
  
  // Extract unique years from news items dynamically
  const extractedYears = Array.from(
    new Set(
      newsList.map((item) =>
        String(item.year || item.date.match(/\d{4}/)?.[0] || '2026')
      )
    )
  ).sort((a, b) => Number(b) - Number(a));

  const years = ['Semua', ...extractedYears];

  const filteredNews = newsList.filter((item) => {
    const itemYear = String(item.year || item.date.match(/\d{4}/)?.[0] || '2026');
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesYear = selectedYear === 'Semua' || itemYear === selectedYear;
    const matchesSearch =
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesYear && matchesSearch;
  });

  const displayedNews = maxItems ? filteredNews.slice(0, maxItems) : filteredNews;
  const featuredNews = displayedNews[0];
  const secondaryNews = displayedNews.slice(1, 6);
  const remainingNews = maxItems ? [] : filteredNews.slice(6);

  return (
    <section id="berita" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1 flex items-center gap-1.5">
              <Newspaper className="w-4 h-4" />
              <span>Publikasi & Edukasi Keagamaan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              Berita & Pengumuman KUA Uluere
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Arsip berita kegiatan kantor, bimbingan keluarga sakinah, khutbah Jumat, dan sosialisasi program Kemenag Bantaeng dari tahun ke tahun.
            </p>
          </div>
        </div>

        {/* Opsi 1: Minimalist Horizontal Tab Bar (Tanpa Kotak Abu-abu Bulky) */}
        {!maxItems && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-2 mb-8 overflow-x-auto">
            {/* Category Tabs with Bottom Border Indicator */}
            <div className="flex items-center gap-6 overflow-x-auto scrollbar-none shrink-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-bold transition-all relative pb-3 -mb-2 ${
                    selectedCategory === cat
                      ? 'text-emerald-800 border-b-2 border-emerald-700'
                      : 'text-slate-500 hover:text-slate-900 border-b-2 border-transparent'
                  }`}
                >
                  {cat === 'Semua' ? 'Semua Kategori' : cat}
                </button>
              ))}
            </div>

            {/* Year Selector Capsule Dropdown */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                <span>Arsip Tahun:</span>
              </span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-colors cursor-pointer"
              >
                {years.map((yr) => (
                  <option key={yr} value={yr}>
                    {yr === 'Semua' ? 'Semua Tahun' : `Tahun ${yr}`}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Magazine Highlight Layout Section */}
        {displayedNews.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <Search className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-600">Tidak ada berita ditemukan</p>
            <p className="text-xs text-slate-400 mt-1">Coba gunakan kata kunci pencarian lain atau pilih kategori Semua.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Featured Highlight News Card (7 cols) */}
              {featuredNews && (
                <article
                  onClick={() => setActiveNews(featuredNews)}
                  className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl transition-all cursor-pointer overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Featured Large Cover Image */}
                    <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-slate-900">
                      <img
                        src={featuredNews.imageUrl}
                        alt={featuredNews.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 bg-amber-400 text-emerald-950 font-black text-xs rounded-xl shadow uppercase tracking-wider flex items-center gap-1 border border-amber-300">
                          <Sparkles className="w-3.5 h-3.5 fill-current" />
                          <span>Berita Utama</span>
                        </span>
                        <span className="px-3 py-1 bg-emerald-900/90 text-amber-300 backdrop-blur rounded-xl text-xs font-bold uppercase tracking-wider shadow">
                          {featuredNews.category}
                        </span>
                      </div>

                      {/* Floating Bottom Card Meta & Title Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 text-white space-y-2">
                        <div className="flex items-center gap-3 text-xs text-emerald-200 font-medium">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-amber-400" />
                            {featuredNews.date}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5 text-emerald-300" />
                            {featuredNews.views} dibaca
                          </span>
                        </div>

                        <h3 className="font-bold text-xl sm:text-2xl font-serif text-white group-hover:text-amber-300 transition-colors leading-snug line-clamp-2">
                          {featuredNews.title}
                        </h3>
                      </div>
                    </div>

                    {/* Summary Description */}
                    <div className="p-6 space-y-3">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {featuredNews.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100 text-xs font-semibold text-emerald-800">
                    <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                      <User className="w-4 h-4 text-emerald-600" />
                      <span>Penulis: {featuredNews.author}</span>
                    </span>
                    <span className="px-4 py-2 bg-emerald-800 group-hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow">
                      <span>Baca Artikel Utama</span>
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              )}

              {/* Right Column: 5 Secondary Compact News Cards (5 cols) */}
              <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-slate-800 flex items-center gap-1.5 font-serif">
                    <Newspaper className="w-4 h-4 text-emerald-700" />
                    <span>Kabar Terkini Lainnya ({secondaryNews.length})</span>
                  </h4>
                  <span className="text-[11px] text-emerald-700 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Terbaru</span>
                </div>

                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  {secondaryNews.map((news) => (
                    <article
                      key={news.id}
                      onClick={() => setActiveNews(news)}
                      className="p-3 sm:p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all cursor-pointer flex gap-3.5 items-center group"
                    >
                      <div className="relative w-24 h-20 sm:w-28 sm:h-22 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                        <img
                          src={news.imageUrl}
                          alt={news.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <span className="absolute top-1 left-1 px-1.5 py-0.5 bg-emerald-950/85 text-amber-300 rounded text-[9px] font-bold uppercase tracking-wider shadow">
                          {news.category}
                        </span>
                      </div>

                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                          <span>{news.date}</span>
                          <span>•</span>
                          <span>{news.views} dibaca</span>
                        </div>

                        <h5 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-2 leading-snug">
                          {news.title}
                        </h5>

                        <p className="text-[11px] text-slate-500 line-clamp-1">
                          {news.summary}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

            </div>

            {/* Additional Secondary Grid for Full News Page (if any) */}
            {remainingNews.length > 0 && (
              <div className="mt-12 space-y-6">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <h4 className="font-bold text-base text-slate-900 font-serif">
                    Arsip Publikasi Lainnya ({remainingNews.length})
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {remainingNews.map((news) => (
                    <article
                      key={news.id}
                      onClick={() => setActiveNews(news)}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between overflow-hidden group"
                    >
                      <div>
                        <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                          <img
                            src={news.imageUrl}
                            alt={news.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-1 bg-emerald-900/90 text-amber-300 backdrop-blur rounded-lg text-[10px] font-bold uppercase tracking-wider shadow">
                              {news.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-5 space-y-3">
                          <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                              {news.date}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Eye className="w-3.5 h-3.5 text-slate-400" />
                              {news.views} dibaca
                            </span>
                          </div>

                          <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-2 leading-snug">
                            {news.title}
                          </h3>

                          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                            {news.summary}
                          </p>
                        </div>
                      </div>

                      <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-100 text-xs font-semibold text-emerald-800">
                        <span className="flex items-center gap-1 text-slate-500 font-normal">
                          <User className="w-3.5 h-3.5 text-emerald-600" />
                          {news.author}
                        </span>
                        <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>Baca Selengkapnya</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* View All Button when limited by maxItems */}
            {maxItems && onNavigateTab && (
              <div className="text-center mt-10">
                <button
                  onClick={() => {
                    onNavigateTab('berita');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-2xl font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all border border-emerald-700"
                >
                  <Newspaper className="w-4 h-4 text-amber-400" />
                  <span>Lihat Semua Berita & Arsip Publikasi ({newsList.length})</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}

      </div>

      {/* Full Article Reader Modal */}
      {activeNews && (
        <div className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-slate-800 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[92vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full uppercase tracking-wider">
                  {activeNews.category}
                </span>
                <span className="text-xs text-slate-400">{activeNews.date}</span>
              </div>
              <button
                onClick={() => setActiveNews(null)}
                className="p-2 hover:bg-slate-100 rounded-xl text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <h1 className="text-xl sm:text-3xl font-bold font-serif text-slate-900 leading-tight mb-4">
              {activeNews.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-4 mb-6 border-b border-slate-100">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <User className="w-4 h-4 text-emerald-600" />
                Penulis: {activeNews.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-slate-400" />
                {activeNews.views + 1} Pembaca
              </span>
              <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <Tag className="w-4 h-4" />
                KUA Uluere Bantaeng
              </span>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden mb-6 max-h-80 w-full bg-slate-100 shadow-md">
              <img
                src={activeNews.imageUrl}
                alt={activeNews.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Body */}
            <div className="prose max-w-none text-slate-700 text-sm leading-relaxed whitespace-pre-line space-y-4 font-normal">
              {activeNews.content}
            </div>

            {/* Original Source Attribution Box */}
            {activeNews.sourceName && (
              <div className="mt-6 p-4 bg-emerald-50 rounded-2xl border border-emerald-200/80 text-xs text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-600 block text-[11px]">Sumber Berita Resmi & Terverifikasi:</span>
                    <span className="font-bold text-emerald-900 text-xs">{activeNews.sourceName}</span>
                  </div>
                </div>
                {activeNews.sourceUrl && (
                  <a
                    href={activeNews.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm shrink-0"
                  >
                    <span>Kunjungi Sumber Asli</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Diunggah oleh Humas KUA Kecamatan Uluere, Kab. Bantaeng
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Tautan berita berhasil disalin ke clipboard!');
                  }}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Bagikan Berita</span>
                </button>
                <button
                  onClick={() => setActiveNews(null)}
                  className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-colors"
                >
                  Tutup Artikel
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

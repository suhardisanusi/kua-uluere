import React, { useState } from 'react';
import { NewsItem } from '../types';
import { Newspaper, Calendar, Eye, User, Search, Tag, X, ChevronRight, Share2 } from 'lucide-react';

interface NewsSectionProps {
  newsList: NewsItem[];
  searchQuery: string;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ newsList, searchQuery }) => {
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

        {/* Dual Filter Controls Bar: Category & Year Timeline */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 mb-8 space-y-3">
          
          {/* Year Timeline Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1 shrink-0 mr-1">
              <Calendar className="w-3.5 h-3.5 text-emerald-700" />
              <span>Arsip Tahun:</span>
            </span>
            {years.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all shrink-0 border ${
                  selectedYear === yr
                    ? 'bg-amber-500 text-emerald-950 border-amber-400 shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border-slate-200'
                }`}
              >
                {yr === 'Semua' ? 'Semua Tahun' : `Tahun ${yr}`}
              </button>
            ))}
          </div>

          <div className="h-px bg-slate-200/60 w-full" />

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1 shrink-0 mr-1">
              <Tag className="w-3.5 h-3.5 text-emerald-700" />
              <span>Kategori:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-emerald-700 text-white font-bold shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* News Cards Grid */}
        {filteredNews.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <Search className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-600">Tidak ada berita ditemukan</p>
            <p className="text-xs text-slate-400 mt-1">Coba gunakan kata kunci pencarian lain atau pilih kategori Semua.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((news) => (
              <article
                key={news.id}
                onClick={() => setActiveNews(news)}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Thumbnail Image */}
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

                  {/* Article Content */}
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

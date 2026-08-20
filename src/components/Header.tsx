import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Search,
  ShieldCheck,
  UserCheck,
  Building2,
  FileText,
  MessageSquare,
  Newspaper,
  ChevronDown,
  Layers,
  Award,
  BookOpen,
  Sparkles,
  ArrowRight,
  Facebook,
  Instagram,
  CheckCircle2
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSearch: (query: string) => void;
  searchQuery: string;
  onOpenAdminModal: (tab?: string) => void;
  isAdminLoggedIn: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onSearch,
  searchQuery,
  onOpenAdminModal,
  isAdminLoggedIn
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profilDropdown, setProfilDropdown] = useState(false);
  const [layananDropdown, setLayananDropdown] = useState(false);

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    setProfilDropdown(false);
    setLayananDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md border-b border-slate-200">
      
      {/* Top Bar Contacts & Accessibility */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-emerald-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          
          {/* Contact Items */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              Jl. Poros Loka - Uluere, Desa Bonto Marannu, Kec. Uluere, Kab. Bantaeng
            </span>
            <span className="hidden sm:inline-block text-emerald-800">|</span>
            <a href="https://wa.me/6281242345678" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              0812-4234-5678 (WA Center)
            </a>
            <span className="hidden sm:inline-block text-emerald-800">|</span>
            <span className="hidden lg:flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              kua.uluere@kemenag.go.id
            </span>
          </div>

          {/* Running Ticker / Admin Access */}
          <div className="flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 bg-emerald-900/80 px-2.5 py-0.5 rounded text-[11px] text-emerald-200 border border-emerald-800">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Zona Integritas (WBK/WBBM) Kemenag RI</span>
            </div>

            <button
              onClick={onOpenAdminModal}
              className={`px-2.5 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isAdminLoggedIn
                  ? 'bg-amber-500 text-emerald-950 hover:bg-amber-400'
                  : 'bg-emerald-800 hover:bg-emerald-700 text-emerald-100 border border-emerald-700'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>{isAdminLoggedIn ? 'Dashboard CMS' : 'Portal Staf/Admin'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          
          {/* Identity & Emblem */}
          <div
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <img
              src="/logo-kemenag.svg"
              alt="Logo Resmi Kemenag RI"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="leading-tight">
              <div className="text-[10px] sm:text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                Kemenag RI • Kab. Bantaeng
              </div>
              <h1 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-emerald-800 transition-colors">
                KUA Uluere
              </h1>
            </div>
          </div>

          {/* Desktop Search & Nav */}
          <div className="hidden lg:flex items-center gap-6">
            
            {/* Nav Items */}
            <nav className="flex items-center gap-1 font-medium text-xs sm:text-sm">
              <button
                onClick={() => handleNavClick('beranda')}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  activeTab === 'beranda'
                    ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200'
                    : 'text-slate-700 hover:text-emerald-800 hover:bg-slate-50'
                }`}
              >
                Beranda
              </button>

              {/* Dropdown Profil */}
              <div 
                className="relative"
                onMouseEnter={() => setProfilDropdown(true)}
                onMouseLeave={() => setProfilDropdown(false)}
              >
                <button
                  onClick={() => setProfilDropdown(!profilDropdown)}
                  className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 ${
                    activeTab.startsWith('profil')
                      ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200'
                      : 'text-slate-700 hover:text-emerald-800 hover:bg-slate-50'
                  }`}
                >
                  <Building2 className="w-4 h-4 text-emerald-700" />
                  <span>Profil Kantor</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {profilDropdown && (
                  <div className="absolute top-full left-0 mt-0.5 w-60 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50 animate-in fade-in slide-in-from-top-2">
                    <button
                      onClick={() => handleNavClick('profil-sejarah')}
                      className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors ${
                        activeTab === 'profil-sejarah' || activeTab === 'profil'
                          ? 'bg-emerald-100/80 text-emerald-950 font-bold border-l-4 border-emerald-700'
                          : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
                      }`}
                    >
                      Sejarah, Visi & Misi
                    </button>
                    <button
                      onClick={() => handleNavClick('profil-geografis')}
                      className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors ${
                        activeTab === 'profil-geografis'
                          ? 'bg-emerald-100/80 text-emerald-950 font-bold border-l-4 border-emerald-700'
                          : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
                      }`}
                    >
                      Kondisi Geografis & Demografis
                    </button>
                    <button
                      onClick={() => handleNavClick('profil-pegawai')}
                      className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors ${
                        activeTab === 'profil-pegawai'
                          ? 'bg-emerald-100/80 text-emerald-950 font-bold border-l-4 border-emerald-700'
                          : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
                      }`}
                    >
                      Profil Kepala KUA & Pegawai
                    </button>
                    <button
                      onClick={() => handleNavClick('profil-kepala-masa-ke-masa')}
                      className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors ${
                        activeTab === 'profil-kepala-masa-ke-masa'
                          ? 'bg-emerald-100/80 text-emerald-950 font-bold border-l-4 border-emerald-700'
                          : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
                      }`}
                    >
                      Kepala KUA Masa ke Masa
                    </button>
                    <button
                      onClick={() => handleNavClick('profil-wilayah')}
                      className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors ${
                        activeTab === 'profil-wilayah'
                          ? 'bg-emerald-100/80 text-emerald-950 font-bold border-l-4 border-emerald-700'
                          : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
                      }`}
                    >
                      Wilayah Kerja (Desa di Uluere)
                    </button>
                    <button
                      onClick={() => handleNavClick('profil-maklumat')}
                      className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors ${
                        activeTab === 'profil-maklumat'
                          ? 'bg-emerald-100/80 text-emerald-950 font-bold border-l-4 border-emerald-700'
                          : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
                      }`}
                    >
                      Maklumat Pelayanan & SOP
                    </button>
                  </div>
                )}
              </div>

              {/* Dropdown Layanan */}
              <div className="relative">
                <button
                  onClick={() => setLayananDropdown(!layananDropdown)}
                  className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 ${
                    activeTab.startsWith('layanan')
                      ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200'
                      : 'text-slate-700 hover:text-emerald-800 hover:bg-slate-50'
                  }`}
                >
                  <FileText className="w-4 h-4 text-emerald-700" />
                  <span>Layanan</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {layananDropdown && (
                  <div className="absolute top-full left-[-80px] sm:left-0 mt-2 w-[600px] bg-white rounded-3xl shadow-2xl border border-slate-200 p-5 z-50 animate-in fade-in slide-in-from-top-2">
                    
                    {/* Top Highlight Banner */}
                    <div
                      onClick={() => handleNavClick('layanan-sop')}
                      className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white p-4 rounded-2xl cursor-pointer hover:opacity-95 transition-opacity flex items-center justify-between gap-4 mb-4 border border-emerald-800 shadow"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-400 text-emerald-950 font-bold flex items-center justify-center shrink-0 shadow-inner">
                          <Award className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-emerald-900 px-2 py-0.5 rounded border border-emerald-700">
                              Regulasi Resmi Kemenag RI
                            </span>
                            <span className="text-[10px] font-mono text-emerald-200">KMA 841/2024</span>
                          </div>
                          <h4 className="font-extrabold text-sm text-white mt-0.5">
                            48 Standar Pelayanan (SP) & SOP KUA
                          </h4>
                          <p className="text-[11px] text-emerald-100 line-clamp-1">
                            Katalog lengkap 48 SOP pencatatan nikah, wakaf, kemasjidan, syariah, & penerangan agama.
                          </p>
                        </div>
                      </div>

                      <div className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-emerald-950 rounded-xl text-xs font-black shrink-0 flex items-center gap-1 shadow">
                        <span>Lihat 48 SOP</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* 2-Column Links Grid */}
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      
                      {/* Column 1: SOP Kelompok A-I */}
                      <div className="space-y-1 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                          📋 Berdasarkan Kelompok SP/SOP:
                        </span>

                        <button
                          onClick={() => handleNavClick('layanan-sop')}
                          className="w-full text-left p-2 rounded-xl hover:bg-white hover:shadow-sm text-slate-700 hover:text-emerald-800 transition-all flex items-center justify-between font-semibold"
                        >
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                            <span>A. Pencatatan Nikah & Rujuk</span>
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 font-bold">SOP 1–20</span>
                        </button>

                        <button
                          onClick={() => handleNavClick('layanan-sop')}
                          className="w-full text-left p-2 rounded-xl hover:bg-white hover:shadow-sm text-slate-700 hover:text-emerald-800 transition-all flex items-center justify-between font-semibold"
                        >
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                            <span>B. Bimwin & Keluarga Sakinah</span>
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 font-bold">SOP 21–23</span>
                        </button>

                        <button
                          onClick={() => handleNavClick('layanan-sop')}
                          className="w-full text-left p-2 rounded-xl hover:bg-white hover:shadow-sm text-slate-700 hover:text-emerald-800 transition-all flex items-center justify-between font-semibold"
                        >
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                            <span>C. Kemasjidan & ID SIMAS</span>
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 font-bold">SOP 24–29</span>
                        </button>

                        <button
                          onClick={() => handleNavClick('layanan-sop')}
                          className="w-full text-left p-2 rounded-xl hover:bg-white hover:shadow-sm text-slate-700 hover:text-emerald-800 transition-all flex items-center justify-between font-semibold"
                        >
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                            <span>F. Zakat, AIW & Tanah Wakaf</span>
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 font-bold">SOP 35–41</span>
                        </button>
                      </div>

                      {/* Column 2: Layanan Publik Utama */}
                      <div className="space-y-1 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                          ⭐ Layanan Operasional Utama:
                        </span>

                        <button
                          onClick={() => handleNavClick('layanan-nikah')}
                          className="w-full text-left p-2 rounded-xl hover:bg-white hover:shadow-sm text-slate-700 hover:text-emerald-800 transition-all font-semibold flex items-center gap-2"
                        >
                          <span className="text-base">💍</span>
                          <div>
                            <strong className="block text-slate-900 leading-tight">Pendaftaran Nikah SIMKAH</strong>
                            <span className="text-[10px] text-slate-400">Tarif Rp0 (KUA) / Rp600rb (Luar)</span>
                          </div>
                        </button>

                        <button
                          onClick={() => handleNavClick('layanan-wakaf')}
                          className="w-full text-left p-2 rounded-xl hover:bg-white hover:shadow-sm text-slate-700 hover:text-emerald-800 transition-all font-semibold flex items-center gap-2"
                        >
                          <span className="text-base">📜</span>
                          <div>
                            <strong className="block text-slate-900 leading-tight">Akta Ikrar Wakaf (AIW)</strong>
                            <span className="text-[10px] text-slate-400">PPAIW & Sertifikasi BPN</span>
                          </div>
                        </button>

                        <button
                          onClick={() => handleNavClick('layanan-haji')}
                          className="w-full text-left p-2 rounded-xl hover:bg-white hover:shadow-sm text-slate-700 hover:text-emerald-800 transition-all font-semibold flex items-center gap-2"
                        >
                          <span className="text-base">🕋</span>
                          <div>
                            <strong className="block text-slate-900 leading-tight">Bimbingan Manasik Haji</strong>
                            <span className="text-[10px] text-slate-400">Tingkat Kecamatan Uluere</span>
                          </div>
                        </button>

                        <button
                          onClick={() => handleNavClick('layanan-sakinah')}
                          className="w-full text-left p-2 rounded-xl hover:bg-white hover:shadow-sm text-slate-700 hover:text-emerald-800 transition-all font-semibold flex items-center gap-2"
                        >
                          <span className="text-base">👨‍👩‍👧</span>
                          <div>
                            <strong className="block text-slate-900 leading-tight">Konsultasi Sakinah & BRUS</strong>
                            <span className="text-[10px] text-slate-400">BP4 & Edukasi Remaja</span>
                          </div>
                        </button>
                      </div>

                    </div>

                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('berita')}
                className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeTab === 'berita'
                    ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200'
                    : 'text-slate-700 hover:text-emerald-800 hover:bg-slate-50'
                }`}
              >
                <Newspaper className="w-4 h-4 text-emerald-700" />
                <span>Berita & Edukasi</span>
              </button>

              <button
                onClick={() => handleNavClick('pengaduan')}
                className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeTab === 'pengaduan'
                    ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200'
                    : 'text-slate-700 hover:text-emerald-800 hover:bg-slate-50'
                }`}
              >
                <MessageSquare className="w-4 h-4 text-emerald-700" />
                <span>Pengaduan & Konsultasi</span>
              </button>
            </nav>

            {/* Header Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Cari info nikah, SOP..."
                className="pl-9 pr-3 py-1.5 bg-slate-100 hover:bg-slate-50 focus:bg-white text-xs rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 w-40 focus:w-56 transition-all"
              />
            </div>

          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3 animate-in slide-in-from-top-2">
          
          <div className="relative mb-3">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Cari layanan, informasi KUA..."
              className="w-full pl-9 pr-3 py-2 bg-slate-100 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <div className="space-y-1 font-medium text-sm text-slate-800">
            <button
              onClick={() => handleNavClick('beranda')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-800"
            >
              Beranda
            </button>
            <button
              onClick={() => handleNavClick('profil-sejarah')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-800"
            >
              Profil & Sejarah Kantor
            </button>
            <button
              onClick={() => handleNavClick('profil-pegawai')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-800"
            >
              Daftar Pegawai & Penghulu
            </button>
            <button
              onClick={() => handleNavClick('layanan-nikah')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-800"
            >
              Pendaftaran Nikah (SIMKAH)
            </button>
            <button
              onClick={() => handleNavClick('layanan-sop')}
              className="w-full text-left px-3 py-2.5 rounded-xl bg-gradient-to-r from-emerald-950 to-slate-900 text-amber-300 font-bold text-xs flex items-center justify-between shadow"
            >
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>48 Standar Pelayanan (SP) & SOP KUA</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-900 text-amber-300 text-[10px] font-mono">48 SP</span>
            </button>
            <button
              onClick={() => handleNavClick('layanan-wakaf')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-800"
            >
              Layanan Wakaf & Zakat
            </button>
            <button
              onClick={() => handleNavClick('berita')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-800"
            >
              Berita & Artikel Edukasi
            </button>
            <button
              onClick={() => handleNavClick('pengaduan')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-800"
            >
              Pengaduan & Konsultasi Online
            </button>
          </div>
        </div>
      )}

    </header>
  );
};

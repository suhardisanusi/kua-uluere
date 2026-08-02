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
  Layers
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
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 flex items-center justify-center text-white font-serif font-black text-xl shadow-md group-hover:scale-105 transition-transform border border-amber-400/30">
              <span className="text-amber-300">KUA</span>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-800 flex items-center gap-1">
                Kementerian Agama Republik Indonesia
              </div>
              <h1 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-tight">
                KUA Kecamatan Uluere
              </h1>
              <p className="text-xs text-slate-500 font-medium">Kabupaten Bantaeng, Sulawesi Selatan</p>
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
              <div className="relative">
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
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                    <button
                      onClick={() => handleNavClick('profil-sejarah')}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 font-medium"
                    >
                      Sejarah, Visi & Misi
                    </button>
                    <button
                      onClick={() => handleNavClick('profil-pegawai')}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 font-medium"
                    >
                      Profil Kepala KUA & Pegawai
                    </button>
                    <button
                      onClick={() => handleNavClick('profil-wilayah')}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 font-medium"
                    >
                      Wilayah Kerja (Desa di Uluere)
                    </button>
                    <button
                      onClick={() => handleNavClick('profil-maklumat')}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 font-medium"
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
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                    <button
                      onClick={() => handleNavClick('layanan-nikah')}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 font-medium"
                    >
                      Pendaftaran Nikah (SIMKAH & Tarif PNBP)
                    </button>
                    <button
                      onClick={() => handleNavClick('layanan-wakaf')}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 font-medium"
                    >
                      Akta Ikrar Wakaf (AIW) & Zakat
                    </button>
                    <button
                      onClick={() => handleNavClick('layanan-haji')}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 font-medium"
                    >
                      Bimbingan Manasik Haji Kecamatan
                    </button>
                    <button
                      onClick={() => handleNavClick('layanan-sakinah')}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 font-medium"
                    >
                      Konsultasi Sakinah & BRUS Remaja
                    </button>
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

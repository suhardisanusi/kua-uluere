import React from 'react';
import { MapPin, Phone, Mail, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenAdminModal: (tab?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenAdminModal }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6 border-t-4 border-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Identity & Office Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white font-serif font-black flex items-center justify-center text-lg shadow-md border border-amber-400">
                KUA
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                  Kemenag Kab. Bantaeng
                </div>
                <h3 className="font-bold text-white text-base">KUA Kecamatan Uluere</h3>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Kantor Urusan Agama Kecamatan Uluere melayani masyarakat 6 desa di wilayah pegunungan Bantaeng dengan integritas tinggi, cepat, akuntabel, dan berbasis teknologi digital.
            </p>

            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 text-xs text-emerald-300 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Wilayah Bebas Pungli & Gratifikasi (WBK/WBBM)</span>
            </div>
          </div>

          {/* Contact & Map Address */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>Alamat & Kontak</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Jl. Poros Loka - Uluere, Desa Bonto Marannu, Kec. Uluere, Kab. Bantaeng, Sulawesi Selatan 92451</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/6281242345678" target="_blank" rel="noreferrer" className="hover:text-amber-300 transition-colors">
                  0812-4234-5678 (WA Center KUA)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>kua.uluere@kemenag.go.id</span>
              </li>
            </ul>

            <div className="pt-2 text-xs text-slate-400">
              <strong className="text-white block mb-1">Jam Pelayanan Office:</strong>
              Senin - Jumat: 07:30 - 16:00 WITA<br />
              Sabtu - Minggu / Libur: Tutup (Layanan Nikah Luar Kantor Tetap Berjalan)
            </div>
          </div>

          {/* Quick Links & Services */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>Menu Layanan</span>
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => { setActiveTab('layanan-nikah'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>• Pendaftaran Nikah & Tarif PNBP</span>
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('layanan-wakaf'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>• Pengurusan Akta Ikrar Wakaf (AIW)</span>
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('layanan-haji'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>• Bimbingan Manasik Haji Uluere</span>
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('profil-pegawai'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>• Profil Kepala KUA & Penghulu</span>
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('pengaduan'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>• Form Pengaduan & Konsultasi Online</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Portal External Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>Portal Resmi Kemenag</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://simkah.kemenag.go.id" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline flex items-center justify-between">
                  <span>SIMKAH Web Kemenag</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a href="https://kemenag.go.id" target="_blank" rel="noreferrer" className="hover:text-amber-300 flex items-center justify-between">
                  <span>Kementerian Agama RI Pusat</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a href="https://sulsel.kemenag.go.id" target="_blank" rel="noreferrer" className="hover:text-amber-300 flex items-center justify-between">
                  <span>Kanwil Kemenag Sulsel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a href="https://bantaengkab.go.id" target="_blank" rel="noreferrer" className="hover:text-amber-300 flex items-center justify-between">
                  <span>Pemerintah Kab. Bantaeng</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenAdminModal}
                className="w-full py-2 px-3 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2 border border-emerald-700"
              >
                <span>Login Dashboard Operator / Staf KUA</span>
              </button>
            </div>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Kantor Urusan Agama (KUA) Kecamatan Uluere, Kabupaten Bantaeng. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Dirancang dengan integritas untuk pelayanan publik KUA Uluere</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>
        </div>

      </div>
    </footer>
  );
};

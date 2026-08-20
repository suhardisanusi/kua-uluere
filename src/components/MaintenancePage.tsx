import React from 'react';
import { Wrench, ShieldAlert, Phone, Clock, ArrowRight, ShieldCheck, Lock } from 'lucide-react';

interface MaintenancePageProps {
  maintenanceMessage?: string;
  estimatedEndTime?: string;
  onOpenAdminLogin: () => void;
  isAdminLoggedIn: boolean;
  onBypassMaintenance?: () => void;
}

export const MaintenancePage: React.FC<MaintenancePageProps> = ({
  maintenanceMessage = 'Sistem Informasi KUA Kecamatan Uluere sedang menjalani pemeliharaan berkala untuk peningkatan performa layanan publik.',
  estimatedEndTime = '02 Agustus 2026, 12:00 WITA',
  onOpenAdminLogin,
  isAdminLoggedIn,
  onBypassMaintenance
}) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4 sm:p-6 font-sans relative overflow-hidden selection:bg-amber-500 selection:text-slate-950">
      
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-2xl w-full bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative z-10 space-y-8 backdrop-blur-md">
        
        {/* Header Branding */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <img
              src="/logo-kemenag.svg"
              alt="Logo Resmi Kementerian Agama RI"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="font-bold text-base sm:text-lg text-white font-serif tracking-tight">
                KUA Uluere
              </h1>
              <p className="text-xs text-emerald-400 font-medium">
                Kementerian Agama Kabupaten Bantaeng
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Mode Pemeliharaan</span>
          </div>
        </div>

        {/* Hero Notice Box */}
        <div className="space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-lg border border-emerald-800">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span>PEMELIHARAAN SISTEM SISTEM INFORMASI (MAINTENANCE)</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-snug">
            Mohon Maaf, Layanan Portal KUA Uluere Sedang Dalam Pemeliharaan
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
            {maintenanceMessage}
          </p>
        </div>

        {/* Key Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Estimasi Selesai:</span>
            </div>
            <p className="text-xs font-mono font-bold text-white">{estimatedEndTime}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Keamanan Data SIMKAH:</span>
            </div>
            <p className="text-xs font-mono font-bold text-emerald-300">100% Aman & Terenkripsi</p>
          </div>
        </div>

        {/* Emergency WhatsApp Contact Banner */}
        <div className="p-5 rounded-2xl bg-emerald-950/90 border border-emerald-800/80 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
            <Phone className="w-4 h-4" />
            <span>Layanan Darurat & Konsultasi Langsung</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Untuk pendaftaran nikah mendesak, verifikasi berkas catin, atau ikrar wakaf darurat, hubungi petugas KUA Uluere via WhatsApp Center:
          </p>

          <a
            href="https://wa.me/6281242345678?text=Assalamu%20alaikum%20KUA%20Uluere,%20saya%20membutuhkan%20layanan%20darurat%20saat%20sistem%20maintenance..."
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Chat WhatsApp KUA Uluere (0812-4234-5678)</span>
          </a>
        </div>

        {/* Staff & Admin Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            Khusus Petugas Operator KUA Uluere Bantaeng
          </p>

          <div className="flex items-center gap-2">
            {isAdminLoggedIn && onBypassMaintenance && (
              <button
                onClick={onBypassMaintenance}
                className="px-3.5 py-2 bg-emerald-800 hover:bg-emerald-700 text-emerald-100 font-semibold rounded-xl transition-colors flex items-center gap-1.5"
              >
                <ArrowRight className="w-3.5 h-3.5" />
                <span>Masuk Pratinjau Website</span>
              </button>
            )}

            <button
              onClick={onOpenAdminLogin}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold rounded-xl transition-colors flex items-center gap-1.5 border border-slate-700"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Login Admin CMS</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

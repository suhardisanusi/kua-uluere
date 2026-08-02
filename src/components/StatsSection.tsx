import React, { useState } from 'react';
import { KuaStats } from '../types';
import { DESA_ULUERE } from '../data/mockData';
import { Heart, Building, Award, Users, MapPin, CheckCircle, RefreshCw } from 'lucide-react';

interface StatsSectionProps {
  stats: KuaStats;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  const [selectedStat, setSelectedStat] = useState<string | null>(null);

  const statCards = [
    {
      id: 'nikah',
      title: 'Peristiwa Nikah Bulan Ini',
      value: stats.nikahBulanIni,
      sub: `Total ${stats.nikahTahunIni} Akad Nikah Tahun 2026`,
      icon: Heart,
      color: 'from-emerald-600 to-emerald-800',
      bgColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      description: 'Jumlah pasangan yang telah melaksanakan akad nikah resmi dan tercatat di KUA Kecamatan Uluere bulan berjalan.'
    },
    {
      id: 'masjid',
      title: 'Masjid & Musholla',
      value: stats.masjidMusholla,
      sub: 'Terdaftar Resmi di Bimas Islam',
      icon: Building,
      color: 'from-amber-500 to-amber-700',
      bgColor: 'bg-amber-50 text-amber-900 border-amber-200',
      description: 'Rumah ibadah terdata yang dibina oleh KUA Uluere mencakup pembimbingan arah kiblat, takmir, dan kemakmuran masjid.'
    },
    {
      id: 'wakaf',
      title: 'Tanah Wakaf Ber-AIW',
      value: stats.tanahWakafSertifikat,
      sub: 'Bidang Tanah Memiliki Kepastian Hukum',
      icon: Award,
      color: 'from-emerald-700 to-teal-800',
      bgColor: 'bg-teal-50 text-teal-900 border-teal-200',
      description: 'Aset tanah wakaf peruntukan masjid, musholla, pekuburan, dan Madrasah yang telah diterbitkan Akta Ikrar Wakaf (AIW) gratis.'
    },
    {
      id: 'penyuluh',
      title: 'Penyuluh Agama (PAI)',
      value: stats.penyuluhPAI,
      sub: `${stats.penghuluAktif} Penghulu & PAI Fungsional`,
      icon: Users,
      color: 'from-blue-600 to-indigo-800',
      bgColor: 'bg-blue-50 text-blue-900 border-blue-200',
      description: 'Petugas keagamaan yang aktif memberikan bimbingan syariah, keluarga sakinah, dan literasi keagamaan di 6 desa Uluere.'
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              Data Transparan KUA
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              Statistik Pelayanan KUA Uluere
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Data terintegrasi Kementerian Agama Kabupaten Bantaeng (Diperbarui per {stats.lastUpdated})
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg w-fit">
            <RefreshCw className="w-3.5 h-3.5 text-emerald-600" />
            <span>Sistem Terhubung Real-Time SIMKAH & SIMBA</span>
          </div>
        </div>

        {/* 4 Primary Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {statCards.map((card) => {
            const IconComponent = card.icon;
            const isSelected = selectedStat === card.id;

            return (
              <div
                key={card.id}
                onClick={() => setSelectedStat(isSelected ? null : card.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden group shadow-sm hover:shadow-md ${
                  isSelected ? `${card.bgColor} ring-2 ring-emerald-600 scale-[1.02]` : 'bg-slate-50 hover:bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color} text-white shadow-md group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200/80 text-slate-700">
                    Kua Uluere
                  </span>
                </div>

                <div className="text-3xl font-black text-slate-900 font-serif tracking-tight">
                  {card.value}
                </div>

                <div className="font-bold text-sm text-slate-800 mt-1">
                  {card.title}
                </div>

                <div className="text-xs text-slate-500 mt-1 font-medium">
                  {card.sub}
                </div>

                {isSelected && (
                  <div className="mt-3 pt-3 border-t border-slate-200/60 text-xs text-slate-700 animate-in fade-in">
                    {card.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Wilayah Kerja Desa Uluere Breakdown */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-emerald-700/60">
            <div>
              <div className="text-xs text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                Cakupan Wilayah Kerja
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">
                6 Desa di Kecamatan Uluere, Kabupaten Bantaeng
              </h3>
              <p className="text-xs text-emerald-200 mt-0.5">
                Luas Wilayah: {stats.luasWilayahKm} km² | Wilayah Pegunungan Loka & Uluere Bantaeng
              </p>
            </div>

            <div className="px-3 py-1.5 bg-amber-500/20 text-amber-300 border border-amber-400/30 rounded-xl text-xs font-semibold">
              KUA Terdekat & Mudah Diakses Warga
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {DESA_ULUERE.map((d) => (
              <div key={d.name} className="p-3 rounded-xl bg-emerald-800/50 hover:bg-emerald-800 border border-emerald-700/50 transition-colors">
                <div className="font-bold text-xs text-amber-300 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{d.name}</span>
                </div>
                <div className="text-[11px] text-emerald-200 mt-1">{d.masjidCount} Masjid/Musholla</div>
                <div className="text-[10px] text-emerald-300/80">{d.wakafCount} AIW Wakaf</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

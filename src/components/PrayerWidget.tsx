import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Compass, Volume2, Download, X, CheckCircle2 } from 'lucide-react';

interface PrayerWidgetProps {
  onOpenImsakiyahModal?: () => void;
}

export const PrayerWidget: React.FC<PrayerWidgetProps> = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [showModal, setShowModal] = useState<boolean>(false);
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);

  // Prayer times for Bantaeng / Uluere, South Sulawesi (UTC+8 / WITA)
  const prayerSchedule = {
    fajr: '04:48',
    sunrise: '06:05',
    dhuhr: '12:08',
    asr: '15:29',
    maghrib: '18:07',
    isha: '19:19'
  };

  const prayers = [
    { name: 'Subuh', time: prayerSchedule.fajr },
    { name: 'Terbit', time: prayerSchedule.sunrise },
    { name: 'Dzuhur', time: prayerSchedule.dhuhr },
    { name: 'Ashar', time: prayerSchedule.asr },
    { name: 'Maghrib', time: prayerSchedule.maghrib },
    { name: 'Isya', time: prayerSchedule.isha }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate next prayer
  const getNextPrayer = () => {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const currentMins = hours * 60 + minutes;

    for (const p of prayers) {
      if (p.name === 'Terbit') continue;
      const [ph, pm] = p.time.split(':').map(Number);
      const prayerMins = ph * 60 + pm;
      if (prayerMins > currentMins) {
        const diffMins = prayerMins - currentMins;
        const h = Math.floor(diffMins / 60);
        const m = diffMins % 60;
        const s = 59 - currentTime.getSeconds();
        return { name: p.name, time: p.time, countdown: `${h > 0 ? `${h}j ` : ''}${m}m ${s}s` };
      }
    }
    return { name: 'Subuh (Besok)', time: prayerSchedule.fajr, countdown: 'Besok Pagi' };
  };

  const nextPrayer = getNextPrayer();

  const handleSimulateAdhan = () => {
    setAudioPlaying(!audioPlaying);
  };

  return (
    <div className="bg-emerald-900 text-white shadow-xl border-b border-emerald-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Location & Time info */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="bg-emerald-800/80 p-2.5 rounded-xl border border-emerald-700/50 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-amber-400 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-200">
                <span className="inline-block w-2 h-2 rounded-full bg-amber-400"></span>
                Jadwal Shalat Kec. Uluere, Kab. Bantaeng (WITA)
              </div>
              <div className="text-sm font-semibold tracking-wide text-white flex items-center gap-2">
                <span>{currentTime.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })} WITA</span>
                <span className="text-emerald-300">|</span>
                <span className="text-amber-300 text-xs flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  19 Safar 1448 H
                </span>
              </div>
            </div>
          </div>

          {/* Prayer Times Grid */}
          <div className="grid grid-cols-6 gap-1.5 sm:gap-3 w-full lg:w-auto">
            {prayers.map((p) => {
              const isNext = p.name === nextPrayer.name;
              return (
                <div
                  key={p.name}
                  className={`px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-center transition-all ${
                    isNext
                      ? 'bg-amber-500 text-emerald-950 font-bold shadow-md ring-2 ring-amber-300 scale-105'
                      : 'bg-emerald-800/60 hover:bg-emerald-800 text-emerald-100 border border-emerald-700/40'
                  }`}
                >
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider opacity-90">{p.name}</div>
                  <div className="text-xs sm:text-sm font-semibold">{p.time}</div>
                </div>
              );
            })}
          </div>

          {/* Countdown & Action Buttons */}
          <div className="flex items-center gap-2 w-full lg:w-auto justify-between lg:justify-end border-t lg:border-t-0 border-emerald-800/60 pt-2 lg:pt-0">
            <div className="text-xs text-right">
              <span className="text-emerald-300 block text-[11px]">Menuju {nextPrayer.name}:</span>
              <span className="font-mono font-bold text-amber-300">{nextPrayer.countdown}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowModal(true)}
                className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-medium text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Imsakiyah</span>
              </button>
              <button
                onClick={handleSimulateAdhan}
                title="Suara Pengingat Shalat"
                className={`p-1.5 rounded-lg border text-xs transition-colors ${
                  audioPlaying 
                    ? 'bg-amber-400 text-emerald-950 border-amber-300' 
                    : 'bg-emerald-800 hover:bg-emerald-700 text-emerald-200 border-emerald-700'
                }`}
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Imsakiyah & Prayer Schedule Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-slate-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  KUA
                </div>
                <div>
                  <h3 className="font-bold text-lg text-emerald-900">Jadwal Shalat & Imsakiyah Bulanan</h3>
                  <p className="text-xs text-slate-500">Kecamatan Uluere, Kabupaten Bantaeng - Kemenag RI</p>
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-emerald-50 rounded-xl p-4 mb-4 border border-emerald-100 text-xs text-emerald-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-emerald-600" />
                <span>Arah Kiblat Uluere: <strong>291.5° NW</strong> dari Arah Utara</span>
              </div>
              <span className="font-semibold text-emerald-700">Zona WITA (UTC+8)</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-emerald-800 text-white">
                    <th className="p-2.5 rounded-l-lg">Hari / Tanggal</th>
                    <th className="p-2.5">Imsak</th>
                    <th className="p-2.5">Subuh</th>
                    <th className="p-2.5">Terbit</th>
                    <th className="p-2.5">Dzuhur</th>
                    <th className="p-2.5">Ashar</th>
                    <th className="p-2.5">Maghrib</th>
                    <th className="p-2.5 rounded-r-lg">Isya</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                    <tr key={day} className={day === 2 ? 'bg-amber-50 font-semibold text-emerald-900' : 'hover:bg-slate-50'}>
                      <td className="p-2.5 font-medium flex items-center gap-1">
                        {day === 2 && <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />}
                        {day} Agustus 2026
                      </td>
                      <td className="p-2.5">04:38</td>
                      <td className="p-2.5">04:48</td>
                      <td className="p-2.5">06:05</td>
                      <td className="p-2.5">12:08</td>
                      <td className="p-2.5">15:29</td>
                      <td className="p-2.5">18:07</td>
                      <td className="p-2.5">19:19</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-500">* Dihitung berdasarkan koordinat KUA Uluere (5°29'S 119°57'E)</span>
              <button
                onClick={() => {
                  alert('Jadwal Imsakiyah & Shalat Uluere Bantaeng berhasil diunduh dalam format PDF/Cetak.');
                  setShowModal(false);
                }}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-md"
              >
                <Download className="w-4 h-4" />
                Cetak Jadwal PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

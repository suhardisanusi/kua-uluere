import React, { useState } from 'react';
import { ConsultationTicket } from '../types';
import { DESA_ULUERE } from '../data/mockData';
import { MessageSquare, Phone, Send, Search, CheckCircle, Clock, MapPin, Mail, AlertCircle, Sparkles } from 'lucide-react';

interface PengaduanPageProps {
  tickets: ConsultationTicket[];
  onSubmitTicket: (newTicket: ConsultationTicket) => void;
}

export const PengaduanPage: React.FC<PengaduanPageProps> = ({ tickets, onSubmitTicket }) => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formVillage, setFormVillage] = useState('Desa Bonto Marannu');
  const [formCategory, setFormCategory] = useState<ConsultationTicket['category']>('Pendaftaran SIMKAH');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const [submittedTicketCode, setSubmittedTicketCode] = useState<string | null>(null);
  const [searchTicketCode, setSearchTicketCode] = useState('');
  const [searchedTicket, setSearchedTicket] = useState<ConsultationTicket | null>(null);
  const [searchAttempted, setSearchAttempted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone || !formMessage || !formSubject) {
      alert('Mohon lengkapi Nama, Nomor Telepon/WA, Subjek, dan Pesan Konsultasi.');
      return;
    }

    const randomSuffix = Math.floor(10 + Math.random() * 90);
    const code = `KUA-ULU-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${randomSuffix}`;

    const newTicket: ConsultationTicket = {
      id: `t-${Date.now()}`,
      ticketCode: code,
      senderName: formName,
      senderPhone: formPhone,
      senderEmail: formEmail || undefined,
      village: formVillage,
      category: formCategory,
      subject: formSubject,
      message: formMessage,
      status: 'Menunggu',
      createdAt: `${new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}, ${new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WITA`
    };

    onSubmitTicket(newTicket);
    setSubmittedTicketCode(code);

    // Reset Form
    setFormName('');
    setFormPhone('');
    setFormEmail('');
    setFormSubject('');
    setFormMessage('');
  };

  const handleSearchTicket = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchAttempted(true);
    const found = tickets.find((t) => t.ticketCode.toLowerCase() === searchTicketCode.trim().toLowerCase());
    setSearchedTicket(found || null);
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Banner Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-emerald-950 text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Layanan Konsultasi Warga KUA Uluere</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
              Konsultasi & Pengaduan Masyarakat
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              Sampaikan pertanyaan mengenai pendaftaran nikah, berkas SIMKAH, ikrar wakaf, atau aduan pelayanan. Kami siap merespons secara transparan dan akuntabel.
            </p>
          </div>
        </div>

        {/* WhatsApp Direct Quick Launcher Banner */}
        <div className="p-6 rounded-3xl bg-emerald-800 text-white shadow-lg border border-emerald-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center shrink-0 font-bold">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Butuh Jawaban Cepat via WhatsApp?</h3>
              <p className="text-xs text-emerald-100">
                Hubungi WhatsApp Center Resmi KUA Kecamatan Uluere (Jam Kerja 07:30 - 16:00 WITA)
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/6281242345678?text=Assalamu%20alaikum%20KUA%20Uluere,%20saya%20ingin%20berkonsultasi%20mengenai%20..."
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-emerald-950 text-xs sm:text-sm font-bold rounded-2xl transition-colors shadow-md shrink-0 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Chat WhatsApp 0812-4234-5678</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side: Form Pengaduan Online */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold font-serif text-slate-900">
                Formulir Konsultasi & Pengaduan
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Isi data diri dan uraian pertanyaan Anda di bawah ini:
              </p>
            </div>

            {submittedTicketCode && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-2 animate-in fade-in">
                <div className="flex items-center gap-2 font-bold text-sm text-emerald-800">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>Konsultasi Berhasil Dikirim!</span>
                </div>
                <p>
                  Kode Tiket Anda: <strong className="font-mono bg-white px-2 py-0.5 rounded border border-emerald-200 text-emerald-900">{submittedTicketCode}</strong>
                </p>
                <p className="text-slate-600">
                  Simpan kode tiket ini untuk melacak status tanggapan dari staf KUA Uluere.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Contoh: Andi Muhammad Syahril"
                    className="w-full px-3.5 py-2.5 bg-slate-50 text-xs rounded-xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nomor WhatsApp / HP <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-3.5 py-2.5 bg-slate-50 text-xs rounded-xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Asal Desa di Kecamatan Uluere <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formVillage}
                    onChange={(e) => setFormVillage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 text-xs rounded-xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  >
                    {DESA_ULUERE.map((d) => (
                      <option key={d.name} value={d.name}>{d.name}</option>
                    ))}
                    <option value="Luar Kecamatan Uluere">Luar Kecamatan Uluere (Luar Kab. Bantaeng)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Kategori Konsultasi <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 text-xs rounded-xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  >
                    <option value="Pendaftaran SIMKAH">Pendaftaran Nikah / SIMKAH</option>
                    <option value="Konsultasi Nikah">Konsultasi Hukum Nikah & Catin</option>
                    <option value="Konsultasi Wakaf">Wakaf & Sertifikasi AIW</option>
                    <option value="Bimbingan Keluarga">Bimbingan Keluarga Sakinah / BP4</option>
                    <option value="Pengaduan Layanan">Pengaduan Layanan & Integritas</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Subjek Pertanyaan / Topik <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  placeholder="Contoh: Pertanyaan Syarat Rekomendasi Nikah Campuran Desa"
                  className="w-full px-3.5 py-2.5 bg-slate-50 text-xs rounded-xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Uraian Lengkap Pesan / Pertanyaan <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Jelaskan detail pertanyaan Anda..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 text-xs rounded-xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Konsultasi Ke KUA Uluere</span>
              </button>
            </form>
          </div>

          {/* Right Side: Check Ticket Status & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Search Ticket Box */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Search className="w-4 h-4 text-emerald-600" />
                <span>Cek Status Tiket Konsultasi</span>
              </h3>

              <form onSubmit={handleSearchTicket} className="flex gap-2">
                <input
                  type="text"
                  value={searchTicketCode}
                  onChange={(e) => setSearchTicketCode(e.target.value)}
                  placeholder="Masukkan Kode Tiket (Contoh: KUA-ULU-20260801-01)..."
                  className="flex-1 px-3 py-2 bg-slate-50 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-xl transition-colors"
                >
                  Cek
                </button>
              </form>

              {searchAttempted && (
                <div className="pt-3 border-t border-slate-100">
                  {searchedTicket ? (
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-emerald-800">{searchedTicket.ticketCode}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          searchedTicket.status === 'Selesai' 
                            ? 'bg-emerald-100 text-emerald-800' 
                            : 'bg-amber-100 text-amber-900'
                        }`}>
                          {searchedTicket.status}
                        </span>
                      </div>
                      <p><strong>Pemohon:</strong> {searchedTicket.senderName} ({searchedTicket.village})</p>
                      <p><strong>Subjek:</strong> {searchedTicket.subject}</p>
                      
                      {searchedTicket.reply ? (
                        <div className="mt-2 p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-emerald-900">
                          <strong className="block text-[11px] text-emerald-700 mb-1">Tanggapan Staf KUA ({searchedTicket.repliedAt}):</strong>
                          {searchedTicket.reply}
                        </div>
                      ) : (
                        <p className="text-amber-700 italic">Pesan sedang ditinjau oleh staf KUA Uluere.</p>
                      )}
                    </div>
                  ) : (
                    <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-100 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Kode tiket tidak ditemukan. Pastikan kode sesuai format.</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Office Location Preview Map */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Peta Lokasi KUA Uluere Bantaeng</span>
              </h3>
              <p className="text-xs text-slate-500">
                Jl. Poros Loka - Uluere, Desa Bonto Marannu, Kec. Uluere, Kab. Bantaeng, Sulsel
              </p>

              <div className="rounded-2xl overflow-hidden border border-slate-200 h-48 bg-slate-100 flex items-center justify-center relative">
                <iframe
                  title="Lokasi KUA Uluere Bantaeng"
                  src="https://maps.google.com/maps?q=-5.4881199,119.9572111&z=15&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

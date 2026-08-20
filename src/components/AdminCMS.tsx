import React, { useState } from 'react';
import { NewsItem, StaffItem, DesaItem, HistoricalHeadItem, KuaStats, ConsultationTicket, BannerAnnouncement } from '../types';
import { ArchitectureDocs } from './ArchitectureDocs';
import { SopLayananPage } from './SopLayananPage';
import {
  UserCheck,
  LogOut,
  Plus,
  Trash2,
  Edit,
  Save,
  CheckCircle,
  Clock,
  MessageSquare,
  Newspaper,
  Users,
  BarChart2,
  X,
  Phone,
  Send,
  Image as ImageIcon,
  Sliders,
  ShieldCheck,
  AlertCircle,
  Wrench,
  Power,
  ShieldAlert,
  ToggleLeft,
  ToggleRight,
  Layers,
  Database,
  FileCode2,
  MapPin,
  History,
  Award
} from 'lucide-react';

interface AdminCMSProps {
  newsList: NewsItem[];
  setNewsList: React.Dispatch<React.SetStateAction<NewsItem[]>>;
  staffList: StaffItem[];
  setStaffList: React.Dispatch<React.SetStateAction<StaffItem[]>>;
  desaList?: DesaItem[];
  setDesaList?: React.Dispatch<React.SetStateAction<DesaItem[]>>;
  historicalHeads?: HistoricalHeadItem[];
  setHistoricalHeads?: React.Dispatch<React.SetStateAction<HistoricalHeadItem[]>>;
  stats: KuaStats;
  setStats: React.Dispatch<React.SetStateAction<KuaStats>>;
  tickets: ConsultationTicket[];
  setTickets: React.Dispatch<React.SetStateAction<ConsultationTicket[]>>;
  banners: BannerAnnouncement[];
  setBanners: React.Dispatch<React.SetStateAction<BannerAnnouncement[]>>;
  isMaintenanceMode: boolean;
  setIsMaintenanceMode: (val: boolean) => void;
  maintenanceMessage: string;
  setMaintenanceMessage: (msg: string) => void;
  maintenanceEndTime: string;
  setMaintenanceEndTime: (val: string) => void;
  onCloseModal: () => void;
  isAdminLoggedIn: boolean;
  setIsAdminLoggedIn: (val: boolean) => void;
  initialTab?: string;
}

export const AdminCMS: React.FC<AdminCMSProps> = ({
  newsList,
  setNewsList,
  staffList,
  setStaffList,
  desaList = [],
  setDesaList,
  historicalHeads = [],
  setHistoricalHeads,
  stats,
  setStats,
  tickets,
  setTickets,
  banners,
  setBanners,
  isMaintenanceMode,
  setIsMaintenanceMode,
  maintenanceMessage,
  setMaintenanceMessage,
  maintenanceEndTime,
  setMaintenanceEndTime,
  onCloseModal,
  isAdminLoggedIn,
  setIsAdminLoggedIn,
  initialTab = 'dashboard'
}) => {
  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'maintenance' | 'berita' | 'pegawai' | 'desa' | 'kepala_sejarah' | 'statistik' | 'inbox' | 'banner' | 'arsitektur'
  >((initialTab as any) || 'dashboard');

  // Login Form State
  const [username, setUsername] = useState('admin_kua');
  const [password, setPassword] = useState('kemenag2026');
  const [loginError, setLoginError] = useState('');

  // CMS News Year Filter State
  const [cmsSelectedYear, setCmsSelectedYear] = useState<string>('Semua');

  // News Form Modal State
  const [showNewsModal, setShowNewsModal] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);

  const [newsTitle, setNewsTitle] = useState('');
  const [newsCategory, setNewsCategory] = useState<NewsItem['category']>('Kegiatan');
  const [newsSummary, setNewsSummary] = useState('');
  const [newsContent, setNewsContent] = useState('');
  const [newsAuthor, setNewsAuthor] = useState('Humas KUA Uluere');
  const [newsImage, setNewsImage] = useState('');

  // Ticket Reply Modal State
  const [selectedTicket, setSelectedTicket] = useState<ConsultationTicket | null>(null);
  const [replyText, setReplyText] = useState('');

  // Staff Form State
  const [showStaffModal, setShowStaffModal] = useState(false);
  const [editingStaff, setEditingStaff] = useState<StaffItem | null>(null);
  const [staffName, setStaffName] = useState('');
  const [staffNip, setStaffNip] = useState('');
  const [staffPos, setStaffPos] = useState<StaffItem['position']>('Penghulu');
  const [staffStatus, setStaffStatus] = useState<StaffItem['status']>('PNS');
  const [staffBio, setStaffBio] = useState('');
  const [staffPhoto, setStaffPhoto] = useState('');

  // Desa Modal State
  const [showDesaModal, setShowDesaModal] = useState(false);
  const [editingDesa, setEditingDesa] = useState<DesaItem | null>(null);
  const [desaName, setDesaName] = useState('');
  const [desaCode, setDesaCode] = useState('');
  const [desaCapital, setDesaCapital] = useState('');
  const [desaMasjidCount, setDesaMasjidCount] = useState(5);
  const [desaWakafCount, setDesaWakafCount] = useState(3);
  const [desaDescription, setDesaDescription] = useState('');

  // Historical Head Modal State
  const [showHeadModal, setShowHeadModal] = useState(false);
  const [editingHead, setEditingHead] = useState<HistoricalHeadItem | null>(null);
  const [headPeriod, setHeadPeriod] = useState('');
  const [headName, setHeadName] = useState('');
  const [headNip, setHeadNip] = useState('');
  const [headPhotoUrl, setHeadPhotoUrl] = useState('');
  const [headAchievements, setHeadAchievements] = useState('');
  const [headStatus, setHeadStatus] = useState<'Aktif Menjabat' | 'Demisioner'>('Demisioner');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin_kua' && password === 'kemenag2026') {
      setIsAdminLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Username atau Password KUA salah. Gunakan: admin_kua / kemenag2026');
    }
  };

  const handleSaveNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsTitle || !newsContent) {
      alert('Judul dan Isi Berita wajib diisi.');
      return;
    }

    if (editingNews) {
      // Update
      setNewsList((prev) =>
        prev.map((n) =>
          n.id === editingNews.id
            ? {
                ...n,
                title: newsTitle,
                category: newsCategory,
                summary: newsSummary,
                content: newsContent,
                author: newsAuthor,
                imageUrl: newsImage || n.imageUrl
              }
            : n
        )
      );
    } else {
      // Create
      const newArticle: NewsItem = {
        id: `berita-${Date.now()}`,
        title: newsTitle,
        slug: newsTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        category: newsCategory,
        summary: newsSummary,
        content: newsContent,
        author: newsAuthor,
        date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }),
        imageUrl: newsImage || 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&auto=format&fit=crop&q=80',
        views: 1,
        featured: false
      };
      setNewsList((prev) => [newArticle, ...prev]);
    }

    setShowNewsModal(false);
    setEditingNews(null);
    setNewsTitle('');
    setNewsSummary('');
    setNewsContent('');
  };

  const handleDeleteNews = (id: string) => {
    if (confirm('Yakin ingin menghapus berita ini?')) {
      setNewsList((prev) => prev.filter((n) => n.id !== id));
    }
  };

  const handleSaveTicketReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTicket || !replyText) return;

    setTickets((prev) =>
      prev.map((t) =>
        t.id === selectedTicket.id
          ? {
              ...t,
              reply: replyText,
              status: 'Selesai',
              repliedAt: `${new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}, ${new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WITA`
            }
          : t
      )
    );

    setSelectedTicket(null);
    setReplyText('');
  };

  // Staff CRUD Handlers
  const handleOpenStaffModal = (staff?: StaffItem) => {
    if (staff) {
      setEditingStaff(staff);
      setStaffName(staff.name);
      setStaffNip(staff.nip);
      setStaffPos(staff.position);
      setStaffStatus(staff.status);
      setStaffBio(staff.bio);
      setStaffPhoto(staff.photoUrl);
    } else {
      setEditingStaff(null);
      setStaffName('');
      setStaffNip('');
      setStaffPos('Penghulu');
      setStaffStatus('PNS');
      setStaffBio('');
      setStaffPhoto('');
    }
    setShowStaffModal(true);
  };

  const handleSaveStaff = (e: React.FormEvent) => {
    e.preventDefault();
    if (!staffName || !staffNip) return;

    if (editingStaff) {
      setStaffList((prev) =>
        prev.map((s) =>
          s.id === editingStaff.id
            ? {
                ...s,
                name: staffName,
                nip: staffNip,
                position: staffPos,
                status: staffStatus,
                bio: staffBio || 'Petugas resmi KUA Kecamatan Uluere.',
                photoUrl: staffPhoto || ''
              }
            : s
        )
      );
    } else {
      const newS: StaffItem = {
        id: `staf-${Date.now()}`,
        name: staffName,
        nip: staffNip,
        position: staffPos,
        status: staffStatus,
        photoUrl: staffPhoto || '',
        bio: staffBio || 'Petugas resmi KUA Kecamatan Uluere.'
      };
      setStaffList((prev) => [...prev, newS]);
    }

    setShowStaffModal(false);
    setEditingStaff(null);
    setStaffName('');
    setStaffNip('');
  };

  const handleDeleteStaff = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus data pegawai ini?')) {
      setStaffList((prev) => prev.filter((s) => s.id !== id));
    }
  };

  // Desa CRUD Handlers
  const handleOpenDesaModal = (desa?: DesaItem) => {
    if (desa) {
      setEditingDesa(desa);
      setDesaName(desa.name);
      setDesaCode(desa.code);
      setDesaCapital(desa.capital);
      setDesaMasjidCount(desa.masjidCount);
      setDesaWakafCount(desa.wakafCount);
      setDesaDescription(desa.description);
    } else {
      setEditingDesa(null);
      setDesaName('');
      setDesaCode('73.03.06.2007');
      setDesaCapital('');
      setDesaMasjidCount(5);
      setDesaWakafCount(3);
      setDesaDescription('');
    }
    setShowDesaModal(true);
  };

  const handleSaveDesa = (e: React.FormEvent) => {
    e.preventDefault();
    if (!desaName) return;
    if (!setDesaList) return;

    if (editingDesa) {
      setDesaList((prev) =>
        prev.map((d) =>
          d.id === editingDesa.id
            ? {
                ...d,
                name: desaName,
                code: desaCode,
                capital: desaCapital,
                masjidCount: Number(desaMasjidCount),
                wakafCount: Number(desaWakafCount),
                description: desaDescription
              }
            : d
        )
      );
    } else {
      const newD: DesaItem = {
        id: `desa-${Date.now()}`,
        name: desaName,
        code: desaCode,
        capital: desaCapital,
        masjidCount: Number(desaMasjidCount),
        wakafCount: Number(desaWakafCount),
        description: desaDescription
      };
      setDesaList((prev) => [...prev, newD]);
    }
    setShowDesaModal(false);
  };

  const handleDeleteDesa = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus data desa ini?')) {
      if (setDesaList) setDesaList((prev) => prev.filter((d) => d.id !== id));
    }
  };

  // Historical Head CRUD Handlers
  const handleOpenHeadModal = (head?: HistoricalHeadItem) => {
    if (head) {
      setEditingHead(head);
      setHeadPeriod(head.period);
      setHeadName(head.name);
      setHeadNip(head.nip);
      setHeadPhotoUrl(head.photoUrl);
      setHeadAchievements(head.achievements);
      setHeadStatus(head.status);
    } else {
      setEditingHead(null);
      setHeadPeriod('2026 – Sekarang');
      setHeadName('');
      setHeadNip('');
      setHeadPhotoUrl('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80');
      setHeadAchievements('');
      setHeadStatus('Demisioner');
    }
    setShowHeadModal(true);
  };

  const handleSaveHead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!headName || !headPeriod) return;
    if (!setHistoricalHeads) return;

    if (editingHead) {
      setHistoricalHeads((prev) =>
        prev.map((h) =>
          h.id === editingHead.id
            ? {
                ...h,
                period: headPeriod,
                name: headName,
                nip: headNip,
                photoUrl: headPhotoUrl || '',
                achievements: headAchievements,
                status: headStatus
              }
            : h
        )
      );
    } else {
      const newH: HistoricalHeadItem = {
        id: `head-${Date.now()}`,
        period: headPeriod,
        name: headName,
        nip: headNip,
        photoUrl: headPhotoUrl || '',
        achievements: headAchievements,
        status: headStatus
      };
      setHistoricalHeads((prev) => [newH, ...prev]);
    }
    setShowHeadModal(false);
  };

  const handleDeleteHead = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus rekam jejak Kepala KUA ini?')) {
      if (setHistoricalHeads) setHistoricalHeads((prev) => prev.filter((h) => h.id !== id));
    }
  };

  if (!isAdminLoggedIn) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border border-slate-100 space-y-6">
          
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <img
                src="/logo-kemenag.svg"
                alt="Logo Resmi Kementerian Agama RI"
                className="w-10 h-10 object-contain"
              />
              <div>
                <h2 className="font-bold text-lg text-slate-900">CMS Admin KUA Uluere</h2>
                <p className="text-xs text-slate-500">Sistem Informasi Manajemen Konten</p>
              </div>
            </div>
            <button
              onClick={onCloseModal}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 font-medium">
            💡 <strong>Kredensial Demo Operator KUA:</strong><br />
            Username: <code className="bg-white px-1.5 py-0.5 rounded border text-amber-900 font-bold">admin_kua</code><br />
            Password: <code className="bg-white px-1.5 py-0.5 rounded border text-amber-900 font-bold">kemenag2026</code>
          </div>

          {loginError && (
            <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Username Operator</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Password System</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Masuk Dashboard CMS</span>
            </button>
          </form>

        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
      <div className="bg-slate-900 text-white rounded-3xl max-w-6xl w-full h-[95vh] flex flex-col shadow-2xl border border-slate-700 overflow-hidden">
        
        {/* CMS Top Navigation Bar */}
        <div className="bg-slate-800 px-6 py-4 border-b border-slate-700 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <img
              src="/logo-kemenag.svg"
              alt="Logo Resmi Kementerian Agama RI"
              className="w-9 h-9 object-contain"
            />
            <div>
              <h2 className="font-bold text-sm text-white flex items-center gap-2">
                <span>Dashboard Admin KUA Uluere</span>
                <span className="px-2 py-0.5 rounded bg-emerald-900 text-emerald-300 text-[10px]">Active</span>
              </h2>
              <p className="text-[11px] text-slate-400">Operator: Staf KUA Bantaeng</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAdminLoggedIn(false)}
              className="px-3 py-1.5 bg-slate-700 hover:bg-red-900/80 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Keluar Admin</span>
            </button>
            <button
              onClick={onCloseModal}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CMS Inner Layout */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Sidebar Menu */}
          <aside className="w-52 bg-slate-950/80 border-r border-slate-800 p-4 space-y-1 shrink-0 font-medium text-xs">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors flex items-center gap-2.5 ${
                activeTab === 'dashboard' ? 'bg-emerald-700 text-white font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <BarChart2 className="w-4 h-4" />
              <span>Ringkasan Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab('berita')}
              className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors flex items-center gap-2.5 ${
                activeTab === 'berita' ? 'bg-emerald-700 text-white font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Newspaper className="w-4 h-4" />
              <span>Manajemen Berita</span>
            </button>

            <button
              onClick={() => setActiveTab('inbox')}
              className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors flex items-center justify-between ${
                activeTab === 'inbox' ? 'bg-emerald-700 text-white font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4" />
                <span>Kotak Konsultasi</span>
              </span>
              <span className="px-1.5 py-0.5 rounded-full bg-amber-500 text-emerald-950 text-[10px] font-bold">
                {tickets.filter((t) => t.status === 'Menunggu').length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('pegawai')}
              className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors flex items-center gap-2.5 ${
                activeTab === 'pegawai' ? 'bg-emerald-700 text-white font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Data Pegawai/PAI</span>
            </button>

            <button
              onClick={() => setActiveTab('desa')}
              className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors flex items-center gap-2.5 ${
                activeTab === 'desa' ? 'bg-emerald-700 text-white font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Kelola 6 Desa Uluere</span>
            </button>

            <button
              onClick={() => setActiveTab('kepala_sejarah')}
              className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors flex items-center gap-2.5 ${
                activeTab === 'kepala_sejarah' ? 'bg-emerald-700 text-white font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <History className="w-4 h-4 text-amber-400" />
              <span>Kepala KUA Masa ke Masa</span>
            </button>

            <button
              onClick={() => setActiveTab('sp_sop')}
              className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors flex items-center justify-between ${
                activeTab === 'sp_sop' ? 'bg-emerald-700 text-white font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-amber-400" />
                <span>48 SP & SOP KUA</span>
              </span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-amber-300 text-[10px] font-mono font-bold">48</span>
            </button>

            <button
              onClick={() => setActiveTab('statistik')}
              className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors flex items-center gap-2.5 ${
                activeTab === 'statistik' ? 'bg-emerald-700 text-white font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <BarChart2 className="w-4 h-4" />
              <span>Statistik Real-Time</span>
            </button>

            <button
              onClick={() => setActiveTab('banner')}
              className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors flex items-center gap-2.5 ${
                activeTab === 'banner' ? 'bg-emerald-700 text-white font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>Banner & Announcement</span>
            </button>

            <button
              onClick={() => setActiveTab('arsitektur')}
              className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors flex items-center gap-2.5 ${
                activeTab === 'arsitektur' ? 'bg-amber-600 text-white font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Dokumentasi Arsitektur Web</span>
            </button>

            <button
              onClick={() => setActiveTab('maintenance')}
              className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors flex items-center justify-between ${
                activeTab === 'maintenance' ? 'bg-emerald-700 text-white font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Wrench className="w-4 h-4" />
                <span>Mode Pemeliharaan</span>
              </span>
              {isMaintenanceMode ? (
                <span className="px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase animate-pulse">ON</span>
              ) : (
                <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px] font-mono">OFF</span>
              )}
            </button>
          </aside>

          {/* Main Body View */}
          <main className="flex-1 p-6 overflow-y-auto space-y-6">
            
            {/* View 1: Dashboard Overview */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                
                {/* Maintenance Quick Status Banner */}
                <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all ${
                  isMaintenanceMode 
                    ? 'bg-amber-950/80 border-amber-600/80 text-amber-200' 
                    : 'bg-slate-800/80 border-slate-700 text-slate-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold ${
                      isMaintenanceMode ? 'bg-amber-500 text-slate-950' : 'bg-slate-700 text-slate-300'
                    }`}>
                      <Wrench className={`w-5 h-5 ${isMaintenanceMode ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-white">Status Pemeliharaan Sistem (Maintenance Mode)</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold font-mono uppercase ${
                          isMaintenanceMode ? 'bg-amber-500 text-slate-950' : 'bg-emerald-900 text-emerald-300'
                        }`}>
                          {isMaintenanceMode ? 'AKTIF (ON)' : 'NON-AKTIF (OFF)'}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {isMaintenanceMode 
                          ? 'Pengunjung publik saat ini diarahkan ke Halaman Pemeliharaan. Akses publik terkunci.' 
                          : 'Portal Website KUA Uluere dapat diakses secara normal oleh seluruh masyarakat.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsMaintenanceMode(!isMaintenanceMode)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 shadow-md ${
                        isMaintenanceMode 
                          ? 'bg-emerald-600 hover:bg-emerald-500 text-white' 
                          : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                      }`}
                    >
                      <Power className="w-4 h-4" />
                      <span>{isMaintenanceMode ? 'Matikan Maintenance (Set ONLINE)' : 'Aktifkan Maintenance (Set OFFLINE)'}</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('maintenance')}
                      className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-xl text-xs font-semibold"
                    >
                      Pengaturan
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700">
                    <span className="text-xs text-slate-400 block">Total Berita Terbit</span>
                    <span className="text-2xl font-bold font-serif text-white">{newsList.length}</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700">
                    <span className="text-xs text-slate-400 block">Konsultasi Masuk</span>
                    <span className="text-2xl font-bold font-serif text-amber-400">{tickets.length}</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700">
                    <span className="text-xs text-slate-400 block">Nikah Bulan Ini</span>
                    <span className="text-2xl font-bold font-serif text-emerald-400">{stats.nikahBulanIni}</span>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700">
                    <span className="text-xs text-slate-400 block">Pegawai & PAI</span>
                    <span className="text-2xl font-bold font-serif text-white">{staffList.length}</span>
                  </div>
                </div>

                <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 space-y-3">
                  <h3 className="font-bold text-sm text-white">Konsultasi Terkini Masuk:</h3>
                  <div className="space-y-2">
                    {tickets.slice(0, 3).map((t) => (
                      <div key={t.id} className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs flex items-center justify-between">
                        <div>
                          <strong className="text-amber-300 block font-mono">{t.ticketCode}</strong>
                          <span className="text-slate-300">{t.senderName} ({t.village}) — {t.subject}</span>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          t.status === 'Selesai' ? 'bg-emerald-900 text-emerald-300' : 'bg-amber-900 text-amber-300'
                        }`}>
                          {t.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture Docs Quick Shortcut Banner */}
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-500/30">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">Dokumentasi Arsitektur Web & ERD Database</h4>
                      <p className="text-xs text-slate-400">
                        Spesifikasi Database MySQL 8.0, ERD Diagram, Sitemap Navigasi, Timeline Proyek & Load Testing Plan.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveTab('arsitektur')}
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-colors shrink-0 shadow"
                  >
                    Buka Dokumen Arsitektur
                  </button>
                </div>
              </div>
            )}

            {/* View: Documentation Arsitektur Web */}
            {activeTab === 'arsitektur' && (
              <div className="space-y-4">
                <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-white text-base flex items-center gap-2">
                      <Layers className="w-5 h-5 text-amber-400" />
                      <span>Dokumentasi Arsitektur Web & Database KUA Uluere</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Spesifikasi Teknis, ERD Database MySQL 8.0, Sitemap Navigasi, Timeline Proyek, Proteksi Keamanan, & Load Testing Plan.
                    </p>
                  </div>
                </div>

                <ArchitectureDocs />
              </div>
            )}

            {/* View: Maintenance Mode Settings Panel */}
            {activeTab === 'maintenance' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-base text-white flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-amber-400" />
                    <span>Pengaturan Mode Pemeliharaan Sistem (Maintenance Mode)</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Aktifkan mode pemeliharaan saat melakukan perbaikan database, update data pegawai, atau migrasi server SIMKAH KUA Uluere.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  {/* Left Column: Toggle & Parameters */}
                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-5">
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-between">
                      <div>
                        <span className="block text-xs font-bold text-slate-300">Saklar Maintenance Mode</span>
                        <span className="text-xs text-slate-400">
                          {isMaintenanceMode ? 'Sistem sedang TERKUNCI (Pengunjung melihat Halaman Pemeliharaan)' : 'Sistem ONLINE (Pengunjung dapat mengakses seluruh portal)'}
                        </span>
                      </div>

                      <button
                        onClick={() => setIsMaintenanceMode(!isMaintenanceMode)}
                        className={`p-1.5 rounded-full transition-colors flex items-center gap-2 px-3 py-1.5 font-bold text-xs ${
                          isMaintenanceMode 
                            ? 'bg-amber-500 text-slate-950 shadow-lg ring-2 ring-amber-400' 
                            : 'bg-slate-700 text-slate-300'
                        }`}
                      >
                        {isMaintenanceMode ? <ToggleRight className="w-6 h-6 text-slate-950" /> : <ToggleLeft className="w-6 h-6 text-slate-400" />}
                        <span>{isMaintenanceMode ? 'AKTIF (ON)' : 'MATI (OFF)'}</span>
                      </button>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Pesan/Pengumuman Pemeliharaan untuk Publik:
                        </label>
                        <textarea
                          rows={4}
                          value={maintenanceMessage}
                          onChange={(e) => setMaintenanceMessage(e.target.value)}
                          className="w-full px-3 py-2 bg-slate-900 text-xs rounded-xl border border-slate-700 text-white font-sans focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Estimasi Waktu Selesai Pemeliharaan:
                        </label>
                        <input
                          type="text"
                          value={maintenanceEndTime}
                          onChange={(e) => setMaintenanceEndTime(e.target.value)}
                          placeholder="e.g. 02 Agustus 2026, 12:00 WITA"
                          className="w-full px-3 py-2 bg-slate-900 text-xs rounded-xl border border-slate-700 text-white font-mono focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => alert('Pengaturan Maintenance Mode KUA Uluere berhasil disimpan!')}
                          className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-md transition-colors"
                        >
                          Simpan Perubahan Pesan Maintenance
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Live Simulator Card */}
                  <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4" />
                        <span>Pratinjau Tampilan Pengunjung Saat ON</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">KUA Uluere Bantaeng</span>
                    </div>

                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-emerald-800 text-amber-300 font-serif font-black flex items-center justify-center text-xs">
                          KUA
                        </div>
                        <div>
                          <strong className="text-white block">KUA Kecamatan Uluere</strong>
                          <span className="text-[10px] text-amber-400 font-mono">Status: MODE PEMELIHARAAN</span>
                        </div>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-slate-300 text-[11px] leading-relaxed">
                        "{maintenanceMessage}"
                      </div>

                      <div className="text-[10px] text-slate-400 font-mono">
                        ⏰ Estimasi Selesai: <span className="text-white font-bold">{maintenanceEndTime}</span>
                      </div>
                    </div>

                    <div className="p-3 bg-emerald-950/60 rounded-xl border border-emerald-900/60 text-[11px] text-emerald-200 leading-relaxed">
                      💡 <strong>Petunjuk Operator:</strong> Ketika Maintenance Mode AKTIF, petugas operator dapat memilih button <em>"Masuk Pratinjau Website"</em> untuk meninjau atau memperbarui data di portal tanpa harus menonaktifkan Maintenance Mode bagi masyarakat.
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* View 2: News CRUD */}
            {activeTab === 'berita' && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-800 p-4 rounded-2xl border border-slate-700">
                  <div>
                    <h3 className="font-bold text-base text-white">Manajemen Berita & Artikel KUA</h3>
                    <p className="text-xs text-slate-400">Total {newsList.length} artikel terpublikasi dari tahun 2021 hingga 2026.</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                    {/* Filter Tahun */}
                    <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-700 text-xs">
                      <span className="text-slate-400 font-medium">Tahun:</span>
                      <select
                        value={cmsSelectedYear}
                        onChange={(e) => setCmsSelectedYear(e.target.value)}
                        className="bg-transparent font-bold text-amber-400 focus:outline-none cursor-pointer"
                      >
                        <option value="Semua" className="bg-slate-900 text-white">Semua Tahun</option>
                        <option value="2026" className="bg-slate-900 text-white">2026</option>
                        <option value="2025" className="bg-slate-900 text-white">2025</option>
                        <option value="2024" className="bg-slate-900 text-white">2024</option>
                        <option value="2023" className="bg-slate-900 text-white">2023</option>
                        <option value="2022" className="bg-slate-900 text-white">2022</option>
                        <option value="2021" className="bg-slate-900 text-white">2021</option>
                      </select>
                    </div>

                    <button
                      onClick={() => {
                        setEditingNews(null);
                        setNewsTitle('');
                        setNewsSummary('');
                        setNewsContent('');
                        setShowNewsModal(true);
                      }}
                      className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Tambah Berita</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  {newsList
                    .filter((n) => {
                      const yr = String(n.year || n.date.match(/\d{4}/)?.[0] || '2026');
                      return cmsSelectedYear === 'Semua' || yr === cmsSelectedYear;
                    })
                    .map((news) => (
                      <div key={news.id} className="p-4 bg-slate-800 rounded-2xl border border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-slate-600 transition-all">
                        <div className="space-y-1 max-w-2xl">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded bg-emerald-900 text-emerald-300 text-[10px] font-bold uppercase">
                              {news.category}
                            </span>
                            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold">
                              {news.year || news.date.match(/\d{4}/)?.[0] || '2026'}
                            </span>
                          </div>
                          <h4 className="font-bold text-sm text-white">{news.title}</h4>
                          <p className="text-xs text-slate-400 line-clamp-1">{news.summary}</p>
                          <div className="text-[11px] text-slate-500 font-mono">
                            {news.date} | {news.views} dibaca | Penulis: {news.author}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => {
                              setEditingNews(news);
                              setNewsTitle(news.title);
                              setNewsCategory(news.category);
                              setNewsSummary(news.summary);
                              setNewsContent(news.content);
                              setNewsAuthor(news.author);
                              setNewsImage(news.imageUrl);
                              setShowNewsModal(true);
                            }}
                            className="p-2 bg-slate-700 hover:bg-slate-600 text-amber-300 rounded-lg text-xs"
                            title="Edit Berita"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteNews(news.id)}
                            className="p-2 bg-slate-700 hover:bg-red-900 text-red-300 rounded-lg text-xs"
                            title="Hapus Berita"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* View 3: Inbox / Consultation Management */}
            {activeTab === 'inbox' && (
              <div className="space-y-4">
                <h3 className="font-bold text-base text-white">Kelola Pertanyaan & Pengaduan Warga</h3>

                <div className="space-y-3">
                  {tickets.map((ticket) => (
                    <div key={ticket.id} className="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                        <div className="flex items-center gap-2 font-mono text-xs">
                          <span className="font-bold text-amber-400">{ticket.ticketCode}</span>
                          <span className="text-slate-400">({ticket.createdAt})</span>
                        </div>
                        <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                          ticket.status === 'Selesai' ? 'bg-emerald-900 text-emerald-300' : 'bg-amber-900 text-amber-300'
                        }`}>
                          {ticket.status}
                        </span>
                      </div>

                      <div className="text-xs text-slate-300 space-y-1">
                        <p><strong>Pengirim:</strong> {ticket.senderName} ({ticket.senderPhone}) - {ticket.village}</p>
                        <p><strong>Kategori:</strong> {ticket.category}</p>
                        <p><strong>Subjek:</strong> {ticket.subject}</p>
                        <p className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-slate-200">
                          "{ticket.message}"
                        </p>
                      </div>

                      {ticket.reply && (
                        <div className="p-3 bg-emerald-950 rounded-xl border border-emerald-800 text-xs text-emerald-200">
                          <strong className="block text-amber-400 text-[11px] mb-0.5">Tanggapan Staf KUA ({ticket.repliedAt}):</strong>
                          {ticket.reply}
                        </div>
                      )}

                      <div className="flex items-center gap-2 pt-2">
                        <button
                          onClick={() => {
                            setSelectedTicket(ticket);
                            setReplyText(ticket.reply || '');
                          }}
                          className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs font-bold"
                        >
                          {ticket.reply ? 'Edit Jawaban' : 'Jawab Konsultasi'}
                        </button>
                        <a
                          href={`https://wa.me/62${ticket.senderPhone.replace(/[^0-9]/g, '').substring(1)}?text=Assalamu%20alaikum%20${encodeURIComponent(ticket.senderName)},%20menanggapi%20tiket%20${ticket.ticketCode}%20mengenai%20${encodeURIComponent(ticket.subject)}...`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-emerald-300 rounded-lg text-xs font-bold flex items-center gap-1"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Balas via WA</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* View 4: Staff & Pegawai Roster */}
            {activeTab === 'pegawai' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-slate-800 p-4 rounded-2xl border border-slate-700">
                  <div>
                    <h3 className="font-bold text-base text-white">Data Pegawai, Penghulu, & Penyuluh PAI</h3>
                    <p className="text-xs text-slate-400">Total {staffList.length} personil SDM terdaftar di KUA Uluere.</p>
                  </div>
                  <button
                    onClick={() => handleOpenStaffModal()}
                    className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Tambah Pegawai Baru</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {staffList.map((s) => (
                    <div key={s.id} className="p-4 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-between gap-4 hover:border-slate-600 transition-all">
                      <div className="flex items-center gap-3.5">
                        {s.photoUrl && s.photoUrl.trim() !== '' && (
                          <img src={s.photoUrl} alt={s.name} className="w-14 h-14 rounded-xl object-cover border border-emerald-600/50 shrink-0" />
                        )}
                        <div>
                          <span className="text-[10px] font-bold uppercase text-amber-400">{s.status}</span>
                          <h4 className="font-bold text-sm text-white">{s.name}</h4>
                          <p className="text-xs text-emerald-400">{s.position}</p>
                          <p className="text-[11px] text-slate-400 font-mono">NIP: {s.nip}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => handleOpenStaffModal(s)}
                          className="p-2 bg-slate-700 hover:bg-slate-600 text-amber-300 rounded-lg text-xs"
                          title="Edit Pegawai"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteStaff(s.id)}
                          className="p-2 bg-slate-700 hover:bg-red-900 text-red-300 rounded-lg text-xs"
                          title="Hapus Pegawai"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* View 4.5: Desa Management */}
            {activeTab === 'desa' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-slate-800 p-4 rounded-2xl border border-slate-700">
                  <div>
                    <h3 className="font-bold text-base text-white">Kelola Data 6 Desa Kecamatan Uluere</h3>
                    <p className="text-xs text-slate-400">Pengaturan nama desa, kode Kemendagri, data masjid, & sertifikat wakaf.</p>
                  </div>
                  <button
                    onClick={() => handleOpenDesaModal()}
                    className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Tambah Desa Baru</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {desaList.map((desa) => (
                    <div key={desa.id || desa.name} className="p-4 bg-slate-800 rounded-2xl border border-slate-700 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                            {desa.code}
                          </span>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleOpenDesaModal(desa)}
                              className="p-1.5 bg-slate-700 hover:bg-slate-600 text-amber-300 rounded-lg"
                              title="Edit Desa"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteDesa(desa.id)}
                              className="p-1.5 bg-slate-700 hover:bg-red-900 text-red-300 rounded-lg"
                              title="Hapus Desa"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <h4 className="font-bold text-sm text-white">{desa.name}</h4>
                        <p className="text-xs text-amber-400 font-medium mt-0.5">{desa.capital}</p>
                        <p className="text-[11px] text-slate-400 mt-2 line-clamp-2">{desa.description}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px] border-t border-slate-700/80 pt-2.5">
                        <div className="bg-slate-900 p-2 rounded-xl text-slate-300">
                          <span className="text-slate-500 block text-[9px] uppercase font-bold">Masjid:</span>
                          <span className="font-bold text-emerald-400">{desa.masjidCount} Unit</span>
                        </div>
                        <div className="bg-slate-900 p-2 rounded-xl text-slate-300">
                          <span className="text-slate-500 block text-[9px] uppercase font-bold">Wakaf AIW:</span>
                          <span className="font-bold text-emerald-400">{desa.wakafCount} Persil</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* View 4.6: Historical Heads Management */}
            {activeTab === 'kepala_sejarah' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-slate-800 p-4 rounded-2xl border border-slate-700">
                  <div>
                    <h3 className="font-bold text-base text-white">Kelola Kepala KUA Uluere dari Masa ke Masa</h3>
                    <p className="text-xs text-slate-400">Rekam jejak kepemimpinan pejabat KUA Uluere dari masa ke masa.</p>
                  </div>
                  <button
                    onClick={() => handleOpenHeadModal()}
                    className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Tambah Rekam Pejabat</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {historicalHeads.map((head) => (
                    <div key={head.id || head.name} className="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-3 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
                            {head.period}
                          </span>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleOpenHeadModal(head)}
                              className="p-1.5 bg-slate-700 hover:bg-slate-600 text-amber-300 rounded-lg"
                              title="Edit Kepala KUA Masa Lalu"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteHead(head.id)}
                              className="p-1.5 bg-slate-700 hover:bg-red-900 text-red-300 rounded-lg"
                              title="Hapus Record"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          {head.photoUrl && head.photoUrl.trim() !== '' && (
                            <img src={head.photoUrl} alt={head.name} className="w-12 h-12 rounded-xl object-cover border border-emerald-600 shrink-0" />
                          )}
                          <div>
                            <h4 className="font-bold text-sm text-white">{head.name}</h4>
                            <p className="text-xs text-slate-400 font-mono">NIP: {head.nip}</p>
                            <span className="text-[10px] text-emerald-400 font-semibold">{head.status}</span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-300 bg-slate-900 p-2.5 rounded-xl border border-slate-750 line-clamp-2">
                          "{head.achievements}"
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* View 4.7: 48 Standar Pelayanan (SP) & SOP KUA */}
            {activeTab === 'sp_sop' && (
              <div className="space-y-4 bg-slate-900 rounded-2xl p-4 border border-slate-800">
                <SopLayananPage />
              </div>
            )}

            {/* View 5: Real-Time Statistics Manager */}
            {activeTab === 'statistik' && (
              <div className="space-y-6">
                <h3 className="font-bold text-base text-white">Update Data Statistik Publik KUA Uluere</h3>

                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-4 max-w-xl">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Akad Nikah Bulan Ini</label>
                    <input
                      type="number"
                      value={stats.nikahBulanIni}
                      onChange={(e) => setStats({ ...stats, nikahBulanIni: parseInt(e.target.value) || 0 })}
                      className="w-full px-3 py-2 bg-slate-900 text-xs rounded-xl border border-slate-700 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Masjid & Musholla Terdaftar</label>
                    <input
                      type="number"
                      value={stats.masjidMusholla}
                      onChange={(e) => setStats({ ...stats, masjidMusholla: parseInt(e.target.value) || 0 })}
                      className="w-full px-3 py-2 bg-slate-900 text-xs rounded-xl border border-slate-700 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Tanah Wakaf Ber-AIW</label>
                    <input
                      type="number"
                      value={stats.tanahWakafSertifikat}
                      onChange={(e) => setStats({ ...stats, tanahWakafSertifikat: parseInt(e.target.value) || 0 })}
                      className="w-full px-3 py-2 bg-slate-900 text-xs rounded-xl border border-slate-700 text-white"
                    />
                  </div>

                  <button
                    onClick={() => alert('Data statistik KUA Uluere berhasil dipublikasikan!')}
                    className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl"
                  >
                    Simpan Perubahan Statistik
                  </button>
                </div>
              </div>
            )}

            {/* View 6: Banner & Slider */}
            {activeTab === 'banner' && (
              <div className="space-y-4">
                <h3 className="font-bold text-base text-white">Pengaturan Banner & Running Text</h3>

                <div className="space-y-3">
                  {banners.map((b) => (
                    <div key={b.id} className="p-4 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-sm text-white">{b.title}</h4>
                        <p className="text-xs text-slate-400">{b.subtitle}</p>
                      </div>
                      <button
                        onClick={() => {
                          setBanners((prev) =>
                            prev.map((banner) => (banner.id === b.id ? { ...banner, active: !banner.active } : banner))
                          );
                        }}
                        className={`px-3 py-1 rounded-lg text-xs font-bold ${
                          b.active ? 'bg-emerald-700 text-white' : 'bg-slate-700 text-slate-400'
                        }`}
                      >
                        {b.active ? 'Aktif' : 'Non-aktif'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </main>

        </div>

      </div>

      {/* Article Create/Edit Modal */}
      {showNewsModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 text-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-slate-700 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-base text-white">
                {editingNews ? 'Edit Artikel Berita' : 'Tambah Berita KUA Baru'}
              </h3>
              <button onClick={() => setShowNewsModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveNews} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Judul Berita</label>
                <input
                  type="text"
                  value={newsTitle}
                  onChange={(e) => setNewsTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Kategori</label>
                <select
                  value={newsCategory}
                  onChange={(e) => setNewsCategory(e.target.value as any)}
                  className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white"
                >
                  <option value="Kegiatan">Kegiatan Kantor</option>
                  <option value="Pengumuman">Pengumuman Official</option>
                  <option value="Edukasi Syariah">Edukasi Syariah</option>
                  <option value="Khutbah">Khutbah / Artikel</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Ringkasan Singkat</label>
                <textarea
                  rows={2}
                  value={newsSummary}
                  onChange={(e) => setNewsSummary(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Isi Berita Lengkap</label>
                <textarea
                  rows={6}
                  value={newsContent}
                  onChange={(e) => setNewsContent(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white font-mono"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">URL Gambar Cover</label>
                <input
                  type="text"
                  value={newsImage}
                  onChange={(e) => setNewsImage(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowNewsModal(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 text-xs font-semibold rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl"
                >
                  Simpan Berita
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Ticket Reply Modal */}
      {selectedTicket && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 text-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-700 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-base text-amber-400">Jawab Tiket: {selectedTicket.ticketCode}</h3>
              <button onClick={() => setSelectedTicket(null)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-slate-300 bg-slate-800 p-3 rounded-xl">
              <strong>Pertanyaan {selectedTicket.senderName}:</strong> "{selectedTicket.message}"
            </div>

            <form onSubmit={handleSaveTicketReply} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Tanggapan Resmi KUA Uluere:</label>
                <textarea
                  rows={5}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Ketik tanggapan resmi..."
                  className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white"
                  required
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedTicket(null)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 text-xs rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-700 text-white text-xs font-bold rounded-xl"
                >
                  Kirim Jawaban
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Staff Create/Edit Modal */}
      {showStaffModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 text-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-700 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-base text-white">
                {editingStaff ? 'Edit Data Pegawai' : 'Tambah Pegawai Baru'}
              </h3>
              <button onClick={() => setShowStaffModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveStaff} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Nama Lengkap & Gelar</label>
                <input
                  type="text"
                  value={staffName}
                  onChange={(e) => setStaffName(e.target.value)}
                  placeholder="Contoh: Zainuddin Samad, S.Ag."
                  className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">NIP / NI PPAIW</label>
                <input
                  type="text"
                  value={staffNip}
                  onChange={(e) => setStaffNip(e.target.value)}
                  placeholder="19760815 200312 1 003"
                  className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white font-mono"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Jabatan</label>
                  <select
                    value={staffPos}
                    onChange={(e) => setStaffPos(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white"
                  >
                    <option value="Kepala KUA & PPAIW">Kepala KUA & PPAIW</option>
                    <option value="Penghulu">Penghulu</option>
                    <option value="Penyuluh Agama Islam (PAI)">Penyuluh Agama (PAI)</option>
                    <option value="Staf Administrasi">Staf Administrasi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Status Kepegawaian</label>
                  <select
                    value={staffStatus}
                    onChange={(e) => setStaffStatus(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white"
                  >
                    <option value="PNS">PNS</option>
                    <option value="PPPK">PPPK</option>
                    <option value="Non-ASN">Non-ASN</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Bio / Keterangan Singkat</label>
                <textarea
                  rows={2}
                  value={staffBio}
                  onChange={(e) => setStaffBio(e.target.value)}
                  placeholder="Profil singkat tugas..."
                  className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-300">Foto Profil (Upload File / Link URL)</label>
                
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setStaffPhoto(reader.result as string);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="block w-full text-xs text-slate-300 file:mr-2 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-emerald-700 file:text-white hover:file:bg-emerald-600 cursor-pointer"
                  />
                  {staffPhoto && (
                    <button
                      type="button"
                      onClick={() => setStaffPhoto('')}
                      className="px-2.5 py-1.5 bg-rose-900/80 hover:bg-rose-800 text-rose-200 text-xs font-bold rounded-xl border border-rose-700 shrink-0"
                    >
                      Hapus Foto
                    </button>
                  )}
                </div>

                <input
                  type="text"
                  value={staffPhoto}
                  onChange={(e) => setStaffPhoto(e.target.value)}
                  placeholder="Atau masukkan Link URL Foto (Kosongkan jika tidak ada foto)..."
                  className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white"
                />

                {staffPhoto ? (
                  <div className="flex items-center gap-2 pt-1">
                    <img src={staffPhoto} alt="Preview" className="w-12 h-12 rounded-xl object-cover border border-emerald-500" />
                    <span className="text-[11px] text-emerald-400 font-medium">Foto siap ditampilkan</span>
                  </div>
                ) : (
                  <p className="text-[11px] text-amber-400/90 font-medium italic">
                    *Foto kosong — Halaman web tidak akan menampilkan bingkai foto.
                  </p>
                )}
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowStaffModal(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 text-xs font-semibold rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl"
                >
                  Simpan Pegawai
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Desa Create/Edit Modal */}
      {showDesaModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 text-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-700 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-base text-white">
                {editingDesa ? 'Edit Data Desa' : 'Tambah Desa Baru'}
              </h3>
              <button onClick={() => setShowDesaModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveDesa} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Nama Desa</label>
                <input
                  type="text"
                  value={desaName}
                  onChange={(e) => setDesaName(e.target.value)}
                  placeholder="Contoh: Desa Bonto Marannu"
                  className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Kode Wilayah (Kemendagri)</label>
                <input
                  type="text"
                  value={desaCode}
                  onChange={(e) => setDesaCode(e.target.value)}
                  placeholder="73.03.06.2001"
                  className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white font-mono"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Ibu Kota / Dusun Utama</label>
                <input
                  type="text"
                  value={desaCapital}
                  onChange={(e) => setDesaCapital(e.target.value)}
                  placeholder="Dusun Campaga"
                  className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Jumlah Masjid (Unit)</label>
                  <input
                    type="number"
                    value={desaMasjidCount}
                    onChange={(e) => setDesaMasjidCount(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Wakaf AIW (Persil)</label>
                  <input
                    type="number"
                    value={desaWakafCount}
                    onChange={(e) => setDesaWakafCount(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Deskripsi Singkat Wilayah</label>
                <textarea
                  rows={3}
                  value={desaDescription}
                  onChange={(e) => setDesaDescription(e.target.value)}
                  placeholder="Kawasan agrowisata sayur segar dan kebun apel..."
                  className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowDesaModal(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 text-xs font-semibold rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl"
                >
                  Simpan Desa
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Historical Head Create/Edit Modal */}
      {showHeadModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 text-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-700 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-base text-white">
                {editingHead ? 'Edit Rekam Kepala KUA Masa Lalu' : 'Tambah Kepala KUA Masa Lalu'}
              </h3>
              <button onClick={() => setShowHeadModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveHead} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Periode Jabatan</label>
                <input
                  type="text"
                  value={headPeriod}
                  onChange={(e) => setHeadPeriod(e.target.value)}
                  placeholder="2020 – 2023"
                  className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Nama Lengkap & Gelar</label>
                <input
                  type="text"
                  value={headName}
                  onChange={(e) => setHeadName(e.target.value)}
                  placeholder="Contoh: Dra. Hj. Maryam, M.Ag."
                  className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">NIP</label>
                <input
                  type="text"
                  value={headNip}
                  onChange={(e) => setHeadNip(e.target.value)}
                  placeholder="19680312 199403 1 002"
                  className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Status Kepemimpinan</label>
                <select
                  value={headStatus}
                  onChange={(e) => setHeadStatus(e.target.value as any)}
                  className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white"
                >
                  <option value="Aktif Menjabat">Aktif Menjabat</option>
                  <option value="Demisioner">Demisioner</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Capaian & Program Unggulan</label>
                <textarea
                  rows={3}
                  value={headAchievements}
                  onChange={(e) => setHeadAchievements(e.target.value)}
                  placeholder="Inisiator sertifikasi halal UMKM pegunungan Uluere..."
                  className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-300">Foto Tokoh / Kepala KUA (Upload File / Link URL)</label>
                
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setHeadPhotoUrl(reader.result as string);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="block w-full text-xs text-slate-300 file:mr-2 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-emerald-700 file:text-white hover:file:bg-emerald-600 cursor-pointer"
                  />
                  {headPhotoUrl && (
                    <button
                      type="button"
                      onClick={() => setHeadPhotoUrl('')}
                      className="px-2.5 py-1.5 bg-rose-900/80 hover:bg-rose-800 text-rose-200 text-xs font-bold rounded-xl border border-rose-700 shrink-0"
                    >
                      Hapus Foto
                    </button>
                  )}
                </div>

                <input
                  type="text"
                  value={headPhotoUrl}
                  onChange={(e) => setHeadPhotoUrl(e.target.value)}
                  placeholder="Atau masukkan Link URL Foto (Kosongkan jika tidak ada foto)..."
                  className="w-full px-3 py-2 bg-slate-800 text-xs rounded-xl border border-slate-700 text-white"
                />

                {headPhotoUrl ? (
                  <div className="flex items-center gap-2 pt-1">
                    <img src={headPhotoUrl} alt="Preview" className="w-12 h-12 rounded-xl object-cover border border-emerald-500" />
                    <span className="text-[11px] text-emerald-400 font-medium">Foto siap ditampilkan</span>
                  </div>
                ) : (
                  <p className="text-[11px] text-amber-400/90 font-medium italic">
                    *Foto kosong — Halaman web tidak akan menampilkan bingkai foto.
                  </p>
                )}
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowHeadModal(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 text-xs font-semibold rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl"
                >
                  Simpan Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

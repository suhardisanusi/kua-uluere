import React, { useState, useEffect } from 'react';
import {
  INITIAL_KUA_STATS,
  INITIAL_NEWS,
  INITIAL_STAFF,
  INITIAL_DESA,
  INITIAL_HISTORICAL_HEADS,
  INITIAL_TICKETS,
  INITIAL_BANNERS,
  INITIAL_ZAKAT_WAKAF,
  INITIAL_HEWAN_QURBAN,
  INITIAL_LOKASI_SHOLAT_IED,
  INITIAL_NIKAH_BULANAN,
  INITIAL_PETA_POINTS
} from './data/mockData';
import {
  NewsItem,
  StaffItem,
  DesaItem,
  HistoricalHeadItem,
  KuaStats,
  ConsultationTicket,
  BannerAnnouncement,
  ZakatWakafDesa,
  HewanQurbanDesa,
  LokasiSholatIed,
  NikahBulananStats,
  PetaPointItem
} from './types';

import {
  checkServerHealth,
  fetchNewsFromApi,
  fetchStaffFromApi,
  fetchDesaFromApi,
  fetchHistoricalHeadsFromApi,
  fetchStatsFromApi,
  fetchTicketsFromApi,
  fetchBannersFromApi,
  createTicketInApi
} from './services/api';

import { PrayerWidget } from './components/PrayerWidget';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { QuickServices } from './components/QuickServices';
import { NewsSection } from './components/NewsSection';
import { ProfilPage } from './components/ProfilPage';
import { LayananNikahPage } from './components/LayananNikahPage';
import { LayananLainPage } from './components/LayananLainPage';
import { SopLayananPage } from './components/SopLayananPage';
import { PengaduanPage } from './components/PengaduanPage';
import { InfografisPage } from './components/InfografisPage';
import { ArchitectureDocs } from './components/ArchitectureDocs';
import { AdminCMS } from './components/AdminCMS';
import { MaintenancePage } from './components/MaintenancePage';
import { Footer } from './components/Footer';
import { Wrench, ShieldAlert, Database } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('beranda');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isDbConnected, setIsDbConnected] = useState<boolean>(false);

  const [newsList, setNewsList] = useState<NewsItem[]>(() => {
    const saved = localStorage.getItem('kua_uluere_news');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.length >= INITIAL_NEWS.length) {
        return parsed;
      }
    }
    return INITIAL_NEWS;
  });
  const [staffList, setStaffList] = useState<StaffItem[]>(() => {
    const saved = localStorage.getItem('kua_uluere_staff');
    return saved ? JSON.parse(saved) : INITIAL_STAFF;
  });
  const [desaList, setDesaList] = useState<DesaItem[]>(() => {
    const saved = localStorage.getItem('kua_uluere_desa');
    return saved ? JSON.parse(saved) : INITIAL_DESA;
  });
  const [historicalHeads, setHistoricalHeads] = useState<HistoricalHeadItem[]>(() => {
    const saved = localStorage.getItem('kua_uluere_heads');
    return saved ? JSON.parse(saved) : INITIAL_HISTORICAL_HEADS;
  });
  const [stats, setStats] = useState<KuaStats>(() => {
    const saved = localStorage.getItem('kua_uluere_stats');
    return saved ? JSON.parse(saved) : INITIAL_KUA_STATS;
  });
  const [tickets, setTickets] = useState<ConsultationTicket[]>(() => {
    const saved = localStorage.getItem('kua_uluere_tickets');
    return saved ? JSON.parse(saved) : INITIAL_TICKETS;
  });
  const [banners, setBanners] = useState<BannerAnnouncement[]>(() => {
    const saved = localStorage.getItem('kua_uluere_banners');
    return saved ? JSON.parse(saved) : INITIAL_BANNERS;
  });

  const [zakatWakafData, setZakatWakafData] = useState<ZakatWakafDesa[]>(() => {
    const saved = localStorage.getItem('kua_uluere_zakat_wakaf');
    return saved ? JSON.parse(saved) : INITIAL_ZAKAT_WAKAF;
  });
  const [hewanQurbanData, setHewanQurbanData] = useState<HewanQurbanDesa[]>(() => {
    const saved = localStorage.getItem('kua_uluere_hewan_qurban');
    return saved ? JSON.parse(saved) : INITIAL_HEWAN_QURBAN;
  });
  const [lokasiSholatIedData, setLokasiSholatIedData] = useState<LokasiSholatIed[]>(() => {
    const saved = localStorage.getItem('kua_uluere_sholat_ied');
    return saved ? JSON.parse(saved) : INITIAL_LOKASI_SHOLAT_IED;
  });
  const [nikahBulananData, setNikahBulananData] = useState<NikahBulananStats[]>(() => {
    const saved = localStorage.getItem('kua_uluere_nikah_bulanan');
    return saved ? JSON.parse(saved) : INITIAL_NIKAH_BULANAN;
  });
  const [petaPointsData, setPetaPointsData] = useState<PetaPointItem[]>(() => {
    const saved = localStorage.getItem('kua_uluere_peta_points');
    return saved ? JSON.parse(saved) : INITIAL_PETA_POINTS;
  });

  // LocalStorage Sync Effects for Infografis
  useEffect(() => {
    localStorage.setItem('kua_uluere_zakat_wakaf', JSON.stringify(zakatWakafData));
  }, [zakatWakafData]);
  useEffect(() => {
    localStorage.setItem('kua_uluere_hewan_qurban', JSON.stringify(hewanQurbanData));
  }, [hewanQurbanData]);
  useEffect(() => {
    localStorage.setItem('kua_uluere_sholat_ied', JSON.stringify(lokasiSholatIedData));
  }, [lokasiSholatIedData]);
  useEffect(() => {
    localStorage.setItem('kua_uluere_nikah_bulanan', JSON.stringify(nikahBulananData));
  }, [nikahBulananData]);
  useEffect(() => {
    localStorage.setItem('kua_uluere_peta_points', JSON.stringify(petaPointsData));
  }, [petaPointsData]);

  // Auto-sync with MySQL Database API on mount if server is running
  useEffect(() => {
    async function syncWithMySQL() {
      const isOnline = await checkServerHealth();
      setIsDbConnected(isOnline);
      if (isOnline) {
        try {
          const [dbNews, dbStaff, dbDesa, dbHeads, dbStats, dbTickets, dbBanners] = await Promise.all([
            fetchNewsFromApi().catch(() => null),
            fetchStaffFromApi().catch(() => null),
            fetchDesaFromApi().catch(() => null),
            fetchHistoricalHeadsFromApi().catch(() => null),
            fetchStatsFromApi().catch(() => null),
            fetchTicketsFromApi().catch(() => null),
            fetchBannersFromApi().catch(() => null)
          ]);
          if (dbNews && dbNews.length > 0) setNewsList(dbNews);
          if (dbStaff && dbStaff.length > 0) setStaffList(dbStaff);
          if (dbDesa && dbDesa.length > 0) setDesaList(dbDesa);
          if (dbHeads && dbHeads.length > 0) setHistoricalHeads(dbHeads);
          if (dbStats) setStats(dbStats);
          if (dbTickets && dbTickets.length > 0) setTickets(dbTickets);
          if (dbBanners && dbBanners.length > 0) setBanners(dbBanners);
        } catch (err) {
          console.warn('MySQL Database Initial Sync Warning:', err);
        }
      }
    }
    syncWithMySQL();
  }, []);

  // Sync to localStorage as fallback
  useEffect(() => {
    localStorage.setItem('kua_uluere_news', JSON.stringify(newsList));
  }, [newsList]);

  useEffect(() => {
    localStorage.setItem('kua_uluere_staff', JSON.stringify(staffList));
  }, [staffList]);

  useEffect(() => {
    localStorage.setItem('kua_uluere_desa', JSON.stringify(desaList));
  }, [desaList]);

  useEffect(() => {
    localStorage.setItem('kua_uluere_heads', JSON.stringify(historicalHeads));
  }, [historicalHeads]);

  useEffect(() => {
    localStorage.setItem('kua_uluere_stats', JSON.stringify(stats));
  }, [stats]);

  useEffect(() => {
    localStorage.setItem('kua_uluere_tickets', JSON.stringify(tickets));
  }, [tickets]);

  useEffect(() => {
    localStorage.setItem('kua_uluere_banners', JSON.stringify(banners));
  }, [banners]);

  // Maintenance Mode Global State
  const [isMaintenanceMode, setIsMaintenanceMode] = useState<boolean>(false);
  const [maintenanceMessage, setMaintenanceMessage] = useState<string>(
    'Sistem Informasi KUA Kecamatan Uluere sedang menjalani pemeliharaan berkala untuk peningkatan performa server & database.'
  );
  const [maintenanceEndTime, setMaintenanceEndTime] = useState<string>('02 Agustus 2026, 12:00 WITA');
  const [bypassMaintenance, setBypassMaintenance] = useState<boolean>(false);

  // Admin CMS Modal State
  const [showAdminModal, setShowAdminModal] = useState<boolean>(false);
  const [adminInitialTab, setAdminInitialTab] = useState<string>('dashboard');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);

  const handleOpenAdminModal = (tab: string = 'dashboard') => {
    setAdminInitialTab(tab);
    setShowAdminModal(true);
  };

  const handleQuickSearch = (query: string) => {
    setSearchQuery(query);
    setActiveTab('berita');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddTicket = async (newTicket: ConsultationTicket) => {
    setTickets((prev) => [newTicket, ...prev]);
    if (isDbConnected) {
      try {
        await createTicketInApi(newTicket);
      } catch (err) {
        console.warn('Failed to insert ticket into MySQL:', err);
      }
    }
  };

  // If Maintenance Mode is Active and not bypassed/admin, render Maintenance Screen
  if (isMaintenanceMode && !bypassMaintenance && !isAdminLoggedIn) {
    return (
      <>
        <MaintenancePage
          maintenanceMessage={maintenanceMessage}
          estimatedEndTime={maintenanceEndTime}
          onOpenAdminLogin={() => handleOpenAdminModal('dashboard')}
          isAdminLoggedIn={isAdminLoggedIn}
          onBypassMaintenance={() => setBypassMaintenance(true)}
        />

        {showAdminModal && (
          <AdminCMS
            newsList={newsList}
            setNewsList={setNewsList}
            staffList={staffList}
            setStaffList={setStaffList}
            desaList={desaList}
            setDesaList={setDesaList}
            historicalHeads={historicalHeads}
            setHistoricalHeads={setHistoricalHeads}
            stats={stats}
            setStats={setStats}
            tickets={tickets}
            setTickets={setTickets}
            banners={banners}
            setBanners={setBanners}
            isMaintenanceMode={isMaintenanceMode}
            setIsMaintenanceMode={setIsMaintenanceMode}
            maintenanceMessage={maintenanceMessage}
            setMaintenanceMessage={setMaintenanceMessage}
            maintenanceEndTime={maintenanceEndTime}
            setMaintenanceEndTime={setMaintenanceEndTime}
            onCloseModal={() => setShowAdminModal(false)}
            isAdminLoggedIn={isAdminLoggedIn}
            setIsAdminLoggedIn={setIsAdminLoggedIn}
            initialTab={adminInitialTab}
          />
        )}
      </>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans antialiased selection:bg-emerald-700 selection:text-white">
      
      {/* Operator Maintenance Alert Banner (Shown when maintenance is active but bypassed/logged in) */}
      {isMaintenanceMode && (
        <div className="bg-amber-500 text-slate-950 px-4 py-2 text-xs font-bold flex flex-col sm:flex-row items-center justify-between gap-2 shadow-inner">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 shrink-0 animate-bounce" />
            <span>
              MODE PEMELIHARAAN SISTEM AKTIF (ON) — Pengunjung umum saat ini melihat Halaman Maintenance. Anda berada dalam Mode Pratinjau Operator.
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setBypassMaintenance(false)}
              className="px-2.5 py-1 bg-slate-950 text-amber-300 rounded-lg text-[11px] hover:bg-slate-900"
            >
              Lihat Tampilan Maintenance
            </button>
            <button
              onClick={() => setShowAdminModal(true)}
              className="px-2.5 py-1 bg-amber-950 text-white rounded-lg text-[11px] hover:bg-amber-900"
            >
              Kelola di Admin CMS
            </button>
          </div>
        </div>
      )}

      {/* Real-time Prayer Widget Header */}
      <PrayerWidget />

      {/* Main Header & Navbar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
        onOpenAdminModal={(tab) => handleOpenAdminModal(tab || 'dashboard')}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* Dynamic Content Views */}
      <main className="flex-1">
        {activeTab === 'beranda' && (
          <div className="space-y-0 animate-in fade-in duration-300">
            <HeroSection
              banners={banners}
              onQuickSearch={handleQuickSearch}
              onNavigateTab={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <StatsSection
              stats={stats}
              desaList={desaList}
              onNavigateTab={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <QuickServices
              onNavigateTab={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <NewsSection
              newsList={newsList}
              searchQuery={searchQuery}
              maxItems={9}
              onNavigateTab={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {activeTab.startsWith('profil') && (
          <ProfilPage
            staffList={staffList}
            desaList={desaList}
            historicalHeads={historicalHeads}
            sectionTab={
              activeTab === 'profil-pegawai'
                ? 'pegawai'
                : activeTab === 'profil-geografis'
                ? 'geografis'
                : activeTab === 'profil-kepala-masa-ke-masa'
                ? 'kepala-masa-ke-masa'
                : activeTab === 'profil-wilayah'
                ? 'wilayah'
                : activeTab === 'profil-maklumat'
                ? 'maklumat'
                : 'sejarah'
            }
            onNavigateTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'layanan-nikah' && (
          <LayananNikahPage
            onNavigateTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {(activeTab === 'layanan-wakaf' || activeTab === 'layanan-haji' || activeTab === 'layanan-sakinah') && (
          <LayananLainPage
            initialTab={activeTab === 'layanan-haji' ? 'haji' : activeTab === 'layanan-sakinah' ? 'sakinah' : 'wakaf'}
            onNavigateTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'layanan-sop' && (
          <SopLayananPage
            onNavigateTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'infografis' && (
          <InfografisPage
            zakatWakafData={zakatWakafData}
            hewanQurbanData={hewanQurbanData}
            lokasiSholatIedData={lokasiSholatIedData}
            nikahBulananData={nikahBulananData}
            petaPointsData={petaPointsData}
            desaList={desaList}
          />
        )}

        {activeTab === 'berita' && (
          <div className="py-6 bg-slate-50 min-h-screen">
            <NewsSection newsList={newsList} searchQuery={searchQuery} />
          </div>
        )}

        {activeTab === 'pengaduan' && (
          <PengaduanPage tickets={tickets} onSubmitTicket={handleAddTicket} desaList={desaList} />
        )}
      </main>

      {/* Admin CMS Dashboard Modal */}
      {showAdminModal && (
        <AdminCMS
          newsList={newsList}
          setNewsList={setNewsList}
          staffList={staffList}
          setStaffList={setStaffList}
          desaList={desaList}
          setDesaList={setDesaList}
          historicalHeads={historicalHeads}
          setHistoricalHeads={setHistoricalHeads}
          stats={stats}
          setStats={setStats}
          tickets={tickets}
          setTickets={setTickets}
          banners={banners}
          setBanners={setBanners}
          zakatWakafData={zakatWakafData}
          setZakatWakafData={setZakatWakafData}
          hewanQurbanData={hewanQurbanData}
          setHewanQurbanData={setHewanQurbanData}
          lokasiSholatIedData={lokasiSholatIedData}
          setLokasiSholatIedData={setLokasiSholatIedData}
          nikahBulananData={nikahBulananData}
          setNikahBulananData={setNikahBulananData}
          petaPointsData={petaPointsData}
          setPetaPointsData={setPetaPointsData}
          isMaintenanceMode={isMaintenanceMode}
          setIsMaintenanceMode={setIsMaintenanceMode}
          maintenanceMessage={maintenanceMessage}
          setMaintenanceMessage={setMaintenanceMessage}
          maintenanceEndTime={maintenanceEndTime}
          setMaintenanceEndTime={setMaintenanceEndTime}
          onCloseModal={() => setShowAdminModal(false)}
          isAdminLoggedIn={isAdminLoggedIn}
          setIsAdminLoggedIn={setIsAdminLoggedIn}
          initialTab={adminInitialTab}
        />
      )}

      {/* Official Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenAdminModal={(tab) => handleOpenAdminModal(tab || 'dashboard')}
      />

    </div>
  );
}

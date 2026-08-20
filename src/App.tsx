import React, { useState } from 'react';
import {
  INITIAL_KUA_STATS,
  INITIAL_NEWS,
  INITIAL_STAFF,
  INITIAL_DESA,
  INITIAL_HISTORICAL_HEADS,
  INITIAL_TICKETS,
  INITIAL_BANNERS
} from './data/mockData';
import { NewsItem, StaffItem, DesaItem, HistoricalHeadItem, KuaStats, ConsultationTicket, BannerAnnouncement } from './types';

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
import { ArchitectureDocs } from './components/ArchitectureDocs';
import { AdminCMS } from './components/AdminCMS';
import { MaintenancePage } from './components/MaintenancePage';
import { Footer } from './components/Footer';
import { Wrench, ShieldAlert } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('beranda');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Global State for KUA Uluere Portal
  const [newsList, setNewsList] = useState<NewsItem[]>(INITIAL_NEWS);
  const [staffList, setStaffList] = useState<StaffItem[]>(INITIAL_STAFF);
  const [desaList, setDesaList] = useState<DesaItem[]>(INITIAL_DESA);
  const [historicalHeads, setHistoricalHeads] = useState<HistoricalHeadItem[]>(INITIAL_HISTORICAL_HEADS);
  const [stats, setStats] = useState<KuaStats>(INITIAL_KUA_STATS);
  const [tickets, setTickets] = useState<ConsultationTicket[]>(INITIAL_TICKETS);
  const [banners, setBanners] = useState<BannerAnnouncement[]>(INITIAL_BANNERS);

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

  const handleAddTicket = (newTicket: ConsultationTicket) => {
    setTickets((prev) => [newTicket, ...prev]);
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
            <StatsSection stats={stats} desaList={desaList} />
            <QuickServices
              onNavigateTab={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <NewsSection newsList={newsList} searchQuery={searchQuery} />
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

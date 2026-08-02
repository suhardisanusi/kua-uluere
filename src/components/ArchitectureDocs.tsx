import React, { useState } from 'react';
import { DATABASE_SCHEMA_CONFIG, SYSTEM_TIMELINE_PHASES, CLOUD_TESTING_PLAN } from '../data/mockData';
import { Layers, Database, Network, Shield, Calendar, Server, Cpu, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';

export const ArchitectureDocs: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'erd' | 'sitemap' | 'timeline' | 'cloud'>('erd');
  const [selectedTable, setSelectedTable] = useState<string>('kua_berita');

  const currentTable = DATABASE_SCHEMA_CONFIG.find((t) => t.tableName === selectedTable) || DATABASE_SCHEMA_CONFIG[0];

  return (
    <div className="py-12 bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Banner Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-900 rounded-3xl p-8 sm:p-10 border border-emerald-800 shadow-2xl relative overflow-hidden">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-emerald-950 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Dokumentasi Arsitektur Sistem Web KUA Uluere</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
              Spesifikasi Sistem, ERD Database & Plan Cloud
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Arsitektur database relational MySQL 8.0, struktur sitemap navigasi, proteksi keamanan, lini masa proyek terintegrasi, dan strategi pengujian performa cloud.
            </p>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex flex-wrap items-center gap-2 bg-slate-800 p-2 rounded-2xl border border-slate-700">
          <button
            onClick={() => setActiveSection('erd')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${
              activeSection === 'erd' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Skema Database (ERD)</span>
          </button>

          <button
            onClick={() => setActiveSection('sitemap')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${
              activeSection === 'sitemap' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Network className="w-4 h-4" />
            <span>Sitemap Navigasi</span>
          </button>

          <button
            onClick={() => setActiveSection('timeline')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${
              activeSection === 'timeline' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Lini Masa Integrasi</span>
          </button>

          <button
            onClick={() => setActiveSection('cloud')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${
              activeSection === 'cloud' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Server className="w-4 h-4" />
            <span>Pengujian Cloud & Security</span>
          </button>
        </div>

        {/* Tab 1: ERD Database Schema */}
        {activeSection === 'erd' && (
          <div className="bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-700 shadow-xl space-y-6">
            
            {/* MySQL Engine Specification Banner */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-emerald-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-bold flex items-center justify-center shrink-0">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white">Database Engine: MySQL 8.0</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-900 text-emerald-300 text-[10px] font-mono font-bold">InnoDB Engine</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Charset: <code className="text-amber-300 font-mono">utf8mb4</code> | Collation: <code className="text-amber-300 font-mono">utf8mb4_unicode_ci</code> | Port: <code className="text-amber-300 font-mono">3306</code>
                  </p>
                </div>
              </div>

              <div className="text-xs font-mono bg-slate-950 px-3 py-2 rounded-xl border border-slate-800 text-slate-300">
                DATABASE_URL="mysql://kua_admin:SecretPass@127.0.0.1:3306/db_kua_uluere"
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-700">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">MySQL Database Design</span>
                <h2 className="text-2xl font-bold font-serif text-white">
                  Entity Relationship Diagram (ERD) & MySQL Schema
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Relasi dan spesifikasi tabel MySQL 8.0 untuk modul Berita, Pegawai, Statistik, & Konsultasi KUA Uluere.
                </p>
              </div>

              <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-700">
                {DATABASE_SCHEMA_CONFIG.map((t) => (
                  <button
                    key={t.tableName}
                    onClick={() => setSelectedTable(t.tableName)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      selectedTable === t.tableName ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {t.tableName}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 p-5 rounded-2xl border border-slate-700 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono font-bold text-amber-400 text-sm">
                  <Terminal className="w-4 h-4" />
                  <span>MYSQL TABLE: {currentTable.tableName}</span>
                </div>
                <span className="text-xs text-slate-400 font-normal">{currentTable.description}</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-emerald-400 border-b border-slate-700 font-mono">
                      <th className="p-3">COLUMN NAME</th>
                      <th className="p-3">MYSQL DATA TYPE</th>
                      <th className="p-3">CONSTRAINTS</th>
                      <th className="p-3">DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 font-mono">
                    {currentTable.columns.map((col) => (
                      <tr key={col.name} className="hover:bg-slate-800/50">
                        <td className="p-3 text-white font-bold">{col.name}</td>
                        <td className="p-3 text-emerald-300">{col.type}</td>
                        <td className="p-3 text-amber-300/90 text-[11px]">{col.constraints}</td>
                        <td className="p-3 text-slate-400 font-sans">{col.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* MySQL DDL SQL Query Preview Box */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Script DDL SQL MySQL ({currentTable.tableName})</span>
                </span>
                <span className="text-[10px] font-mono text-slate-500">ENGINE=InnoDB CHARSET=utf8mb4</span>
              </div>

              <pre className="p-3 bg-slate-900 rounded-xl text-[11px] font-mono text-emerald-300 overflow-x-auto border border-slate-800 leading-relaxed">
{`CREATE TABLE IF NOT EXISTS \`${currentTable.tableName}\` (
${currentTable.columns
  .map(
    (c) =>
      `  \`${c.name}\` ${c.type} ${c.constraints.includes('PRIMARY KEY') ? 'AUTO_INCREMENT' : ''} ${c.constraints.includes('NOT NULL') ? 'NOT NULL' : ''} ${c.constraints.includes('DEFAULT') ? c.constraints.substring(c.constraints.indexOf('DEFAULT')) : ''}`
  )
  .join(',\n')},
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`}
              </pre>
            </div>

          </div>
        )}

        {/* Tab 2: Sitemap Navigasi */}
        {activeSection === 'sitemap' && (
          <div className="bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-700 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Navigation Architecture</span>
              <h2 className="text-2xl font-bold font-serif text-white">
                Struktur Sitemap Navigasi Web KUA Uluere
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Public Sitemap */}
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 space-y-4">
                <h3 className="font-bold text-base text-emerald-400 border-b border-slate-800 pb-2 flex items-center justify-between">
                  <span>1. Sitemap Halaman Publik (Front-End)</span>
                  <span className="text-xs font-mono text-slate-500">PUBLIC</span>
                </h3>

                <ul className="space-y-2 text-xs text-slate-300 font-mono">
                  <li className="p-2 bg-slate-800/80 rounded border border-slate-700 font-bold text-white">/ (Beranda)</li>
                  <li className="pl-4 space-y-1">
                    <div>├── /profil (Sejarah, Visi Misi, Maklumat)</div>
                    <div>├── /profil/pegawai (Profil Kepala & Staf)</div>
                    <div>├── /profil/wilayah (Data 6 Desa Uluere)</div>
                  </li>
                  <li className="pl-4 space-y-1">
                    <div>├── /layanan/nikah (SIMKAH & Kalkulator PNBP)</div>
                    <div>├── /layanan/wakaf (Akta Ikrar Wakaf AIW)</div>
                    <div>├── /layanan/haji (Manasik Haji Kecamatan)</div>
                  </li>
                  <li className="pl-4 space-y-1">
                    <div>├── /berita (Artikel, Khutbah & Pengumuman)</div>
                    <div>└── /pengaduan (Form & Lacak Tiket Konsultasi)</div>
                  </li>
                </ul>
              </div>

              {/* Admin Sitemap */}
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 space-y-4">
                <h3 className="font-bold text-base text-amber-400 border-b border-slate-800 pb-2 flex items-center justify-between">
                  <span>2. Sitemap CMS Admin KUA (Back-End)</span>
                  <span className="text-xs font-mono text-slate-500">PROTECTED</span>
                </h3>

                <ul className="space-y-2 text-xs text-slate-300 font-mono">
                  <li className="p-2 bg-slate-800/80 rounded border border-slate-700 font-bold text-white">/admin/login (Otentikasi Staf)</li>
                  <li className="pl-4 space-y-1">
                    <div>├── /admin/dashboard (Ikhtisar Statistik)</div>
                    <div>├── /admin/berita (CRUD Berita & Artikel)</div>
                    <div>├── /admin/pegawai (CRUD Data Staf/PAI)</div>
                    <div>├── /admin/statistik (Update Real-Time Stats)</div>
                    <div>├── /admin/inbox (Manajemen Konsultasi Warga)</div>
                    <div>└── /admin/banner (Pengaturan Banner Slider)</div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        )}

        {/* Tab 3: Timeline Integration */}
        {activeSection === 'timeline' && (
          <div className="bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-700 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Roadmap Development</span>
              <h2 className="text-2xl font-bold font-serif text-white">
                Proyeksi Lini Masa Pengembangan Sistem Informasi KUA
              </h2>
            </div>

            <div className="space-y-4">
              {SYSTEM_TIMELINE_PHASES.map((p, idx) => (
                <div key={p.phase} className="p-5 bg-slate-900 rounded-2xl border border-slate-700 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
                        0{idx + 1}
                      </span>
                      <h3 className="font-bold text-sm text-white">{p.phase}: {p.title}</h3>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-amber-300 border border-slate-700">
                      {p.duration}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
                    <div>
                      <strong className="text-emerald-400 block mb-1">Tahapan Kegiatan:</strong>
                      <ul className="space-y-1 list-disc list-inside">
                        {p.milestones.map((m, mIdx) => (
                          <li key={mIdx}>{m}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <strong className="text-amber-400 block mb-1">Target Deliverables:</strong>
                      <ul className="space-y-1 list-disc list-inside">
                        {p.deliverables.map((d, dIdx) => (
                          <li key={dIdx}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Cloud Testing & Security */}
        {activeSection === 'cloud' && (
          <div className="bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-700 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Performance & Security</span>
              <h2 className="text-2xl font-bold font-serif text-white">
                Rencana Pengujian Performa & Keamanan Cloud
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CLOUD_TESTING_PLAN.map((plan) => (
                <div key={plan.testType} className="p-5 bg-slate-900 rounded-2xl border border-slate-700 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <h3 className="font-bold text-sm text-emerald-400">{plan.testType}</h3>
                    <span className="text-xs font-mono text-amber-300">{plan.tool}</span>
                  </div>

                  <div className="text-xs space-y-2 text-slate-300">
                    <div>
                      <span className="text-slate-500 block">Target Metric:</span>
                      <strong className="text-white">{plan.targetMetric}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Metodologi & Skenario:</span>
                      <p>{plan.methodology}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

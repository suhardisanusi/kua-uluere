export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  category: 'Kegiatan' | 'Pengumuman' | 'Edukasi Syariah' | 'Khutbah';
  summary: string;
  content: string;
  author: string;
  date: string;
  year?: number;
  imageUrl: string;
  views: number;
  featured?: boolean;
  sourceName?: string;
  sourceUrl?: string;
}

export interface StaffItem {
  id: string;
  name: string;
  nip: string;
  position: 'Kepala KUA' | 'Kepala KUA & PPAIW' | 'Penghulu' | 'Penyuluh Agama Islam (PAI)' | 'Staf Administrasi' | 'Pramubakti' | 'Pengelola Data' | 'Penata Layanan Operasional';
  status: 'PNS' | 'PPPK' | 'Non-ASN';
  photoUrl: string;
  bio: string;
  phone?: string;
  email?: string;
}

export interface DesaItem {
  id: string;
  name: string;
  code: string;
  capital: string;
  masjidCount: number;
  wakafCount: number;
  description: string;
}

export interface HistoricalHeadItem {
  id: string;
  period: string;
  name: string;
  nip: string;
  photoUrl: string;
  achievements: string;
  status: 'Aktif Menjabat' | 'Demisioner';
}

export interface KuaStats {
  nikahBulanIni: number;
  nikahTahunIni: number;
  masjidMusholla: number;
  tanahWakafSertifikat: number;
  penyuluhPAI: number;
  penghuluAktif: number;
  luasWilayahKm: number;
  jumlahDesa: number;
  lastUpdated: string;
}

export interface ServiceSop {
  id: string;
  title: string;
  category: 'Pernikahan' | 'Wakaf' | 'Haji & Umrah' | 'Konsultasi';
  description: string;
  requirements: string[];
  duration: string;
  cost: string;
  legalBasis: string;
  simkahIntegrated?: boolean;
}

export interface SpSopKuaItem {
  no: number;
  code: string;
  categoryGroup: string;
  categoryLetter: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I';
  title: string;
  description: string;
  legalBasis: string;
  duration: string;
  cost: string;
  output: string;
  requirements: string[];
}

export interface ConsultationTicket {
  id: string;
  ticketCode: string;
  senderName: string;
  senderPhone: string;
  senderEmail?: string;
  village: string;
  category: 'Konsultasi Nikah' | 'Pendaftaran SIMKAH' | 'Konsultasi Wakaf' | 'Bimbingan Keluarga' | 'Pengaduan Layanan';
  subject: string;
  message: string;
  status: 'Menunggu' | 'Diproses' | 'Selesai';
  createdAt: string;
  reply?: string;
  repliedAt?: string;
}

export interface BannerAnnouncement {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  linkUrl?: string;
  active: boolean;
  order: number;
}

export interface PrayerTime {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  date: string;
  hijriDate: string;
}

export interface DatabaseSchemaTable {
  tableName: string;
  description: string;
  columns: {
    name: string;
    type: string;
    constraints: string;
    description: string;
  }[];
}

export interface SystemTimelinePhase {
  phase: string;
  title: string;
  duration: string;
  milestones: string[];
  deliverables: string[];
}

export interface CloudTestPlan {
  testType: string;
  tool: string;
  targetMetric: string;
  methodology: string;
}

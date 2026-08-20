-- ============================================================
-- DATABASE SCHEMA FOR KUA KECAMATAN ULUERE
-- KABUPATEN BANTAENG, SULAWESI SELATAN
-- ============================================================

CREATE DATABASE IF NOT EXISTS `kua_uluere_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `kua_uluere_db`;

-- 1. TABEL BERITA & EDUTAINMENT
CREATE TABLE IF NOT EXISTS `news` (
  `id` VARCHAR(100) PRIMARY KEY,
  `title` TEXT NOT NULL,
  `summary` TEXT,
  `content` LONGTEXT,
  `category` VARCHAR(100),
  `date` VARCHAR(100),
  `author` VARCHAR(150),
  `imageUrl` LONGTEXT,
  `year` VARCHAR(20),
  `views` INT DEFAULT 0,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. TABEL PEGAWAI (PMA NO. 24 TAHUN 2024)
CREATE TABLE IF NOT EXISTS `staff` (
  `id` VARCHAR(100) PRIMARY KEY,
  `name` VARCHAR(200) NOT NULL,
  `position` VARCHAR(200),
  `category` VARCHAR(100),
  `photoUrl` LONGTEXT,
  `phone` VARCHAR(100),
  `status` VARCHAR(50) DEFAULT 'AKTIF',
  `sortOrder` INT DEFAULT 0,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. TABEL DATA PROFIL 6 DESA
CREATE TABLE IF NOT EXISTS `desa` (
  `id` VARCHAR(100) PRIMARY KEY,
  `name` VARCHAR(150) NOT NULL,
  `headName` VARCHAR(150),
  `headPhone` VARCHAR(100),
  `population` VARCHAR(100),
  `masjids` VARCHAR(100),
  `majelisTaklim` VARCHAR(100),
  `mapUrl` TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. TABEL RIWAYAT MANTAN KEPALA KUA
CREATE TABLE IF NOT EXISTS `historical_heads` (
  `id` VARCHAR(100) PRIMARY KEY,
  `name` VARCHAR(200) NOT NULL,
  `period` VARCHAR(100),
  `photoUrl` LONGTEXT,
  `achievements` TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 5. TABEL STATISTIK LAYANAN
CREATE TABLE IF NOT EXISTS `stats` (
  `id` INT PRIMARY KEY DEFAULT 1,
  `totalNikah` INT DEFAULT 0,
  `totalPengaduan` INT DEFAULT 0,
  `totalMasjid` INT DEFAULT 0,
  `totalPenyuluh` INT DEFAULT 0,
  `totalWakaf` INT DEFAULT 0,
  `totalMajelis` INT DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 6. TABEL TIKET PENGADUAN & KONSULTASI
CREATE TABLE IF NOT EXISTS `tickets` (
  `id` VARCHAR(100) PRIMARY KEY,
  `ticketCode` VARCHAR(100) NOT NULL,
  `name` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(100),
  `email` VARCHAR(150),
  `category` VARCHAR(100),
  `subject` VARCHAR(255),
  `message` TEXT,
  `date` VARCHAR(100),
  `status` VARCHAR(50) DEFAULT 'Pending',
  `adminReply` TEXT,
  `repliedAt` VARCHAR(100),
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 7. TABEL RUNNING BANNER ANNOUNCEMENT
CREATE TABLE IF NOT EXISTS `banners` (
  `id` VARCHAR(100) PRIMARY KEY,
  `text` TEXT NOT NULL,
  `isUrgent` BOOLEAN DEFAULT FALSE,
  `link` VARCHAR(255),
  `active` BOOLEAN DEFAULT TRUE,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

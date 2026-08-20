import mysql from 'mysql2/promise';

// MySQL Connection Configuration
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_NAME = process.env.DB_NAME || 'kua_uluere_db';
const DB_PORT = Number(process.env.DB_PORT) || 3306;

let pool;

export async function initDatabase() {
  try {
    // 1. Initial connection without database selection to create database if not exists
    const rootConnection = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      port: DB_PORT
    });

    await rootConnection.query(
      `CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`
    );
    await rootConnection.end();

    // 2. Create Connection Pool to kua_uluere_db
    pool = mysql.createPool({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      port: DB_PORT,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    console.log(`[MySQL] Connected successfully to database "${DB_NAME}" at ${DB_HOST}:${DB_PORT}`);

    // 3. Create Tables Schema
    await pool.query(`
      CREATE TABLE IF NOT EXISTS news (
        id VARCHAR(100) PRIMARY KEY,
        title TEXT NOT NULL,
        summary TEXT,
        content LONGTEXT,
        category VARCHAR(100),
        date VARCHAR(100),
        author VARCHAR(150),
        imageUrl LONGTEXT,
        year VARCHAR(20),
        views INT DEFAULT 0,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // Drop legacy staff and historical_heads tables if structure changed
    await pool.query(`DROP TABLE IF EXISTS staff;`);
    await pool.query(`DROP TABLE IF EXISTS historical_heads;`);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS staff (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        position VARCHAR(200),
        category VARCHAR(100),
        photoUrl LONGTEXT,
        phone VARCHAR(100),
        status VARCHAR(50) DEFAULT 'AKTIF',
        sortOrder INT DEFAULT 0,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS desa (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(150) NOT NULL,
        headName VARCHAR(150),
        headPhone VARCHAR(100),
        population VARCHAR(100),
        masjids VARCHAR(100),
        majelisTaklim VARCHAR(100),
        mapUrl TEXT
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS historical_heads (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        period VARCHAR(100),
        photoUrl LONGTEXT,
        achievements TEXT
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS stats (
        id INT PRIMARY KEY DEFAULT 1,
        totalNikah INT DEFAULT 0,
        totalPengaduan INT DEFAULT 0,
        totalMasjid INT DEFAULT 0,
        totalPenyuluh INT DEFAULT 0,
        totalWakaf INT DEFAULT 0,
        totalMajelis INT DEFAULT 0
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // Drop legacy tickets table if exists to align schema
    await pool.query(`DROP TABLE IF EXISTS tickets;`);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS tickets (
        id VARCHAR(100) PRIMARY KEY,
        ticketCode VARCHAR(100) NOT NULL,
        senderName VARCHAR(150) NOT NULL,
        senderPhone VARCHAR(100),
        senderEmail VARCHAR(150),
        village VARCHAR(150),
        category VARCHAR(100),
        subject VARCHAR(255),
        message TEXT,
        status VARCHAR(50) DEFAULT 'Menunggu',
        reply TEXT,
        repliedAt VARCHAR(100),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // Drop legacy banners table if exists to align schema
    await pool.query(`DROP TABLE IF EXISTS banners;`);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS banners (
        id VARCHAR(100) PRIMARY KEY,
        title TEXT NOT NULL,
        subtitle TEXT,
        imageUrl LONGTEXT,
        linkUrl VARCHAR(255),
        active BOOLEAN DEFAULT TRUE,
        sortOrder INT DEFAULT 0,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    console.log('[MySQL] All database tables verified & ready.');
    return pool;
  } catch (error) {
    console.error('[MySQL Error] Failed to initialize database pool:', error);
    throw error;
  }
}

export function getPool() {
  if (!pool) {
    throw new Error('Database pool has not been initialized. Call initDatabase() first.');
  }
  return pool;
}

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDatabase, getPool } from './db.js';

import {
  INITIAL_KUA_STATS,
  INITIAL_NEWS,
  INITIAL_STAFF,
  INITIAL_DESA,
  INITIAL_HISTORICAL_HEADS,
  INITIAL_TICKETS,
  INITIAL_BANNERS
} from '../src/data/mockData.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Seed Initial Data if Tables are Empty
async function seedInitialData(pool) {
  try {
    // 1. Seed News
    const [newsRows] = await pool.query('SELECT COUNT(*) as count FROM news');
    if (newsRows[0].count === 0) {
      for (const item of INITIAL_NEWS) {
        await pool.query(
          `INSERT INTO news (id, title, summary, content, category, date, author, imageUrl, year, views)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [item.id, item.title, item.summary, item.content, item.category, item.date, item.author, item.imageUrl, item.year || '2026', item.views || 0]
        );
      }
      console.log('[MySQL Seed] Inserted initial news records.');
    }

    // 2. Seed Staff
    const [staffRows] = await pool.query('SELECT COUNT(*) as count FROM staff');
    if (staffRows[0].count === 0) {
      let sortIdx = 1;
      for (const item of INITIAL_STAFF) {
        await pool.query(
          `INSERT INTO staff (id, name, position, category, photoUrl, phone, status, sortOrder)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [item.id, item.name, item.position, item.category, item.photoUrl || '', item.phone || '', item.status || 'AKTIF', sortIdx++]
        );
      }
      console.log('[MySQL Seed] Inserted initial staff records (PMA No. 24 Tahun 2024).');
    }

    // 3. Seed Desa
    const [desaRows] = await pool.query('SELECT COUNT(*) as count FROM desa');
    if (desaRows[0].count === 0) {
      for (const item of INITIAL_DESA) {
        await pool.query(
          `INSERT INTO desa (id, name, headName, headPhone, population, masjids, majelisTaklim, mapUrl)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [item.id, item.name, item.headName, item.headPhone, item.population, item.masjids, item.majelisTaklim, item.mapUrl || '']
        );
      }
      console.log('[MySQL Seed] Inserted initial desa records.');
    }

    // 4. Seed Historical Heads
    const [headRows] = await pool.query('SELECT COUNT(*) as count FROM historical_heads');
    if (headRows[0].count === 0) {
      for (const item of INITIAL_HISTORICAL_HEADS) {
        await pool.query(
          `INSERT INTO historical_heads (id, name, period, photoUrl, achievements)
           VALUES (?, ?, ?, ?, ?)`,
          [item.id, item.name, item.period, item.photoUrl || '', item.achievements || '']
        );
      }
      console.log('[MySQL Seed] Inserted initial historical heads records.');
    }

    // 5. Seed Stats
    const [statsRows] = await pool.query('SELECT COUNT(*) as count FROM stats');
    if (statsRows[0].count === 0) {
      await pool.query(
        `INSERT INTO stats (id, totalNikah, totalPengaduan, totalMasjid, totalPenyuluh, totalWakaf, totalMajelis)
         VALUES (1, ?, ?, ?, ?, ?, ?)`,
        [
          INITIAL_KUA_STATS.totalNikah,
          INITIAL_KUA_STATS.totalPengaduan,
          INITIAL_KUA_STATS.totalMasjid,
          INITIAL_KUA_STATS.totalPenyuluh,
          INITIAL_KUA_STATS.totalWakaf,
          INITIAL_KUA_STATS.totalMajelis
        ]
      );
      console.log('[MySQL Seed] Inserted initial stats records.');
    }

    // 6. Seed Tickets
    const [ticketRows] = await pool.query('SELECT COUNT(*) as count FROM tickets');
    if (ticketRows[0].count === 0) {
      for (const item of INITIAL_TICKETS) {
        await pool.query(
          `INSERT INTO tickets (id, ticketCode, senderName, senderPhone, senderEmail, village, category, subject, message, status, reply, repliedAt, createdAt)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            item.id,
            item.ticketCode,
            item.senderName,
            item.senderPhone,
            item.senderEmail || '',
            item.village || '',
            item.category,
            item.subject,
            item.message,
            item.status || 'Menunggu',
            item.reply || '',
            item.repliedAt || '',
            item.createdAt || new Date().toISOString()
          ]
        );
      }
      console.log('[MySQL Seed] Inserted initial ticket records.');
    }

    // 7. Seed Banners
    const [bannerRows] = await pool.query('SELECT COUNT(*) as count FROM banners');
    if (bannerRows[0].count === 0) {
      let idx = 1;
      for (const item of INITIAL_BANNERS) {
        await pool.query(
          `INSERT INTO banners (id, title, subtitle, imageUrl, linkUrl, active, sortOrder)
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [item.id, item.title, item.subtitle || '', item.imageUrl || '', item.linkUrl || '', item.active !== false ? 1 : 0, item.order || idx++]
        );
      }
      console.log('[MySQL Seed] Inserted initial banner records.');
    }
  } catch (error) {
    console.error('[MySQL Seed Error]:', error);
  }
}

// ------------------------------------------------------------
// API ROUTES
// ------------------------------------------------------------

// Health Check Endpoint
app.get('/api/health', async (req, res) => {
  try {
    const pool = getPool();
    await pool.query('SELECT 1');
    res.json({ status: 'ok', database: 'connected', message: 'KUA Uluere MySQL Database API is active.' });
  } catch (error) {
    res.status(500).json({ status: 'error', database: 'disconnected', message: error.message });
  }
});

// NEWS ENDPOINTS
app.get('/api/news', async (req, res) => {
  try {
    const pool = getPool();
    const [rows] = await pool.query('SELECT * FROM news ORDER BY createdAt DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/news', async (req, res) => {
  try {
    const pool = getPool();
    const item = req.body;
    await pool.query(
      `INSERT INTO news (id, title, summary, content, category, date, author, imageUrl, year, views)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [item.id, item.title, item.summary, item.content, item.category, item.date, item.author, item.imageUrl, item.year || '2026', item.views || 0]
    );
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/news/:id', async (req, res) => {
  try {
    const pool = getPool();
    const { id } = req.params;
    const item = req.body;
    await pool.query(
      `UPDATE news SET title=?, summary=?, content=?, category=?, date=?, author=?, imageUrl=?, year=?, views=?
       WHERE id=?`,
      [item.title, item.summary, item.content, item.category, item.date, item.author, item.imageUrl, item.year, item.views, id]
    );
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/news/:id', async (req, res) => {
  try {
    const pool = getPool();
    const { id } = req.params;
    await pool.query('DELETE FROM news WHERE id=?', [id]);
    res.json({ message: 'News item deleted', id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// STAFF ENDPOINTS
app.get('/api/staff', async (req, res) => {
  try {
    const pool = getPool();
    const [rows] = await pool.query('SELECT * FROM staff ORDER BY sortOrder ASC, createdAt ASC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/staff', async (req, res) => {
  try {
    const pool = getPool();
    const item = req.body;
    await pool.query(
      `INSERT INTO staff (id, name, position, category, photoUrl, phone, status, sortOrder)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [item.id, item.name, item.position, item.category, item.photoUrl || '', item.phone || '', item.status || 'AKTIF', item.sortOrder || 99]
    );
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/staff/:id', async (req, res) => {
  try {
    const pool = getPool();
    const { id } = req.params;
    const item = req.body;
    await pool.query(
      `UPDATE staff SET name=?, position=?, category=?, photoUrl=?, phone=?, status=?, sortOrder=?
       WHERE id=?`,
      [item.name, item.position, item.category, item.photoUrl, item.phone, item.status, item.sortOrder || 0, id]
    );
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/staff/:id', async (req, res) => {
  try {
    const pool = getPool();
    const { id } = req.params;
    await pool.query('DELETE FROM staff WHERE id=?', [id]);
    res.json({ message: 'Staff deleted', id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DESA ENDPOINTS
app.get('/api/desa', async (req, res) => {
  try {
    const pool = getPool();
    const [rows] = await pool.query('SELECT * FROM desa');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/desa/:id', async (req, res) => {
  try {
    const pool = getPool();
    const { id } = req.params;
    const item = req.body;
    await pool.query(
      `UPDATE desa SET name=?, headName=?, headPhone=?, population=?, masjids=?, majelisTaklim=?, mapUrl=?
       WHERE id=?`,
      [item.name, item.headName, item.headPhone, item.population, item.masjids, item.majelisTaklim, item.mapUrl, id]
    );
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// HISTORICAL HEADS ENDPOINTS
app.get('/api/historical-heads', async (req, res) => {
  try {
    const pool = getPool();
    const [rows] = await pool.query('SELECT * FROM historical_heads');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/historical-heads', async (req, res) => {
  try {
    const pool = getPool();
    const item = req.body;
    await pool.query(
      `INSERT INTO historical_heads (id, name, period, photoUrl, achievements)
       VALUES (?, ?, ?, ?, ?)`,
      [item.id, item.name, item.period, item.photoUrl || '', item.achievements || '']
    );
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/historical-heads/:id', async (req, res) => {
  try {
    const pool = getPool();
    const { id } = req.params;
    const item = req.body;
    await pool.query(
      `UPDATE historical_heads SET name=?, period=?, photoUrl=?, achievements=?
       WHERE id=?`,
      [item.name, item.period, item.photoUrl, item.achievements, id]
    );
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/historical-heads/:id', async (req, res) => {
  try {
    const pool = getPool();
    const { id } = req.params;
    await pool.query('DELETE FROM historical_heads WHERE id=?', [id]);
    res.json({ message: 'Historical head record deleted', id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// STATS ENDPOINTS
app.get('/api/stats', async (req, res) => {
  try {
    const pool = getPool();
    const [rows] = await pool.query('SELECT * FROM stats WHERE id=1');
    res.json(rows[0] || INITIAL_KUA_STATS);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/stats', async (req, res) => {
  try {
    const pool = getPool();
    const item = req.body;
    await pool.query(
      `UPDATE stats SET totalNikah=?, totalPengaduan=?, totalMasjid=?, totalPenyuluh=?, totalWakaf=?, totalMajelis=?
       WHERE id=1`,
      [item.totalNikah, item.totalPengaduan, item.totalMasjid, item.totalPenyuluh, item.totalWakaf, item.totalMajelis]
    );
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// TICKETS ENDPOINTS
app.get('/api/tickets', async (req, res) => {
  try {
    const pool = getPool();
    const [rows] = await pool.query('SELECT * FROM tickets ORDER BY createdAt DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/tickets', async (req, res) => {
  try {
    const pool = getPool();
    const item = req.body;
    await pool.query(
      `INSERT INTO tickets (id, ticketCode, senderName, senderPhone, senderEmail, village, category, subject, message, status, reply, repliedAt, createdAt)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        item.id,
        item.ticketCode,
        item.senderName,
        item.senderPhone,
        item.senderEmail || '',
        item.village || '',
        item.category,
        item.subject,
        item.message,
        item.status || 'Menunggu',
        item.reply || '',
        item.repliedAt || '',
        item.createdAt || new Date().toISOString()
      ]
    );
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/tickets/:id', async (req, res) => {
  try {
    const pool = getPool();
    const { id } = req.params;
    const item = req.body;
    await pool.query(
      `UPDATE tickets SET status=?, reply=?, repliedAt=?
       WHERE id=?`,
      [item.status, item.reply || item.adminReply || '', item.repliedAt || '', id]
    );
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/tickets/:id', async (req, res) => {
  try {
    const pool = getPool();
    const { id } = req.params;
    await pool.query('DELETE FROM tickets WHERE id=?', [id]);
    res.json({ message: 'Ticket deleted', id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// BANNERS ENDPOINTS
app.get('/api/banners', async (req, res) => {
  try {
    const pool = getPool();
    const [rows] = await pool.query('SELECT * FROM banners ORDER BY sortOrder ASC, createdAt DESC');
    res.json(rows.map(r => ({ ...r, active: Boolean(r.active) })));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/banners', async (req, res) => {
  try {
    const pool = getPool();
    const item = req.body;
    await pool.query(
      `INSERT INTO banners (id, title, subtitle, imageUrl, linkUrl, active, sortOrder)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [item.id, item.title, item.subtitle || '', item.imageUrl || '', item.linkUrl || '', item.active !== false ? 1 : 0, item.order || 0]
    );
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/banners/:id', async (req, res) => {
  try {
    const pool = getPool();
    const { id } = req.params;
    const item = req.body;
    await pool.query(
      `UPDATE banners SET title=?, subtitle=?, imageUrl=?, linkUrl=?, active=?, sortOrder=?
       WHERE id=?`,
      [item.title, item.subtitle || '', item.imageUrl || '', item.linkUrl || '', item.active ? 1 : 0, item.order || 0, id]
    );
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/banners/:id', async (req, res) => {
  try {
    const pool = getPool();
    const { id } = req.params;
    await pool.query('DELETE FROM banners WHERE id=?', [id]);
    res.json({ message: 'Banner deleted', id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start Server & Init MySQL Database Connection
initDatabase()
  .then(async (pool) => {
    await seedInitialData(pool);
    app.listen(PORT, () => {
      console.log(`[Express API Server] Running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('[Fatal Server Startup Error] MySQL initialization failed:', err);
    console.log('[Notice] Starting Express server in Standalone/Fallback Mode...');
    app.listen(PORT, () => {
      console.log(`[Express API Server] Running on http://localhost:${PORT} (Database Disconnected)`);
    });
  });

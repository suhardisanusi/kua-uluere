import mysql from 'mysql2/promise';

async function checkDatabase() {
  try {
    const conn = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'kua_uluere_db'
    });

    console.log('=== VERIFIKASI DATABASE MYSQL KUA ULUERE ===');
    console.log('Database Status: CONNECTED (kua_uluere_db)');

    const [tables] = await conn.query('SHOW TABLES');
    const tableNames = tables.map(t => Object.values(t)[0]);
    console.log('Daftar Tabel Terbentuk:', tableNames);

    console.log('\n--- RINCIAN TIKET & DATA RECORD MYSQL ---');
    for (const tbl of tableNames) {
      const [res] = await conn.query(`SELECT COUNT(*) as total FROM \`${tbl}\``);
      console.log(`- Tabel ${tbl}: ${res[0].total} record(s)`);
    }

    await conn.end();
  } catch (error) {
    console.error('MySQL Verification Error:', error.message);
  }
}

checkDatabase();

// Script to clear invalid sessions from the database
const mysql = require('mysql2/promise');

async function clearSessions() {
  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    database: 'strapi',
    user: 'root',
    password: 'Jsepc123!'
  });

  try {
    console.log('Connecting to database...');
    
    // Check if table exists
    const [tables] = await connection.query(
      "SHOW TABLES LIKE 'strapi_sessions'"
    );
    
    if (tables.length === 0) {
      console.log('strapi_sessions table does not exist yet. This is normal for a fresh install.');
      return;
    }
    
    // Clear all sessions
    const [result] = await connection.query('DELETE FROM strapi_sessions');
    console.log(`Cleared ${result.affectedRows} sessions from the database.`);
    
    // Also check for invalid datetime values
    console.log('Sessions cleared successfully!');
  } catch (error) {
    console.error('Error clearing sessions:', error);
  } finally {
    await connection.end();
  }
}

clearSessions().catch(console.error);

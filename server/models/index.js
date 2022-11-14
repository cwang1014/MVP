const { pool } = require('./db.js');

module.exports = {
  getHighScores: async (callback) => {
    const client = await pool.connect();
    try {
      const highScoresResult = await client.query('SELECT * FROM leaderboards ORDER BY score DESC');
      callback(null, highScoresResult.rows);
    } catch (error) {
      callback(error, null);
    }
  }
}
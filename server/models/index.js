const { pool } = require('./db.js');
// const Leaderboard = require('./mongoDB.js');

module.exports = {
  getHighScores: async (callback) => {
    const client = await pool.connect();
    try {
      const highScoresResult = await client.query('SELECT * FROM leaderboards ORDER BY score DESC LIMIT 10');
      callback(null, highScoresResult.rows);
    } catch (error) {
      callback(error, null);
    }
  },
  postHighScore: async (leaderObj, callback) => {
    const client = await pool.connect();
    const { username, score, rowsscore, levelscore } = leaderObj;
    try {
      await client.query('INSERT INTO leaderboards(username, score, rowsscore, levelscore) VALUES($1, $2, $3, $4)', [username, score, rowsscore, levelscore]);
      callback(null, leaderObj);
    } catch (error) {
      callback(error, null);
    }
  }
}
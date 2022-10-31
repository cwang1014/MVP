const db = require('./db.js');

module.exports = {
  getHighScores: (callback) => {
    db.query('SELECT * FROM leaderboards ORDER BY score DESC', (err, results) => {
      console.log('getting', err, results);
      if (err) {
        callback(err, null);
      }
      callback(null, results);
    })
  }
}
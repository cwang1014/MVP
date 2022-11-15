const { getHighScores, postHighScore } = require('../models');

module.exports = {
  loadScores: (req, res) => {
    getHighScores((err, results) => {
      if (err) {
        res.status(404).end();
      }
      res.status(200).json(results);
    });
  },
  postScore: (req, res) => {
    // console.log(req.body);
    postHighScore(req.body, (err, leaderObj) => {
      if (err) {
        res.status(500).end();
      }
      res.status(201).json(leaderObj);
    });
  }
}
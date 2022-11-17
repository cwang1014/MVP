const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/leaderboard');

let leaderboardSchema = mongoose.Schema({
  username: { type: String, required: true },
  score: { type: Number, required: true },
  rowsScore: { type: Number, required: true },
  levelScore: { type: Number, required: true }
});

let Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);

module.exports = Leaderboard;
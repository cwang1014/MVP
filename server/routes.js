const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/highscores', controllers.getHighScores);

router.post();

module.exports = router;
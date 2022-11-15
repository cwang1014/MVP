const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/highscores', controllers.loadScores);

router.post('/highscores', controllers.postScore);

module.exports = router;
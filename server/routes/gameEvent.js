const express = require('express');
const router = express.Router();
const gameEventController = require("../controllers/gameEventHandler");

// Route for starting a new game
router.post('/start/:userId', gameEventController.startGame);

module.exports = router;
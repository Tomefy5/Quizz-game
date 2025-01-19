const express = require("express");
const router = express.Router();
const gameEventController = require("../controllers/gameEventHandler");

// Route for starting a new game
router.post("/start/:userId", gameEventController.startGame);

// Route for ending a game
router.post("/end/:userId", gameEventController.endGame);

// Route for raising the level
router.post("/raise-level/:userId", gameEventController.raiseLevel);

module.exports = router;

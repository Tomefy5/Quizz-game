const express = require('express');
const router = express.Router();
const answerScoreController = require("../controllers/answerScoreController");

// Route for cheking user's answers
router.post('/check-answer', answerScoreController.checkAnswer);

// Route for incrementing score
router.post('/increment-score/:gamedataId', answerScoreController.incrementScore);

module.exports = router;
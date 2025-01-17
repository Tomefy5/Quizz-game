const express = require("express");
const router = express.Router();
const questionsController = require("../controllers/questionsController");

// Route for all questions
router.get('/questions', questionsController.getAllQuestions);

// Route for random questions
router.get('/questions/random', questionsController.getRandomQuestions);

module.exports = router;
const Question = require("../models/Question");

const getAllQuestions = async () => {
  try {
    const questions = await Question.find();
    if (!questions) throw new Error("Error getting all questions"); // if we can get questions
    return questions;
  } catch (error) {
    throw error; // propagate error
  }
};

const getRandomQuestions = async (req, res) => {
  // front : http:...?category=""&difficulty=""&limit=""
  const { category, difficulty, limit = 10 } = req.query;
  const filter = {};
  if (category) filter.category = category;
  if (difficulty) filter.difficulty = difficulty;
  try {
    const questions = await Question.aggregate([
      { $match: filter },
      { $sample: { size: parseInt(limit) || 10 } },
    ]);
    if (!questions || questions.length === 0) throw new Error("Can't fetch random questions");

    res.json(questions);
  } catch (err) {
    throw err;
  }
};

module.exports = { getAllQuestions, getRandomQuestions };

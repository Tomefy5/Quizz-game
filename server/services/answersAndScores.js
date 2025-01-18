const Question = require("../models/Question");
const Score = require("../models/Score");

const checkAnswer = async (userAnswer, questionId) => {
  try {
    const question = await Question.findById(questionId);
    if (!question) throw new Error("Question not found");
    const isCorrect = await question.isCorrect(userAnswer);
    return isCorrect;
  } catch (err) {
    throw err;
  }
};

const incrementScore = async (scoreId) => {
  try {
    const score = await Score.findById(scoreId);
    if (!score) throw new Error("Score not found");
    score.incrementScore();
    await score.save();
    return score;
  } catch (err) {
    throw err;
  }
};

module.exports = { checkAnswer, incrementScore };

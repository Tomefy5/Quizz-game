const Question = require("../models/Question");
const GameData = require("../models/GameData");

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

const incrementScore = async (gamedataId) => {
  try {
    
    const gameData = await GameData.findById(gamedataId);
    console.log(gameData);
    if (!gameData) throw new Error("Score not found");
    gameData.incrementScore();
    await gameData.save();
    return gameData;
  } catch (err) {
    throw err;
  }
};

module.exports = { checkAnswer, incrementScore };

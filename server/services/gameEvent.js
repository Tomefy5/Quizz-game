const { default: mongoose } = require("mongoose");
const GameData = require("../models/GameData");
const Score = require("../models/Score");

const startGame = async (userId) => {
  try {
    const userObjectId = new mongoose.Types.ObjectId(userId); // Convert String to ObjectId
    const gameDatas = await GameData.findOne({ user: userObjectId });
    if (!mongoose.Types.ObjectId.isValid(userObjectId)) {
      throw new Error("User'Id is not a valid");
    }

    if (!gameDatas) {
      throw new Error("GameData not found");
    }
    gameDatas.newGame(); // Start a new game and reset gameData
    return gameDatas;
  } catch (error) {
    throw error;
  }
};

const endGame = async (userId) => {
  try {
    const userObjectId = new mongoose.Types.ObjectId(userId);
    const gameData = await GameData.findOne({ user: userObjectId });
    if (!gameData) throw new Error("GameData not found");
    const newScore = gameData.current_score;

    const updatedScore = await Score.findOneAndUpdate(  
      { user: userObjectId },          
      { $push: { score: newScore } },
      { new: true }
    );

    if(!updatedScore) throw new Error("Score not found");
    return updatedScore;
  } catch (error) {
    throw error;
  }
};

const raiseLevel = async (userId) => {
  try {
    const userObjectId = new mongoose.Types.ObjectId(userId);
    if(!userObjectId) throw new Error("Invalid user id");
    const gameData = await GameData.findOne({ user: userObjectId });
    if(!gameData) throw new Error("Game data not found");
    gameData.raiseLevel(); // level up
    gameData.save(); // save current level
    return gameData;
  } catch (error) {
    throw error;
  }
}

module.exports = { startGame, endGame, raiseLevel };

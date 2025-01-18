const { default: mongoose } = require("mongoose");
const GameData = require("../models/GameData");
const startGame = async (userId) => {
  try {
    const gameDatas = await GameData.findOne({ user: userId });
    const userObjectId = new mongoose.Types.ObjectId(userId); // Convert String to ObjectId
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

module.exports = { startGame };

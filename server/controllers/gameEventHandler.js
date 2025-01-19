const { startGame, endGame, raiseLevel } = require("../services/gameEvent");

const startGameHandler = async (req, res) => {
  const { userId } = req.params;

  try {
    const gameDatas = await startGame(userId);
    res.status(200).json(gameDatas);
  } catch (err) {
    res
      .status(404)
      .json({ message: "Game data not found", error: err.message });
  }
};

const endGameHandler = async (req, res) => {
  const { userId } = req.params;

  try {
    const updatedScore = await endGame(userId);
    res.status(200).json(updatedScore);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Error on ending game", error: error.message });
  }
};

const raiseLevelHandler = async (req, res) => {
  const { userId } = req.params;
  try {
    const gameData = await raiseLevel(userId);
    if(!gameData) throw new Error("Game data not found");
    res.status(200).json(gameData);
  } catch (error) {
    res.status(404).json({ message: "Error : raise level ", error: error.message });
  }
}

module.exports = {
  startGame: startGameHandler,
  endGame: endGameHandler,
  raiseLevel: raiseLevelHandler
};

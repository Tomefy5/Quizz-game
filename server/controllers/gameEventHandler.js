const { startGame } = require("../services/gameEvent");

const startGameHandler = async (req, res) => {
  const { userId } = req.params;

  try {
    const gameDatas = await startGame(userId);
    res.status(200).json(gameDatas);
  } catch (err) {
    console.log("Game not foundyyyy");
    res
      .status(404)
      .json({ message: "Game data not found", error: err.message });
  }
};

module.exports = {
  startGame: startGameHandler,
};

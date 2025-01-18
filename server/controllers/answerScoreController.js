const { checkAnswer, incrementScore } = require("../services/answersAndScores");

const checkAnswerHandler = async (req, res) => {
  const { questionId, answer } = req.body;

  try {
    const isCorrect = await checkAnswer(answer, questionId);
    res.status(200).json({ correct: isCorrect });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Question not found", error: error.message });
  }
};

const incrementScoreHandler = async (req, res) => {
  const { scoreId } = req.params;

  try {
    await incrementScore(scoreId);
    res.status(200).json({ message: "Score incremented" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error on incrementing score", error: err.message });
  }
};

module.exports = {
  checkAnswer: checkAnswerHandler,
  incrementScore: incrementScoreHandler,
};

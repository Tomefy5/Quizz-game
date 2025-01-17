const { getAllQuestions, getRandomQuestions } = require("../services/questions");

const getAllQuestionsHandler = async (req, res) => {
  try {
    const questions = await getAllQuestions();
    res.status(200).json(questions);
  } catch (err) {
    res
      .status(404)
      .json({ message: "Questions not found", error: err.message });
  }
};

const getRandomQuestionsHandler = async (req, res) => {
  try {
    const questions = await getRandomQuestions(req, res);
    res.json(questions);
  } catch (err) {
    res.status(404).json({ message: "Can't fetch random questions", error: err.message });
  }
}

module.exports = {
  getAllQuestions: getAllQuestionsHandler,
  getRandomQuestions : getRandomQuestionsHandler
};

const mongoose = require("mongoose");

const { Schema } = mongoose;

const QuestionSchema = new Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: String, required: true },
  category: { type: String, required: true },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    default: "medium",
  },
});

QuestionSchema.methods.isCorrect = function (userAnswer) {
    return userAnswer === this.correctAnswer ? true: false;
}

const Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;

const mongoose = require("mongoose");
const { Schema } = mongoose;

const ScoreScheme = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: false,
    },
    score: {
      type: Number, // todo: transform score type to array of numbers for statistics (we update only current score of gameDate during the game)
      required: true,
    },
  },
  { timestamps: true }
);

ScoreScheme.methods.incrementScore = function () {
  this.score += 1;
};

const Score = mongoose.model("Score", ScoreScheme);
module.exports = Score;

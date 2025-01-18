const mongoose = require("mongoose");
const { Schema } = mongoose;

const ScoreScheme = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

ScoreScheme.methods.incrementScore = function () {
  console.log("Avant :", this);  // 🔍 Vérification avant l'incrémentation
  this.score += 1;
  console.log("Après :", this); 
};
const Score = mongoose.model("Score", ScoreScheme);
module.exports = Score;

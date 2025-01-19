const mongoose = require("mongoose");
const { Schema } = mongoose;

const GameDataSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  current_score: {
    type: Number,  //todo: We update user's score only at the end of the game 
    required: true, 
  },
  current_level: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: true,
  },
  lives_left: {
    type: Number,
    required: true,
  },
});

GameDataSchema.methods.newGame = function () {
  this.current_score = 0;
  this.current_level = "easy",
  this.lives_left = 5 // 5 is the lives max
}

GameDataSchema.methods.incrementScore = function () {
  this.current_score += 1;
}

GameDataSchema.methods.raiseLevel = function () {
  if(this.current_level === "easy") {
    this.current_level = "medium";
  } else if (this.current_level === "medium") {
    this.current_level = "hard";
  }
}

const GameData = mongoose.model("GameData", GameDataSchema);
module.exports = GameData;
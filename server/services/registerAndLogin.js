const User = require("../models/User");
const jwt = require("jsonwebtoken");
const Score = require("../models/Score");
const GameData = require("../models/GameData");

const register = async (user) => {
  // user is an object
  const email = user.email;
  const username = user.username;
  const password = user.password;

  try {
    existingEmail = await User.findOne({ email }); // email can't be used twice
    if (existingEmail) {
      throw new Error(`${email} is already used`);
    }

    const newUser = new User({ username, email, password });

    // Create score for this user
    const userScore = new Score({user: newUser._id, score: 0});
    await userScore.save(); // Save in colection score

    // Create game data
    const userGameData = new GameData({user: newUser._id, current_score: 0, current_level: "easy", lives_left: 5});
    await userGameData.save();

    await newUser.save().then(() => {
      console.log("User saved successfully");
    });
    return { success: true, message: "User registered successfully" };
  } catch (error) {
    console.error("Error on register \n", error.message);
    throw error;
  }
};

const login = async (user) => {
  const email = user.email;
  const password = user.password;

  try {
    const reachedUser = await User.findOne({ email });
    if (!reachedUser) {
      throw new Error("Wrong email");
    }

    const isMatched = await reachedUser.matchPassword(password);
    if (!isMatched) {
      throw new Error("Wrong password");
    }

    const token = jwt.sign({ id: reachedUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return token;
  } catch (error) {
    console.error(`Wrong email or password: ${error.message}`);
    throw error; // propagate
  }
};

module.exports = { register, login };

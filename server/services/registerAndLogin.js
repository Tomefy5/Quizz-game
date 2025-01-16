const User = require("../models/User");
const jwt = require("jsonwebtoken");

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
    await newUser.save().then(() => {
      console.log("User saved successfully");
    });
  } catch (error) {
    console.error("Error on register \n", error);
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

    const token = jwt.sign(
      { id: reachedUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return token;
  } catch (error) {
    console.error(`Wrong email or password: ${error.message}`);
  }
};

module.exports = { register, login };

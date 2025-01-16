const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const saltRounds = 10;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: false, // use can have the same name
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash password before saving

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, saltRounds);
});

// Verify password

UserSchema.methods.matchPassword = function (password) {
  return bcrypt.compare(password, this.password);
}

const User = mongoose.model("User", UserSchema);
module.exports = User;

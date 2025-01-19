const mongoose = require("mongoose");
const Question = require("../models/Question");
const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });

const questionsList = require("./questions.json");

// Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected successfully to mongodb");
  })
  .catch((err) => console.error(err.message));

const insertAllQuestions = async () => {
  await Question.deleteMany(); // delete all old questions
  await Question.insertMany(questionsList);
  console.log("Questions insert successfully");

  mongoose.connection.close();
};

insertAllQuestions();

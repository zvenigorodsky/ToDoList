const express = require("express");
const app = express();

require("dotenv").config();
const mongoose = require("mongoose");

const tasksRoute = require("./routes/tasks");
const notFound = require("./middleware/notFound");

app.use(express.json());

app.use("/api/v1/tasks", tasksRoute);

app.use(notFound);

const port = process.env.PORT || 3001;

const start = async () => {
  try {
    await mongoose.connect(process.env.TO_DO_LIST_URI);
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();

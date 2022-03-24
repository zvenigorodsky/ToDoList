const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  time: {
    type: String,
  },
});

module.exports = mongoose.model("Task", taskSchema);

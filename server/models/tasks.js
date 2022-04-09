const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Enter a valid title'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'Enter a valid description'],
  },
  time: {
    type: String,
    required: [true, 'Enter a valid time'],
  },
});

module.exports = mongoose.model("Task", taskSchema);

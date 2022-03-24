const Task = require("../models/tasks");

const getTasks = async (req, res) => {
  const tasks = await Task.find({});
  console.log("GET success");
  res.status(200).json({ tasks });
};
const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  console.log(task);
  res.status(201).json({ task });
};

module.exports = { getTasks, createTask };

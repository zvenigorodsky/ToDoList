const Task = require("../models/tasks");

const getTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
};

const createTask = async (req, res) => {
  console.log(req.body);
  const task = await Task.create(req.body);
  console.log(task);
  res.status(201).json({ success: true, task: task });
};

const getOneTask = async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  res.status(302).json({ task });
};

const deleteTask = async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndDelete({ _id: taskID });
  if (!task) {
    return res.status(404).json({ msg: `There is no task with such name` });
  }
  res.status(200).json({ task: null, msg: `"${task.title}" has been deleted` });
};

module.exports = { getTasks, createTask, getOneTask, deleteTask };

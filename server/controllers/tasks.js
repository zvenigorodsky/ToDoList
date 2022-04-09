const Task = require("../models/tasks");

const getTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ msg: `"${task.title}" has been created`, task: task });
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
    return res.status(404).json({ msg: `There is no such task` });
  }
  res.status(200).json({ task: null, msg: `"${task.title}" has been deleted` });
};

const updateTask = async (req, res, next ) => {
  const { id: taskID } = req.params;
  try{
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
    res.status(200).json({ task, msg: `${task.title} has been updated` });
  }catch(err){
    next(err);
  }
};

module.exports = { getTasks, createTask, getOneTask, deleteTask, updateTask };

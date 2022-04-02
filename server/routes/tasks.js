const express = require("express");
const router = express.Router();

const {
  getTasks,
  createTask,
  getOneTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks");

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getOneTask).delete(deleteTask).patch(updateTask);
module.exports = router;

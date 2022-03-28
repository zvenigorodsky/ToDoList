const express = require("express");
const router = express.Router();

const {
  getTasks,
  createTask,
  getOneTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getOneTask).delete(deleteTask);
module.exports = router;

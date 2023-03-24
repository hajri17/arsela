const express = require("express");

const {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask
} = require("../controllers/taskControllers");
 
const router = express.Router();
router.route("/").get(getAllTasks);
router.route("/").post(createTask);
router.route("/:id").get(getTaskById);
router.route("/:id").put(updateTask);
router.route("/:id").delete(deleteTask);
 
module.exports = router;
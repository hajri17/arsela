const tasksService = require("../services/taskService");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await tasksService.getAllTasks();
    res.json({ data: tasks, length: tasks.length, status: "success: getAllTasks" });
  } catch (err) {
    res.status(500).json({ error: err.message, status: "error: getAllTasks" });
  }
};

exports.createTask = async (req, res) => {
  try {
    const tasks = await tasksService.createTask(req.body);
    res.json({ data: tasks, length: tasks.length, status: "success: createTask" });
  } catch (err) {
    res.status(500).json({ error: err.message, status: "error: createTask" });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const tasks = await tasksService.getTaskById(req.params.id);
    res.json({ data: tasks, length: tasks.length, status: "success: getTaskById" });
  } catch (err) {
    res.status(500).json({ error: err.message, status: "error: getTaskById"  });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const tasks = await tasksService.updateTask(req.params.id, req.body);
    res.json({ data: tasks, length: tasks.length, status: "success: updateTask" });
  } catch (err) {
    res.status(500).json({ error: err.message, status: "error: updateTask"  });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const tasks = await tasksService.deleteTask(req.params.id);
    res.json({ data: tasks, length: tasks.length, status: "success: deleteTask" });
  } catch (err) {
    res.status(500).json({ error: err.message, status: "error: deleteTask" });
  }
};
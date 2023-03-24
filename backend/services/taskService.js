const taskModel = require("../models/taskModels");
 
exports.getAllTasks = async () => {
  return await taskModel.find();
};

exports.createTask = async (Task) => {
  return await taskModel.create(Task);
};

exports.getTaskById = async (id) => {
  return await taskModel.findById(id);
};
 
exports.updateTask = async (id, Task) => {
  return await taskModel.findByIdAndUpdate(id, Task);
};
 
exports.deleteTask = async (id) => {
  return await taskModel.findByIdAndDelete(id);
};
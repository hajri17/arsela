const nodeModel = require("../models/nodeModels");
 
exports.getAllNodes = async () => {
  return await nodeModel.find();
};

exports.createNode = async (Node) => {
  return await nodeModel.create(Node);
};

exports.getNodeById = async (id) => {
  return await nodeModel.findById(id);
};
 
exports.updateNode = async (id, Node) => {
  return await nodeModel.findByIdAndUpdate(id, Node);
};
 
exports.deleteNode = async (id) => {
  return await nodeModel.findByIdAndDelete(id);
};
const edgeModel = require("../models/edgeModels");
 
exports.getAllEdges = async () => {
  return await edgeModel.find();
};

exports.createEdge = async (Edge) => {
  return await edgeModel.create(Edge);
};

exports.getEdgeById = async (id) => {
  return await edgeModel.findById(id);
};
 
exports.updateEdge = async (id, Edge) => {
  return await edgeModel.findByIdAndUpdate(id, Edge);
};
 
exports.deleteEdge = async (id) => {
  return await edgeModel.findByIdAndDelete(id);
};
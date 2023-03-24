const edgeService = require("../services/edgeService");

exports.getAllEdges = async (req, res) => {
  try {
    const nodes = await edgeService.getAllEdges();
    res.json({ data: nodes, length: nodes.length, status: "success: getAllEdges" });
  } catch (err) {
    res.status(500).json({ error: err.message, status: "error: getAllEdges" });
  }
};

exports.createEdge = async (req, res) => {
  try {
    const nodes = await edgeService.createEdge(req.body);
    res.json({ data: nodes, length: nodes.length, status: "success: createEdge" });
  } catch (err) {
    res.status(500).json({ error: err.message, status: "error: createEdge" });
  }
};

exports.getEdgeById = async (req, res) => {
  try {
    const nodes = await edgeService.getEdgeById(req.params.id);
    res.json({ data: nodes, length: nodes.length, status: "success: getEdgeById" });
  } catch (err) {
    res.status(500).json({ error: err.message, status: "error: getEdgeById"  });
  }
};

exports.updateEdge = async (req, res) => {
  try {
    const nodes = await edgeService.updateEdge(req.params.id, req.body);
    res.json({ data: nodes, length: nodes.length, status: "success: updateEdge" });
  } catch (err) {
    res.status(500).json({ error: err.message, status: "error: updateEdge"  });
  }
};

exports.deleteEdge = async (req, res) => {
  try {
    const nodes = await edgeService.deleteEdge(req.params.id);
    res.json({ data: edges, length: edges.length, status: "success: deleteEdge" });
  } catch (err) {
    res.status(500).json({ error: err.message, status: "error: deleteEdge" });
  }
};
const nodeService = require("../services/nodeService");

exports.getAllNodes = async (req, res) => {
  try {
    const nodes = await nodeService.getAllNodes();
    res.json({ data: nodes, length: nodes.length, status: "success: getAllNodes" });
  } catch (err) {
    res.status(500).json({ error: err.message, status: "error: getAllNodes" });
  }
};

exports.createNode = async (req, res) => {
  try {
    const nodes = await nodeService.createNode(req.body);
    res.json({ data: nodes, length: nodes.length, status: "success: createNode" });
  } catch (err) {
    res.status(500).json({ error: err.message, status: "error: createNode" });
  }
};

exports.getNodeById = async (req, res) => {
  try {
    const nodes = await nodeService.getNodeById(req.params.id);
    res.json({ data: nodes, length: nodes.length, status: "success: getNodeById" });
  } catch (err) {
    res.status(500).json({ error: err.message, status: "error: getNodeById"  });
  }
};

exports.updateNode = async (req, res) => {
  try {
    const nodes = await nodeService.updateNode(req.params.id, req.body);
    res.json({ data: nodes, length: nodes.length, status: "success: updateNode" });
  } catch (err) {
    res.status(500).json({ error: err.message, status: "error: updateNode"  });
  }
};

exports.deleteNode = async (req, res) => {
  try {
    const nodes = await nodeService.deleteNode(req.params.id);
    res.json({ data: nodes, length: nodes.length, status: "success: deleteNode" });
  } catch (err) {
    res.status(500).json({ error: err.message, status: "error: deleteNode" });
  }
};
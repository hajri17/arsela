const express = require("express");

const {
  getAllNodes,
  createNode,
  getNodeById,
  updateNode,
  deleteNode
} = require("../controllers/nodeControllers");
 
const router = express.Router();
router.route("/").get(getAllNodes);
router.route("/").post(createNode);
router.route("/:id").get(getNodeById);
router.route("/:id").put(updateNode);
router.route("/:id").delete(deleteNode);
 
module.exports = router;
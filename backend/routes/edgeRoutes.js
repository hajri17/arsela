const express = require("express");

const {
  getAllEdges,
  createEdge,
  getEdgeById,
  updateEdge,
  deleteEdge
} = require("../controllers/edgeControllers");
 
const router = express.Router();
router.route("/").get(getAllEdges);
router.route("/").post(createEdge);
router.route("/:id").get(getEdgeById);
router.route("/:id").put(updateEdge);
router.route("/:id").delete(deleteEdge);
 
module.exports = router;
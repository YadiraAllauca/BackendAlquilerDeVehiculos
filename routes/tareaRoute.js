const express = require("express");
const router = express.Router();
const tareaController = require("../controllers/tareaController");

router.post("/", tareaController.addTarea);
router.get("/", tareaController.loadTareas);
router.put("/:id", tareaController.updateTarea);
router.delete("/:id", tareaController.deleteTarea);

module.exports = router;

const express = require("express");
const router = express.Router();
const actividadController = require("../controllers/actividadController");

router.post("/", actividadController.addActividad);
router.get("/", actividadController.loadActividads);
router.put("/:id", actividadController.updateActividad);
router.delete("/:id", actividadController.deleteActividad);

module.exports = router;

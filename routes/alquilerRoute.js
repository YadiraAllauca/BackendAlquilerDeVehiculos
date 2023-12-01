//Rutas para el esquema de Agencia
const express = require("express");
const router = express.Router();
const alquilerController = require("../controllers/alquilerController");

//api/agencias
router.post("/", alquilerController.addAlquiler);
router.get("/", alquilerController.loadAgencies);
router.put("/:id", alquilerController.updateAlquiler);
router.get("/:id", alquilerController.loadAlquiler);
router.delete("/:id", alquilerController.deleteAlquiler);
router.delete("/:date", alquilerController.findAlquiler);
module.exports = router;

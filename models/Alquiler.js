const mongoose = require("mongoose");
const AlquilerSchema = mongoose.Schema({
  cliente: {
    type: String,
    require: true,
  },
  empleado: {
    type: String,
    require: true,
  },
  fecha: {
    type: Date,
    default: Date.now()
  },
  placa: {
    type: String,
    require: true,
  },
  dias: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("alquiler", AlquilerSchema);

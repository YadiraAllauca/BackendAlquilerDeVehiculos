const mongoose = require("mongoose");
const ActividadSchema = mongoose.Schema({
  dia: {
    type: String,
    required: true
  },
  hora: {
    type: String,
    required: true,
  },
  actividad: {
    type: Date,
    required: true,
  },
  status: {
   hecho: String,
    require: true,
  },
});

module.exports = mongoose.model("actividad", ActividadSchema);

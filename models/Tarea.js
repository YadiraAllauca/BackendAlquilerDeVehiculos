const mongoose = require("mongoose");
const TareaSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("tarea", TareaSchema);

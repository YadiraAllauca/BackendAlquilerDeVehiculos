const Actividad = require("../models/Actividad");

exports.addActividad = async (req, res) => {
  try {
    let actividad;
    actividad = new Actividad(req.body);
    await actividad.save();
    res.send(actividad);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al registrar la actividad");
  }
};

exports.loadActividads = async (req, res) => {
  try {
    const actividads = await Actividad.find();
    res.json(actividads);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al cargar el listado");
  }
};

exports.updateActividad = async (req, res) => {
  try {
    const { day, hora, activ, hecho } = req.body;
    let actividad = await Actividad.findById(req.params.id);
    if (!actividad) {
      res.status(404).json({ msg: "No existe la alquiler" });
    }
    actividad.day = day;
    actividad.hora = hora;
    actividad.actividad = activ;
    actividad.hecho = hecho;
    actividad = await Actividad.findOneAndUpdate({ _id: req.params.id }, actividad, {
      new: true,
    });
    res.json(actividad);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al actualizar el registro");
  }
};

exports.deleteActividad = async (req, res) => {
  try {
    let actividad = await Actividad.findById(req.params.id);
    if (!actividad) {
      res.status(404).json({ msg: "No existe la actividad" });
    }
    await Actividad.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Actividad eliminada con éxito" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al eliminar el registro");
  }
};

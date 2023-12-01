const Alquiler = require("../models/Alquiler");

exports.addAlquiler = async (req, res) => {
  try {
    let alquiler;
    //Crear la alquiler
    alquiler = new Alquiler(req.body);
    await alquiler.save();
    res.send(alquiler);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al registrar la alquiler");
  }
};

exports.loadAgencies = async (req, res) => {
  try {
    const agencies = await Alquiler.find();
    res.json(agencies);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al cargar el listado");
  }
};

exports.loadAlquiler = async (req, res) => {
  try {
    let alquiler = await Alquiler.findById(req.params.id);
    if (!alquiler) {
      res.status(404).json({ msg: "No existe la alquiler" });
    }
    res.json(alquiler);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al cargar el registro");
  }
};

exports.updateAlquiler = async (req, res) => {
  try {
    const { cliente, empleado, placa, dias } = req.body;
    let alquiler = await Alquiler.findById(req.params.id);
    if (!alquiler) {
      res.status(404).json({ msg: "No existe la alquiler" });
    }
    alquiler.cliente = cliente;
    alquiler.empleado = empleado;
    alquiler.placa = placa;
    alquiler.dias = dias;

    alquiler = await Alquiler.findOneAndUpdate({ _id: req.params.id }, alquiler, {
      new: true,
    });
    res.json(alquiler);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al actualizar el registro");
  }
};

exports.deleteAlquiler = async (req, res) => {
  try {
    let alquiler = await Alquiler.findById(req.params.id);
    if (!alquiler) {
      res.status(404).json({ msg: "No existe la alquiler" });
    }
    await Alquiler.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Alquiler eliminado con éxito" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al eliminar el registro");
  }
};
exports.findAlquiler = async (req, res) => {
  try {
    const { fecha } = req.body;
    const alquiler = await Alquiler.findOne({ fecha});
    res.status(200).json({ _id: alquiler._id });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al cargar el registro");
  }
};

const Capteur = require("../Models/Capteur.js");
const capteurController = {};

// ADD Capteur
capteurController.addCapteur = async (req, res) => {
  const newCapteur = req.body;
  try {
    const capteurAdded = await new Capteur(newCapteur);
    capteurAdded.save();

    res.status(200).send(" Capteur added Successfully");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE Capteur
capteurController.updateCapteur = async (req, res) => {
  const capteurToUpdate = req.body;
  try {
    const capteurUpdated = await Capteur.findByIdAndUpdate(req.params.id,  { $set: { ...capteurToUpdate } },
      {
        new: true,
        runValidators: true,
      })


    res.status(200).send(capteurUpdated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET ALL THE Capteur
capteurController.getCapteurs = async (req, res) => {
  try {
    const capteurs = await Capteur.find();

    capteurs
      ? res.status(200).json(capteurs)
      : res.status(404).json({ message: "Capteurs not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete a Capteur
capteurController.deleteCapteur = async (req, res) => {
  try {
    const capteur = await Capteur.findByIdAndDelete(req.params.id);
    !capteur
      ? res.status(404).json({ message: "Capteur not found" })
      : res.status(200).json({ message: "Capteur deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get a Capteur by ID
capteurController.getCapteurByID = async (req, res) => {
  const { id } = req.params;

  try {
    const capteur = await Capteur.findById(id);

    !capteur
      ? res.status(404).json({ message: "Capteur not found" })
      : res.status(200).json({ capteur });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = capteurController;

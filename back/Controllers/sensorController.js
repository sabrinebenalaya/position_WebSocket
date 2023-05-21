const Sensor = require("../Models/Sensor.js");
const sensorController = {};

// ADD Sensor

sensorController.addSensor = async (req, res) => {

  const newSensor = req.body;

  try {
    const sensorAdded = await new Sensor(newSensor);
    sensorAdded.save();

    res.status(200).send(" Sensor added Successfully");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET ALL THE Sensors

sensorController.getSensors = async (req, res) => {

  try {
    const sensors = await Sensor.find();
   
    sensors
      ? res.status(200).json(sensors)
      : res.status(404).json({ message: "Sensors not found" });
     
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

//Delete a Sensor
sensorController.deleteSensor = async (req, res) => {
  try {
    const sensor = await Sensor.findByIdAndDelete(req.params.id);
    !sensor
      ? res.status(404).json({ message: "Sensor not found" })
      : res.status(200).json({ message: "Sensor deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get a sensor by ID
sensorController.getSensorByID = async (req, res) => {
  const {id} = req.params
 
  try {
    const sensor = await Sensor.findById(id);
    !sensor
      ? res.status(404).json({ message: "Sensor not found" })
      : res.status(200).json({sensor});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = sensorController;
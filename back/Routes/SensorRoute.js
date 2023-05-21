const express = require("express");
const sensorController = require("../Controllers/sensorController");
const router = express.Router();

router.post("/add", sensorController.addSensor);
router.get("/allSensors", sensorController.getSensors);
router.delete("/deleteSensor/:id", sensorController.deleteSensor);
router.get("/getSensor/:id", sensorController.getSensorByID);
module.exports = router;

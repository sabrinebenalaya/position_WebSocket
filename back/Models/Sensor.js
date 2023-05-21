const mongoose = require("mongoose");
const sensorSchema = mongoose.Schema({
    Longitude: { type: Number, required: true },
    Latitude: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  photo: { type: String, required: false },
});


module.exports = mongoose.model("sensors", sensorSchema);
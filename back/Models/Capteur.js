const mongoose = require("mongoose");
const capteurSchema = mongoose.Schema({
  Longitude: { type: Number, required: true },
  Latitude: { type: Number, required: true },
  name: { type: String, required: true },
  
});

module.exports = mongoose.model("capteurs", capteurSchema);

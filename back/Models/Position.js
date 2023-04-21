const mongoose = require("mongoose");
const positionSchema = mongoose.Schema({
    lat: {  type: Number, required: true },
    lng: { type: Number, required: true },
  text: { type: String, required: false },
  object:{type: String, required: false, default:"GiPositionMarker"}
});

module.exports = mongoose.model("position", positionSchema); 

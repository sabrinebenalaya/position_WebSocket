const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  position: { type: String, required: true },
});

module.exports = mongoose.model("users", userSchema);

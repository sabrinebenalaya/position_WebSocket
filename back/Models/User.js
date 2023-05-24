const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  position: { type: String, required: false },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  dateOfBirth: { type: Date, required: false },
  status: { type: String, required: false, default:"active" },
  photo: { type: String, required: false , default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlmu6DTpVdJYiqUWHynUVCvvtNGSqQHKxs3N7398XRnw&s"},
    phone: { type: Number, required: false },
});

module.exports = mongoose.model("users", userSchema);

const User = require("../Models/User");
const userController = {};

// ADD USER

userController.addUser = async (req, res) => {

  const newuser = req.body;

  try {
    const carUser = await new User(newuser);
    carUser.save();

    res.status(200).send(" user added Successfully");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET ALL THE USERS

userController.getUsers = async (req, res) => {

  try {
    const users = await User.find();
   
    users
      ? res.status(200).json(users)
      : res.status(404).json({ message: "Users not found" });
     
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

//Delete a user
userController.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    !user
      ? res.status(404).json({ message: "User not found" })
      : res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get a user by ID
userController.getUserByID = async (req, res) => {
  const {id} = req.params
 
  try {
    const user = await User.findById(id);
    !user
      ? res.status(404).json({ message: "User not found" })
      : res.status(200).json({user});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = userController;
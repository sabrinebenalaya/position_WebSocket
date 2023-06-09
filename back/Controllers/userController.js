const User = require("../Models/User");
const userController = {};



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

//Edit a user By ID

userController.editUserById= async(req, res)=>{
  const { id } = req.params;
  const userToUpdate = JSON.parse(req.body.userEdited);

  // Traitez les autres données du formulaire (userEdited)

  if (req.file) {
    console.log("path",req.file.path)
    const imagePath = req.file.path.replace(/\\/g, "/");
    const photoPath = `http://localhost:3001/users/${imagePath}`;
    userToUpdate.photo = photoPath;
  }

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { $set: { ...userToUpdate } },
      {
        new: true,
        runValidators: true,
      }
    );

    user
      ? res.status(200).json(user)
      : res.status(404).json({ message: "User not found" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
module.exports = userController;
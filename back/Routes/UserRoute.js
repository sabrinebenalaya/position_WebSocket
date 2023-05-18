const express = require("express");
const userController = require("../Controllers/userController");
const router = express.Router();

router.post("/add", userController.addUser);
router.get("/allUsers", userController.getUsers);
router.delete("/deleteUser/:id", userController.deleteUser);
router.get("/getUser/:id", userController.getUserByID);
module.exports = router;

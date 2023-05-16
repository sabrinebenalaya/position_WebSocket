const express = require("express");
const userController = require("../Controllers/userController");
const router = express.Router();

router.post("/add", userController.addUser);
router.get("/allUsers", userController.getUsers);
router.delete("/deleteUser/:id", userController.deleteUser);
module.exports = router;

const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authController");
router.post("/login", authController.login);
router.post("/addUser", authController.addUser);

router.get("/logOut", authController.logOut);
module.exports = router;
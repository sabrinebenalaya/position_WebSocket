const express = require("express");
const capteurController = require("../Controllers/capteurController");
const router = express.Router();

router.post("/add", capteurController.addCapteur);
router.get("/allCapteurs", capteurController.getCapteurs);
router.delete("/deleteCapteur/:id", capteurController.deleteCapteur);
router.get("/getCapteur/:id", capteurController.getCapteurByID);
module.exports = router;

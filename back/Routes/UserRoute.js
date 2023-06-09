const express = require("express");
const multer = require("multer");
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'assets/')
    },
    filename: function (req, file, cb) {
      const newFileName = Date.now() + '-' + file.originalname
      cb(null, newFileName)
    }
  })


  const upload = multer({ storage: storage })
const userController = require("../Controllers/userController");
const router = express.Router();

router.get("/allUsers", userController.getUsers);
router.delete("/deleteUser/:id", userController.deleteUser);
router.put("/updateUser/:id",  upload.single("image"), userController.editUserById);

router.get('/assets/:filename',(req,res)=>{
    const {filename} = req.params
    const filePath = path.join(__dirname, '..', 'assets', filename);
  
    res.sendFile(filePath)
  })
router.get("/getUser/:id", userController.getUserByID);
module.exports = router;

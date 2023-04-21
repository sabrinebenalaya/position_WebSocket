const mongoose = require("mongoose");


const url_DB = "mongodb://localhost:27017"

const db ="positionItems"

const connectDB = async () => {
    try {
    await mongoose.connect(`${url_DB}/${db}`);
    console.log("mongoose is connect");
  } catch (error) {
    console.log("connexion with data base is failed");
  }
};

module.exports=connectDB;
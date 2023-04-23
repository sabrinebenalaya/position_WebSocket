const express = require("express");
const axios = require("axios");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const connect = require("./ConnnectDB/Connect");
const Position = require("./Models/Position");

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
const PORT = 3001;

connect();

io.on("connection", async (socket) => {
  console.log("client connected");

  socket.on("addPosition", async (data) => {
    try {
      const newPosition = data;
      const positionInstance = new Position(newPosition);
      const response = await positionInstance.save();
      io.emit("message")

    } catch (err) {
      console.error(err);
    }
  });


  socket.on("editPosition", async (data) => {
    try {
     const positionFound = await Position.findById(data._id)

     const positionInstance = new Position({_id : positionFound._id, 
      lat : data.lat,
      lng : data.lng,
      text :positionFound.text,
      object: positionFound.object
     });

      const response = await Position.findByIdAndUpdate(positionInstance._id, positionInstance);
    } catch (err) {
      console.error(err);
    }
  });


  try {
    const positions = await Position.find();
    io.emit("positionList", positions);
  } catch (error) {
    console.error(error);
  }

  socket.on("disconnect", () => {
    console.log("client disconnected");
  });
});



server.listen(PORT, () => {
  console.log(`Listening on *:${PORT}`);
});

const express = require("express");
const axios = require("axios");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const Position = require("./Models/Position");
const ObjectID = require("mongodb").ObjectID;

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

/* connexion db */
const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017/positionItems";
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function main() {
  try {
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db("positionItems");

    io.on("connection", (socket) => {
      console.log("a user connected");

      socket.on("addPosition", (position) => {
        console.log("Adding position:", position);
        addPositionToDB(position);
        io.emit("positionAdded", position);
      });
      socket.on("updatePosition", (position) => {
        console.log("Updating position:", position);
        updatePositionInDB(position);
      });
    });

    await monitorListingsUsingEventEmitter(client, db);
  } catch (e) {
    console.error(e);
  }
}

main().catch(console.error);
async function updatePositionInDB(position) {
  const collection = client.db("positionItems").collection("positions");
  const filter = { _id: new ObjectID(position._id) };

  const updateDoc = { $set: { lng: position.lng, lat: position.lat } };
  const result = await collection.updateOne(
    filter,
    updateDoc
  );
  console.log(`${result.modifiedCount} position updated`);
  const updatedPosition = await collection.findOne(filter);

  // Émettre l'événement "positionUpdated" à tous les clients connectés
  io.emit("positionUpdated", updatedPosition);
}

async function addPositionToDB(position) {
  const collection = client.db("positionItems").collection("positions");
  const result = await collection.insertOne(position);
  const updatedPosition = await collection.findOne({ _id: position._id });

  // Émettre l'événement "positionUpdated" à tous les clients connectés
  io.emit("positionUpdated", updatedPosition);
}

async function monitorListingsUsingEventEmitter(client, db, timeInMs = 1000) {
  const collection = db.collection("positions");

  setInterval(async () => {
    if (client.isConnected()) {
      const positions = await collection.find().toArray();
      io.emit("positionList", positions);
    } else {
      console.log("Not connected to MongoDB");
    }
  }, timeInMs);
}

/* end connxion*/
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Listening on *:${PORT}`);
});

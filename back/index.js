const express = require("express");
const cors = require('cors')
const userRoute = require('./Routes/UserRoute');

const connect = require("./ConnnectDB/Connect");

const app = express();
const port = 3001;

app.listen(port, (e) => {
  if (e) {
    console.log("server is failed");
  } else {
    console.log(`server is connected on port ${port}`);
  }
});


connect();

app.use(cors({
  origin: '*'
}));

app.use(express.json());
app.use('/users',userRoute);

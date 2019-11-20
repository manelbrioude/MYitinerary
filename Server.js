const mongoose = require("mongoose");
var express = require("express");
const config = require("config");
var cors = require("cors");
const cityRouter = require("./router/cityRouter");
const itinRouter = require("./router/itineraryRouter");
const actiRouter = require("./router/activityRouter");
const userRouter = require("./router/userRouter");
const authRouter = require("./router/authRouter");
const comRouter = require("./router/commentRouter");
const bodyParser = require("body-parser");
const path = require("path");
var app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use("*/uploads", express.static("uploads"));

app.use(cors());

app.use("/cities", cityRouter);
app.use("/itineraries", itinRouter);
app.use("/activities", actiRouter);
app.use("/users", userRouter);
app.use("/users", authRouter);
app.use("/comments", comRouter);

// serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

var port = process.env.PORT || 5000;

const db = config.get("mongoURI");
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("database connectec"));

app.listen(port);

console.log("Magic happens on port " + port);

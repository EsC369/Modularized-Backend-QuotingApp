const express = require("express");
const app = express();
const body_parser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.use(body_parser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost/quoting_dojo"); // if db doesnt exist one wil be created
app.use(express.static(__dirname + "/public"));
const config = require("config");
const port = 5000;

// Modularize:
// require("./server/config/mongoose")();
require("./routes/routes")(app);

const db = config.get("mongoURI");

// Mongo Config:
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("Mongo DB Connected..."))
  .catch(err => console.log(err));

// Listening:
app.listen(port, () => {
  console.log(`Port running on port: ${port}`);
});
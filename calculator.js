// jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function (err, res) {
  console.log("Successfully connected to port 3000.");
});

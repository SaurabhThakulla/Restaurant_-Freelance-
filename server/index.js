const express = require("express");
const cors = require("cors");
const { config } = require("dotenv");

env.process.

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Server");
  console.log("Hello Server");
});

app.listen(3000);

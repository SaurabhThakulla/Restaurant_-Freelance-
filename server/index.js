const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

// ---------- MIDDLEWARE ----------
app.use(cors());
app.use(express.json());

// ---------- ROUTES ----------
app.use("/api/reviews", reviewRoutes);

// ---------- TEST ----------
app.get("/", (req, res) => {
  res.send("Review API running 🚀");
});

// ---------- DB + SERVER ----------
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));

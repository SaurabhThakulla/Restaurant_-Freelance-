const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const reviewRoutes = require("./routes/reviewRoute");

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* ROUTES */
app.use("/api/reviews", reviewRoutes);

/* DB CONNECT */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ DB error:", err));

/* SERVER */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

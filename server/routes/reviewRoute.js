const express = require("express");
const router = express.Router();
const {
  createReview,
  getReviews,
  updateReviewStatus,
  deleteReview,
} = require("../controllers/reviewController");

// Public
router.get("/", getReviews);
router.post("/", createReview);

// Admin
router.patch("/:id/status", updateReviewStatus);
router.delete("/:id", deleteReview);

module.exports = router;

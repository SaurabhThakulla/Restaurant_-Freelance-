const Review = require("../models/Review");

// CREATE REVIEW
exports.createReview = async (req, res) => {
  try {
    const { name, rating, comment } = req.body;

    if (!name || !rating || !comment) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const review = await Review.create({
      name,
      rating,
      comment,
    });

    res.status(201).json({
      message: "Review submitted for approval",
      review,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// GET APPROVED REVIEWS (PUBLIC)
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ status: "approved" }).sort({
      createdAt: -1,
    });

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ADMIN: UPDATE STATUS
exports.updateReviewStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(review);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE REVIEW
exports.deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: "Review deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const Review = require("../models/review");

/* GET all reviews */
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch reviews" });
  }
};

/* ADD new review */
exports.addReview = async (req, res) => {
  try {
    const { name, comment, rating } = req.body;

    if (!name || !comment || !rating) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const review = await Review.create({
      name,
      comment,
      rating,
    });

    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: "Failed to add review" });
  }
};

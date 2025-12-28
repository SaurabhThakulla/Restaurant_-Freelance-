/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import StarRating from "./StarRating";
import { motion, AnimatePresence } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const API_URL = import.meta.env.VITE_API_URL;

export default function StoriesSection() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [reviews, setReviews] = useState([]);

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  function fetchReviews() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }

  /* SUBMIT REVIEW */
  async function submitReview() {
    if (!name || !comment) return;

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, comment, rating }),
    });

    setName("");
    setComment("");
    setRating(5);
    setOpen(false);
    fetchReviews();
  }
  /* FETCH REVIEWS */
  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <section className="px-6 md:px-10 py-24 bg-[#0b0b0b]">
      {/* HEADER */}
      <div className="flex flex-col items-center mb-14">
        <motion.h2
          className="text-3xl font-bold text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          What Customers Say
        </motion.h2>

        <button
          onClick={() => setOpen(true)}
          className="mt-6 bg-red-500 text-white px-6 py-3 rounded-full text-sm"
        >
          + Add Your Review
        </button>
      </div>

      {/* REVIEWS GRID */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {reviews.map((r) => (
          <motion.div
            key={r._id}
            variants={item}
            className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800"
          >
            <StarRating rating={r.rating} />
            <p className="text-zinc-300 italic mt-4">“{r.comment}”</p>
            <p className="text-orange-400 mt-4 font-semibold">— {r.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <motion.div className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md">
              <h3 className="text-xl text-white mb-6">
                Share your momo experience
              </h3>

              {/* RATING */}
              <div className="flex gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <button
                    key={i}
                    onClick={() => setRating(i)}
                    className={`text-2xl ${
                      i <= rating ? "text-yellow-400" : "text-zinc-600"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full mb-3 bg-black border px-4 py-2 text-white"
              />

              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Tell us about the momo taste..."
                rows="4"
                className="w-full bg-black border px-4 py-2 text-white"
              />

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setOpen(false)}
                  className="text-zinc-400 text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={submitReview}
                  className="bg-red-500 text-white px-5 py-2 rounded-full text-sm"
                >
                  Submit Review
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

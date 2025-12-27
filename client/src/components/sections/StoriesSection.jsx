/* eslint-disable no-unused-vars */
import { useState } from "react";
import { reviews } from "@/data/reviews";
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
    transition: { duration: 0.6, ease: [0.8, 1, 0.8, 1] },
  },
};

export default function StoriesSection() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(5);

  return (
    <section className="px-6 md:px-10 py-24 bg-[#0b0b0b]">
      {/* HEADER */}
      <div className="flex flex-col items-center mb-14">
        <motion.h2
          className="text-3xl font-bold text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Customers Say
        </motion.h2>

        <button
          onClick={() => setOpen(true)}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-sm"
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
            key={r.id}
            variants={item}
            whileHover={{ y: -6 }}
            className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800"
          >
            <StarRating rating={r.rating} />
            <p className="text-zinc-300 italic mt-4">“{r.comment}”</p>
            <p className="text-orange-400 mt-4 font-semibold">— {r.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* REVIEW MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md border border-zinc-800"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
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

              {/* FORM */}
              <input
                placeholder="Your name"
                className="w-full mb-3 bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white"
              />

              <textarea
                placeholder="Tell us about the momo taste..."
                rows="4"
                className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white"
              />

              {/* ACTIONS */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setOpen(false)}
                  className="text-zinc-400 text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full text-sm"
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

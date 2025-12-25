import { reviews } from "@/data/reviews";
import StarRating from "./StarRating";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.8, 1, 0.8, 1],
    },
  },
};

export default function StoriesSection() {
  return (
    <section className="px-10 py-24">
      {/* Title animation */}
      <motion.h2
        className="text-3xl font-bold text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What Customers Say
      </motion.h2>

      {/* Reviews grid animation */}
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
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-zinc-900 p-6 rounded-2xl"
          >
            <StarRating rating={r.rating} />
            <p className="text-zinc-300 italic mt-4">“{r.comment}”</p>
            <p className="text-orange-400 mt-4 font-semibold">— {r.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

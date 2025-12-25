import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export default function StoryAndSpecialsSection() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="px-6 md:px-16 py-24 space-y-28"
    >
      {/* Story */}
      <motion.div
        variants={fadeUp}
        className="grid md:grid-cols-2 gap-14 items-center"
      >
        <img src="/assets/images/momo.jpg" className="rounded-xl shadow-2xl" />

        <div>
          <h2 className="text-3xl font-bold mb-6">The Story</h2>
          <p className="text-zinc-400">
            Authentic street-style momos served fresh every day.
          </p>
        </div>
      </motion.div>

      {/* Specials */}
      <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-14">
        <h2 className="text-3xl font-bold">Specials Menu</h2>
      </motion.div>
    </motion.section>
  );
}

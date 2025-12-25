import { Card, CardContent } from "@/components/ui/card";
import { menuItems } from "@/data/menu";
import { motion } from "framer-motion";
import { fadeUpSmooth, staggerContainer } from "@/lib/animations";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function SpecialsSection() {
  return (
    <section className="px-10 py-20">
      {/* Title */}
      <motion.h2
        className="text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Specials Menu
      </motion.h2>

      {/* Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-6"
      >
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeUpSmooth}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            {/* card */}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

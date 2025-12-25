import { Card, CardContent } from "@/components/ui/card";
import { menuItems } from "@/data/menu";
import { motion } from "framer-motion";

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
        className="grid md:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            variants={itemAnim}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Card className="bg-zinc-900 border-zinc-800 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-zinc-400 mt-2">{item.description}</p>
                <p className="text-orange-400 font-bold mt-4">₹{item.price}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

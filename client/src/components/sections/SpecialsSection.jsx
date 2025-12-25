import { Card, CardContent } from "@/components/ui/card";
import { menuItems } from "@/data/menu";
import { motion } from "framer-motion";
import { fadeUpSmooth, staggerContainer } from "@/lib/animations";

export default function SpecialsSection() {
  return (
    <section className="px-10 py-24 bg-[#0b0b0b] min-h-screen">
      {/* Section Title */}
      <motion.h2
        className="text-3xl font-bold mb-12 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Specials Menu
      </motion.h2>

      {/* Menu Grid */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeUpSmooth}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <Card className="bg-zinc-900 border border-zinc-800 hover:border-orange-500 transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {item.name}
                </h3>

                <p className="text-zinc-400 mt-2 text-sm">{item.description}</p>

                <p className="text-orange-400 font-bold text-lg mt-4">
                  ₹{item.price}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State (Industry Good Practice) */}
      {menuItems.length === 0 && (
        <p className="text-zinc-500 mt-10">Menu will be updated soon.</p>
      )}
    </section>
  );
}

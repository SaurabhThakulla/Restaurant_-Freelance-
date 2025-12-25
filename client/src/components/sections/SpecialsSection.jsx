import { Card, CardContent } from "@/components/ui/card";
import { menuItems } from "@/data/menu";
import { motion } from "framer-motion";
import { fadeUpSmooth, staggerContainer } from "@/lib/animations";
import momoImg from "@/assets/momo.jpg";

export default function SpecialsSection() {
  return (
    <section className="px-6 md:px-10 py-24 bg-[#0b0b0b] min-h-screen">
      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-14 text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Specials Menu
      </motion.h2>

      {/* Menu Grid */}
      <motion.div
        className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeUpSmooth}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <Card className="bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-orange-500 transition-all duration-300 h-full">
              {/* IMAGE */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={momoImg}
                  alt={item.name}
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* CONTENT */}
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.name}
                  </h3>

                  <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <p className="text-orange-400 font-bold text-lg">
                    ₹{item.price}
                  </p>

                  <span className="text-xs text-zinc-500">Steam / Fried</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {menuItems.length === 0 && (
        <p className="text-zinc-500 mt-10 text-center">
          Menu will be updated soon.
        </p>
      )}
    </section>
  );
}

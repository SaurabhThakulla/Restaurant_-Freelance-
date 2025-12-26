import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { menuItems } from "@/data/menu";
import { motion } from "framer-motion";
import { fadeUpSmooth, staggerContainer } from "@/lib/animations";
import momoImg from "@/assets/momo.jpg";

/* PRICE CONFIG */
const PRICE_MAP = {
  Steam: {
    Paneer: 50,
    Soya: 40,
    Veg: 30,
  },
  Fried: {
    Paneer: 60,
    Soya: 50,
    Veg: 40,
  },
};

export default function OrderList() {
  const [type, setType] = useState({});

  return (
    <section className="px-6 md:px-10 py-24 bg-[#0b0b0b] min-h-screen">
      {/* TITLE */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-14 text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Specials Menu
      </motion.h2>

      {/* GRID */}
      <motion.div
        className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {menuItems.map((item) => {
          const selected = type[item.id] || "Steam";

          /* DETECT TYPE */
          const momoType = item.name.includes("Paneer")
            ? "Paneer"
            : item.name.includes("Soya")
            ? "Soya"
            : "Veg";

          const price = PRICE_MAP[selected][momoType];

          return (
            <motion.div
              key={item.id}
              variants={fadeUpSmooth}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <Card className="bg-zinc-900 border border-zinc-800 hover:border-orange-500 transition-all h-full">
                {/* IMAGE */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={momoImg}
                    alt={item.name}
                    className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
                  />

                  <span className="absolute top-3 right-3 bg-black/70 text-xs px-3 py-1 rounded-full text-orange-400">
                    {selected}
                  </span>
                </div>

                {/* CONTENT */}
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.name}
                    </h3>

                    <p className="text-zinc-400 mt-2 text-sm">
                      {item.description}
                    </p>

                    {/* STEAM / FRIED */}
                    <div className="flex gap-2 mt-4">
                      {["Steam", "Fried"].map((t) => (
                        <button
                          key={t}
                          onClick={() => setType({ ...type, [item.id]: t })}
                          className={`px-4 py-1.5 rounded-full text-xs border transition ${
                            selected === t
                              ? "bg-orange-500 text-black border-orange-500"
                              : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* PRICE */}
                  <div className="flex justify-between items-center mt-6">
                    <p className="text-orange-400 font-bold text-lg">
                      ₹{price}
                    </p>
                    <span className="text-xs text-zinc-500">
                      {selected} {momoType} Momos
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* EMPTY */}
      {menuItems.length === 0 && (
        <p className="text-zinc-500 mt-10 text-center">
          Menu will be updated soon.
        </p>
      )}
    </section>
  );
}

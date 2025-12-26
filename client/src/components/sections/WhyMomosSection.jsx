import { motion } from "framer-motion";

export default function WhyMomosSection() {
  return (
    <section className="bg-[#0b0b0b] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-orange-400 tracking-wide mb-3">
            Why people love us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            More than just momos
          </h2>
          <p className="text-zinc-400 mt-4">
            We focus on taste, hygiene, and speed — every single order.
          </p>
        </motion.div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Freshly Made",
              desc: "Prepared only after you order. No frozen shortcuts.",
              icon: "🥟",
            },
            {
              title: "Street-Style Taste",
              desc: "Authentic flavour inspired by local momo stalls.",
              icon: "🔥",
            },
            {
              title: "Fast Service",
              desc: "Quick prep so you don’t wait hungry.",
              icon: "⚡",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 hover:border-red-500/50 transition"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="text-white font-semibold mt-4 text-lg">
                {item.title}
              </h3>
              <p className="text-zinc-400 mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center">
          {[
            { label: "Happy Customers", value: "2,000+" },
            { label: "Daily Orders", value: "150+" },
            { label: "Avg Rating", value: "4.6 ⭐" },
            { label: "Years Serving", value: "4+" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-2xl md:text-3xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-zinc-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

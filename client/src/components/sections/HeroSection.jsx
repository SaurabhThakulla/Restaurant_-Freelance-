// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "wouter";
import { BRAND } from "@/config/brand";
import { Button } from "@/components/ui/button";
import momoImg from "@/assets/momo.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0b0b0b] overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-3xl" />
      <div className="absolute top-40 -left-40 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-3xl" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-10 py-32 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: [0.6, 1, 0.4, 1] }}
        >
          <p className="text-orange-400 mb-4 tracking-wide">{BRAND.tagline}</p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Welcome to <br />
            <span className="text-red-500">{BRAND.name}</span>
          </h1>

          <p className="text-zinc-400 mt-6 max-w-md">
            Authentic street-style momos made fresh every day using quality
            ingredients and traditional taste.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-10">
            <Link href="/stories">
              <Button className="bg-red-500 hover:bg-red-600 rounded-full px-8 py-6 text-base">
                About us
              </Button>
            </Link>

            <Link href="/order">
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-base border-zinc-700 text-zinc-300"
              >
                View Menu
              </Button>
            </Link>
          </div>

          {/* TRUST TAGS */}
          <div className="flex gap-6 mt-10 text-sm text-zinc-400">
            <span>🔥 Fresh</span>
            <span>⚡ Fast</span>
            <span>⭐ Loved by locals</span>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
          className="flex justify-center"
        >
          <img
            src={momoImg}
            alt="Momos"
            className="w-[200px] h-[200px] md:w-[680px] md:h-[480px] object-cover rounded-full shadow-2xl border border-zinc-800"
          />
        </motion.div>
      </div>
    </section>
  );
}

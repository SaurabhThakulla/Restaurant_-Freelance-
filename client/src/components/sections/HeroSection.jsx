import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { BRAND } from "@/config/brand";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="grid md:grid-cols-2 gap-10 px-10 py-24 items-center">
      <motion.div variants={fadeUp} initial="hidden" animate="visible">
        <p className="text-orange-400 mb-3">{BRAND.tagline}</p>

        <h1 className="text-5xl font-extrabold leading-tight">
          Welcome to <br />
          <span className="text-red-500">{BRAND.name}</span>
        </h1>

        <Button className="mt-8 bg-red-500 rounded-full px-8">Order Now</Button>
      </motion.div>

      <motion.img
        src="../../assets/images/momo.jpg"
        className="rounded-full shadow-2xl w-[360px] mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
    </section>
  );
}

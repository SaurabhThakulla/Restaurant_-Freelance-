import { Button } from "@/components/ui/button";
import img from "../../assets/images/momo.jpg";

export default function HeroSection() {
  return (
    <section className="grid md:grid-cols-2 gap-10 px-10 py-24 items-center">
      <div>
        <p className="text-orange-400 mb-3">🔥 FAST DELIVERY</p>

        <h1 className="text-5xl font-extrabold leading-tight">
          Order Tasty & <br />
          <span className="text-red-500">Fresh Momos</span>
        </h1>

        <p className="text-zinc-400 mt-6 max-w-md">
          Handcrafted street-style momos made fresh every day.
        </p>

        <div className="flex gap-4 mt-8">
          <Button className="rounded-full bg-red-500 px-8">Order Now</Button>
          <Button variant="outline" className="rounded-full">
            View Menu
          </Button>
        </div>
      </div>

      <img src={img} className="rounded-full shadow-2xl w-[360px] mx-auto" />
    </section>
  );
}

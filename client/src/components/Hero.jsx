import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.9)), url('/momo.jpg')",
      }}
    >
      <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
        EVEREST MOMOS
      </h1>
      <p className="text-orange-400 mt-3">Hot • Fresh • Street Style</p>

      <Button className="mt-6 bg-orange-500 hover:bg-orange-600">
        View Menu
      </Button>
    </section>
  );
}

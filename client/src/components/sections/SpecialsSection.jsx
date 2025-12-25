import { Card, CardContent } from "@/components/ui/card";
import { menuItems } from "@/data/menu";

export default function SpecialsSection() {
  return (
    <section className="px-10 py-20">
      <h2 className="text-3xl font-bold mb-10">Specials Menu</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <Card
            key={item.id}
            className="bg-zinc-900 border-zinc-800 hover:scale-105 transition"
          >
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-zinc-400 mt-2">{item.description}</p>
              <p className="text-orange-400 font-bold mt-4">₹{item.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

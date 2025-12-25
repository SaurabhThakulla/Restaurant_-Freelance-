import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
  { name: "Veg Momos", desc: "Fresh mixed vegetables", price: "₹50" },
  { name: "Soya Momos", desc: "High-protein soya filling", price: "₹60" },
  { name: "Paneer Momos", desc: "Soft paneer & spices", price: "₹70" },
];

export default function Menu() {
  return (
    <section className="py-16 px-5 text-center">
      <h2 className="text-3xl font-bold">Our Momos</h2>

      <div className="grid gap-6 mt-10 md:grid-cols-3">
        {items.map((item, i) => (
          <Card
            key={i}
            className="bg-zinc-900 border-zinc-800 hover:scale-105 transition"
          >
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">{item.desc}</p>
              <p className="mt-4 text-orange-400 font-bold">{item.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

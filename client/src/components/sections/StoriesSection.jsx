import { reviews } from "@/data/reviews";
import StarRating from "./StarRating";

export default function StoriesSection() {
  return (
    <section className="px-10 py-24">
      <h2 className="text-3xl font-bold text-center mb-14">
        What Customers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((r) => (
          <div key={r.id} className="bg-zinc-900 p-6 rounded-2xl">
            <StarRating rating={r.rating} />
            <p className="text-zinc-300 italic mt-4">“{r.comment}”</p>
            <p className="text-orange-400 mt-4 font-semibold">— {r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

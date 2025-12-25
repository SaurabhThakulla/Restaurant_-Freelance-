import { Link } from "wouter";
import { BRAND } from "@/config/brand";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <h1 className="font-bold text-xl">{BRAND.name}</h1>

      <div className="flex gap-6 text-sm">
        <Link href="/">Home</Link>
        <Link href="/order">Order</Link>
        <Link href="/stories">Stories</Link>
      </div>
    </nav>
  );
}

import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <h1 className="font-bold text-xl">JHALPA DEVI MOMOS</h1>

      <div className="hidden md:flex gap-6 text-sm text-zinc-300">
        <a href="#menu">Menu</a>
        <a href="#story">Story</a>
        <a href="#contact">Contact</a>
      </div>

      <Button className="bg-green-500">Order</Button>
    </nav>
  );
}

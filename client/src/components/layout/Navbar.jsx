import { useState } from "react";
import { Link } from "wouter";
import { BRAND } from "@/config/brand";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 md:px-10 py-5 border-b border-zinc-800">
      <div className="flex justify-between items-center">
        {/* LOGO */}
        <h1 className="font-bold text-xl tracking-wide">{BRAND.name}</h1>

        {/* DESKTOP MENU */}
        <div className="hidden text-l md:flex gap-8 text-zinc-300">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/order" className="hover:text-white">
            Order
          </Link>
          <Link href="/stories" className="hover:text-white">
            Stories
          </Link>
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1s"
          aria-label="Toggle Menu"
        >
          <span className="w-6 h-0.5 bg-white md:hidden"></span>
          <span className="w-6 h-0.5 bg-white md:hidden"></span>
          <span className="w-6 h-0.5 bg-white md:hidden"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-6 flex flex-col gap-4 text-zinc-300">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/order" onClick={() => setOpen(false)}>
            Order
          </Link>
          <Link href="/stories" onClick={() => setOpen(false)}>
            Stories
          </Link>
        </div>
      )}
    </nav>
  );
}

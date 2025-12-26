import { useState } from "react";
import { Link, useLocation } from "wouter";
import { BRAND } from "@/config/brand";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  const linkClass = (path) =>
    `transition-colors ${
      location === path ? "text-white" : "text-zinc-400 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex justify-between items-center">
        {/* LOGO */}
        <h1 className="font-bold text-xl tracking-wide">{BRAND.name}</h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 text-sm font-medium">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/order" className={linkClass("/order")}>
            Order
          </Link>
          <Link href="/stories" className={linkClass("/stories")}>
            Stories
          </Link>
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-6"
          aria-label="Toggle Menu"
        >
          <span
            className={`absolute w-6 h-0.5 bg-white transition-transform ${
              open ? "rotate-45 top-3" : "top-1"
            }`}
          />
          <span
            className={`absolute w-6 h-0.5 bg-white transition-opacity top-3 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute w-6 h-0.5 bg-white transition-transform ${
              open ? "-rotate-45 top-3" : "top-5"
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-4 text-zinc-300 text-sm">
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
      </div>
    </nav>
  );
}

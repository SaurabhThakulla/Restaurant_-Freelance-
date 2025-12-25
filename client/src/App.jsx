import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <>
      <Hero />
      <Menu />
      <Contact />

      {/* Floating WhatsApp */}
      <Button
        className="fixed bottom-5 right-5 rounded-full bg-green-500 hover:bg-green-600"
        asChild
      >
        <a href="https://wa.me/91XXXXXXXXXX" target="_blank">
          WhatsApp Order
        </a>
      </Button>
    </>
  );
}

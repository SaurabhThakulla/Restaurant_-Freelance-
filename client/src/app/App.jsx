import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import SpecialsSection from "@/components/sections/SpecialsSection";

export default function App() {
  return (
    <div className="bg-[#0b0b0b] text-zinc-100 min-h-screen">
      <Navbar />
      <HeroSection />
      <StorySection />
      <SpecialsSection />
    </div>
  );
}

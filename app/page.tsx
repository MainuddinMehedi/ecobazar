import Categories from "@/components/module/home/Categories";
import Features from "@/components/module/home/Features";
import HeroSection from "@/components/module/home/hero/HeroSection";

export default function Home() {
  return (
    <div className="space-y-8">
      <HeroSection />
      <Features />
      <Categories />
    </div>
  );
}

import Categories from "@/components/module/home/Categories";
import FeaturedProducts from "@/components/module/home/FeaturedProducts";
import Features from "@/components/module/home/Features";
import HeroSection from "@/components/module/home/hero/HeroSection";

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <Features />
      <Categories />
      <FeaturedProducts />
      
      <h1 className="text-5xl">abgnlajsdlkajlsdjflasjdfl</h1>
    </div>
  );
}

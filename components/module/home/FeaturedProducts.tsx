import ProductCard from "../products/ProductCard";
import Offers from "./Offers";

export default function FeaturedProducts() {
  return (
    <div className="space-y-12">
      <h1 className="heading-primary text-center">Featured Products</h1>

      <div className="flex flex-wrap gap-[12]">
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>

      {/* offer products */}
      <Offers />
    </div>
  );
}

import ProductCard from "../products/ProductCard";

export default function FeaturedProducts() {
  return (
    <div className="space-y-10">
      <h1 className="heading-primary text-center">Featured Products</h1>

      <div className="flex flex-wrap gap-[14]">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
}

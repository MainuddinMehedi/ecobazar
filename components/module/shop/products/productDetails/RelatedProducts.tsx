import ProductCard from "@/components/common/products/ProductCard";

export default function RelatedProducts() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
      {[...Array(5)].map((_, i) => (
        <ProductCard key={i} product={{}} />
      ))}
    </div>
  );
}

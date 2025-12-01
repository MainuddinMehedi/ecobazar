import OfferProductsCard from "@/components/common/products/OfferProductsCard";
import ProductCard from "@/components/common/products/ProductCard";

export default function BlogsFeed() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
      {[...Array(15)].map((_, i) => (
        <ProductCard key={i} />
      ))}
    </div>
  );
}

import FeedHeader from "./FeedHeader";
import ProductsGrid from "./ProductsGrid";

export default function ProductsFeed() {
  return (
    <div className="space-y-4">
      <FeedHeader />
      <ProductsGrid />
    </div>
  );
}

import ShopSidebar from "@/components/module/shop/filters/ShopSidebar";
import ProductsFeed from "@/components/module/shop/products/ProductsFeed";

export default function ShopPage() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {/* sidebar - filter, offer promo, spacial products */}
      <aside className="col-span-1">
        <ShopSidebar />
      </aside>

      {/* products + pagination */}
      <main className="col-span-3">
        <ProductsFeed />
      </main>
    </div>
  );
}

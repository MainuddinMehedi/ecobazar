import ShopSidebar from "@/components/module/shop/filters/ShopSidebar";

export default function ShopPage() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {/* sidebar - filter, offer promo, spacial products */}
      <aside className="col-span-1 bg-gray-">
        <ShopSidebar />
      </aside>

      {/* products */}
      {/* pagination */}
      <main className="col-span-3  bg-gray-100 text-5xl">
        {" "}
        This is main section where all the products will be.
      </main>
    </div>
  );
}

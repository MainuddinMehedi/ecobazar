import BlogsFeed from "@/components/module/blog/BlogsFeed";
import BlogSidebar from "@/components/module/blog/BlogSidebar";

export default function BlogPage() {
  return (
    <div>
      <div className="grid grid-cols-7 gap-6">
        {/* sidebar - filter, gallery, recent products */}
        <aside className="col-span-2">
          <BlogSidebar />
        </aside>

        {/* products + pagination */}
        <main className="col-span-5">
          <BlogsFeed />
        </main>
      </div>
    </div>
  );
}

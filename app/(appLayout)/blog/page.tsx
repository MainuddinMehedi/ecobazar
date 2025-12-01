import BlogsFeed from "@/components/module/blog/BlogsFeed";
import BlogSidebar from "@/components/module/blog/BlogSidebar";

// TODO: Mobile Sidebar remains

export default function BlogPage() {
  return (
    <div>
      <div className="grid grid-cols-7 gap-6">
        {/* sidebar - filter, gallery, recent blogs */}
        <aside className="col-span-2">
          <BlogSidebar />
        </aside>

        {/* blogs + pagination */}
        <main className="col-span-5">
          <BlogsFeed />
        </main>
      </div>
    </div>
  );
}

import BlogsFeed from "@/components/module/blog/BlogsFeed";
import BlogSidebar from "@/components/module/blog/BlogSidebar";
import { Settings2 } from "lucide-react";

// TODO: Mobile Sidebar remains

export default function BlogPage() {
  return (
    <div>
      <div className="grid grid-cols-7 gap-6">
        {/* sidebar - filter, gallery, recent blogs */}
        <aside className="col-span-2 space-y-5">
          <span className="flex gap-2 w-max btn-normal">
            Filter
            <Settings2 />
          </span>

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

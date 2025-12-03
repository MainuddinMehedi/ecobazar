import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Blog } from "@/types";
import { ArrowRight, MessageSquare, Tag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BlogMetadata from "./BlogMetadata";

export default function BlogCard({ blog }: { blog: Blog }) {
  const dateObj = new Date(blog.createdAt);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("en-US", { month: "short" });

  return (
    <Card className="group overflow-hidden p-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-md">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative w-full aspect-4/3 overflow-hidden">
          <Image
            src={blog.thumbnailUrl || "/assets/blogs/blog-5.png"} // Fallback image
            alt="blog image"
            width={424}
            height={324}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Floating Date Badge */}
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-md shadow-md p-2 min-w-[55px] text-center z-10">
            <span className="block text-lg font-semibold text-gray-900 leading-none mb-1">
              {day}
            </span>
            <span className="block text-xs font- text-gray-500 uppercase tracking-wide">
              {month}
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="p-4 xl:p-6">
          {/* Metadata Row */}
          <BlogMetadata
            category={blog.category}
            author={blog.author}
            commentsCount={blog.commentsCount}
          />

          {/* Title / Excerpt */}
          <Link href={`/blog/${blog._id}`} className="mb-4 block">
            <h2 className="text-lg font-medium text-gray-900 group-hover:text-success transition-colors line-clamp-2">
              {blog.title || blog.excerpt}{" "}
              {/* Fallback to excerpt if title is missing */}
            </h2>
          </Link>

          {/* Read More Action */}
          <Link href={`/blog/${blog._id}`}>
            <Button
              variant="link"
              size={"sm"}
              className="p-0! h-auto text-success font-semibold hover:no-underline"
            >
              Read More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

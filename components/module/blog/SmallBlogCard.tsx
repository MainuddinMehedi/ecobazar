import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SmallBlogCard() {
  return (
    <Link href="/blog/1" className="group flex gap-4 items-start">
      <div className="relative shrink-0 w-20 h-20 rounded-md overflow-hidden bg-gray-100">
        <Image
          src="/assets/blogs/blog-3.png"
          alt="blog thumbnail"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center h-20">
        <h4 className="text-[15px] font-semibold text-gray-800 leading-snug group-hover:text-success transition-colors line-clamp-2">
          Donec mattis arcu faucibus suscipit viverra.
        </h4>

        <div className="flex items-center gap-1 mt-2">
          <Calendar className="w-4 h-4 text-success" />
          <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            Apr 25, 2021
          </span>
        </div>
      </div>
    </Link>
  );
}

import { Calendar } from "lucide-react";
import Image from "next/image";

export default function SmallBlogCard() {
  return (
    <div className="flex flex-col gap-4 xl:flex-row">
      <Image
        src={"/assets/blogs/blog-3.png"}
        alt="blog image"
        width={100}
        height={77}
        className="rounded-md w-full xl:w-auto"
      />
      <div className="space-y-2">
        <h3 className="text-[16px] text-gray-900 font-medium">
          Donec mattis arcu faucibus suscipit viverra.
        </h3>
        <div className="flex gap-2">
          <Calendar className="w-5 h-5 text-success" />
          <span className="text-sm text-gray-600">Apr 25, 2021</span>
        </div>
      </div>
    </div>
  );
}

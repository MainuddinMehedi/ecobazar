import { Input } from "@/components/ui/input";
import { Settings2 } from "lucide-react";
import CategoryFilter from "../shop/filters/CategoryFilter";
import { Separator } from "@/components/ui/separator";
import TagsFilter from "../shop/filters/TagsFilter";
import Image from "next/image";
import SmallBlogCard from "./SmallBlogCard";

const images = [
  "/assets/blogs/gallery-1.png",
  "/assets/blogs/gallery-2.png",
  "/assets/blogs/gallery-3.png",
  "/assets/blogs/gallery-5.png",
  "/assets/blogs/gallery-6.png",
  "/assets/blogs/gallery-8.png",
];

export default function BlogSidebar() {
  return (
    <div className="space-y-5">
      <span className="flex gap-2 w-max btn-normal">
        Filter
        <Settings2 />
      </span>

      <div>
        <Input type="text" placeholder="Search" />
      </div>

      <CategoryFilter />
      <Separator />

      <TagsFilter />
      <Separator />

      <section className="border">
        <h3 className="text-[20px] font-semibold text-gray-900 mb-3">
          Our Gallery
        </h3>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
          {images.map((image, i) => (
            <Image
              key={i}
              src={image}
              alt="image"
              width={100}
              height={100}
              className="shrink-0 w-full h-full"
            />
          ))}
        </div>
      </section>

      <Separator />

      <section className="">
        <h3 className="text-[20px] font-semibold text-gray-900 mb-3">
          Recently Added
        </h3>
        <div className="space-y-5">
          {[...Array(3)].map((_, i) => (
            <SmallBlogCard key={i} />
          ))}
        </div>
      </section>
    </div>
  );
}

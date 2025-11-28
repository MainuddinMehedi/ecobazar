import ProductCard from "@/components/common/products/ProductCard";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function NewestProducts() {
  return (
    <div className="">
      <div className="flex justify-between items-baseline-last">
        <h1 className="heading-primary">Newest Products</h1>
        <Link href={"/shop"} className="flex gap-3 text-success">
          View all
          <ArrowRightIcon />
        </Link>
      </div>
      <div className="flex flex-wrap gap-[12]">
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types";
import { Handbag, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import StarGroup from "../StarGroup";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  console.log("from product card", product);

  return (
    <Link href={"/shop/product/1"}>
      <Card className="w-full h-[400px] rounded-xl flex justify-between hover-primary">
        <CardContent className="flex justify-center">
          <Image
            src="/assets/products/apple.png"
            alt="Product Image"
            width={246}
            height={246}
            className="object-cover"
          />
        </CardContent>
        <CardContent className="flex justify-between items-center mb-4">
          <div className="space-y-1">
            <h2 className="text-sm  text-gray-700">Green Apple</h2>
            <p className="text-xl text-gray-900 font-medium">$14.99</p>
            <span className="flex items-center gap-1">
              <StarGroup value={5} size={16} />
            </span>
          </div>
          <div className="w-12 h-12 rounded-full bg-gray-50 flex justify-center items-center">
            <Handbag className="w-6 h-6 text-gray-900" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

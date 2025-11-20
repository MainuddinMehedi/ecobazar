import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export default function DealsCard() {
  return (
    <Card>
      <CardContent className="flex justify-between">
        <Image
          src={"/assets/products/product-3.png"}
          alt="product image"
          width={102}
          height={102}
        />
        <div className="space-y-1">
          <h2 className="text-sm  text-gray-700">Green Apple</h2>
          <p className="text-xl text-gray-900 font-medium">$14.99</p>
          <span className="flex items-center gap-1">
            {Array.from({ length: 4 }).map((_, index) => (
              <Star key={index} size={16} fill="yellow" />
            ))}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

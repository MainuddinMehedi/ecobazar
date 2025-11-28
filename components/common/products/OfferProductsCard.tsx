import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import StarGroup from "../StarGroup";

export default function OfferProductsCard() {
  return (
    <Link href={"/shop/product/1"} className="block">
      {/* <Card className="hover:border-success/50 hover:shadow-lg hover:shadow-success/10"> */}
      <Card className="hover-primary">
        <CardContent className="flex justify-around px-0">
          <Image
            src={"/assets/products/product-3.png"}
            alt="product image"
            width={90}
            height={90}
          />
          <div className="space-y-1 flex flex-col justify-center">
            <h2 className="text-sm  text-gray-700">Green Apple</h2>
            <p className="text-xl text-gray-900 font-medium">$14.99</p>
            <StarGroup value={4} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

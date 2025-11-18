import { Card, CardContent } from "@/components/ui/card";
import { Handbag, Star } from "lucide-react";
import Image from "next/image";

export default function ProductCard() {
  return (
    <Card className="w-[300px] h-[400px] rounded-xl flex justify-between">
      <CardContent>
        <Image
          src="/assets/products/apple.png"
          alt="Product Image"
          width={246}
          height={246}
          className="w-full h-full"
        />
      </CardContent>
      <CardContent className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-sm  text-gray-700">Green Apple</h2>
          <p className="text-xl text-gray-900 font-medium">$14.99</p>
          <span className="flex items-center gap-1">
            <Star size={16} fill="yellow" />
            <Star size={16} fill="yellow" />
            <Star size={16} fill="yellow" />
          </span>
        </div>
        <div className="w-12 h-12 rounded-full bg-gray-50 flex justify-center items-center">
          <Handbag className="w-6 h-6 text-gray-900" />
        </div>
      </CardContent>
    </Card>
  );
}

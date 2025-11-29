import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";

export default function CartSheetProductCard() {
  return (
    <div className="flex justify-between items-center p-3">
      <div className="flex gap-2 items-center">
        <Image
          src={"/assets/products/product-1.png"}
          alt="product image"
          width={80}
          height={80}
          className="object-cover"
        />

        <div>
          <p className="text-gray-900">Fresh Indian Orange</p>
          <p className="text-gray-500">
            1 kg x <span className="font-medium text-gray-900">$12.00</span>
          </p>
        </div>
      </div>

      <Button
        variant="outline"
        size={"icon"}
        className="p-1 max-h-fit max-w-fit rounded-full"
      >
        <X size={16} />
      </Button>
    </div>
  );
}

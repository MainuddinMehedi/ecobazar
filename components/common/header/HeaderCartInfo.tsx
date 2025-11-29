import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Handbag } from "lucide-react";
import CartSheetProductCard from "./CartSheetProductCard";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function HeaderCartInfo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex justify-center items-center gap-2">
          <Handbag className="w-9 h-9 text-gray-800" />
          <div>
            <p className="text-gray-700 text-sm">Shopping cart:</p>
            <span className="text-gray-900 font-medium">$50.00</span>
          </div>
        </button>
      </SheetTrigger>

      <SheetContent className="p-3">
        <SheetHeader>
          <SheetTitle className="text-gray-900 text-[20px] font-medium">
            Shopping Card (2)
          </SheetTitle>
        </SheetHeader>

        <div className="grid flex-1 auto-rows-min gap-3 px-4">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="space-y-3">
              {i !== 0 && <Separator />}
              <CartSheetProductCard key={i} />
            </div>
          ))}
        </div>

        <SheetFooter>
          <p className="flex justify-between mb-5 text-[16px] text-gray-900">
            <span className="font-normal">2 Product</span>
            <span className="font-bold">$26.00</span>
          </p>
          <SheetClose asChild>
            <Link href={"/checkout"} className="btn-normal text-center">
              Checkout
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href={"/cart"} className="btn-secondary py-4! text-center">
              Go to Cart
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import OfferProductCard from "../products/OfferProductCard";

export default function Offers() {
  return (
    <div className="flex gap-5 mt-20">
      <div className="flex-1 space-y-4">
        <h1 className="text-xl font-medium">Hot Deals</h1>
        <OfferProductCard />
      </div>
      <div className="flex-1 space-y-4">
        <h1 className="text-xl font-medium">Best Seller</h1>
        <OfferProductCard />
      </div>
      <div className="flex-1 space-y-4">
        <h1 className="text-xl font-medium">Top Rated</h1>
        <OfferProductCard />
      </div>
      <div className="flex-1 relative w-[312px] h-[426px] overflow-hidden">
        <Image
          src={"/assets/offer-promo-pics/offer-promo-3.png"}
          alt="Summer Sale Offer"
          fill
          className="-z-10 w-full"
        />

        <div className="text-center h-full space-y-1 flex flex-col items-center mt-12">
          <p className="text-[14px] text-gray-800 font-medium text-center uppercase">
            SUMMER SALE
          </p>
          <h1 className="text-[34px] font-semibold text-success mb-4">
            75% off
          </h1>
          <Button
            variant={"secondary"}
            className="bg-white px-6! py-6 text-success shadow-lg rounded-[43px]"
          >
            Shop Now
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

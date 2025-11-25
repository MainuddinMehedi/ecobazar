import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

interface Details {
  name?: string;
  heading?: string;
  offer?: string;
  endsIn?: number;
  image: string;
  imgStyles?: string;
}

export default function PromotionCard({ details }: { details: Details }) {
  return (
    <div className="flex-1 relative overflow-hidden w-full h-full">
      <Image
        src={details?.image}
        alt={details?.name || "Offer Image"}
        fill
        className={`-z-10 w-full object-cover ${details?.imgStyles}`}
      />

      <div className="text-center h-full space-y-4 flex flex-col items-center mt-12">
        <p className="text-[14px] text-gray-800 font-medium text-center uppercase">
          {/* SUMMER SALE */}
          {details?.name}
        </p>
        <h1 className="text-[34px] font-semibold text-success">
          {/* 75% off */}
          {details?.heading}
        </h1>
        <p className="text-lg text-center text-gray-800">{details?.offer}</p>
        <Button
          variant={"secondary"}
          className="bg-white px-9! py-6 text-success shadow-lg rounded-[43px]"
        >
          Shop Now
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

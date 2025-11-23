import { CarouselItem } from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialCard({ item }) {
  return (
    <CarouselItem className="basis-1/3 px-10 flex flex-col justify-evenly h-[254] space-y-6 bg-white rounded-xl">
      <p className="text-[16px] text-gray-700">{item?.content}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Image
            src={item?.profilePictureUrl}
            alt="Profile Picture"
            width={56}
            height={56}
          />
          <div>
            <p className="text-[16px] font-medium">{item?.authorName}</p>
            <p className="text-sm text-gray-400">{item?.authorRole}</p>
          </div>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: item?.rating }).map((_, index) => (
            <Star key={index} size={16} fill="yellow" />
          ))}
        </div>
      </div>
    </CarouselItem>
  );
}

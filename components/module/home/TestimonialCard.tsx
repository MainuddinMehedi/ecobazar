import StarGroup from "@/components/common/StarGroup";
import { CarouselItem } from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  _id: string;
  authorId: string;
  authorName: string;
  authorRole: string;
  profilePictureUrl: string;
  content: string;
  rating: number;
}

export default function TestimonialCard({ item }: { item: Testimonial }) {
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
        <StarGroup value={item?.rating} />
      </div>
    </CarouselItem>
  );
}

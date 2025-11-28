import StarGroup from "@/components/common/StarGroup";
import { CarouselItem } from "@/components/ui/carousel";
import { Testimonial } from "@/types";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <CarouselItem className="basis-1/3 px-10 flex flex-col justify-evenly h-[254] space-y-6 bg-white rounded-xl">
      <p className="text-[16px] text-gray-700">{testimonial?.content}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Image
            src={testimonial?.profilePictureUrl}
            alt="Profile Picture"
            width={56}
            height={56}
          />
          <div>
            <p className="text-[16px] font-medium">{testimonial?.authorName}</p>
            <p className="text-sm text-gray-400">{testimonial?.authorRole}</p>
          </div>
        </div>
        <StarGroup value={testimonial?.rating} />
      </div>
    </CarouselItem>
  );
}

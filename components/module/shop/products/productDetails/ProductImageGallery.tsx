"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";

export default function ProductImageGallery({ images }: { images: string[] }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex-1">
      <div className="flex items-center h-full">
        <Carousel orientation="vertical">
          <CarouselContent className="space-y-2">
            {images.length > 1 &&
              images.map((image, i) => (
                <CarouselItem
                  key={i}
                  className="basis-1/3 cursor-pointer"
                  onClick={() => setActiveImage(image)}
                >
                  <Image
                    src={image}
                    alt="product image"
                    width={80}
                    height={90}
                    className="hover-primary hover:border w-[80] h-[90] rounded object-contain"
                  />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="border-none" />
          <CarouselNext className="border-none" />
        </Carousel>

        {/* Main Image */}
        <Image
          src={activeImage}
          alt="Main image"
          width={556}
          height={556}
          className="w-full h-[556] object-contain"
        />
      </div>
    </div>
  );
}

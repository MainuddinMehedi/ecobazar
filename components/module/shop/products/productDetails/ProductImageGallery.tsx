import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function ProductImageGallery({ images }: { images: string[] }) {
  return (
    <div className="flex-1">
      <div className="flex items-center">
        <Carousel orientation="vertical">
          <CarouselContent className="space-y-2">
            {images.length > 1 &&
              images.map((image, i) => (
                <CarouselItem key={i} className="basis-1/3">
                  <Image
                    src={image}
                    alt="product image"
                    width={80}
                    height={90}
                    className="hover-primary hover:border w-[80] h-[90] rounded"
                  />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="border-none" />
          <CarouselNext className="border-none" />
        </Carousel>
        {/* <div className="space-y-2"> */}
        {/*   {images.length > 1 && */}
        {/*     images.map((image, i) => ( */}
        {/*       <Image */}
        {/*         key={i} */}
        {/*         src={image} */}
        {/*         alt="product image" */}
        {/*         width={80} */}
        {/*         height={90} */}
        {/*         className="hover-primary hover:border w-[80] h-[90] rounded" */}
        {/*       /> */}
        {/*     ))} */}
        {/* </div> */}
        <Image
          src={images[0]}
          alt="Main image"
          width={556}
          height={556}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}

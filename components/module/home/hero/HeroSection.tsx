import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "Fresh & Healthy Organic Food",
    description:
      "Discover a wide variety of fresh and healthy organic food options at Ecobazar.",
    offer: "Sale up to 30% OFF!",
    freeShipping: "Free Shipping on all your orders",
    imageUrl: "/assets/Hero-image-1.png",
  },
  {
    title: "Natural Snacks",
    description:
      "Indulge in our range of natural snacks, perfect for a healthy treat any time of day.",
    offer: "Sale up to 48% OFF!",
    freeShipping: "",
    imageUrl: "/assets/Hero-image-2.png",
  },
  {
    title: "Organic Vegetables",
    description:
      "Shop our selection of organic vegetables, grown without synthetic pesticides or fertilizers.",
    offer: "Sale up to 30% OFF!",
    freeShipping: "Free Shipping on orders over $25",
    // imageUrl: "/assets/Hero-image-1.png",
    imageUrl: "/assets/hero-image.jpg",
  },
];

export default function HeroSection() {
  return (
    <div className="mt-5">
      <Carousel className="w-full rounded-lg bg-gray-50">
        <CarouselContent className="w-full h-[650px] -ml-2">
          {data.map((item, index) => (
            <CarouselItem key={index} className="flex items-center pl-2">
              <div className="flex h-full">
                <div className="w-1/2 h-full flex flex-col items-start justify-center gap-6 p-8">
                  <h1 className="text-7xl font-semibold">{item.title}</h1>
                  <p className="text-3xl">{item.description}</p>
                  <p className="bg-orange-100 text-orange-500 font-bold text-2xl px-2 py-1 rounded">
                    {item.offer}
                  </p>
                  <p className="text-sm text-gray-500">{item.freeShipping}</p>
                  <Link
                    href={"/shop"}
                    className="bg-success text-white rounded-[43px] py-4 px-8 flex gap-2"
                  >
                    Shop now
                    <ChevronRight />
                  </Link>
                </div>
                <div className="w-1/2 h-full">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={600}
                    height={600}
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="ml-16" />
        <CarouselNext className="mr-16" />
      </Carousel>
    </div>
  );
}

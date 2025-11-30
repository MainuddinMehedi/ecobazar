import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Jenny Wilson",
    role: "Ceo & Founder",
    image: "/assets/about-page-pics/team-1.png",
  },
  {
    name: "Jane Cooper",
    role: "Worker",
    image: "/assets/about-page-pics/team-2.png",
  },
  {
    name: "Cody Fisher",
    role: "Security Guard",
    image: "/assets/about-page-pics/team-3.png",
  },
  {
    name: "Robert Fox",
    role: "Senior Farmer Manager",
    image: "/assets/about-page-pics/team-4.png",
  },
  // Added for carousel demonstration
  {
    name: "Kristin Watson",
    role: "Marketing",
    image: "/assets/about-page-pics/Image-5.png",
  },
];

export default function TeamCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {teamMembers.map((member, index) => (
          <CarouselItem
            key={index}
            className="pl-4 md:basis-1/2 lg:basis-1/4 h-[368px]"
          >
            <Card className="border-none shadow-none group">
              <CardContent className="p-0">
                {/* Image Container with Hover Overlay */}
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={312}
                    height={280}
                    className="w-[312px] h-[280px] aspect-4/5 object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Social Icons Overlay (Visible on Hover/Group Hover) */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Link
                      href="#"
                      className="p-2 rounded-full hover:bg-success hover:text-white transition-colors"
                    >
                      <Facebook
                        className="w-5 h-5 hover:fill-white"
                        color="white"
                      />
                    </Link>
                    <Link
                      href="#"
                      className="p-2 rounded-full hover:bg-success hover:text-white transition-colors"
                    >
                      <Twitter
                        className="w-5 h-5 hover:fill-white"
                        color="white"
                      />
                    </Link>
                    <Link
                      href="#"
                      className="p-2 rounded-full hover:bg-success hover:text-white transition-colors"
                    >
                      <Instagram className="w-5 h-5" color="white" />
                    </Link>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-hard-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

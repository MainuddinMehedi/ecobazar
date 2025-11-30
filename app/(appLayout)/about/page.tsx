import Image from "next/image";
import {
  Check,
  Leaf,
  Headphones,
  Star,
  ShoppingBag,
  Truck,
  Package,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import TeamCarousel from "@/components/module/about/TeamCarousel";
import Testimonials from "@/components/module/home/Testimonials";
import Link from "next/link";

export default function AboutPage() {
  const features = [
    {
      icon: <Leaf className="w-7 h-7 text-success" />,
      title: "100% Organic food",
      desc: "100% healthy & Fresh food.",
    },
    {
      icon: <Headphones className="w-7 h-7 text-success" />,
      title: "Great Support 24/7",
      desc: "Instant access to Contact",
    },
    {
      icon: <Star className="w-7 h-7 text-success" />,
      title: "Customer Feedback",
      desc: "Our happy customer",
    },
    {
      icon: <ShoppingBag className="w-7 h-7 text-success" />,
      title: "100% Secure Payment",
      desc: "We ensure your money is save",
    },
    {
      icon: <Truck className="w-7 h-7 text-success" />,
      title: "Free Shipping",
      desc: "Free shipping with discount",
    },
    {
      icon: <Package className="w-7 h-7 text-success" />,
      title: "100% Organic Food",
      desc: "100% healthy & Fresh food",
    },
  ];

  return (
    <div className="container py- space-y-24">
      {/* SECTION 1*/}
      <section className="flex flex-col lg:flex-row items-center gap-8">
        <div className="basis-1/2 space-y-6">
          <h1 className="text-[56px] leading-tight max-w-xl font-semibold text-gray-900">
            100% Trusted Organic Food Store
          </h1>
          <p className="text-[18px] text-gray-600 max-w-2xl">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </p>
        </div>

        <div className="shrink-0 basis-1/2 border">
          <Image
            src={"/assets/about-page-pics/Image-6.png"}
            alt="about-hero"
            width={616}
            height={492}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="relative w-screen left-1/2 -translate-x-1/2">
        <div
          className={"flex flex-col-reverse lg:flex-row items-center gap-12"}
        >
          {/* Image Left */}
          <div className="shrink-0 basis-1/2">
            <Image
              src={"/assets/about-page-pics/Image-5.png"}
              alt="Farmer in field"
              width={845}
              height={485}
              className="rounded-lg object-cover w-auto h-[560px]"
            />
          </div>

          {/* Text Right */}
          <div className="basis-1/2">
            <div className="w-[90%] space-y-8">
              <div className="space-y-4">
                <h1 className="text-[56px] leading-tight font-semibold text-green-900">
                  100% Trusted Organic Food Store
                </h1>
                <p className="text-[18px] text-gray-600">
                  Pellentesque a ante vulputate leo porttitor luctus sed eget
                  eros. Nulla et rhoncus neque. Duis non diam eget est luctus
                  tincidunt a a mi. Nulla eu eros consequat tortor tincidunt
                  feugiat.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-success/10 rounded-full shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DELIVERY */}
      <section className="flex flex-col lg:flex-row items-center gap-12">
        {/* Text Left */}
        <div className="basis-1/2 space-y-8">
          <h1 className="text-[56px] leading-tight font-semibold text-gray-900">
            We Delivered, You Enjoy Your Order.
          </h1>
          <p className="text-[18px] text-gray-600">
            Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
            ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim
            diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum
            nunc eget elementum.
          </p>

          <ul className="space-y-4">
            {[
              "Sed in metus pellentesque.",
              "Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.",
              "Maecenas ut nunc fringilla erat varius.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="flex items-center justify-center h-5 w-5 rounded-full bg-success/20 shrink-0">
                  <Check className="h-3.5 w-3.5 text-hard-primary" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link href={"/shop"} className="flex gap-2 max-w-fit btn-normal">
            Shop Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Image Right */}
        <div className="basis-1/2">
          <Image
            src={"/assets/about-page-pics/Image-4.png"}
            alt="Delivery Man"
            width={745}
            height={685}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      </section>

      {/* SECTION 4: TEAM CAROUSEL */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-[56px] leading-tight font-semibold text-gray-900">
            Our Awesome Team
          </h1>
          <p className="text-[18px] text-gray-600">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi.
          </p>
        </div>

        <div className="px-8">
          <TeamCarousel />
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS */}
      <section>
        <Testimonials />
      </section>
    </div>
  );
}

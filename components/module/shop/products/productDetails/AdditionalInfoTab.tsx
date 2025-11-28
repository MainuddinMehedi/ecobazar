import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PromoVideoCard from "./PromoVideoCard";
import { Check } from "lucide-react";
import { ProductAdditionalInfo } from "@/types";
import Image from "next/image";
import StarGroup from "@/components/common/StarGroup";
import { Separator } from "@/components/ui/separator";
import { timeAgo } from "@/utils/formatDate";
import Link from "next/link";

interface ProductTabsProps {
  description: string;
  additionalInfo: ProductAdditionalInfo;
  reviewCount?: number;
  stock?: number;
  rating?: number;
}

const reviews = [
  {
    _id: "67f89a79c4c23ab8108a6b01",
    userId: "user_id_jane_cooper",
    productId: "67f89a79c4c23ab8108a4f01",
    content:
      "Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to bolt or go to seed; in long periods of heat, some kind of shade may be helpful.",
    rating: 5,
    createdAt: "2021-04-30T00:00:00Z",
  },
  {
    _id: "67f89a79c4c23ab8108a6b02",
    userId: "user_id_ralph_edwards",
    productId: "67f89a79c4c23ab8108a4f01",
    content:
      "200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non GMO Productive Brassica rapa VAR. chinensis, a.k.a. Cantons Choice, Bok Choi, from USA",
    rating: 4,
    createdAt: "2021-05-01T00:00:00Z",
  },
];

export default function AdditionalInfoTab({
  description,
  additionalInfo,
  stock,
}: ProductTabsProps) {
  return (
    <Tabs
      defaultValue="descriptions"
      className="w-full max-h-fit flex items-center"
    >
      {/* ---------------- Tabs List ---------------- */}
      <TabsList className="w-[50%] h-12 bg-transparent px-0 rounded-none">
        <TabsTrigger
          value="descriptions"
          className="data-[state=active]:border-b-3 data-[state=active]:border-b-success rounded-none text-gray-900 font-medium text-[16px] py-6"
        >
          Descriptions
        </TabsTrigger>

        <TabsTrigger
          value="additional-information"
          className="data-[state=active]:border-b-3 data-[state=active]:border-b-success rounded-none text-gray-900 font-medium text-[16px] py-6"
        >
          Additional Information
        </TabsTrigger>

        <TabsTrigger
          value="customer-feedback"
          className="data-[state=active]:border-b-3 data-[state=active]:border-b-success rounded-none text-gray-900 font-medium text-[16px] py-6"
        >
          Customer Feedback
        </TabsTrigger>
      </TabsList>

      {/* ---------------- Descriptions Tab ---------------- */}
      <TabsContent value="descriptions" className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 text-muted-foreground text-sm leading-relaxed">
            <p>{description}</p>

            {/* Static placeholder text to match the screenshot density */}
            <p>
              Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
              posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
              vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet
              nisi porttitor vel. Etiam tincidunt metus vel dui interdum
              sollicitudin.
            </p>

            <p>
              Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui.
              Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra
              velit, pellentesque tristique neque mi eget nulla. Proin luctus
              elementum neque et pharetra.
            </p>

            {/* Feature List */}
            <ul className="space-y-3 mt-4">
              {[
                "100 g of fresh leaves provides.",
                "Aliquam ac est at augue volutpat elementum.",
                "Quisque nec enim eget sapien molestie.",
                "Proin convallis odio volutpat finibus posuere.",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-success shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="pt-2">
              Cras et diam maximus, accumsan sapien et, sollicitudin velit.
              Nulla blandit eros non turpis lobortis iaculis at ut massa.
            </p>
          </div>

          {/* Promo Card (Right Column) */}
          <PromoVideoCard />
        </div>
      </TabsContent>

      {/* ---------------- Additional Info Tab ---------------- */}
      <TabsContent value="additional-information" className="py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ---------------- Left: Info List ---------------- */}
          <div className="">
            <dl className="space-y-5">
              <div className="flex">
                <dt className="w-32 text-gray-900">Weight:</dt>
                <dd className="text-gray-600">{additionalInfo.weight}</dd>
              </div>

              <div className="flex">
                <dt className="w-32 text-gray-900">Color:</dt>
                <dd className="text-gray-600">{additionalInfo.color}</dd>
              </div>

              <div className="flex">
                <dt className="w-32 text-gray-900">Type:</dt>
                <dd className="text-gray-600">{additionalInfo.type}</dd>
              </div>

              <div className="flex">
                <dt className="w-32 text-gray-900">Category:</dt>
                <dd className="text-gray-600">Vegetables</dd>
              </div>

              <div className="flex">
                <dt className="w-32 text-gray-900">Stock Status:</dt>
                <dd className="text-gray-600">Available ({stock})</dd>
              </div>

              <div className="flex">
                <dt className="w-32 text-gray-900">Tags:</dt>
                <dd className="text-gray-600">
                  {[
                    "Vegetables",
                    "Healthy",
                    "Chinese",
                    "Cabbage",
                    "Green",
                    "Cabbage",
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="hover:text-gray-900 hover:underline"
                    >
                      {item},{" "}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          {/* ---------------- Right: Promo + Badges ---------------- */}
          <PromoVideoCard />
        </div>
      </TabsContent>

      {/* ---------------- Feedback Tab ---------------- */}
      <TabsContent
        value="customer-feedback"
        className="py-10 flex justify-center"
      >
        <div className="w-[70%] space-y-7">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div key={review._id} className="space-y-7">
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <Link href={"/user/profile"} className="block">
                        <Image
                          src={"/assets/users/user-1.png"}
                          alt="user avatar"
                          width={44}
                          height={44}
                          className="object-contain"
                        />
                      </Link>
                      <div className="space-y-1">
                        <Link href={"/user/profile"} className="block">
                          <p>Kristin Watson</p>
                        </Link>
                        <StarGroup value={review.rating} />
                      </div>
                    </div>
                    <span className="text-gray-400">
                      {timeAgo(review.createdAt)}
                    </span>
                  </div>
                  <p>{review.content}</p>
                </div>

                <Separator />
              </div>
            ))
          ) : (
            <p>There are no reviews.</p>
          )}
          <button className="py-3.5 px-8 bg-success/10 text-success rounded-4xl">
            Load More
          </button>
        </div>
      </TabsContent>
    </Tabs>
  );
}

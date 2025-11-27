// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { ProductAdditionalInfo } from "@/types";
// import PromoVideoCard from "./PromoVideoCard";
//
// interface ProductTabsProps {
//   description: string;
//   additionalInfo: ProductAdditionalInfo;
//   reviewCount?: number;
//   rating?: number;
// }
//
// export default function AdditionalInfoTab({
//   description,
//   additionalInfo,
//   reviewCount = 0,
//   rating = 5,
// }: ProductTabsProps) {
//   console.log("additionalInfo: ", additionalInfo);
//   return (
//     <Tabs
//       defaultValue="account"
//       className="w-full h-[500px] flex items-center border"
//     >
//       <TabsList>
//         <TabsTrigger value="descriptions">Descriptions</TabsTrigger>
//         <TabsTrigger value="additional-information">
//           Additional Information
//         </TabsTrigger>
//         <TabsTrigger value="customer-feedback">Customer Feedback</TabsTrigger>
//       </TabsList>
//       <TabsContent value="descriptions" className="py-10">
//         {description}
//       </TabsContent>
//       <TabsContent
//         value="additional-information"
//         className="flex justify-center items-center"
//       >
//         {/* info section */}
//         <div className="mt-6 grid grid-cols-1 gap-y-4 gap-x-10">
//           <dl className="space-y-4">
//             <div className="flex">
//               <dt className="w-32 font-medium text-gray-600">Weight:</dt>
//               <dd className="text-gray-900">03</dd>
//             </div>
//
//             <div className="flex">
//               <dt className="w-32 font-medium text-gray-600">Color:</dt>
//               <dd className="text-gray-900">Green</dd>
//             </div>
//
//             <div className="flex">
//               <dt className="w-32 font-medium text-gray-600">Type:</dt>
//               <dd className="text-gray-900">Organic</dd>
//             </div>
//             {/* ----------------------- */}
//             <div className="flex">
//               <dt className="w-32 font-medium text-gray-600">Category:</dt>
//               <dd className="text-gray-900">Vegetables</dd>
//             </div>
//
//             <div className="flex">
//               <dt className="w-32 font-medium text-gray-600">Stock Status:</dt>
//               <dd className="text-gray-900">Available (5,413)</dd>
//             </div>
//
//             <div className="flex">
//               <dt className="w-32 font-medium text-gray-600">Tags:</dt>
//               <dd className="text-gray-900">
//                 Vegetables, Healthy, Chinese, Cabbage, Green Cabbage
//               </dd>
//             </div>
//           </dl>
//         </div>
//
//         <div>
//           <PromoVideoCard />
//         </div>
//       </TabsContent>
//       <TabsContent value="customer-feedback">
//         Customer Feedbacks through reviews
//       </TabsContent>
//     </Tabs>
//   );
// }

// ----------------------------------------------------------------------------------------

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PromoVideoCard from "./PromoVideoCard";
import { Leaf, BadgePercent, Check } from "lucide-react";
import { ProductAdditionalInfo } from "@/types";

interface ProductTabsProps {
  description: string;
  additionalInfo: ProductAdditionalInfo;
  reviewCount?: number;
  rating?: number;
}

export default function AdditionalInfoTab({
  description,
  additionalInfo,
}: ProductTabsProps) {
  return (
    <Tabs defaultValue="descriptions" className="w-full h-[500px]">
      {/* ---------------- Tabs Header ---------------- */}
      <TabsList className="w-full justify-start border-b rounded-none h-12 bg-transparent px-0">
        <TabsTrigger
          value="descriptions"
          className="data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none"
        >
          Descriptions
        </TabsTrigger>

        <TabsTrigger
          value="additional-information"
          className="data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none"
        >
          Additional Information
        </TabsTrigger>

        <TabsTrigger
          value="customer-feedback"
          className="data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none"
        >
          Customer Feedback
        </TabsTrigger>
      </TabsList>

      {/* ---------------- Descriptions Tab ---------------- */}
      <TabsContent value="descriptions" className="py-8">
        {/* {description} */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Text Content */}
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
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-green-100 shrink-0">
                    <Check className="h-3 w-3 text-green-600" />
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
          <div className="lg:col-span-1">
            <PromoVideoCard />
          </div>
        </div>
      </TabsContent>

      {/* ---------------- Additional Info Tab ---------------- */}
      <TabsContent value="additional-information" className="py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ---------------- Left: Info List ---------------- */}
          <div className="space-y-4">
            <dl className="space-y-4">
              <div className="flex">
                <dt className="w-32 font-medium text-gray-600">Weight:</dt>
                <dd className="text-gray-900">03</dd>
              </div>

              <div className="flex">
                <dt className="w-32 font-medium text-gray-600">Color:</dt>
                <dd className="text-gray-900">Green</dd>
              </div>

              <div className="flex">
                <dt className="w-32 font-medium text-gray-600">Type:</dt>
                <dd className="text-gray-900">Organic</dd>
              </div>

              <div className="flex">
                <dt className="w-32 font-medium text-gray-600">Category:</dt>
                <dd className="text-gray-900">Vegetables</dd>
              </div>

              <div className="flex">
                <dt className="w-32 font-medium text-gray-600">
                  Stock Status:
                </dt>
                <dd className="text-gray-900">Available (5,413)</dd>
              </div>

              <div className="flex">
                <dt className="w-32 font-medium text-gray-600">Tags:</dt>
                <dd className="text-gray-900">
                  Vegetables, Healthy, Chinese, Cabbage, Green Cabbage
                </dd>
              </div>
            </dl>
          </div>

          {/* ---------------- Right: Promo + Badges ---------------- */}
          <div className="space-y-6">
            <PromoVideoCard />

            {/* Promo bottom cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border rounded-xl p-4 flex gap-3 items-start">
                <BadgePercent className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">64% Discount</p>
                  <p className="text-sm text-gray-500">
                    Save your 64% money with us
                  </p>
                </div>
              </div>

              <div className="border rounded-xl p-4 flex gap-3 items-start">
                <Leaf className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">100% Organic</p>
                  <p className="text-sm text-gray-500">
                    100% Organic Vegetables
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>

      {/* ---------------- Feedback Tab ---------------- */}
      <TabsContent value="customer-feedback" className="py-10">
        Customer Feedbacks through reviews
      </TabsContent>
    </Tabs>
  );
}

// ----------------------------------------------------------------------------------------

// "use client";
//
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Check, Play, Leaf, TicketPercent, Star } from "lucide-react";
// import { ProductAdditionalInfo } from "@/types"; // Import your types
//
// interface ProductTabsProps {
//   description: string;
//   additionalInfo: ProductAdditionalInfo;
//   reviewCount?: number;
//   rating?: number;
// }
//
// export function AdditionalInfoTab({
//   description,
//   additionalInfo,
//   reviewCount = 0,
//   rating = 5,
// }: ProductTabsProps) {
//   return (
//     <div className="w-full">
//       <Tabs defaultValue="description" className="w-full">
//         {/* Tab Navigation */}
//         <TabsList className="flex flex-col sm:flex-row h-auto w-full justify-start gap-2 bg-transparent border-b rounded-none p-0 mb-8">
//           <TabsTrigger
//             value="description"
//             className="rounded-none border-b-2 border-transparent px-4 py-3 font-semibold text-muted-foreground data-[state=active]:border-green-600 data-[state=active]:text-foreground data-[state=active]:shadow-none bg-transparent"
//           >
//             Descriptions
//           </TabsTrigger>
//           <TabsTrigger
//             value="additional"
//             className="rounded-none border-b-2 border-transparent px-4 py-3 font-semibold text-muted-foreground data-[state=active]:border-green-600 data-[state=active]:text-foreground data-[state=active]:shadow-none bg-transparent"
//           >
//             Additional Information
//           </TabsTrigger>
//           <TabsTrigger
//             value="feedback"
//             className="rounded-none border-b-2 border-transparent px-4 py-3 font-semibold text-muted-foreground data-[state=active]:border-green-600 data-[state=active]:text-foreground data-[state=active]:shadow-none bg-transparent"
//           >
//             Customer Feedback ({reviewCount})
//           </TabsTrigger>
//         </TabsList>
//
//         {/* 1. Description Content */}
//         <TabsContent value="description" className="animate-in fade-in-50">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//             {/* Text Content */}
//             <div className="lg:col-span-2 space-y-6 text-muted-foreground text-sm leading-relaxed">
//               <p>{description}</p>
//
//               {/* Static placeholder text to match the screenshot density */}
//               <p>
//                 Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet
//                 at posuere ac, viverra at mauris. Maecenas tincidunt ligula a
//                 sem vestibulum pharetra. Maecenas auctor tortor lacus, nec
//                 laoreet nisi porttitor vel. Etiam tincidunt metus vel dui
//                 interdum sollicitudin.
//               </p>
//
//               <p>
//                 Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui.
//                 Sed iaculis, metus faucibus elementum tincidunt, turpis mi
//                 viverra velit, pellentesque tristique neque mi eget nulla. Proin
//                 luctus elementum neque et pharetra.
//               </p>
//
//               {/* Feature List */}
//               <ul className="space-y-3 mt-4">
//                 {[
//                   "100 g of fresh leaves provides.",
//                   "Aliquam ac est at augue volutpat elementum.",
//                   "Quisque nec enim eget sapien molestie.",
//                   "Proin convallis odio volutpat finibus posuere.",
//                 ].map((item, index) => (
//                   <li key={index} className="flex items-center gap-3">
//                     <div className="flex items-center justify-center h-5 w-5 rounded-full bg-green-100 shrink-0">
//                       <Check className="h-3 w-3 text-green-600" />
//                     </div>
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//
//               <p className="pt-2">
//                 Cras et diam maximus, accumsan sapien et, sollicitudin velit.
//                 Nulla blandit eros non turpis lobortis iaculis at ut massa.
//               </p>
//             </div>
//
//             {/* Promo Card (Right Column) */}
//             <div className="lg:col-span-1">
//               <PromoVideoCard />
//             </div>
//           </div>
//         </TabsContent>
//
//         {/* 2. Additional Info Content */}
//         <TabsContent value="additional" className="animate-in fade-in-50">
//           <div className="border rounded-lg overflow-hidden">
//             <table className="w-full text-sm text-left">
//               <tbody>
//                 <tr className="border-b">
//                   <th className="px-6 py-4 font-medium text-foreground bg-gray-50 w-1/3">
//                     Weight
//                   </th>
//                   <td className="px-6 py-4 text-muted-foreground">
//                     {additionalInfo.weight}
//                   </td>
//                 </tr>
//                 <tr className="border-b">
//                   <th className="px-6 py-4 font-medium text-foreground bg-gray-50">
//                     Color
//                   </th>
//                   <td className="px-6 py-4 text-muted-foreground">
//                     {additionalInfo.color}
//                   </td>
//                 </tr>
//                 <tr>
//                   <th className="px-6 py-4 font-medium text-foreground bg-gray-50">
//                     Type
//                   </th>
//                   <td className="px-6 py-4 text-muted-foreground">
//                     {additionalInfo.type}
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </TabsContent>
//
//         {/* 3. Feedback Content */}
//         <TabsContent value="feedback" className="animate-in fade-in-50">
//           <div className="space-y-8">
//             <h3 className="text-lg font-bold">Customer Reviews</h3>
//
//             {/* Mock Review Item */}
//             <div className="flex gap-4">
//               <Avatar>
//                 <AvatarImage src="https://github.com/shadcn.png" />
//                 <AvatarFallback>CN</AvatarFallback>
//               </Avatar>
//               <div className="space-y-1">
//                 <div className="flex items-center justify-between">
//                   <h4 className="font-semibold text-sm">John Doe</h4>
//                   <span className="text-xs text-muted-foreground">
//                     2 mins ago
//                   </span>
//                 </div>
//                 <div className="flex text-yellow-400">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-3 h-3 fill-current" />
//                   ))}
//                 </div>
//                 <p className="text-sm text-muted-foreground mt-1">
//                   Absolutely love the freshness of this cabbage. Perfect for my
//                   stir-fry!
//                 </p>
//               </div>
//             </div>
//
//             <p className="text-sm text-muted-foreground italic">
//               (This section would map through real reviews in a production app)
//             </p>
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }
//

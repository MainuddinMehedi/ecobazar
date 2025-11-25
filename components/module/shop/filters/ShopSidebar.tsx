import { Settings2 } from "lucide-react";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";
import { Separator } from "@/components/ui/separator";
import TagsFilter from "./TagsFilter";
import PromotionCard from "@/components/common/PromotionCard";
import OfferProductsCard from "../../products/OfferProductsCard";

const promotion = {
  name: "",
  heading: "79% Discount",
  offer: "on your first order",
  image: "/assets/offer-promo-pics/offer-promo-3.png",
  imgStyles: "",
};

export default function ShopSidebar() {
  return (
    <div className="space-y-5">
      <span className="flex gap-2 w-max btn-normal">
        Filter
        <Settings2 />
      </span>

      {/* Filters */}
      <CategoryFilter />
      <Separator />

      <PriceFilter />
      <Separator />

      <RatingFilter />
      <Separator />

      <TagsFilter />

      {/* Offers and Promotions  */}
      <div className="h-[410px]">
        <PromotionCard details={promotion} />
      </div>

      {/* Sell Products */}
      <div className="space-y-4">
        <h1 className="text-[20px] font-semibold text-gray-900 my-6">
          Sell Products
        </h1>

        {[...Array(3)].map((_, i) => (
          <OfferProductsCard key={i} />
        ))}
      </div>
    </div>
  );
}

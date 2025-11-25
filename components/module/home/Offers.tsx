import PromotionCard from "@/components/common/PromotionCard";
import OfferProductsCard from "../products/OfferProductsCard";

// interface Promotion {
//   name: String;
// }

const promotion = {
  name: "SUMMER SALE",
  heading: "75% off",
  offer: "",
  endsIn: 3,
  image: "/assets/offer-promo-pics/offer-promo-3.png",
};

export default function Offers() {
  return (
    <div className="flex gap-5 mt-20">
      <div className="flex-1 space-y-4">
        <h1 className="text-xl font-medium">Hot Deals</h1>
        <OfferProductsCard />
      </div>
      <div className="flex-1 space-y-4">
        <h1 className="text-xl font-medium">Best Seller</h1>
        <OfferProductsCard />
      </div>
      <div className="flex-1 space-y-4">
        <h1 className="text-xl font-medium">Top Rated</h1>
        <OfferProductsCard />
      </div>

      <div className="w-[312px] h-[426px]">
        <PromotionCard details={promotion} />
      </div>
    </div>
  );
}

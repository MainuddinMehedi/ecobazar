import PromotionCard from "@/components/common/PromotionCard";

const promotions = [
  {
    name: "BEST DEALS",
    heading: "Sale of the Month",
    offer: "",
    endsIn: 3,
    image: "/assets/offer-promo-pics/offer-promo.png",
  },
  {
    name: "85% Fat Free",
    heading: "Low-Fat Meat",
    offer: "Started at $79.99",
    endsIn: 2,
    image: "/assets/offer-promo-pics/offer-promo-1.png",
  },
  {
    name: "Summer Sale",
    heading: "100% Fresh Fruit",
    offer: "Up to 64% OFF",
    endsIn: 2,
    image: "/assets/offer-promo-pics/offer-promo-2.png",
  },
];

export default function Promotions() {
  return (
    <div className="flex gap-6 h-[620]">
      {promotions.map((promo, index) => (
        <PromotionCard key={index} details={promo} />
      ))}
    </div>
  );
}

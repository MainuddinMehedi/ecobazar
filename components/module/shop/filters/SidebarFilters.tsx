import { Settings2 } from "lucide-react";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";
import { Separator } from "@/components/ui/separator";
import TagsFilter from "./TagsFilter";

export default function SidebarFilters() {
  return (
    <div className="space-y-4">
      <span className="flex gap-2 w-max btn-normal">
        Filter
        <Settings2 />
      </span>

      <CategoryFilter />
      <Separator />

      <PriceFilter />
      <Separator />

      <RatingFilter />
      <Separator />

      <TagsFilter />
      <Separator />
    </div>
  );
}

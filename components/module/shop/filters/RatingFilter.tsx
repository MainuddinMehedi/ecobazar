import StarGroup from "@/components/common/StarGroup";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";

interface RatingOptions {
  id: number;
  value: number;
  label: string;
}

const RATINGS: RatingOptions[] = [
  { id: 1, value: 5, label: "5.0" },
  { id: 2, value: 1, label: "1.0 & up" },
  { id: 3, value: 3, label: "3.0 & up" },
  { id: 4, value: 2, label: "2.0 & up" },
  { id: 5, value: 4, label: "4.0 & up" },
];

export default function RatingFilter() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="rating"
      className="w-full"
    >
      <AccordionItem value="rating">
        <AccordionTrigger className="text-[20px] font-semibold text-gray-900 mb-3 [&>svg]:h-5 [&>svg]:w-5">
          Rating
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-3">
          {RATINGS.map((rating) => (
            <div key={rating.id} className="flex items-center gap-2">
              <Checkbox
                id={`rating-${rating.id}`}
                className="border-gray-200 w-[18px] h-[18px] data-[state=checked]:bg-success data-[state=checked]:border-success"
              />

              <Label htmlFor={`rating-${rating.id}`}>
                <StarGroup value={rating.value} size={18} />
                <p className="text-sm text-gray-800">
                  {rating.value < 5
                    ? `${rating.value}.0 & up`
                    : `${rating.value}.0`}
                </p>
              </Label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

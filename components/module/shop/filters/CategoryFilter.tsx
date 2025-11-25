"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

interface Category {
  id: string;
  name: string;
  count: number;
}

const MOCK_CATEGORIES: Category[] = [
  { id: "fruit", name: "Fresh Fruit", count: 25 },
  { id: "vegetables", name: "Vegetables", count: 150 },
  { id: "cooking", name: "Cooking", count: 54 },
  { id: "snacks", name: "Snacks", count: 47 },
  { id: "beverages", name: "Beverages", count: 43 },
];

export default function CategoryFilter() {
  const [selected, setSelected] = useState("");

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="Categories"
      className="w-full"
    >
      <AccordionItem value="Categories">
        <AccordionTrigger className="text-[20px] font-semibold text-gray-900 mb-3 [&>svg]:h-5 [&>svg]:w-5">
          All Categories
        </AccordionTrigger>
        <AccordionContent>
          <RadioGroup
            onValueChange={setSelected}
            className="flex flex-col space-y-3"
          >
            {MOCK_CATEGORIES.map((cat) => {
              const isSelected = selected === cat.id;

              return (
                <div key={cat.id} className="flex items-center space-x-3">
                  <RadioGroupItem
                    value={cat.id}
                    id={cat.id}
                    className={`border-gray-200
                  data-[state=checked]:border-success data-[state=checked]:text-success w-5 h-5 [&_svg]:h-3.5 [&_svg]:w-3.5 
                  focus-visible:ring-success [&_svg]:fill-success
                `}
                  />

                  <Label
                    htmlFor={cat.id}
                    className={`
                  text-sm cursor-pointer font-normal
                  ${isSelected ? "text-gray-900 font-medium" : "text-gray-600"}
                `}
                  >
                    {cat.name}{" "}
                    <span className="text-gray-500">({cat.count})</span>
                  </Label>
                </div>
              );
            })}
          </RadioGroup>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

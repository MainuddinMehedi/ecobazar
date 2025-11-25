"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const TAGS = [
  "Healthy",
  "Low fat",
  "Vegetarian",
  "Kid foods",
  "Vitamins",
  "Bread",
  "Meat",
  "Snacks",
  "Tiffin",
  "Launch",
  "Dinner",
  "Breackfast",
  "Fruit",
];

export default function TagsFilter() {
  const [selectedTag, setSelectedTag] = useState("");

  return (
    <Accordion type="single" collapsible defaultValue="Tags" className="w-full">
      <AccordionItem value="Tags">
        <AccordionTrigger className="text-[20px] font-semibold text-gray-900 mb-3 [&>svg]:h-5 [&>svg]:w-5">
          Popular Tags
        </AccordionTrigger>
        <AccordionContent className="flex flex-wrap gap-2.5">
          {TAGS.map((tag) => {
            const isSelected = selectedTag === tag;

            return (
              <Button
                key={tag}
                variant={"outline"}
                onClick={() => setSelectedTag(tag)}
                className={`rounded-4xl bg-gray-50 text-gray-900 ${isSelected && "bg-success text-white"}`}
              >
                {tag}
              </Button>
            );
          })}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

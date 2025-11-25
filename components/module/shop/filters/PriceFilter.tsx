"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

interface PriceFilterProps {
  min?: number;
  max?: number;
  onChange?: (values: number[]) => void;
}

export default function PriceFilter({
  min = 0,
  max = 5000,
  onChange,
}: PriceFilterProps) {
  const [range, setRange] = useState([200, 1500]);

  const handleValueChange = (values: number[]) => {
    setRange(values);
    if (onChange) onChange(values);
  };

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="priceOptions"
      className="w-full"
    >
      <AccordionItem value="priceOptions">
        <AccordionTrigger className="text-[20px] font-semibold text-gray-900 mb-0 [&>svg]:h-5 [&>svg]:w-5">
          Price
        </AccordionTrigger>
        <AccordionContent>
          <Slider
            defaultValue={[200, 1500]}
            min={min}
            max={max}
            step={1}
            value={range}
            onValueChange={handleValueChange}
            className="my-6 [&_.bg-primary]:bg-success [&_.border-primary]:border-success [&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&>span:first-child]:h-2.5"
          />
          <div className="text-[15px] text-gray-600">
            Price:{" "}
            <span className="font-medium text-gray-900">
              {range[0]} - {range[1]}
            </span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

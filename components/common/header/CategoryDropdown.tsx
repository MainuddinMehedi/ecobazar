"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Apple,
  Cake,
  Carrot,
  ChevronDown,
  Coffee,
  Drumstick,
  Fish,
  IceCream,
  Menu,
  Milk,
  UtensilsCrossed,
} from "lucide-react";
import React from "react";

const categories = [
  { icon: Apple, label: "Fresh Fruit" },
  {
    icon: Carrot,
    label: "Vegetables",
    color: "bg-green-500 text-white hover:bg-green-600",
  },
  { icon: Fish, label: "River Fish" },
  { icon: Drumstick, label: "Chicken & Meat" },
  { icon: Coffee, label: "Drink & Water" },
  { icon: IceCream, label: "Yogurt & Ice Cream" },
  { icon: Cake, label: "Cake & Bread" },
  { icon: Milk, label: "Butter & Cream" },
  { icon: UtensilsCrossed, label: "Cooking" },
];

export default function CategoryDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null
  );

  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        className="flex items-center justify-between space-x-3 h-full w-full focus:outline-none"
        style={
          {
            "--radix-dropdown-menu-trigger-width": "200px",
          } as React.CSSProperties
        }
      >
        <div className="flex items-center justify-center bg-success h-full w-16">
          <Menu className="w-7 h-7 text-white" />
        </div>
        <span className="text-[16px]">All Categories</span>
        <ChevronDown
          className={`w-6 h-6 mr-2 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </DropdownMenuTrigger>

      {/* Remove inner padding and clip overflow so selected bg touches container corners */}
      <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width) p-0 overflow-hidden rounded-md">
        {categories.map((category) => (
          <DropdownMenuItem key={category.label} asChild>
            <Button
              onClick={() => {
                setSelectedCategory(category.label);
                setIsOpen(false);
              }}
              /* make items flush, remove borders/shadows/rings, and preserve only container rounding
                 force-remove any border/ring and force the selected hover bg with Tailwind important (!) */
              className={`flex items-center gap-3 h-14 w-full transition-colors shadow-none rounded-none px-4 justify-start
                focus:outline-none focus:ring-0 focus-visible:ring-0 first:rounded-t-md last:rounded-b-md ${
                  selectedCategory === category.label
                    ? "bg-success text-white hover:bg-hard-primary! border-0! hover:border-0!"
                    : "bg-white text-gray-900 hover:bg-gray-50"
                }`}
            >
              <category.icon
                className={`flex-none w-6! h-6! ${
                  selectedCategory === category.label
                    ? "text-white"
                    : "text-gray-400"
                }`}
              />
              <span
                className={`text-[18px] ${
                  selectedCategory === category.label
                    ? "text-white"
                    : "text-gray-900"
                }`}
              >
                {category.label}
              </span>
            </Button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

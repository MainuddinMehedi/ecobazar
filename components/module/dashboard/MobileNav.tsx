"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { DashboardNav } from "./DashboardNav";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* The Hamburger Menu Button */}
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden mb-4">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>

      {/* The Slide-out Drawer */}
      <SheetContent side="left" className="w-[300px] p-0">
        <div className="p-6">
          <h2 className="font-bold text-xl mb-6">Navigation</h2>
          {/* Reuse the same Nav component, but pass a function to close the sheet when a link is clicked */}
          <DashboardNav onLinkClick={() => setOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
